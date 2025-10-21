import { useQueries } from '@tanstack/react-query';
import { getVehicle } from '../api/swapi';

export const useVehicles = (urls: string[]) =>
    useQueries({
        queries: urls.map((url) => ({
            queryKey: ['vehicle', url],
            queryFn: ({ signal }) => getVehicle(url, signal),
            enabled: !!urls.length,
        })),
    });
