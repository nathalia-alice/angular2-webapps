import 'rxjs/add/operator/map';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FotoModule } from './foto/foto.module';
// importou o módulo que já possui um provider configurado
import { HttpModule } from '@angular/http';
import { PainelModule } from './painel/painel.module';

import { CadastroComponent }   from './cadastro/cadastro.component'; // importou
import { ListagemComponent }   from './listagem/listagem.component'; // importou
import { routing } from './app.routes';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [ 
      BrowserModule, 
      FotoModule, 
      HttpModule, 
      PainelModule, 
      routing,
      FormsModule ],
  declarations: [ AppComponent, CadastroComponent, ListagemComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }