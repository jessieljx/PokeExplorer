import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonComponent } from './views/pokemon/pokemon.component';
import { NumberEditorComponent } from './views/number-editor/number-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    NumberEditorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
