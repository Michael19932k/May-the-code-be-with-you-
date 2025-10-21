import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Vehicle } from '../types/swapi';

export default function VehicleCard({ vehicle }: { vehicle: Vehicle }) {
    return (
        <View style={styles.card}>
            <Text style={styles.name}>{vehicle.name}</Text>
            <Text>Model: {vehicle.model}</Text>
            <Text>Manufacturer: {vehicle.manufacturer}</Text>
            <Text>Crew: {vehicle.crew}</Text>
            <Text>Passengers: {vehicle.passengers}</Text>
            <Text>Class: {vehicle.vehicle_class}</Text>
        </View >
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

