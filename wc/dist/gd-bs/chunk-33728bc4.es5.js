/*! Built with http://stenciljs.com */
GdBs.loadBundle("chunk-33728bc4.js",["exports"],function(e){var t=window.GdBs.h;e.ListGroup=function(){function e(){}return e.prototype.componentDidLoad=function(){var e=[];if(this.items)try{e=JSON.parse(this.items)}catch(t){e=[],console.log("Error parsing the JSON string."),console.log(this.items)}return GD.Components.ListGroup({className:this.className,colWidth:this.colWidth,el:this.el.children[0],enableFade:this.enableFade,isFlush:this.isFlush,isTabs:this.isTabs,items:e})},e.prototype.render=function(){return t("div",null)},Object.defineProperty(e,"is",{get:function(){return"bs-listGroup"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{className:{type:String,attr:"class-name"},colWidth:{type:Number,attr:"col-width"},el:{elementRef:!0},enableFade:{type:Boolean,attr:"enable-fade"},isFlush:{type:Boolean,attr:"is-flush"},isTabs:{type:Boolean,attr:"is-tabs"},items:{type:String,attr:"items"}}},enumerable:!0,configurable:!0}),e}()});