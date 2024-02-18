import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {

    private cars = [
        {
            id: 1,
            brand: 'Toyota',
            model: 'Corolla'
        },
        {
            id: 2,
            brand: 'Honda',
            model: 'Accord'
        },
        {
            id: 3,
            brand: 'Ford',
            model: 'Fusion'
        }
    ];

    finfAll() {
        return this.cars;
    }

    findOneById(id: number) {
        const car = this.cars.find(car => car.id === id);
        if (!car) throw new NotFoundException(`Car with ID: ${id} not found`);
        return car;
    }

}
