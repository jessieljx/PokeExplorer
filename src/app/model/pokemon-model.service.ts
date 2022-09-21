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
  constructor() {
    this.pokemonId = 1;
    this.promiseResult = this.fetchAPI();
    this.data;
    this.subject = new BehaviorSubject(this.data);
  }

  addObserver(obs: any){
    this.subject.subscribe(obs);
  }

  notifyObservers() {
    this.subject.next(this.data);
  }

  setPokemonId(id: number){
    if(id===this.pokemonId)
      return;

    this.pokemonId=id;
    this.promiseResult = this.fetchAPI();
    this.notifyObservers();
  }

  getPokemonDetails() {
    return this.data;
  }

  fetchAPI() {
    return fetch("https://pokeapi.co/api/v2/pokemon/" + this.pokemonId).then(response=> this.data = response.json()).then(d => this.data = d).then(() => this.notifyObservers()).catch(error => console.log(error))
  
  }
}




