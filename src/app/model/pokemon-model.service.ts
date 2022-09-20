import { VariableBinding } from '@angular/compiler';
import { Inject } from '@angular/core';

@Inject({
  providedIn: 'root'
})
export class PokemonModelService {
  pokemonId: number;
  promiseResult: Promise<any>;

  constructor(id: number = 1) {
    this.pokemonId = id;
    this.promiseResult = fetch("https://pokeapi.co/api/v2/pokemon/" + this.pokemonId).then(r=>r.json());
  }
  setPokemonId(id: number){
    if(id===this.pokemonId)
      return;
    this.pokemonId=id;
  }
}




