/*jshint esversion: 6 */

import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';

@Component({
    selector: 'my-heroes',
    templateUrl: './assets/html/template/hero.html',
	styleUrls: ['./assets/css/styles.css'],
	directives: [HeroDetailComponent]
	
})

export class HeroesComponent implements OnInit {
	heroes: Hero[];
	selectedHero: Hero;

	constructor(private heroService: HeroService) {	}

	getHeroes() {
		this.heroService.getHeroes()
			.then( heroes => this.heroes = heroes );
	}

	ngOnInit() {
		this.getHeroes();
	}

	onSelect(hero: Hero) {
		this.selectedHero = hero;
	}
}

	





