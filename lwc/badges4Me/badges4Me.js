import { LightningElement } from 'lwc';
export default class Badges4Me extends LightningElement {
logoName ;
logoColor ;
badgeColor ;
badgeText ;
link ;
imageUrl ;
iconInCopyToClipboardBtn ;
badgeStyle;
leftColor;
rightColor;

get options() {
    return [
        { label: 'Plastic', value: 'plastic' },
        { label: 'Social', value: 'social' },
        { label: 'Flat', value: 'flat' },
        { label: 'Flat-Square', value: 'flat-square' },
        { label: 'For-the-Badge', value: 'for-the-badge' }
    ];
}

handleChange(event) {
    this.badgeStyle = event.detail.value;
    console.log('thisbadge'+ this.badgeStyle);
}

connectedCallback() {
    this.iconInCopyToClipboardBtn = 'utility:copy_to_clipboard';
    this.logoName = 'GitHub';
    this.logoColor = 'white';
    this.badgeColor = '100000';
    this.badgeText = 'github';
    this.link = 'https://github.com/shivamkapasia0';
    this.badgeStyle = 'for-the-badge';
    this.leftColor = 'black';
    this.rightColor = 'black';
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
handleLeftColorChange(event){
    this.leftColor = event.target.value;
    if(this.leftColor.charAt(0) ==='#'){
       this.leftColor =  this.leftColor.substring(1);
    }
}
handleRightColorChange(event){
    this.rightColor = event.target.value;
    if(this.rightColor.charAt(0) ==='#'){
       this.rightColor =  this.rightColor.substring(1);
    }
}

handleBadgeTextChange(event){
    this.badgeText = event.target.value;
    this.badgeText = this.badgeText.replace(" ", "_");
}
                                                                                         
get imgSrc(){
    let baseUrl = 'https://img.shields.io/badge/'+ this.badgeText +'-' + this.badgeColor +'?style='+ this.badgeStyle +'&logo='  + this.logoName + '&logoColor=' + this.logoColor + '&labelColor=' + this.leftColor +'&color=' + this.rightColor;
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
