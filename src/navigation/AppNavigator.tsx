import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PersonScreen from '../screens/PersonScreen';
import VehiclesScreen from '../screens/VehiclesScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Person" component={PersonScreen} />
            <Stack.Screen name="Vehicles" component={VehiclesScreen} />
        </Stack.Navigator>
    );
}
