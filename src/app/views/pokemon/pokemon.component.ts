import { Component, Input, OnInit } from '@angular/core';
import { PokemonModelService } from 'src/app/model/pokemon-model.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  @Input() data: any;

  constructor(private model: PokemonModelService){
  }

  ngOnInit(): void {
    this.model.subject.subscribe(data => this.data = data);
  }

}

