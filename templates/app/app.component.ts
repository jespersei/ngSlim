
import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { HeroService } from './hero.service';

@Component({
    selector: 'my-app',
    templateUrl: './assets/html/template/app.html',
	styleUrls: ['./assets/css/styles.css'],
	directives: [ROUTER_DIRECTIVES],
	providers: [HeroService]
	
})
export class AppComponent {    
    title = 'Tour of Heroes';
}