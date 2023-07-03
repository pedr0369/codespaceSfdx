import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class GetMessageToast extends LightningElement {

    connectedCallback(){
        const eventSuccess = new ShowToastEvent({
            title: 'Mensagem Sucesso',
            message: 'Mock mensagem de Sucesso',
            variant: 'success'
        });
        this.dispatchEvent(eventSuccess);

        const eventWarning = new ShowToastEvent({
            title: 'Mensagem Alerta',
            message: 'Mock mensagem de Alerta',
            variant: 'warning'
        });
        this.dispatchEvent(eventWarning);

        const eventError = new ShowToastEvent({
            title: 'Mensagem Erro',
            message: 'Mock mensagem de Erro',
            variant: 'error'
        });
        this.dispatchEvent(eventError);

        const eventInfo = new ShowToastEvent({
            title: 'Mensagem Info',
            message: 'Mock mensagem de Info',
            variant: 'info'
        });
        this.dispatchEvent(eventInfo);
    }

}