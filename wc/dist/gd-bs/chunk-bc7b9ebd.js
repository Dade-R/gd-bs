/*! Built with http://stenciljs.com */
const{h:t}=window.GdBs;class s{componentDidLoad(){let t={};if(this.btnProps)try{t=JSON.parse(this.btnProps)}catch(s){t={},console.log("Error parsing the JSON string."),console.log(this.btnProps)}let s={};if(this.options)try{s=JSON.parse(this.options)}catch(t){s={},console.log("Error parsing the JSON string."),console.log(this.options)}return GD.Components.Tooltip({btnProps:t,className:this.className,el:this.el.children[0],options:s,type:this.type})}render(){return t("div",null)}static get is(){return"bs-tooltip"}static get properties(){return{btnProps:{type:String,attr:"btn-props"},className:{type:String,attr:"class-name"},el:{elementRef:!0},options:{type:String,attr:"options"},type:{type:Number,attr:"type"}}}}export{s as a};