/*! Built with http://stenciljs.com */
GdBs.loadBundle("chunk-d2df275d.js",["exports"],function(e){var t=window.GdBs.h;e.Carousel=function(){function e(){}return e.prototype.componentDidLoad=function(){this.el.removeAttribute("id");var e=[];if(this.items)try{e=JSON.parse(this.items)}catch(t){e=[],console.log("Error parsing the JSON string."),console.log(this.items)}var t={};if(this.options)try{t=JSON.parse(this.options)}catch(e){t={},console.log("Error parsing the JSON string."),console.log(this.options)}return GD.Components.Carousel({className:this.className,el:this.el.children[0],enableControls:this.enableControls,enableCrossfade:this.enableCrossfade,enableIndicators:this.enableIndicators,id:this.id,items:e,options:t})},e.prototype.render=function(){return t("div",null)},Object.defineProperty(e,"is",{get:function(){return"bs-carousel"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{className:{type:String,attr:"class-name"},el:{elementRef:!0},enableControls:{type:Boolean,attr:"enable-controls"},enableCrossfade:{type:Boolean,attr:"enable-crossfade"},enableIndicators:{type:Boolean,attr:"enable-indicators"},id:{type:String,attr:"id"},items:{type:String,attr:"items"},options:{type:String,attr:"options"}}},enumerable:!0,configurable:!0}),e}()});