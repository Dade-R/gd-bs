/*! Built with http://stenciljs.com */
const{h:t}=window.GdBs;import{a as e}from"./chunk-69297144.js";class i{render(){if(this.el.hasAttribute("data-init"))return;let t=e(this.el,{buttonType:this.buttonType,className:this.className,el:this.el,id:this.id,isLarge:this.isLarge,isSmall:this.isSmall,isVertical:this.isVertical,label:this.label});this.el.removeAttribute("id"),GD.Components.ButtonGroup(t),this.el.setAttribute("data-init","true")}static get is(){return"bs-buttonGroup"}static get properties(){return{buttonType:{type:Number,attr:"button-type"},className:{type:String,attr:"class-name"},el:{elementRef:!0},id:{type:String,attr:"id"},isLarge:{type:Boolean,attr:"is-large"},isSmall:{type:Boolean,attr:"is-small"},isVertical:{type:Boolean,attr:"is-vertical"},label:{type:String,attr:"label"}}}}export{i as a};