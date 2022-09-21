import { Component, OnInit } from '@angular/core';
import { PokemonModelService } from 'src/app/model/pokemon-model.service';

@Component({
  selector: 'app-number-editor',
  templateUrl: './number-editor.component.html',
  styleUrls: ['./number-editor.component.css']
})
export class NumberEditorComponent implements OnInit {
  id: number = 1;

  constructor(private model: PokemonModelService) {
    this.id;

  }

  ngOnInit(): void {

  }

  onChange() {
    this.model.setPokemonId(this.id);
  }


}
