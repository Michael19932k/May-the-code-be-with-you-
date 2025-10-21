import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Person } from '../types/swapi';


type Props = {
    person: Person;
};

export default function PersonCard({ person }: Props) {
    return (
        <View style={styles.card}>
            <Text style={styles.name}>{person.name}</Text>
            <Text>Height: {person.height}</Text>
            <Text>Mass: {person.mass}</Text>
            <Text>Hair: {person.hair_color}</Text>
            <Text>Skin: {person.skin_color}</Text>
            <Text>Eyes: {person.eye_color}</Text>
            <Text>Birth Year: {person.birth_year}</Text>
            <Text>Gender: {person.gender}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 4,
        marginBottom: 16,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
    },
});
