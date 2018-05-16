import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'painel',
    templateUrl: './painel.component.html',
    styleUrls: ['./painel.component.css'],
    encapsulation: ViewEncapsulation.Emulated
})

export class PainelComponent implements OnInit{

    @Input() titulo: string;

    ngOnInit(){ //trás 7 caracteres no titulo da imagem
        this.titulo = this.titulo.length > 7 ?
        this.titulo.substr(0, 7) + '...' : 
        this.titulo;
    }
}