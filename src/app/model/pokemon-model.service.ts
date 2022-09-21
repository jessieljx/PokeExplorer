import { VariableBinding } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class PokemonModelService {
  pokemonId: number;
  promiseResult: Promise<any>;
  data: any
  subject: BehaviorSubject<any>;
  error: string = "";
  
  constructor() {
    this.pokemonId = 1;
    this.promiseResult = this.fetchAPI();
    this.data;
    this.subject = new BehaviorSubject(this);
  }

  addObserver(obs: any){
    this.subject.subscribe(obs);
  }

  notifyObservers() {
    this.subject.next(this);
  }

  setPokemonId(id: number){
    if(id===this.pokemonId)
      return;

    this.pokemonId=id;
    this.promiseResult = this.fetchAPI();
    this.notifyObservers();
  }

  fetchAPI() {
    this.data = null;
    return fetch("https://pokeapi.co/api/v2/pokemon/" + this.pokemonId)
            .then(response => this.data = response.json())
            .then(d => this.data = d, e => this.error = e)
            .then(() => this.notifyObservers())
            .catch(error => console.log(error))
  }
}




