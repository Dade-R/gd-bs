/*! Built with http://stenciljs.com */
const{h:e}=window.GdBs;class t{componentDidLoad(){let e=this.el.getAttribute("onChange"),t=this.el.getAttribute("onClear");this.el.removeAttribute("id");let n=[];if(this.appendedButtons)try{n=JSON.parse(this.appendedButtons)}catch(e){n=[],console.log("Error parsing the JSON string."),console.log(this.appendedButtons)}let a=[];if(this.prependedButtons)try{a=JSON.parse(this.prependedButtons)}catch(e){a=[],console.log("Error parsing the JSON string."),console.log(this.prependedButtons)}return GD.Components.InputGroup({appendedButtons:n,appendedLabel:this.appendedLabel,className:this.className,description:this.description,el:this.el.children[0],id:this.id,isLarge:this.isLarge,isPlainText:this.isPlainText,isReadonly:this.isReadonly,isSmall:this.isSmall,label:this.label,placeholder:this.placeholder,prependedButtons:a,prependedLabel:this.prependedLabel,type:this.type,value:this.value,onChange:(...t)=>{e&&window[e]&&window[e].apply(this,t)},onClear:(...e)=>{t&&window[t]&&window[t].apply(this,e)}})}render(){return e("div",null)}static get is(){return"bs-inputGroup"}static get properties(){return{appendedButtons:{type:String,attr:"appended-buttons"},appendedLabel:{type:String,attr:"appended-label"},className:{type:String,attr:"class-name"},description:{type:String,attr:"description"},el:{elementRef:!0},id:{type:String,attr:"id"},isLarge:{type:Boolean,attr:"is-large"},isPlainText:{type:Boolean,attr:"is-plain-text"},isReadonly:{type:Boolean,attr:"is-readonly"},isSmall:{type:Boolean,attr:"is-small"},label:{type:String,attr:"label"},placeholder:{type:String,attr:"placeholder"},prependedButtons:{type:String,attr:"prepended-buttons"},prependedLabel:{type:String,attr:"prepended-label"},type:{type:Number,attr:"type"},value:{type:String,attr:"value"}}}}export{t as a};