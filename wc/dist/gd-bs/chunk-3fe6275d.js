/*! Built with http://stenciljs.com */
const{h:t}=window.GdBs;import{a as e}from"./chunk-57fe3db2.js";class i{render(){if(this.el.hasAttribute("data-init"))return;let t=e(this.el,{className:this.className,content:this.content,el:this.el,isFluid:this.isFluid,lead:this.lead,title:this.el.getAttribute("title")});GD.Components.Jumbotron(t),this.el.setAttribute("data-init","true")}static get is(){return"bs-jumbotron"}static get properties(){return{className:{type:String,attr:"class-name"},content:{type:String,attr:"content"},el:{elementRef:!0},isFluid:{type:Boolean,attr:"is-fluid"},lead:{type:String,attr:"lead"}}}}export{i as a};