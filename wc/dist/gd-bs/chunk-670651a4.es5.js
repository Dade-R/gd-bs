/*! Built with http://stenciljs.com */
GdBs.loadBundle("chunk-670651a4.js",["exports"],function(e){var t=window.GdBs.h;e.InputGroup=function(){function e(){}return e.prototype.componentDidLoad=function(){var e=this,t=this.el.getAttribute("onChange"),n=this.el.getAttribute("onClear");this.el.removeAttribute("id");var r=[];if(this.appendedButtons)try{r=JSON.parse(this.appendedButtons)}catch(t){r=[],console.log("Error parsing the JSON string."),console.log(this.appendedButtons)}var i=[];if(this.prependedButtons)try{i=JSON.parse(this.prependedButtons)}catch(t){i=[],console.log("Error parsing the JSON string."),console.log(this.prependedButtons)}return GD.Components.InputGroup({appendedButtons:r,appendedLabel:this.appendedLabel,className:this.className,description:this.description,el:this.el.children[0],id:this.id,isLarge:this.isLarge,isPlainText:this.isPlainText,isReadonly:this.isReadonly,isSmall:this.isSmall,label:this.label,placeholder:this.placeholder,prependedButtons:i,prependedLabel:this.prependedLabel,type:this.type,value:this.value,onChange:function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];t&&window[t]&&window[t].apply(e,n)},onClear:function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];n&&window[n]&&window[n].apply(e,t)}})},e.prototype.render=function(){return t("div",null)},Object.defineProperty(e,"is",{get:function(){return"bs-inputGroup"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{appendedButtons:{type:String,attr:"appended-buttons"},appendedLabel:{type:String,attr:"appended-label"},className:{type:String,attr:"class-name"},description:{type:String,attr:"description"},el:{elementRef:!0},id:{type:String,attr:"id"},isLarge:{type:Boolean,attr:"is-large"},isPlainText:{type:Boolean,attr:"is-plain-text"},isReadonly:{type:Boolean,attr:"is-readonly"},isSmall:{type:Boolean,attr:"is-small"},label:{type:String,attr:"label"},placeholder:{type:String,attr:"placeholder"},prependedButtons:{type:String,attr:"prepended-buttons"},prependedLabel:{type:String,attr:"prepended-label"},type:{type:Number,attr:"type"},value:{type:String,attr:"value"}}},enumerable:!0,configurable:!0}),e}()});