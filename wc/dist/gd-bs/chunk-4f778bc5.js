/*! Built with http://stenciljs.com */
const{h:t}=window.GdBs;class e{componentDidLoad(){let t=this.el.getAttribute("onChange");this.el.removeAttribute("id");let e=[];if(this.items)try{e=JSON.parse(this.items)}catch(t){e=[],console.log("Error parsing the JSON string."),console.log(this.items)}return $REST.Components.Dropdown({className:this.className,dropLeft:this.dropLeft,dropRight:this.dropRight,dropUp:this.dropUp,el:this.el.children[0],formFl:this.formFl,id:this.id,isSplit:this.isSplit,items:e,label:this.label,menuOnly:this.menuOnly,multi:this.multi,type:this.type,value:this.value,onChange:(...e)=>{t&&window[t]&&window[t].apply(this,e)}})}render(){return t("div",null)}static get is(){return"bs-dropdown"}static get properties(){return{className:{type:String,attr:"class-name"},dropLeft:{type:Boolean,attr:"drop-left"},dropRight:{type:Boolean,attr:"drop-right"},dropUp:{type:Boolean,attr:"drop-up"},el:{elementRef:!0},formFl:{type:Boolean,attr:"form-fl"},id:{type:String,attr:"id"},isSplit:{type:Boolean,attr:"is-split"},items:{type:String,attr:"items"},label:{type:String,attr:"label"},menuOnly:{type:Boolean,attr:"menu-only"},multi:{type:Boolean,attr:"multi"},type:{type:Number,attr:"type"},value:{type:String,attr:"value"}}}}export{e as a};