(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-47f2d656"],{1331:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a("78ef"),o=(0,r.regex)("integer",/(^[0-9]*$)|(^-[0-9]+$)/);t.default=o},"29d5":function(e,t,a){"use strict";var r=a("f995"),o=a.n(r);o.a},"2a12":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a("78ef"),o=function(e){return(0,r.withParams)({type:"maxLength",max:e},(function(t){return!(0,r.req)(t)||(0,r.len)(t)<=e}))};t.default=o},"2c1c":function(e,t,a){"use strict";var r=a("bbf1"),o=a.n(r);o.a},3360:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a("78ef"),o=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,r.withParams)({type:"and"},(function(){for(var e=this,a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return t.length>0&&t.reduce((function(t,a){return t&&a.apply(e,r)}),!0)}))};t.default=o},"3a54":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a("78ef"),o=(0,r.regex)("alphaNum",/^[a-zA-Z0-9]*$/);t.default=o},"45b8":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a("78ef"),o=(0,r.regex)("numeric",/^[0-9]*$/);t.default=o},"46bc":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a("78ef"),o=function(e){return(0,r.withParams)({type:"maxValue",max:e},(function(t){return!(0,r.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t<=+e}))};t.default=o},"54ac":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-page"},[a("div",{staticClass:"create-topic-content"},[a("topic-creator")],1)])},o=[],s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-component stepper"},[a("div",{staticClass:"stepper-header"},[a("identity",{staticClass:"identity",attrs:{"black-mode":!0}}),a("progress-bar",{staticClass:"progressbar",attrs:{"current-step":e.currentStep,"steps-title":e.stepsTitle}}),a("color-line",{staticClass:"color-line"})],1),a("div",{staticClass:"stepper-content"},[1===e.currentStep?a("section",{staticClass:"stepper-section",attrs:{id:"section1"}},[a("span",{staticClass:"title-3 bolder mg-top16"},[e._v("Sobre os Diálogos")]),a("span",{staticClass:"headline-3 bolder mg-top16"},[e._v("Diálogos abertos")]),a("p",{staticClass:"body-2 mg-top8 justify-text"},[e._v(" Você poderá iniciar um debate, que aqui chamamos de diálogo, para compartilhar pontos de vista com outras pessoas sobre os assuntos que te preocupam em relação à cultura em Campo Grande. O espaço de diálogos abertos é destinado aos gestores, produtores, promotores da cultura local e também à comunidade artística. Sendo um desses agentes, você poderá expor seus argumentos e abrir uma conversa com todos. Considere que o debate não aciona nenhum mecanismo de atuação concreta. Mas alimenta as tomadas de decisão do Fórum Municipal de Cultura, identifica a necessidade de encontros presenciais específicos (assembleias, reuniões) como também contribui para a compreensão das necessidades da comunidade artística de Campo Grande. ")]),a("span",{staticClass:"headline-3 bolder mg-top16"},[e._v(" Recomendações para participar de um diálogo aberto")]),a("p",{staticClass:"body-2 mg-top8 justify-text"},[e._v(" 1. Para iniciar um debate é necessário que você faça um cadastro na "),a("router-link",{staticClass:"link body-2",attrs:{to:"/signUp"}},[a("strong",[e._v("Plataforma Cartografia da Cultura")])]),e._v(". Os usuários cadastrados também podem participar das discussões já iniciadas através dos comentários e/ ou indicar se concorda ou não concorda clicando nos botões “👍” ou “👎” encontrados em cada debate proposto. ")],1),a("p",{staticClass:"body-2 mg-top8 justify-text"},[e._v(" 2. Não escreva o título do debate ou frases inteiras em letras maiúsculas. Na Internet, isso é considerado o mesmo que gritar. E ninguém gosta disso. ")]),a("p",{staticClass:"body-2 mg-top8 justify-text"},[e._v(" 3. Qualquer debate ou comentário que implique em uma ação ilegal será deletado. Também serão deletados comentários que tenham a intenção de sabotar o espaço de debate. ")]),a("p",{staticClass:"body-2 mg-top8 justify-text"},[e._v(" 4. As críticas duras são bem vindas. Este é um espaço de pensamento livre, mas recomendamos que, ainda que a crítica seja dura, também seja gentil e inteligente. ")]),a("p",{staticClass:"body-2 mg-top8 justify-text"},[e._v(" 5. Desfrute deste espaço, das vozes que o preenchem, ele também é seu. ")])]):e._e(),2===e.currentStep?a("section",{staticClass:"stepper-section",attrs:{id:"section2"}},[a("span",{staticClass:"title-1 bolder"},[e._v("Regras para iniciar um diálogo")]),a("span",{staticClass:"body-2 bolder mg-top16"},[e._v("1. Uma vez feito o login, você poderá:")]),e._m(0),a("span",{staticClass:"body-2 bolder mg-top24"},[e._v("2. Para iniciar o debate: ")]),e._m(1),a("span",{staticClass:"body-2 bolder mg-top24"},[e._v("3. Uma vez iniciado o debate, você não poderá: ")]),e._m(2),a("span",{staticClass:"body-2 bolder mg-top24"},[e._v("4. Serão deletados: ")]),e._m(3),a("span",{staticClass:"body-2 bolder mg-top24"},[e._v("5. Recomendamos que: ")]),e._m(4),a("div",{staticClass:"stepper-rules row al-items-center"},[a("q-checkbox",{attrs:{size:"32px",color:"black"},model:{value:e.rulesAccepted,callback:function(t){e.rulesAccepted=t},expression:"rulesAccepted"}}),a("span",{staticClass:"body-2 mg-left8"},[e._v(" Eu li e concordo com as "),a("strong",{staticStyle:{cursor:"pointer"},on:{click:function(t){return e.scrollToTop()}}},[e._v(" Regras da Plataforma ")]),e._v(". ")]),a("span",{staticClass:"caption mg-left8",class:{"rules-accept-error":e.rulesError}},[e._v("(Esta opção deve ser marcada*)")])],1)]):e._e(),3===e.currentStep?a("section",{staticClass:"stepper-section"},[a("span",{staticClass:"title-3 bolder"},[e._v("Crie seu diálogo.")]),a("span",{staticClass:"headline-3 bolder mg-top16"},[e._v("Título do seu diálogo")]),a("span",{staticClass:"caption mg-top4"},[e._v("Insira um título que represente o assunto principal da discussão.")]),a("q-input",{staticClass:"input",attrs:{dense:"",square:"",filled:"","bottom-slots":"",error:e.$v.title.$error,"error-message":e.titleErrorMessage},on:{blur:e.$v.title.$touch},model:{value:e.title,callback:function(t){e.title="string"===typeof t?t.trim():t},expression:"title"}}),a("span",{staticClass:"headline-3 bolder"},[e._v("Texto do Diálogo")]),a("span",{staticClass:"caption mg-top4"},[e._v("Insira um texto revisado por você. Veja se está claro e objetivo.")]),a("q-input",{staticClass:"input",attrs:{type:"textarea",counter:"",dense:"",square:"",filled:"","bottom-slots":"",hint:"máximo de 2000 caracteres",error:e.$v.content.$error,"error-message":e.contentErrorMessage},on:{blur:e.$v.content.$touch},model:{value:e.content,callback:function(t){e.content=t},expression:"content"}}),a("span",{staticClass:"headline-3 bolder mg-top16"},[e._v("Categoria do diálogo")]),a("span",{staticClass:"caption mg-top8"},[e._v("1. Marque a opção que representa o tema principal do seu diálogo")]),a("span",{staticClass:"caption"},[e._v("2. Marque as opções que se relacionam ao seu diálogo")]),a("div",{staticClass:"category-field row no-wrap  mg-top8"},[a("q-list",{staticClass:"category-list"},e._l(e.options,(function(t){return a("q-item",{key:t.value,staticClass:"category-list-item",attrs:{id:"item-"+t.value,clickable:""},on:{click:function(a){return e.tagEvent(t)}}},[a("q-item-section",{staticClass:"category-list-item-section",attrs:{avata:""}},[a("icon-base",{staticClass:"category-list-icon",attrs:{id:"icon-"+t.value,"icon-id":t.value-1,width:"16","set-white":!1}})],1),a("q-item-section",{staticClass:"category-list-item-section",attrs:{id:"category-label-"+t.value}},[a("span",{staticClass:"caption bolder"},[e._v(e._s(t.label))])])],1)})),1),a("div",{staticClass:"tag-field"},[a("div",{staticClass:"main-tag"},[a("span",{staticClass:"caption",attrs:{id:"label"}},[e._v("categoria principal")]),null!==e.categoryId?a("div",{staticClass:"main-tag-badge caption bolder",style:{color:e.categoryId.color}},[a("span",{staticClass:"caption bolder"},[e._v(e._s(e.categoryId.label))]),a("i",{staticClass:"far fa-times-circle mg-left16",attrs:{id:"untag"},on:{click:function(t){return e.untagMain()}}})]):e._e()]),a("div",{staticClass:"related-tags"},[a("span",{staticClass:"caption"},[e._v("categorias relacionadas")]),a("div",{staticClass:"related-tags-grid"},e._l(e.categoriesTagged,(function(t){return a("div",{key:t.value,staticClass:"categorys-tags-badge",style:{"border-color":t.color}},[a("span",{staticClass:"caption bolder",style:{color:t.color}},[e._v(" "+e._s(t.label)+" ")])])})),0)])])],1),a("div",{staticClass:"stepper-terms row no-wrap al-items-center"},[a("q-checkbox",{attrs:{size:"32px",color:"black"},model:{value:e.termsAccepted,callback:function(t){e.termsAccepted=t},expression:"termsAccepted"}}),a("span",{staticClass:"body-3 mg-left8"},[e._v("Eu li e concordo com os "),a("router-link",{staticClass:"link",attrs:{to:{path:"/terms",hash:"#terms"}}},[a("span",{staticClass:"body-3 bolder"},[e._v("Termos de Uso")])]),e._v(" e "),a("router-link",{staticClass:"link",attrs:{to:{path:"/terms",hash:"#privacity"}}},[a("span",{staticClass:"body-3 bolder"},[e._v("Privacidade.")])])],1)],1)],1):e._e()]),a("div",{staticClass:"stepper-footer"},[1!=e.currentStep?a("base-button",{staticClass:"stepper-btn",attrs:{theme:"flat"},on:{click:function(t){return e.prevStep()}}},[a("i",{staticClass:"fas fa-arrow-left btn-icon"}),a("span",{staticClass:"body-3 bolder stepper-btn-span mg-left16"},[e._v(" voltar ")])]):e._e(),2!==e.currentStep?a("base-button",{staticClass:"stepper-btn",attrs:{theme:"flat"},on:{click:function(t){return e.cancel()}}},[a("i",{staticClass:"fas fa-times btn-icon"}),a("span",{staticClass:"body-3 bolder stepper-btn-span text-uppercase mg-left16"},[e._v(" cancelar ")])]):e._e(),e.currentStep!=e.numberOfSteps?a("base-button",{staticClass:"stepper-btn",attrs:{theme:"flat"},on:{click:function(t){return e.nextStep()}}},[a("span",{staticClass:"body-3 bolder stepper-btn-span text-uppercase"},[e._v(" Continuar ")]),a("i",{staticClass:"fas fa-arrow-right btn-icon mg-left16"})]):e._e(),e.currentStep===e.numberOfSteps?a("base-button",{staticClass:"stepper-btn",attrs:{theme:e.formIsValid?"secondary":"disabled"},on:{click:function(t){return e.submit()}}},[a("span",{staticClass:"body-3 bolder text-uppercase"},[e._v(" Iniciar diálogo ")])]):e._e()],1)])},n=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ol",[a("li",{staticClass:"body-2 justify-text"},[e._v(" Iniciar um debate. ")]),a("li",{staticClass:"body-2 justify-text"},[e._v(" Participar de um debate já iniciado por outro usuário. ")]),a("li",{staticClass:"body-2 justify-text"},[e._v(" Concordar ou não concordar ao votar em um debate iniciado. ")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ol",{staticClass:"list"},[a("li",{staticClass:"body-2 justify-text"},[e._v(" insira um título que represente o assunto principal da discussão. ")]),a("li",{staticClass:"body-2 justify-text"},[e._v(" insira um texto com sua argumentação diretamente na plataforma. ")]),a("li",{staticClass:"body-2 justify-text"},[e._v(" escolha uma ou mais categorias relacionada ao assunto que quer discutir. ")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ol",{staticClass:"list"},[a("li",{staticClass:"body-2 justify-text"},[e._v(" deletar o debate que você iniciou; ")]),a("li",{staticClass:"body-2 justify-text"},[e._v(" deletar um comentário em um debate que você participou. ")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ol",{staticClass:"list"},[a("li",{staticClass:"body-2 justify-text"},[e._v(" os comentários ofensivos, com discurso de ódio ou qualquer ato de comunicação que inferiorize ou incite contra uma pessoa ou grupo, tendo por base características como raça, gênero, etnia, nacionalidade, religião, orientação sexual ou outro aspecto passível de discriminação. ")]),a("li",{staticClass:"body-2 justify-text"},[e._v(" qualquer comentário que implique em uma ação ilegal ou que tenham a intenção de sabotar o espaço de debate. ")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ol",{staticClass:"list"},[a("li",{staticClass:"body-2 justify-text"},[e._v(" Insira um texto revisado por você. Veja se está claro e objetivo. ")]),a("li",{staticClass:"body-2 justify-text"},[e._v(" Seja gentil ao dialogar com as outras vozes que têm pontos de vista diferente do seu. ")])])}],i=(a("c740"),a("45fc"),a("a434"),a("96cf"),a("1da1")),c=a("2909"),l=a("5530"),u=a("b5ae"),d=a("2f62"),p=a("5935"),f=a("2241"),m=a("3275"),b=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-component progressbar-component"},[a("ul",{staticClass:"progressbar"},e._l(e.stepsTitle,(function(t,r){return a("li",{key:r,class:{active:e.currentStep>=r+1},attrs:{id:r+1}},[a("span",{staticClass:"caption bolder",class:{active:e.currentStep>=r+1}},[e._v(" "+e._s(t)+" ")])])})),0)])},g=[],v=(a("a9e3"),{name:"StepProgressBar",props:{currentStep:{type:Number,default:1},stepsTitle:{type:Array,default:function(){return["passo 1","passo 2","passo 3"]}}},data:function(){return{}},methods:{}}),h=v,y=(a("29d5"),a("2877")),_=Object(y["a"])(h,b,g,!1,null,"f57f2a60",null),C=_.exports,x=a("82ea"),j=a("a12d"),O=Object(p["a"])({getterType:"topics/getField",mutationType:"topics/updateField"}),P=O.mapFields,q={name:"TopicCreator",components:{Identity:f["a"],ColorLine:m["a"],ProgressBar:C,BaseButton:x["a"],iconBase:j["a"]},data:function(){return{currentStep:1,count:0,numberOfSteps:3,stepsTitle:["O que são os Diálogos","Regras","Crie seu Diálogo"],rulesAccepted:!1,rulesError:!1,termsAccepted:!1,hasSelected:!1,options:[]}},validations:{title:{required:u["required"],minLength:Object(u["minLength"])(5),validChars:function(e){return/^[a-zA-Z0-9\s]+$/gi.test(e)}},content:{required:u["required"],maxLength:Object(u["maxLength"])(2e3)}},computed:Object(l["a"])(Object(l["a"])(Object(l["a"])({},P({title:"topicForm.title",content:"topicForm.content",categoryId:"topicForm.categoryId",categoriesTagged:"topicForm.categoriesTagged"})),Object(d["d"])({categories:"categories/loadCategories"})),{},{formIsValid:function(){return!this.$v.$anyError&&!1!==this.rulesAccepted&&!1!==this.termsAccepted&&0!==this.categoriesTagged.length},titleErrorMessage:function(){return this.$v.title.required?this.$v.title.validChars?this.$v.title.minLength?"":"Mínimo de cinco dígitos":"Este campo deve conter apenas letras e números":"Esse campo é requerido"},contentErrorMessage:function(){return this.$v.title.required?this.$v.title.minLength?"":"Mínimo de três dígitos":"Esse campo é requerido"}}),created:function(){this.options=Object(c["a"])(this.categories)},methods:{submit:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.$store.dispatch("topics/createNewTopic",{$socket:this.$socket}).then((function(){t.content="",t.title="",t.categoryId=null,t.categoriesTagged=[],t.$router.push("/topics")}));case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),cancel:function(){this.content="",this.title="",this.categoryId=null,this.categoriesTagged=[],this.$router.push({name:"Topics"})},tagEvent:function(e){if(null===this.categoryId&&0===this.categoriesTagged.length)this.tagMain(e);else if(this.categoriesTagged.some((function(t){return t===e}))){console.log("hasBeenTagged",e);var t=this.categoriesTagged.findIndex((function(t){return t.value===e.value})),a=this.categoriesTagged[t];document.getElementById("icon-".concat(e.value)).getElementById("g").setAttribute("fill","".concat(a.color)),document.getElementById("category-label-".concat(e.value)).style.color="#000",document.getElementById("item-".concat(e.value)).style.borderRight="none",this.categoriesTagged.splice(t,1),console.log("tag in array",this.categoriesTagged)}else{console.log("tagged",e);var r=this.categoriesTagged;r.push(e),this.categoriesTagged=r,document.getElementById("category-label-".concat(e.value)).style.color="".concat(e.color),document.getElementById("item-".concat(e.value)).style.borderRight="2px solid ".concat(e.color)}},tagMain:function(e){console.log("sel",e),this.categoryId=e,document.getElementById("category-label-".concat(e.value)).style.color="".concat(e.color),this.hasSelected=!0;var t=this.options.findIndex((function(t){return t.value===e.value}));this.options.splice(t,1)},untagMain:function(){this.options.push(this.categoryId),this.categoryId=null},nextStep:function(){0===this.options.length&&(this.options=Object(c["a"])(this.categories)),2===this.currentStep&&!1===this.rulesAccepted?this.rulesError=!0:this.count<=this.numberOfSteps&&(this.currentStep+=1,this.count+=1,this.scrollToTop(),this.rulesError=!1)},prevStep:function(){this.count>=0&&(this.currentStep-=1,this.count-=1),this.scrollToTop()},scrollToTop:function(){window.scrollTo({top:0,left:0,behavior:"smooth"})}}},w=q,M=(a("842b"),a("fe09")),z=Object(y["a"])(w,s,n,!1,null,"ab671bea",null),S=z.exports;z.options.components=Object.assign(Object.create(z.options.components||null),z.options.components||{},{QCheckbox:M["i"],QInput:M["q"],QList:M["u"],QItem:M["r"],QItemSection:M["t"]});var A={name:"CreateTopic",components:{TopicCreator:S},data:function(){return{}},computed:{},methods:{}},I=A,E=(a("69ce"),Object(y["a"])(I,r,o,!1,null,"0a955340",null));t["default"]=E.exports},"5d75":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a("78ef"),o=/^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/,s=(0,r.regex)("email",o);t.default=s},"5db3":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a("78ef"),o=function(e){return(0,r.withParams)({type:"minLength",min:e},(function(t){return!(0,r.req)(t)||(0,r.len)(t)>=e}))};t.default=o},6235:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a("78ef"),o=(0,r.regex)("alpha",/^[a-zA-Z]*$/);t.default=o},6417:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a("78ef"),o=function(e){return(0,r.withParams)({type:"not"},(function(t,a){return!(0,r.req)(t)||!e.call(this,t,a)}))};t.default=o},"69ce":function(e,t,a){"use strict";var r=a("fcf3"),o=a.n(r);o.a},"772d":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a("78ef"),o=/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i,s=(0,r.regex)("url",o);t.default=s},"78ef":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"withParams",{enumerable:!0,get:function(){return r.default}}),t.regex=t.ref=t.len=t.req=void 0;var r=o(a("8750"));function o(e){return e&&e.__esModule?e:{default:e}}function s(e){return s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}var n=function(e){if(Array.isArray(e))return!!e.length;if(void 0===e||null===e)return!1;if(!1===e)return!0;if(e instanceof Date)return!isNaN(e.getTime());if("object"===s(e)){for(var t in e)return!0;return!1}return!!String(e).length};t.req=n;var i=function(e){return Array.isArray(e)?e.length:"object"===s(e)?Object.keys(e).length:String(e).length};t.len=i;var c=function(e,t,a){return"function"===typeof e?e.call(t,a):a[e]};t.ref=c;var l=function(e,t){return(0,r.default)({type:e},(function(e){return!n(e)||t.test(e)}))};t.regex=l},"82ea":function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.to?a("router-link",{staticClass:"base-button",class:[e.theme,{disabled:e.disabled}],attrs:{to:e.to}},[e._t("default")],2):a("button",{staticClass:"base-button",class:[e.theme,{disabled:e.disabled}],on:{click:e.emitClick}},[e._t("default")],2)},o=[],s={props:{to:{type:Object,default:null},theme:{type:String,default:"primary"},disabled:{type:Boolean,default:!1}},emits:["click"],methods:{emitClick:function(){this.$emit("click")}}},n=s,i=(a("2c1c"),a("2877")),c=Object(i["a"])(n,r,o,!1,null,"2aaf335a",null);t["a"]=c.exports},"842b":function(e,t,a){"use strict";var r=a("9471"),o=a.n(r);o.a},8750:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r="web"===Object({NODE_ENV:"production",VUE_APP_BASE_URL:"https://cartografiadaculturacg.com.br/",BASE_URL:"/"}).BUILD?a("cb69").withParams:a("0234").withParams,o=r;t.default=o},"91d3":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a("78ef"),o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:":";return(0,r.withParams)({type:"macAddress"},(function(t){if(!(0,r.req)(t))return!0;if("string"!==typeof t)return!1;var a="string"===typeof e&&""!==e?t.split(e):12===t.length||16===t.length?t.match(/.{2}/g):null;return null!==a&&(6===a.length||8===a.length)&&a.every(s)}))};t.default=o;var s=function(e){return e.toLowerCase().match(/^[0-9a-f]{2}$/)}},9471:function(e,t,a){},a12d:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("svg",{attrs:{id:"svg"+(e.iconId+1),xmlns:"http://www.w3.org/2000/svg",width:e.width,viewBox:"0 0 151.000000 151.000000",preserveAspectRatio:"xMidYMid meet","aria-labelledby":e.iconId,role:"presentation"}},[a("title",{attrs:{id:e.iconId,lang:"en"}},[e._v(e._s(e.iconId)+" icon")]),e.setWhite?e._e():a("g",{attrs:{id:"g",transform:"translate(0.000000,151.000000) scale(0.100000,-0.100000)",fill:e.color}},[a("path",{attrs:{d:e.getIcon.path}}),a("path",{attrs:{d:e.getIcon.path2}})]),e.setWhite?a("g",{attrs:{id:"g",transform:"translate(0.000000,151.000000) scale(0.100000,-0.100000)",fill:"#fff"}},[a("path",{attrs:{d:e.getIcon.path}}),a("path",{attrs:{d:e.getIcon.path2}})]):e._e()])},o=[],s=(a("a9e3"),{name:"IconBase",props:{color:{type:String,default:"#b8bfc2"},iconId:{type:[Number,String],default:0},width:{type:[Number,String],default:16},setWhite:{type:Boolean,default:!1}},data:function(){return{icons:[{iconName:"artes visuais, arte urbana e arte digital",caracter:"a",iconColor:"#633D35",path:"M570 1266 c-111 -31 -177 -81 -220 -169 -17 -34 -33 -86 -37 -115 l-6 -52 129 0 129 0 23 49 c28 62 65 81 156 81 108 0 156 -30 156 -98 0 -29 -28 -63 -64 -76 -10 -4 -80 -15 -155 -26 -177 -26 -247 -50 -309 -105 -70 -63 -95 -126 -95 -236 0 -74 4 -95 27 -143 51 -104 127 -148 267 -154 125 -5 187 12 274 78 36 27 65 44 65 37 0 -7 5 -29 11 -49 l10 -38 149 0 c145 0 150 1 150 21 0 11 -9 28 -20 37 -12 10 -25 35 -30 57 -5 22 -10 181 -10 353 0 194 -4 330 -11 357 -23 89 -112 159 -241 190 -77 18 -284 18 -348 1z m320 -701 c-18 -60 -44 -90 -102 -119 -91 -45 -199 -30 -227 31 -16 34 -14 89 5 124 20 39 73 63 189 84 50 10 101 23 115 30 l25 13 3 -61 c2 -34 -2 -80 -8 -102z",path2:""},{iconName:"escultura e artesanato",caracter:"e",iconColor:"#AA4245",path:"M620 1234 c-241 -52 -370 -221 -370 -484 0 -215 75 -343 250 -424 173 -80 420 -73 574 18 76 44 176 168 176 217 0 5 -61 9 -136 9 l-135 0 -26 -30 c-43 -52 -98 -73 -183 -73 -84 0 -138 18 -184 61 -34 32 -65 96 -66 134 l0 28 373 2 372 3 -3 80 c-1 44 -8 103 -14 130 -25 118 -124 241 -232 291 -110 50 -269 66 -396 38z m255 -212 c55 -28 84 -61 100 -116 11 -37 12 -48 2 -52 -7 -2 -111 -3 -232 -2 -214 3 -220 4 -217 23 5 36 46 107 73 127 69 52 195 61 274 20z",path2:""},{iconName:"danca",caracter:"d",iconColor:"#DF694A",path:"M970 1223 l0 -227 -37 36 c-72 68 -114 83 -238 83 -100 0 -116 -3 -172 -29 -77 -35 -163 -123 -200 -202 -39 -85 -53 -148 -59 -269 -11 -195 36 -337 148 -449 95 -95 208 -130 345 -107 80 14 135 44 186 100 l37 41 0 -60 0 -60 135 0 135 0 0 685 0 685 -140 0 -140 0 0 -227z m-119 -366 c89 -47 138 -170 126 -318 -9 -110 -58 -198 -132 -237 -44 -23 -131 -20 -182 7 -169 86 -156 491 17 560 46 18 124 13 171 -12z",path2:""},{iconName:"teatro e circo",caracter:"t",iconColor:"#E0BC68",path:"M610 1230 l0 -130 -70 0 -70 0 0 -90 0 -90 70 0 69 0 3 -324 c3 -371 1 -359 94 -406 44 -22 63 -25 197 -28 l147 -4 0 98 0 99 -71 1 c-49 1 -74 6 -80 15 -5 8 -9 134 -9 282 l0 267 80 0 80 0 0 90 0 90 -80 0 -80 0 0 130 0 130 -140 0 -140 0 0 -130z",path2:""},{iconName:"cinema e audiovisual",caracter:"c",iconColor:"#EFBC5E",path:"M660 1280 c-183 -33 -305 -152 -356 -350 -21 -81 -24 -281 -5 -360 43 -180 157 -304 312 -339 76 -18 240 -13 310 8 150 47 263 180 293 344 l7 37 -140 0 -140 0 -15 -53 c-23 -79 -61 -110 -139 -115 -41 -3 -75 1 -99 11 -76 32 -118 131 -118 278 0 211 67 312 206 312 85 0 136 -44 159 -135 l7 -28 139 0 c159 0 149 -8 124 99 -19 80 -58 153 -104 193 -97 86 -281 126 -441 98z",path2:""},{iconName:"fotografia",caracter:"f",iconColor:"#62A06B",path:"M780 1426 c-63 -18 -85 -31 -115 -71 -37 -48 -55 -115 -55 -207 l0 -78 -75 0 -75 0 0 -100 0 -100 75 0 75 0 0 -405 0 -405 135 0 135 0 0 405 0 405 85 0 85 0 0 100 0 100 -85 0 -85 0 0 49 c0 76 22 96 104 96 l66 0 0 112 0 113 -112 -1 c-62 0 -133 -6 -158 -13z",path2:""},{iconName:"literatura",caracter:"l",iconColor:"#528443",path:"M620 750 l0 -680 135 0 135 0 0 680 0 680 -135 0 -135 0 0 -680z",path2:""},{iconName:"design e moda",caracter:"d",iconColor:"#2C4A25",path:"M970 1223 l0 -227 -37 36 c-72 68 -114 83 -238 83 -100 0 -116 -3 -172 -29 -77 -35 -163 -123 -200 -202 -39 -85 -53 -148 -59 -269 -11 -195 36 -337 148 -449 95 -95 208 -130 345 -107 80 14 135 44 186 100 l37 41 0 -60 0 -60 135 0 135 0 0 685 0 685 -140 0 -140 0 0 -227z m-119 -366 c89 -47 138 -170 126 -318 -9 -110 -58 -198 -132 -237 -44 -23 -131 -20 -182 7 -169 86 -156 491 17 560 46 18 124 13 171 -12z",path2:""},{iconName:"musica",iconColor:"#0E68D8",caracter:"m",path:"M487 1260 c-78 -20 -134 -60 -180 -130 -17 -24 -17 -23 -17 43 l0 67 -130 0 -130 0 0 -505 0 -505 140 0 140 0 0 346 c0 393 1 399 73 436 60 30 147 22 187 -18 44 -43 50 -99 50 -450 l0 -314 135 0 135 0 0 323 c0 194 4 337 11 360 15 57 62 104 112 115 88 17 157 -16 177 -87 6 -21 10 -181 10 -373 l0 -338 141 0 140 0 -3 402 c-3 396 -3 404 -26 454 -29 64 -92 126 -157 156 -39 17 -69 22 -135 23 -119 0 -179 -22 -252 -95 l-57 -57 -31 48 c-43 67 -111 100 -217 105 -43 2 -95 -1 -116 -6z",path2:""},{iconName:"patrimonio cultural e museologia",caracter:"p",iconColor:"#53A4DF",path:"M740 1457 c-70 -16 -140 -56 -179 -104 l-31 -38 0 63 0 62 -130 0 -130 0 0 -705 0 -705 135 0 135 0 0 250 0 250 41 -41 c52 -52 111 -78 193 -86 235 -22 412 123 462 376 22 112 15 298 -15 391 -67 210 -274 333 -481 287z m115 -261 c31 -16 48 -37 75 -90 33 -66 35 -74 35 -175 0 -100 -2 -111 -32 -171 -33 -68 -65 -99 -122 -118 -96 -33 -201 13 -254 112 -19 36 -22 56 -22 166 0 109 3 131 23 176 13 29 36 64 51 79 60 56 165 66 246 21z",path2:""},{iconName:"cultura popular, folclore e capoeira",caracter:"c",iconColor:"#95C6DC",path:"M660 1280 c-183 -33 -305 -152 -356 -350 -21 -81 -24 -281 -5 -360 43 -180 157 -304 312 -339 76 -18 240 -13 310 8 150 47 263 180 293 344 l7 37 -140 0 -140 0 -15 -53 c-23 -79 -61 -110 -139 -115 -41 -3 -75 1 -99 11 -76 32 -118 131 -118 278 0 211 67 312 206 312 85 0 136 -44 159 -135 l7 -28 139 0 c159 0 149 -8 124 99 -19 80 -58 153 -104 193 -97 86 -281 126 -441 98z",path2:""},{iconName:"gastronomia",caracter:"g",iconColor:"#D390A2",path:"M550 1453 c-126 -44 -221 -159 -266 -324 -25 -90 -25 -292 0 -374 43 -144 133 -253 244 -296 43 -17 79 -22 152 -23 123 -1 183 19 247 82 l46 47 -5 -92 c-7 -123 -33 -178 -101 -212 -37 -18 -64 -24 -116 -23 -88 0 -136 21 -158 66 l-17 36 -143 0 -143 0 0 -32 c0 -45 40 -126 81 -166 78 -77 194 -112 370 -112 133 0 211 12 285 45 64 28 139 95 166 148 44 87 48 141 48 700 l0 527 -130 0 -130 0 0 -67 0 -68 -25 37 c-28 41 -92 89 -144 106 -49 17 -207 14 -261 -5z m330 -262 c19 -15 46 -50 60 -77 23 -44 25 -60 25 -169 0 -104 -3 -125 -22 -161 -52 -97 -152 -144 -244 -112 -55 18 -88 47 -114 99 -71 139 -37 369 63 431 71 44 170 39 232 -11z",path2:""},{iconName:"cultura afro-brasileira",caracter:"c",iconColor:"#CC748C",path:"M660 1280 c-183 -33 -305 -152 -356 -350 -21 -81 -24 -281 -5 -360 43 -180 157 -304 312 -339 76 -18 240 -13 310 8 150 47 263 180 293 344 l7 37 -140 0 -140 0 -15 -53 c-23 -79 -61 -110 -139 -115 -41 -3 -75 1 -99 11 -76 32 -118 131 -118 278 0 211 67 312 206 312 85 0 136 -44 159 -135 l7 -28 139 0 c159 0 149 -8 124 99 -19 80 -58 153 -104 193 -97 86 -281 126 -441 98z",path2:""},{iconName:"cultura indigena",caracter:"c",iconColor:"#C95676",path:"M660 1280 c-183 -33 -305 -152 -356 -350 -21 -81 -24 -281 -5 -360 43 -180 157 -304 312 -339 76 -18 240 -13 310 8 150 47 263 180 293 344 l7 37 -140 0 -140 0 -15 -53 c-23 -79 -61 -110 -139 -115 -41 -3 -75 1 -99 11 -76 32 -118 131 -118 278 0 211 67 312 206 312 85 0 136 -44 159 -135 l7 -28 139 0 c159 0 149 -8 124 99 -19 80 -58 153 -104 193 -97 86 -281 126 -441 98z",path2:""},{iconName:"gestores publicos",caracter:"g",iconColor:"#BB7165",path:"M550 1453 c-126 -44 -221 -159 -266 -324 -25 -90 -25 -292 0 -374 43 -144 133 -253 244 -296 43 -17 79 -22 152 -23 123 -1 183 19 247 82 l46 47 -5 -92 c-7 -123 -33 -178 -101 -212 -37 -18 -64 -24 -116 -23 -88 0 -136 21 -158 66 l-17 36 -143 0 -143 0 0 -32 c0 -45 40 -126 81 -166 78 -77 194 -112 370 -112 133 0 211 12 285 45 64 28 139 95 166 148 44 87 48 141 48 700 l0 527 -130 0 -130 0 0 -67 0 -68 -25 37 c-28 41 -92 89 -144 106 -49 17 -207 14 -261 -5z m330 -262 c19 -15 46 -50 60 -77 23 -44 25 -60 25 -169 0 -104 -3 -125 -22 -161 -52 -97 -152 -144 -244 -112 -55 18 -88 47 -114 99 -71 139 -37 369 63 431 71 44 170 39 232 -11z",path2:""},{iconName:"produtor cultural",caracter:"p",iconColor:"#AA4245",path:"M740 1457 c-70 -16 -140 -56 -179 -104 l-31 -38 0 63 0 62 -130 0 -130 0 0 -705 0 -705 135 0 135 0 0 250 0 250 41 -41 c52 -52 111 -78 193 -86 235 -22 412 123 462 376 22 112 15 298 -15 391 -67 210 -274 333 -481 287z m115 -261 c31 -16 48 -37 75 -90 33 -66 35 -74 35 -175 0 -100 -2 -111 -32 -171 -33 -68 -65 -99 -122 -118 -96 -33 -201 13 -254 112 -19 36 -22 56 -22 166 0 109 3 131 23 176 13 29 36 64 51 79 60 56 165 66 246 21z",path2:""},{iconName:"espacos culturais",caracter:"e",iconColor:"#633D35",path:"M620 1234 c-241 -52 -370 -221 -370 -484 0 -215 75 -343 250 -424 173 -80 420 -73 574 18 76 44 176 168 176 217 0 5 -61 9 -136 9 l-135 0 -26 -30 c-43 -52 -98 -73 -183 -73 -84 0 -138 18 -184 61 -34 32 -65 96 -66 134 l0 28 373 2 372 3 -3 80 c-1 44 -8 103 -14 130 -25 118 -124 241 -232 291 -110 50 -269 66 -396 38z m255 -212 c55 -28 84 -61 100 -116 11 -37 12 -48 2 -52 -7 -2 -111 -3 -232 -2 -214 3 -220 4 -217 23 5 36 46 107 73 127 69 52 195 61 274 20z",path2:""},{iconName:"espaços publicos",caracter:"e",iconColor:"#DF694A",path:"M620 1234 c-241 -52 -370 -221 -370 -484 0 -215 75 -343 250 -424 173 -80 420 -73 574 18 76 44 176 168 176 217 0 5 -61 9 -136 9 l-135 0 -26 -30 c-43 -52 -98 -73 -183 -73 -84 0 -138 18 -184 61 -34 32 -65 96 -66 134 l0 28 373 2 372 3 -3 80 c-1 44 -8 103 -14 130 -25 118 -124 241 -232 291 -110 50 -269 66 -396 38z m255 -212 c55 -28 84 -61 100 -116 11 -37 12 -48 2 -52 -7 -2 -111 -3 -232 -2 -214 3 -220 4 -217 23 5 36 46 107 73 127 69 52 195 61 274 20z",path2:""}]}},computed:{getIcon:function(){return this.icons[this.iconId]}}}),n=s,i=a("2877"),c=Object(i["a"])(n,r,o,!1,null,null,null);t["a"]=c.exports},aa82:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a("78ef"),o=function(e){return(0,r.withParams)({type:"requiredIf",prop:e},(function(t,a){return!(0,r.ref)(e,this,a)||(0,r.req)(t)}))};t.default=o},b5ae:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"alpha",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"alphaNum",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"numeric",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(t,"between",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"email",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"ipAddress",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"macAddress",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"maxLength",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"minLength",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"required",{enumerable:!0,get:function(){return p.default}}),Object.defineProperty(t,"requiredIf",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(t,"requiredUnless",{enumerable:!0,get:function(){return m.default}}),Object.defineProperty(t,"sameAs",{enumerable:!0,get:function(){return b.default}}),Object.defineProperty(t,"url",{enumerable:!0,get:function(){return g.default}}),Object.defineProperty(t,"or",{enumerable:!0,get:function(){return v.default}}),Object.defineProperty(t,"and",{enumerable:!0,get:function(){return h.default}}),Object.defineProperty(t,"not",{enumerable:!0,get:function(){return y.default}}),Object.defineProperty(t,"minValue",{enumerable:!0,get:function(){return _.default}}),Object.defineProperty(t,"maxValue",{enumerable:!0,get:function(){return C.default}}),Object.defineProperty(t,"integer",{enumerable:!0,get:function(){return x.default}}),Object.defineProperty(t,"decimal",{enumerable:!0,get:function(){return j.default}}),t.helpers=void 0;var r=q(a("6235")),o=q(a("3a54")),s=q(a("45b8")),n=q(a("ec11")),i=q(a("5d75")),c=q(a("c99d")),l=q(a("91d3")),u=q(a("2a12")),d=q(a("5db3")),p=q(a("d4f4")),f=q(a("aa82")),m=q(a("e652")),b=q(a("b6cb")),g=q(a("772d")),v=q(a("d294")),h=q(a("3360")),y=q(a("6417")),_=q(a("eb66")),C=q(a("46bc")),x=q(a("1331")),j=q(a("c301")),O=P(a("78ef"));function P(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,a):{};r.get||r.set?Object.defineProperty(t,a,r):t[a]=e[a]}return t.default=e,t}function q(e){return e&&e.__esModule?e:{default:e}}t.helpers=O},b6cb:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a("78ef"),o=function(e){return(0,r.withParams)({type:"sameAs",eq:e},(function(t,a){return t===(0,r.ref)(e,this,a)}))};t.default=o},bbf1:function(e,t,a){},c301:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a("78ef"),o=(0,r.regex)("decimal",/^[-]?\d*(\.\d+)?$/);t.default=o},c99d:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a("78ef"),o=(0,r.withParams)({type:"ipAddress"},(function(e){if(!(0,r.req)(e))return!0;if("string"!==typeof e)return!1;var t=e.split(".");return 4===t.length&&t.every(s)}));t.default=o;var s=function(e){if(e.length>3||0===e.length)return!1;if("0"===e[0]&&"0"!==e)return!1;if(!e.match(/^\d+$/))return!1;var t=0|+e;return t>=0&&t<=255}},cb69:function(e,t,a){"use strict";(function(e){function a(e){return a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.withParams=void 0;var r="undefined"!==typeof window?window:"undefined"!==typeof e?e:{},o=function(e,t){return"object"===a(e)&&void 0!==t?t:e((function(){}))},s=r.vuelidate?r.vuelidate.withParams:o;t.withParams=s}).call(this,a("c8ba"))},d294:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a("78ef"),o=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,r.withParams)({type:"or"},(function(){for(var e=this,a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return t.length>0&&t.reduce((function(t,a){return t||a.apply(e,r)}),!1)}))};t.default=o},d4f4:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a("78ef"),o=(0,r.withParams)({type:"required"},(function(e){return"string"===typeof e?(0,r.req)(e.trim()):(0,r.req)(e)}));t.default=o},e652:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a("78ef"),o=function(e){return(0,r.withParams)({type:"requiredUnless",prop:e},(function(t,a){return!!(0,r.ref)(e,this,a)||(0,r.req)(t)}))};t.default=o},eb66:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a("78ef"),o=function(e){return(0,r.withParams)({type:"minValue",min:e},(function(t){return!(0,r.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t>=+e}))};t.default=o},ec11:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a("78ef"),o=function(e,t){return(0,r.withParams)({type:"between",min:e,max:t},(function(a){return!(0,r.req)(a)||(!/\s/.test(a)||a instanceof Date)&&+e<=+a&&+t>=+a}))};t.default=o},f995:function(e,t,a){},fcf3:function(e,t,a){}}]);
//# sourceMappingURL=chunk-47f2d656.96ab24fd.js.map