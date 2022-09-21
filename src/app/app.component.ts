import { Component, Input } from '@angular/core';
import { PokemonModelService } from './model/pokemon-model.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PokeExplorer';
}
