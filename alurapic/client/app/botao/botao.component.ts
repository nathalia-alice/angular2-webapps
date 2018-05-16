import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'botao',
    templateUrl: './botao.component.html'
})
export class BotaoComponent {

    @Input() nome: string = 'Ok';
    @Input() estilo: string = 'btn-default';
    @Input() tipo: string = 'button';
    @Input() desabilitado: boolean = false;
    @Output() acao = new EventEmitter();

    executaAcao() {

        if(confirm('Tem certeza?')) {
            this.acao.emit(null); 
        }
    }
}