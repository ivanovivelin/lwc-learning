import { LightningElement, api, track } from 'lwc';

export default class ContentDistributionFileComponent extends LightningElement {
    _item;
    @track fileUrlPDF;
    @track _description;

    @api
    get item() {
        return this._item;
    }

    set item(value) {
        this._item = value;
        if(this._item !== undefined) {
            this.fileUrlPDF = '/partner/sfc/servlet.shepherd/version/download/' + this._item.Id;
            this._description = this._item.Description.replace(/\n/g, "<br />");
        }
    }
}