/*! Built with http://stenciljs.com */
GdBs.loadBundle("chunk-6b318e07.js",["exports"],function(e){var t=window.GdBs.h;e.InputGroup=function(){function e(){}return e.prototype.componentDidLoad=function(){var e=this,t=this.el.getAttribute("onChange"),n=this.el.getAttribute("onClear");return this.el.removeAttribute("id"),GD.Components.InputGroup({appendedLabel:this.appendedLabel,className:this.className,description:this.description,el:this.el.children[0],id:this.id,isLarge:this.isLarge,isSmall:this.isSmall,label:this.label,placeholder:this.placeholder,prependedLabel:this.prependedLabel,type:this.type,value:this.value,onChange:function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];t&&window[t]&&window[t].apply(e,n)},onClear:function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];n&&window[n]&&window[n].apply(e,t)}})},e.prototype.render=function(){return t("div",null)},Object.defineProperty(e,"is",{get:function(){return"bs-inputGroup"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{appendedLabel:{type:String,attr:"appended-label"},className:{type:String,attr:"class-name"},description:{type:String,attr:"description"},el:{elementRef:!0},id:{type:String,attr:"id"},isLarge:{type:Boolean,attr:"is-large"},isSmall:{type:Boolean,attr:"is-small"},label:{type:String,attr:"label"},placeholder:{type:String,attr:"placeholder"},prependedLabel:{type:String,attr:"prepended-label"},type:{type:Number,attr:"type"},value:{type:String,attr:"value"}}},enumerable:!0,configurable:!0}),e}()});