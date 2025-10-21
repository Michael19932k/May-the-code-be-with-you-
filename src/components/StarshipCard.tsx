import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Starship } from '../types/swapi';

export default function StarshipCard({ starship }: { starship: Starship }) {
    return (
        <View style={styles.card}>
            <Text style={styles.name}>{starship.name}</Text>
            <Text>Model: {starship.model}</Text>
            <Text>Manufacturer: {starship.manufacturer}</Text>
            <Text>Crew: {starship.crew}</Text>
            <Text>Passengers: {starship.passengers}</Text>
            <Text>Class: {starship.starship_class}</Text>
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

