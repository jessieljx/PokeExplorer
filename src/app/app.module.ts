import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonComponent } from './views/pokemon/pokemon.component';
import { NumberEditorComponent } from './views/number-editor/number-editor.component';
import { PokemonModelService } from './model/pokemon-model.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    NumberEditorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [PokemonModelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
