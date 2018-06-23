import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { finalize } from 'rxjs/operators';

import { PokemonService } from '../../services/pokemon.service';
import { UserFeedbackService } from '../../user-feedback.service';

import { Pokemon } from '../../models/pokemon';

@Component({
	selector: 'pd-pokemon-search',
	templateUrl: './pokemon-search.component.html',
	styleUrls: ['./pokemon-search.component.scss']
})
export class PokemonSearchComponent implements OnInit {

	searchForm: FormGroup;

	pokemon: Pokemon;

	constructor(private formBuilder: FormBuilder,
							private pokemonService: PokemonService,
							private userFeedbackService: UserFeedbackService) { }

	// Lifecycle Hooks
	ngOnInit(): void {
		this.searchForm = this.formBuilder.group({
			name: [ '' ]
		});
	}


	// Component Functionality Methods
	onSearch(): void {
		const name: string = this.searchForm.value.name;

		this.userFeedbackService.toggleSpinner();

		this.pokemonService.findPokemonByName(name)
			.pipe(finalize(() => this.userFeedbackService.toggleSpinner()))
			.subscribe(
				(pokemon: Pokemon) => {
					console.log(pokemon);
					this.pokemon = pokemon;
				},
				err => console.log(err)
			);
	}

}
