import { LightningElement, api, wire } from 'lwc';
import { refreshApex } from '@salesforce/apex';
import getContent from '@salesforce/apex/crm_partnerCommunity_getWorkspace.getContent';
export default class ContentDistributionComponent extends LightningElement {

    @api Type;
    @api Subtype;

    @wire(getContent, {ctype: '$Type', csubType: '$Subtype'})
    content;

    renderedCallback() {
        if(this.content.data !== undefined) {
            refreshApex(this.content);
        }
        if(this.content.data !== undefined && this.content.data.length === 0){
            this.content.data = undefined;
        }
    }
}