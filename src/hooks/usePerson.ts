import { useQuery } from '@tanstack/react-query';
import { getPerson } from '../api/swapi';
import { Person } from '../types/swapi';

export const usePerson = () => {
    return useQuery<Person>({
        queryKey: ['person', 1],
        queryFn: ({ signal }) => getPerson(1, signal),
    });
};
