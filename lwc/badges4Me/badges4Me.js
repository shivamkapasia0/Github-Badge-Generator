import { LightningElement } from 'lwc';
export default class Badges4Me extends LightningElement {
logoName ;
logoColor ;
badgeColor ;
badgeText ;
link ;
imageUrl ;
iconInCopyToClipboardBtn ;

connectedCallback() {
    this.iconInCopyToClipboardBtn = 'utility:copy_to_clipboard';
    this.logoName = 'GitHub';
    this.logoColor = 'white';
    this.badgeColor = '100000';
    this.badgeText = 'github';
    this.link = 'https://github.com/shivamkapasia0';
}
handleLogoNameChange(event){
    this.logoName= event.target.value;
    console.log('v'+event.target.value);
}
handleLogoColorChange(event){
    this.logoColor = event.target.value;
    if(this.logoColor.charAt(0) ==='#'){
       this.logoColor =  this.logoColor.substring(1);
    }
    console.log(this.logoColor);
}
handleBadgeColorChange(event){
    this.badgeColor = event.target.value;
    if(this.badgeColor.charAt(0) ==='#'){
       this.badgeColor =  this.badgeColor.substring(1);
    }
    console.log(this.badgeColor);
}

handleBadgeTextChange(event){
    this.badgeText = event.target.value;
}

get imgSrc(){
    let baseUrl = 'https://img.shields.io/badge/'+ this.badgeText +'-' + this.badgeColor + '?style=for-the-badge&logo=' + this.logoName + '&logoColor=' + this.logoColor;
    this.imageUrl = baseUrl;
    return baseUrl;
}


handleLinkChange(event){
    this.link = event.target.value;
    return this.link;
}

codeGenerator(){
    let code = "<a href='" + this.link + "'" +' target="_blank"><img alt='+"'"+this.logoName +"'"  + ' src=' + "'"+this.imageUrl +"'" +'/></a>';
    return code;
}

get copyToClipboardIconHandle(){
    return this.iconInCopyToClipboardBtn;
}

async copyToClipboard(){
    this.iconInCopyToClipboardBtn = 'utility:check';
    const el = document.createElement('textarea');
    el.value = this.codeGenerator();
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    var delayInMilliseconds = 1000; //2 second
    await new Promise(resolve => setTimeout(resolve, delayInMilliseconds));
    this.iconInCopyToClipboardBtn = 'utility:copy_to_clipboard';
}

}