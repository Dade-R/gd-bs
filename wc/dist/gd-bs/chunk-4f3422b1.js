/*! Built with http://stenciljs.com */
const{h:t}=window.GdBs;import{a as e}from"./chunk-69297144.js";class s{render(){if(this.el.hasAttribute("data-init"))return;let t=e(this.el,{className:this.className,el:this.el,isAnimated:this.isAnimated,isStriped:this.isStriped,label:this.label,max:this.max,min:this.min,size:this.size});GD.Components.Progress(t),this.el.setAttribute("data-init","true")}static get is(){return"bs-progress"}static get properties(){return{className:{type:String,attr:"class-name"},el:{elementRef:!0},isAnimated:{type:Boolean,attr:"is-animated"},isStriped:{type:Boolean,attr:"is-striped"},label:{type:String,attr:"label"},max:{type:Number,attr:"max"},min:{type:Number,attr:"min"},size:{type:Number,attr:"size"}}}}export{s as a};