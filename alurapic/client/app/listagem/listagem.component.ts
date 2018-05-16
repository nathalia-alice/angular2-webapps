import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { FotoComponent } from '../foto/foto.component';
import { FotoService } from '../foto/foto.service';

@Component({
    moduleId: module.id,
    selector: 'listagem',
    templateUrl: './listagem.component.html' 
})
export class ListagemComponent { 

    fotos: FotoComponent[] = [];

    constructor(service: FotoService) {

        service.lista()
            .subscribe(
                fotos => this.fotos = fotos,
                erro => console.log(erro)
            );
    }
}