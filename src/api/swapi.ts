import { api } from './client';
import { Person, Starship, Vehicle } from '../types/swapi';

export const getPerson = async (id: number, signal?: AbortSignal): Promise<Person> =>
    (await api.get(`/people/${id}/`, { signal })).data;

export const getStarship = async (url: string, signal?: AbortSignal): Promise<Starship> =>
    (await api.get(url.replace('https://swapi.dev/api', ''), { signal })).data;

export const getVehicle = async (
    url: string,
    signal?: AbortSignal
): Promise<Vehicle> => {
    const endpoint = url.replace('https://swapi.dev/api', '');
    const response = await api.get(endpoint, { signal });
    return response.data;
};

