/*! Built with http://stenciljs.com */
GdBs.loadBundle("chunk-d6c118e8.js",["exports"],function(t){var e=window.GdBs.h;t.Button=function(){function t(){}return t.prototype.componentDidLoad=function(){var t=this,e=this.el.getAttribute("onClick");return this.el.removeAttribute("id"),GD.Components.Button({badgeType:this.badgeType,badgeValue:this.badgeValue,className:this.className,controls:this.controls,el:this.el.children[0],id:this.id,isBlock:this.isBlock,isDisabled:this.isDisabled,isExpanded:this.isExpanded,isLarge:this.isLarge,isOutline:this.isOutline,isSmall:this.isSmall,target:this.target,text:this.text,toggle:this.toggle,type:this.type,onClick:function(){for(var i=[],n=0;n<arguments.length;n++)i[n]=arguments[n];e&&window[e]&&window[e].apply(t,i)}})},t.prototype.render=function(){return e("div",null)},Object.defineProperty(t,"is",{get:function(){return"bs-button"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{badgeType:{type:Number,attr:"badge-type"},badgeValue:{type:String,attr:"badge-value"},className:{type:String,attr:"class-name"},controls:{type:"Any",attr:"controls"},el:{elementRef:!0},id:{type:String,attr:"id"},isBlock:{type:Boolean,attr:"is-block"},isDisabled:{type:Boolean,attr:"is-disabled"},isExpanded:{type:Boolean,attr:"is-expanded"},isLarge:{type:Boolean,attr:"is-large"},isOutline:{type:Boolean,attr:"is-outline"},isSmall:{type:Boolean,attr:"is-small"},target:{type:String,attr:"target"},text:{type:String,attr:"text"},toggle:{type:String,attr:"toggle"},type:{type:Number,attr:"type"}}},enumerable:!0,configurable:!0}),t}()});