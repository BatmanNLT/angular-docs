import { Component, OnInit } from '@angular/core';
import { Hero } from './models/hero.model';
import { HEROES } from './models/heroes.mock';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes = HEROES;
  selectedHero?: Hero;

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
