import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class PokemonService {

	private baseUrl: string = 'http://pokeapi.co/api/v2';

	constructor(private http: HttpClient) {}

	public findPokemonByName(name: string): Observable<any> {
		const url: string = `${this.baseUrl}/pokemon/${name}`;

		return this.http.get(url);
	}

}
