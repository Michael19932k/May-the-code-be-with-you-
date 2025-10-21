export interface Person {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    starships: string[];
    vehicles: string[];
}

export interface Starship {
    name: string;
    model: string;
    manufacturer: string;
    crew: string;
    passengers: string;
    starship_class: string;
}

export interface Vehicle {
    name: string;
    model: string;
    manufacturer: string;
    crew: string;
    passengers: string;
    vehicle_class: string;
}
