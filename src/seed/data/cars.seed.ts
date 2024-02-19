import { v4 as uuid } from 'uuid';
import { Car } from "src/cars/interfaces/car.interface";


export const CARS_SEED: Car[] = [
    {
        id: uuid(),
        brand: 'Toyota',
        model: 'Hilux',
    },
    {
        id: uuid(),
        brand: 'Honda',
        model: 'Civic',
    },
    {
        id: uuid(),
        brand: 'Jeep',
        model: 'Renegade',
    }
]