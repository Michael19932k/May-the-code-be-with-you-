import { useQueries } from '@tanstack/react-query';
import { getStarship } from '../api/swapi';


export const useStarships = (urls: string[]) =>
    useQueries({
        queries: urls.map((url) => ({
            queryKey: ['starship', url],
            queryFn: ({ signal }) => getStarship(url, signal),
            enabled: !!urls.length,
        })),
    });
