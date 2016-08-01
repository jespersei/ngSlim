import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { ActivatedRoute } from '@angular/router';
// v
@Component({
    selector: 'my-hero-detail',
    templateUrl: './assets/html/template/hero-detail.html'
})
export class HeroDetailComponent implements OnInit, OnDestroy {
    hero: Hero;
    sub: any;

    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute
    ){}

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            let id = +params['id'];
            this.heroService.getHero(id)
                .then(hero => this.hero = hero);
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    goBack() {
        window.history.back();
    }
}

