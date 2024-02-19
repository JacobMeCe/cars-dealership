import { Injectable } from '@nestjs/common';

import { CarsService } from '../cars/cars.service';
import { BrandsService } from 'src/brands/brands.service';

import { CARS_SEED } from './data/cars.seed';
import { BRANDS_SEED } from './data/brands.seed';

@Injectable()
export class SeedService {

  constructor(
    private readonly carsService: CarsService,
    private readonly brandsService: BrandsService
  ) {
    console.log('SeedService initialized');
  }

  populateDB() {
    // CARS_SEED
    this.carsService.fillCarsWithSeedData(CARS_SEED);
    // BRANDS_SEED
    this.brandsService.fillBrandsWithSeedData(BRANDS_SEED);

    return 'Seed executed successfully!';
  }
}