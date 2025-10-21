import React from 'react';
import { View, Text, Button, ActivityIndicator, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { usePerson } from '../hooks/usePerson';
import { useStarships } from '../hooks/useStarships';
import StarshipCard from '../components/StarshipCard';
import PersonCard from '../components/PersonCard';

export default function PersonScreen() {
    const navigation = useNavigation();
    const { data: person, isLoading, error } = usePerson();
    const starshipQueries = useStarships(person?.starships ?? []);

    if (isLoading) return <ActivityIndicator style={styles.loading} />;
    if (error) {
        console.error('Error fetching person:', error);
        return <Text style={styles.error}>Error loading person</Text>;
    }
    if (!person) return null;

    const anyLoading = starshipQueries.some((q) => q.isLoading);
    const anyError = starshipQueries.some((q) => q.isError);
    const successfulStarships = starshipQueries.filter((q) => q.data).map((q) => q.data!);

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <FlatList
                    ListHeaderComponent={
                        <>
                            <PersonCard person={person} />
                            <View style={styles.starshipsHeader}>
                                <Text style={styles.starshipsTitle}>Starships</Text>
                                {anyError && <Text style={styles.partialError}>Some starships failed to load.</Text>}
                            </View>
                        </>
                    }
                    data={successfulStarships}
                    renderItem={({ item }) => <StarshipCard starship={item} />}
                    keyExtractor={(item, index) => (item.name ?? 'unknown') + index}
                    contentContainerStyle={styles.listContent}
                    ListEmptyComponent={
                        anyLoading ? (
                            <ActivityIndicator style={styles.loadingIndicator} />
                        ) : (
                            <Text style={styles.emptyText}>No starships available.</Text>
                        )
                    }
                    showsVerticalScrollIndicator={false}
                />

                {/* Pinned Button */}
                <View style={styles.buttonContainer}>
                    <Button
                        title="View Vehicles"
                        onPress={() => navigation.navigate('Vehicles' as never)}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#fff',
    },
    container: {
        flex: 1,
        position: 'relative',
        paddingHorizontal: 16,
    },
    loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    error: {
        color: 'red',
        textAlign: 'center',
        marginTop: 20,
    },
    starshipsHeader: {
        marginTop: 24,
        marginBottom: 8,
    },
    starshipsTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    partialError: {
        color: 'red',
        marginTop: 4,
    },
    listContent: {
        paddingBottom: 80,
    },
    loadingIndicator: {
        marginVertical: 16,
    },
    emptyText: {
        textAlign: 'center',
        color: '#666',
        marginTop: 8,
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 16,
        left: 16,
        right: 16,
    },
});
