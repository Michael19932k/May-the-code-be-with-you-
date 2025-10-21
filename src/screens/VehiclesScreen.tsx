import React from 'react';
import { ActivityIndicator, FlatList } from 'react-native';
import { usePerson } from '../hooks/usePerson';
import { useVehicles } from '../hooks/useVehicles';
import VehicleCard from '../components/VehicleCard';
import ListScreenLayout from '../components/ListScreenLayout';


export default function VehiclesScreen() {
    const { data: person, isLoading, error } = usePerson();
    const vehicleQueries = useVehicles(person?.vehicles ?? []);

    if (isLoading) return <ListScreenLayout title="Vehicles" isLoading />;
    if (error) return <ListScreenLayout title="Vehicles" isError />;

    const anyLoading = vehicleQueries.some((q) => q.isLoading);
    const anyError = vehicleQueries.some((q) => q.isError);
    const successfulVehicles = vehicleQueries.filter((q) => q.data).map((q) => q.data!);

    if (!person?.vehicles?.length) {
        return <ListScreenLayout title="Vehicles" emptyText="No vehicles available." />;
    }

    return (
        <ListScreenLayout
            title="Vehicles"
            subtitle={anyError ? 'Some vehicles failed to load.' : undefined}
            isLoading={anyLoading}
        >
            <FlatList
                data={successfulVehicles}
                renderItem={({ item }) => <VehicleCard vehicle={item} />}
                keyExtractor={(item, index) => (item.name ?? 'unknown') + index}
                ListEmptyComponent={anyLoading ? <ActivityIndicator /> : undefined}
            />
        </ListScreenLayout>
    );
}
