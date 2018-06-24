import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

import { Pokemon, PokemonAPI, Types } from '../models/pokemon';

@Injectable()
export class PokemonService {

	private baseUrl: string = 'http://pokeapi.co/api/v2';

	constructor(private http: HttpClient) {}

	public findPokemonByName(name: string): Observable<Pokemon> {
		const url: string = `${this.baseUrl}/pokemon/${name}`;

		return this.http.get(url).pipe(
			tap(res => {
				console.log(res);

				return res;
			}),
			map((res: PokemonAPI) => {
				return {
					id: res.id,
					name: this.capitalise(res.name),
					typeArray: this.processTypes(res.types),
					types: this.processTypes(res.types).reverse().join(', '),
					sprite: res.sprites.front_default,
					moveArray: this.processMoves(res.moves),
					moves: this.processMoves(res.moves).reverse().join(', ')
				};
			})
		);
	}


	// Private Helper Methods
	private capitalise(word: string): string {
		return `${word.charAt(0).toUpperCase()}${word.slice(1)}`;
	}

	private processTypes(types: Types[]): string[] {
		return types.map(type => this.capitalise(type.type.name));
	}

	private processMoves(moves: any[]): string[] {
		return moves.map((move: any) => {
			const words: string[] = move.move.name.split('-');
			const capWords: string[] = words.map(word => this.capitalise(word));

			return capWords.join(' ');
		});
	}

}
