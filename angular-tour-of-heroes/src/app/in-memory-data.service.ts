import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './heroes/models/hero.model';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const heroes: Hero[] = [
      { id: 11, name: 'Deku' },
      { id: 12, name: 'Dynamight' },
      { id: 13, name: 'Shoto' },
      { id: 14, name: 'All-might' },
      { id: 15, name: 'Endeavor' },
      { id: 16, name: 'Thunderbolt' },
      { id: 17, name: 'Astaroth' },
      { id: 12, name: 'Uravity' },
      { id: 18, name: 'Creati' },
      { id: 19, name: 'Midnight' },
      { id: 20, name: 'Eraser-Head' },
    ];
    return { heroes };
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
