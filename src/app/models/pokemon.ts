export interface Pokemon {
	id: number;
	name: string;
	typeArray: string[];
	types: string;
	sprite: string;
	moveArray: string[];
	moves: string;
}

export interface PokemonAPI {
	id: number;
	name: string;
	types: Types[];
	sprites: Sprites;
	moves: Moves[];
}

export interface Types {
	slot: number;
	type: Type;
}

export interface Moves {
	move: Move;
	version_group_details: any;
}

interface Type {
	url: string;
	name: string;
}

interface Move {
	url: string;
	name: string;
}

interface Sprites {
	back_default: string;
	back_female: string;
	back_shiny: string;
	back_shiny_female: string;
	front_default: string;
	front_female: string;
	front_shiny: string;
	front_shiny_female: string;
}
