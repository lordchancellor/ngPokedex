import { Component, OnInit, Input } from '@angular/core';

import { Pokemon } from '../../models/pokemon';

@Component({
	selector: 'pd-pokemon-info',
	templateUrl: './pokemon-info.component.html',
	styleUrls: ['./pokemon-info.component.scss']
})
export class PokemonInfoComponent implements OnInit {

	@Input()
	pokemon: Pokemon;

	constructor() { }

	ngOnInit(): void {
	}

}
