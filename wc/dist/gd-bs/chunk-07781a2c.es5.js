/*! Built with http://stenciljs.com */
GdBs.loadBundle("chunk-07781a2c.js",["exports"],function(e){var t=window.GdBs.h;e.Modal=function(){function e(){}return e.prototype.componentDidLoad=function(){var e=this;this.el.removeAttribute("id");var t={};if(this.button)try{t=JSON.parse(this.button)}catch(e){t={},console.log("Error parsing the JSON string."),console.log(this.button)}return GD.Components.Modal({body:this.body,button:t,className:this.className,disableFade:this.disableFade,el:this.el.children[0],footer:this.footer,hideCloseButton:this.hideCloseButton,id:this.id,isCentered:this.isCentered,isLarge:this.isLarge,isSmall:this.isSmall,title:this.el.getAttribute("title"),onRenderBody:function(){for(var t=[],o=0;o<arguments.length;o++)t[o]=arguments[o];e.onRenderBody&&window[e.onRenderBody]&&window[e.onRenderBody].apply(e,t)},onRenderFooter:function(){for(var t=[],o=0;o<arguments.length;o++)t[o]=arguments[o];e.onRenderFooter&&window[e.onRenderFooter]&&window[e.onRenderFooter].apply(e,t)}})},e.prototype.render=function(){return t("div",null)},Object.defineProperty(e,"is",{get:function(){return"bs-modal"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{body:{type:String,attr:"body"},button:{type:String,attr:"button"},className:{type:String,attr:"class-name"},disableFade:{type:Boolean,attr:"disable-fade"},el:{elementRef:!0},footer:{type:String,attr:"footer"},hideCloseButton:{type:Boolean,attr:"hide-close-button"},id:{type:String,attr:"id"},isCentered:{type:Boolean,attr:"is-centered"},isLarge:{type:Boolean,attr:"is-large"},isSmall:{type:Boolean,attr:"is-small"},onRenderBody:{type:String,attr:"on-render-body"},onRenderFooter:{type:String,attr:"on-render-footer"}}},enumerable:!0,configurable:!0}),e}()});