/*! Built with http://stenciljs.com */
const{h:r}=window.GdBs;class s{componentDidLoad(){let r=[];if(this.cards)try{r=JSON.parse(this.cards)}catch(s){r=[],console.log("Error parsing the JSON string."),console.log(this.cards)}return GD.Components.CardGroup({cards:r,className:this.className,el:this.el.children[0]})}render(){return r("div",null)}static get is(){return"bs-cardGroup"}static get properties(){return{cards:{type:String,attr:"cards"},className:{type:String,attr:"class-name"},el:{elementRef:!0}}}}export{s as a};