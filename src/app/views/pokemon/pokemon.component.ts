import { Component, Input, OnInit } from '@angular/core';
import { PokemonModelService } from 'src/app/model/pokemon-model.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  @Input() data: any;
  @Input() error: string = "";

  constructor(private model: PokemonModelService){
  }

  ngOnInit(): void {
    this.model.subject.subscribe(model => {
      this.data = model.data;
      this.error = model.error;
    });
  }

  promiseNoData() {
    if(this.data == null) {

      return true
    } else {
      return false
    }
 
  }

}

