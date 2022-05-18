import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './heroes/models/hero.model';
import { HEROES } from './heroes/models/heroes.mock';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    return heroes;
  }
}
