import { VariableBinding } from '@angular/compiler';
import { Inject } from '@angular/core';


@Inject({
  providedIn: 'root'
})
export class PokemonModelService {
  pokemonId: number;
  promiseResult: Promise<any>;
  data : any

  constructor(id: number = 1) {
    this.pokemonId = id;
    this.promiseResult = this.fetchAPI();
    this.data;
    
    
}

  setPokemonId(id: number){
    if(id===this.pokemonId)
      return;
    this.pokemonId=id;
    this.promiseResult = this.fetchAPI();
  }

  fetchAPI() {
    return fetch("https://pokeapi.co/api/v2/pokemon/" + this.pokemonId).then(response=> this.data = response.json()).then(()=>console.log(this.data)).catch(error => console.log(error))
  
  }
}




