(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cc95a918"],{"02a3":function(e,t,r){"use strict";r("f26f")},"0e51":function(e,t,r){"use strict";r("6bc5")},1331:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),s=(0,n.regex)("integer",/(^[0-9]*$)|(^-[0-9]+$)/);t.default=s},"15ab":function(e,t,r){},"1e3cc":function(e,t,r){"use strict";r("d77c")},"2a12":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),s=function(e){return(0,n.withParams)({type:"maxLength",max:e},(function(t){return!(0,n.req)(t)||(0,n.len)(t)<=e}))};t.default=s},3360:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),s=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"and"},(function(){for(var e=this,r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return t.length>0&&t.reduce((function(t,r){return t&&r.apply(e,n)}),!0)}))};t.default=s},"3a54":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),s=(0,n.regex)("alphaNum",/^[a-zA-Z0-9]*$/);t.default=s},"45b8":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),s=(0,n.regex)("numeric",/^[0-9]*$/);t.default=s},"46bc":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),s=function(e){return(0,n.withParams)({type:"maxValue",max:e},(function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t<=+e}))};t.default=s},"5d75":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),s=/^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/,o=(0,n.regex)("email",s);t.default=o},"5db3":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),s=function(e){return(0,n.withParams)({type:"minLength",min:e},(function(t){return!(0,n.req)(t)||(0,n.len)(t)>=e}))};t.default=s},"5ea5":function(e,t,r){},6235:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),s=(0,n.regex)("alpha",/^[a-zA-Z]*$/);t.default=s},6417:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),s=function(e){return(0,n.withParams)({type:"not"},(function(t,r){return!(0,n.req)(t)||!e.call(this,t,r)}))};t.default=s},"6bc5":function(e,t,r){},"772d":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),s=/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i,o=(0,n.regex)("url",s);t.default=o},"78ef":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"withParams",{enumerable:!0,get:function(){return n.default}}),t.regex=t.ref=t.len=t.req=void 0;var n=s(r("8750"));function s(e){return e&&e.__esModule?e:{default:e}}function o(e){return o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}var i=function(e){if(Array.isArray(e))return!!e.length;if(void 0===e||null===e)return!1;if(!1===e)return!0;if(e instanceof Date)return!isNaN(e.getTime());if("object"===o(e)){for(var t in e)return!0;return!1}return!!String(e).length};t.req=i;var a=function(e){return Array.isArray(e)?e.length:"object"===o(e)?Object.keys(e).length:String(e).length};t.len=a;var c=function(e,t,r){return"function"===typeof e?e.call(t,r):r[e]};t.ref=c;var l=function(e,t){return(0,n.default)({type:e},(function(e){return!i(e)||t.test(e)}))};t.regex=l},"7b09":function(e,t,r){"use strict";r("5ea5")},"82ea":function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.to?r("router-link",{staticClass:"base-button",class:[e.theme,{disabled:e.disabled}],attrs:{to:e.to}},[e._t("default")],2):r("button",{staticClass:"base-button",class:[e.theme,{disabled:e.disabled}],on:{click:e.emitClick}},[e._t("default")],2)},s=[],o={props:{to:{type:Object,default:null},theme:{type:String,default:"primary"},disabled:{type:Boolean,default:!1}},emits:["click"],methods:{emitClick:function(){this.$emit("click")}}},i=o,a=(r("0e51"),r("2877")),c=Object(a["a"])(i,n,s,!1,null,"89747364",null);t["a"]=c.exports},8750:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n="web"===Object({VUE_APP_BASE_URL:"https://cartografiadaculturacg.com.br/",VUE_APP_DEBUG_SOCKET:"false",VUE_APP_DEV_TOOLS:"false",NODE_ENV:"production",BASE_URL:"/"}).BUILD?r("cb69").withParams:r("0234").withParams,s=n;t.default=s},"91d3":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:":";return(0,n.withParams)({type:"macAddress"},(function(t){if(!(0,n.req)(t))return!0;if("string"!==typeof t)return!1;var r="string"===typeof e&&""!==e?t.split(e):12===t.length||16===t.length?t.match(/.{2}/g):null;return null!==r&&(6===r.length||8===r.length)&&r.every(o)}))};t.default=s;var o=function(e){return e.toLowerCase().match(/^[0-9a-f]{2}$/)}},"9a7e":function(e,t,r){"use strict";r("de16")},aa82:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),s=function(e){return(0,n.withParams)({type:"requiredIf",prop:e},(function(t,r){return!(0,n.ref)(e,this,r)||(0,n.req)(t)}))};t.default=s},b5ae:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"alpha",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"alphaNum",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(t,"numeric",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"between",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"email",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"ipAddress",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"macAddress",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"maxLength",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"minLength",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"required",{enumerable:!0,get:function(){return p.default}}),Object.defineProperty(t,"requiredIf",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(t,"requiredUnless",{enumerable:!0,get:function(){return m.default}}),Object.defineProperty(t,"sameAs",{enumerable:!0,get:function(){return b.default}}),Object.defineProperty(t,"url",{enumerable:!0,get:function(){return y.default}}),Object.defineProperty(t,"or",{enumerable:!0,get:function(){return v.default}}),Object.defineProperty(t,"and",{enumerable:!0,get:function(){return g.default}}),Object.defineProperty(t,"not",{enumerable:!0,get:function(){return h.default}}),Object.defineProperty(t,"minValue",{enumerable:!0,get:function(){return _.default}}),Object.defineProperty(t,"maxValue",{enumerable:!0,get:function(){return C.default}}),Object.defineProperty(t,"integer",{enumerable:!0,get:function(){return j.default}}),Object.defineProperty(t,"decimal",{enumerable:!0,get:function(){return O.default}}),t.helpers=void 0;var n=x(r("6235")),s=x(r("3a54")),o=x(r("45b8")),i=x(r("ec11")),a=x(r("5d75")),c=x(r("c99d")),l=x(r("91d3")),u=x(r("2a12")),d=x(r("5db3")),p=x(r("d4f4")),f=x(r("aa82")),m=x(r("e652")),b=x(r("b6cb")),y=x(r("772d")),v=x(r("d294")),g=x(r("3360")),h=x(r("6417")),_=x(r("eb66")),C=x(r("46bc")),j=x(r("1331")),O=x(r("c301")),k=$(r("78ef"));function $(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}function x(e){return e&&e.__esModule?e:{default:e}}t.helpers=k},b6cb:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),s=function(e){return(0,n.withParams)({type:"sameAs",eq:e},(function(t,r){return t===(0,n.ref)(e,this,r)}))};t.default=s},c301:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),s=(0,n.regex)("decimal",/^[-]?\d*(\.\d+)?$/);t.default=s},c99d:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),s=(0,n.withParams)({type:"ipAddress"},(function(e){if(!(0,n.req)(e))return!0;if("string"!==typeof e)return!1;var t=e.split(".");return 4===t.length&&t.every(o)}));t.default=s;var o=function(e){if(e.length>3||0===e.length)return!1;if("0"===e[0]&&"0"!==e)return!1;if(!e.match(/^\d+$/))return!1;var t=0|+e;return t>=0&&t<=255}},cb69:function(e,t,r){"use strict";(function(e){function r(e){return r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.withParams=void 0;var n="undefined"!==typeof window?window:"undefined"!==typeof e?e:{},s=function(e,t){return"object"===r(e)&&void 0!==t?t:e((function(){}))},o=n.vuelidate?n.vuelidate.withParams:s;t.withParams=o}).call(this,r("c8ba"))},d294:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),s=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"or"},(function(){for(var e=this,r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return t.length>0&&t.reduce((function(t,r){return t||r.apply(e,n)}),!1)}))};t.default=s},d4f4:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),s=(0,n.withParams)({type:"required"},(function(e){return"string"===typeof e?(0,n.req)(e.trim()):(0,n.req)(e)}));t.default=s},d77c:function(e,t,r){},de16:function(e,t,r){},e652:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),s=function(e){return(0,n.withParams)({type:"requiredUnless",prop:e},(function(t,r){return!!(0,n.ref)(e,this,r)||(0,n.req)(t)}))};t.default=s},eb66:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),s=function(e){return(0,n.withParams)({type:"minValue",min:e},(function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t>=+e}))};t.default=s},ec11:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),s=function(e,t){return(0,n.withParams)({type:"between",min:e,max:t},(function(r){return!(0,n.req)(r)||(!/\s/.test(r)||r instanceof Date)&&+e<=+r&&+t>=+r}))};t.default=s},edc4:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"topic-page column"},[r("header",{staticClass:"header",attrs:{role:"banner"}},[r("logo-card"),r("base-button",{staticClass:"reset-btn mg-top8",attrs:{theme:"flat",to:{name:"Topics"}}},[r("i",{staticClass:"fas fa-arrow-left text-black"}),r("span",{staticClass:"caption bolder mg-left8 text-black"},[e._v(" voltar aos debates ")])])],1),r("q-inner-loading",{attrs:{showing:e.loading}},[r("q-spinner",{attrs:{color:"black",size:"3em",thickness:2}})],1),r("div",{directives:[{name:"show",rawName:"v-show",value:!e.loading,expression:"!loading"}],staticClass:"topic-wrapper"},[r("article",{staticClass:"topic-content",attrs:{role:"main"}},[r("header",[r("div",{staticClass:"action"},[r("h2",{staticClass:"big-title bolder"},[e._v(" "+e._s(e.topic.title)+" ")]),e.owner?r("q-item-label",{staticClass:"edit-icon",on:{click:function(t){e.$emit("card-click"),e.setTopic()}}},[r("i",{staticClass:"fas fa-edit"})]):e._e()],1),r("multicolor-line",{staticClass:"multicolor-line-top"}),r("section",{staticClass:"author row mg-top8"},[r("span",{staticClass:"body-3 bolder text-gray"},[e._v(" "+e._s(e.topic.user.firstName)+" "+e._s(e.topic.user.lastName)+" - ")]),r("span",{staticClass:"body-3 text-gray mg-left8"},[e._v(" "+e._s(e.$store.getters.formatDate(e.topic.createdAt))+" ")])])],1),r("section",{directives:[{name:"sanitize",rawName:"v-sanitize",value:e.topic.content,expression:"topic.content"}],staticClass:"main"}),r("section",{staticClass:"categories"},[r("p",{staticClass:"main",style:{color:e.$store.getters["categories/getCategoryById"](e.topic.categoryId).color}},[r("strong",[e._v(" "+e._s(e.$store.getters["categories/getCategoryById"](e.topic.categoryId).label)+" ")])]),e.topic.categoriesTagged.length>0?r("ul",e._l(e.topic.categoriesTagged,(function(t,n){return r("li",{key:n,staticClass:"tagged",style:{color:e.$store.getters["categories/getCategoryById"](t).color}},[r("span",[e._v(" "+e._s(e.$store.getters["categories/getCategoryById"](t).label)+" ")])])})),0):e._e()])]),r("section",{staticClass:"topic-stats"},[r("span",{staticClass:"body-3 bold mg-right16"},[e._v(" "+e._s(e.supports.positiveSupports+e.supports.negativeSupports)+" "),r("strong",[e._v("votos")])]),r("q-icon",{staticClass:"vote-icon mg-top-n8",attrs:{name:"far fa-thumbs-up",size:"xs"}}),r("span",{staticClass:"body-3 bolder mg-right16"},[e._v(" "+e._s(e.supportsPercentage(!0))+"%")]),r("q-icon",{staticClass:"vote-icon",attrs:{name:"far fa-thumbs-down",size:"xs"}}),r("span",{staticClass:"body-3 bolder mg-right16"},[e._v(" "+e._s(e.supportsPercentage(!1))+"%")])],1),r("section",{staticClass:"participate-area"},[r("div",{staticClass:"participate-content row"},[e.myVote.hasBeen?r("div",{staticClass:"row"},[e.myVote.status?r("q-icon",{staticClass:"vote-icon",attrs:{name:"far fa-thumbs-up",size:"xs"}}):e._e(),e.myVote.status?e._e():r("q-icon",{staticClass:"vote-icon mg-top4",attrs:{name:"far fa-thumbs-down",size:"xs"}}),r("span",{staticClass:"body-2 bolder",attrs:{id:"vote-text"}},[e._v(" "+e._s(e.myVote.status?"Apoiei este Tópico":"Não apoiei este Tópico")+" ")])],1):e._e(),!e.myVote.hasBeen&&e.isLoggedIn?r("div",{staticClass:"row"},[r("span",{staticClass:"headline-2 bolder"},[e._v(" Vote, participe! ")]),r("base-button",{staticClass:"participate-button",attrs:{theme:"secondary"},on:{click:function(t){return e.confirmSupport(!0)}}},[r("span",{staticClass:"body-3 bolder"},[e._v(" Apoiar ")])]),r("base-button",{staticClass:"participate-button",attrs:{theme:"secondary"},on:{click:function(t){return e.confirmSupport(!1)}}},[r("span",{staticClass:"body-3 bolder"},[e._v(" Não apoiar ")])])],1):e._e()]),r("q-dialog",{attrs:{persistent:""},model:{value:e.showConfirmDialog,callback:function(t){e.showConfirmDialog=t},expression:"showConfirmDialog"}},[r("q-card",[r("q-card-section",{staticClass:"row items-center"},[r("span",{staticClass:"q-ml-sm"},[e._v("Esta ação é irreversível, deseja continuar?")])]),r("q-card-actions",{attrs:{align:"right"}},[r("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Cancelar",color:"black"}}),r("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Continuar",color:"red"},on:{click:function(t){return e.computeSupport()}}})],1)],1)],1)],1),r("section",{staticClass:"replies"},[r("div",{staticClass:"topic-footer"},[r("div",{staticClass:"topic-footer-reply"},[r("q-icon",{attrs:{name:"far fa-comment"}}),r("span",{staticClass:"headline-3 text-gray bolder mg-left8"},[e._v(e._s(0!==e.topic.numberOfReplies?e.topic.numberOfReplies+" comentário(s)":"seja o primero a comentar."))])],1)]),e.isLoggedIn?r("div",[r("div",{staticClass:"replies-content mg-top16"},e._l(e.replyes,(function(e){return r("reply",{key:e.id,attrs:{reply:e}})})),1),r("q-separator"),r("div",{staticClass:"reply-form"},[r("reply-form")],1)],1):e._e()]),e.isLoggedIn?e._e():r("section",{staticClass:"replies-call"},[r("router-link",{ref:"link",attrs:{to:{name:"SignUp"}}},[e._v(" Cadastre-se ")]),e._v(" ou "),r("router-link",{ref:"link",attrs:{to:{name:"SignIn"}}},[e._v(" faça login ")]),e._v(" para participar do debate! ")],1)])],1)},s=[],o=r("5530"),i=r("2f62"),a=r("82ea"),c=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"reply-form"},[r("span",{staticClass:"body-2 bolder"},[e._v("Deixe seu comentário")]),r("div",{staticClass:"reply-content"},[r("q-input",{ref:"input",staticClass:"text-area",attrs:{placeholder:"Escreva aqui...",errors:e.$v.content,disabled:e.loading,square:"",dense:""},model:{value:e.content,callback:function(t){e.content=t},expression:"content"}}),r("div",{staticClass:"row no-wrap mg-top8"},[r("base-button",{staticClass:"reply-button cancel-button",attrs:{theme:""!==e.content?"secondary":"disabled"},on:{click:e.cancel}},[r("span",{staticClass:"caption bolder"},[e._v(" Cancelar ")])]),r("base-button",{staticClass:"reply-button",attrs:{theme:"primary"},on:{click:e.reply}},[r("span",{staticClass:"caption bolder"},[e._v(" "+e._s(e.loading?"Comentando...":"Comentar")+" ")])])],1)],1)])},l=[],u=r("5935"),d=r("b5ae"),p=Object(u["a"])({getterType:"topics/replies/getField",mutationType:"topics/replies/updateField"}),f=p.mapFields,m={components:{BaseButton:a["a"]},data:function(){return{loading:!1}},validations:{content:{required:d["required"]}},computed:Object(o["a"])({},f({content:"replieForm.content"})),methods:{reply:function(){var e=this;this.loading=!0,this.$v.$touch(),this.$v.$anyError||""===this.content?this.loading=!1:this.$store.dispatch("topics/replies/addReply",{$socket:this.$socket}).then((function(){e.content="",e.$v.$reset(),e.loading=!1}))},cancel:function(){this.content=""}}},b=m,y=(r("f003"),r("2877")),v=r("fe09"),g=Object(y["a"])(b,c,l,!1,null,"b593ffd0",null),h=g.exports;g.options.components=Object.assign(Object.create(g.options.components||null),g.options.components||{},{QInput:v["v"]});var _=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"reply-component row no-wrap"},[r("div",{staticClass:"avatar"},[r("base-avatar",{attrs:{avatar:e.reply.user.avatarId}})],1),r("div",{staticClass:"reply-container column"},[r("div",{staticClass:"reply-header"},[r("div",{staticClass:"author-right"},[r("span",{staticClass:"author-name body-3 bolder"},[e._v(" "+e._s(e.reply.user.firstName+" "+e.reply.user.lastName)+" ")]),r("span",{staticClass:"date caption"},[e._v(" "+e._s(e.$store.getters.formatDate(e.reply.createdAt))+" ")])]),r("div",[e.$store.getters["users/getCurrentUser"].id===e.reply.userId?r("q-btn",{attrs:{flat:"",round:"",color:"gray",icon:"delete",size:"10px"},on:{click:function(t){return e.deleteReply()}}}):e._e()],1),r("div",{staticClass:"action-replying row"},[r("base-button",{staticClass:"reply-button",attrs:{theme:"transparent"},on:{click:function(t){e.comment=!e.comment}}},[r("span",{staticClass:"caption",staticStyle:{color:"black"}},[e._v(e._s(e.comment?"ocultar respostas":"responder ou ver respostas"))])]),r("q-rating",{attrs:{max:"1",size:"1.3em",color:"red","color-selected":"red-9",icon:"favorite_border","icon-selected":"favorite","no-dimming":""},model:{value:e.like,callback:function(t){e.like=t},expression:"like"}}),r("span",{staticClass:"caption bolder no-pointer text-black mg-left8"},[e._v(e._s(e.numberOfReplyLikes(e.reply.id)))])],1)]),r("div",{staticClass:"reply-content body-3"},[e.editing?[r("q-input",{staticClass:"mg-top8",attrs:{disabled:e.loading,label:e.reply.content,filled:"",square:"",autogrow:"",dense:""},model:{value:e.content,callback:function(t){e.content=t},expression:"content"}}),r("div",{staticClass:"action-editing"},[r("base-button",{staticClass:"cancel-button",attrs:{theme:"secondary"},on:{click:function(t){e.editing=!1}}},[r("span",{staticClass:"caption bolder"},[e._v("Cancelar")])]),r("base-button",{staticClass:"save-button",attrs:{theme:"primary",disabled:e.loading},on:{click:e.editReply}},[r("span",{staticClass:"caption bolder"},[e._v(" "+e._s(e.loading?"Salvando...":"Salvar")+" ")])])],1)]:[r("span",{staticClass:"body-2"},[e._v(e._s(e.reply.content))]),e.comment?r("rejoinders",{attrs:{rejoinders:e.rejoinders(e.reply.id),reply:e.reply}}):e._e()]],2)])])},C=[],j=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.avatar?r("q-avatar",[r("img",{attrs:{src:""+e.$store.getters["services/getImagePath"]+e.avatar}})]):r("q-avatar",{style:{"background-color":e.categoryColor}},[e._v(" "+e._s(e.$store.getters["users/getUserInitials"])+" ")])],1)},O=[],k={props:{avatar:{type:String,default:""}},computed:{categoryColor:function(){return this.$store.getters["categories/getCategoryById"](this.$store.getters["users/getCurrentUser"].categoryId).color}}},$=k,x=Object(y["a"])($,j,O,!1,null,null,null),P=x.exports;x.options.components=Object.assign(Object.create(x.options.components||null),x.options.components||{},{QAvatar:v["b"]});var w=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("q-separator"),e._l(e.rejoinders,(function(t){return r("div",{key:t.id,staticClass:"reply-component row no-wrap"},[r("div",{staticClass:"avatar"},[r("base-avatar",{attrs:{avatar:t.user.avatarId}})],1),r("div",{staticClass:"reply-container column"},[r("div",{staticClass:"reply-header"},[r("div",{staticClass:"author-right"},[r("span",{staticClass:"caption bolder"},[e._v(e._s(t.user.firstName+" "+t.user.lastName)+" ")]),r("span",{staticClass:"caption bold"},[e._v(" "+e._s(e.$store.getters.formatDate(t.createdAt))+" ")])]),r("div",{staticClass:"action-btn"},[e.$store.getters["users/getCurrentUser"].id===t.userId?r("q-btn",{attrs:{flat:"",round:"",color:"gray",icon:"delete",size:"10px"},on:{click:function(r){return e.deleteRejoinder(t)}}}):e._e()],1)]),r("span",{staticClass:"reply-content body-3"},[e._v(" "+e._s(t.content)+" ")])])])})),r("div",[r("rejoinder-form",{attrs:{reply:e.reply}})],1)],2)},q=[],I=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("q-separator"),r("div",{staticClass:"reply-form"},[r("span",{staticClass:"caption bolder"},[e._v("Deixe seu comentário")]),r("div",{staticClass:"reply-content"},[r("q-input",{ref:"input",staticClass:"text-area",attrs:{placeholder:"Escreva aqui...",errors:e.$v.content,disabled:e.loading,square:"",dense:""},model:{value:e.content,callback:function(t){e.content=t},expression:"content"}}),r("div",{staticClass:"row no-wrap mg-top8"},[r("base-button",{staticClass:"reply-button cancel-button",attrs:{theme:""!==e.content?"secondary":"disabled"},on:{click:e.cancel}},[r("span",{staticClass:"caption bolder"},[e._v(" Cancelar ")])]),r("base-button",{staticClass:"reply-button",attrs:{theme:"primary"},on:{click:e.rejoin}},[r("span",{staticClass:"caption bolder"},[e._v(" "+e._s(e.loading?"Comentando...":"Comentar")+" ")])])],1)],1)])],1)},S=[],R={components:{BaseButton:a["a"]},props:{reply:{type:Object,default:function(){return{}}}},data:function(){return{loading:!1}},validations:{content:{required:d["required"]}},computed:{content:{get:function(){return this.$store.getters["topics/replies/rejoinders/getRejoinderFormByReplyId"](this.reply.id)},set:function(e){this.$store.commit("topics/replies/rejoinders/SET_REJOINDER_FORM_BY_REPLY_ID",{replyId:this.reply.id,content:e})}}},created:function(){},methods:{rejoin:function(){var e=this;this.loading=!0,this.$v.$touch(),this.$v.$anyError||""===this.content?this.loading=!1:this.$store.dispatch("topics/replies/rejoinders/addRejoinder",{rejoinder:{replyId:this.reply.id,content:this.content},reply:this.reply,$socket:this.$socket}).then((function(){e.content="",e.$v.$reset(),e.loading=!1}))},cancel:function(){this.content=""}}},A=R,B=(r("02a3"),Object(y["a"])(A,I,S,!1,null,"2153a348",null)),M=B.exports;B.options.components=Object.assign(Object.create(B.options.components||null),B.options.components||{},{QSeparator:v["I"],QInput:v["v"]});var T={name:"Rejoinder",components:{RejoinderForm:M,BaseAvatar:P},props:{reply:{type:Object,default:function(){return{}}},rejoinders:{type:Array,default:function(){return[]}}},data:function(){return{}},computed:{},methods:{deleteRejoinder:function(e){var t=this;this.$q.notify({type:"warning",textColor:"black",position:"top-right",message:"Tem certeza que deseja excluir essa resposta?",actions:[{label:"Sim",color:"black",handler:function(){return t.$store.dispatch("topics/replies/rejoinders/deleteRejoinder",{rejoinder:e,reply:t.reply,$socket:t.$socket})}},{label:"Não",color:"black",handler:function(){}}]})}}},E=T,L=(r("7b09"),Object(y["a"])(E,w,q,!1,null,"00f87ebe",null)),z=L.exports;L.options.components=Object.assign(Object.create(L.options.components||null),L.options.components||{},{QSeparator:v["I"],QBtn:v["c"]});var D={components:{BaseAvatar:P,BaseButton:a["a"],Rejoinders:z},props:{reply:{type:Object,default:function(){return{}}}},emits:["call-reply"],data:function(){return{showConfirmDialog:!1,content:"",editing:!1,loading:!1,comment:!1,deleteAction:!1,liked:!1}},computed:Object(o["a"])(Object(o["a"])({like:{get:function(){return this.myLike(this.reply.id).length},set:function(){this.myLike(this.reply.id).length?this.$store.dispatch("topics/replies/likes/removeLike",{reply:this.reply,like:this.myLike(this.reply.id)[0],$socket:this.$socket}):this.$store.dispatch("topics/replies/likes/createLike",{reply:this.reply,$socket:this.$socket})}}},Object(i["d"])({currentUser:"users/getCurrentUser",numberOfReplyLikes:"topics/replies/likes/getNumberOfReplyLikes",myLike:"topics/replies/likes/getMyLikeCurrentTopicByReplyId",rejoinders:"topics/replies/rejoinders/getMyRejoindersCurrentTopicByReplyId"})),{},{hasBeenLiked:function(){return 0}}),methods:{deleteReply:function(){var e=this;this.$q.notify({type:"warning",textColor:"black",position:"top-right",message:"Tem certeza que deseja excluir esse comentário?",actions:[{label:"Sim",color:"black",handler:function(){return e.$store.dispatch("topics/replies/deleteReply",{reply:e.reply,$socket:e.$socket,$q:e.$q})}},{label:"Não",color:"black",handler:function(){}}]})},editReply:function(){this.loading=!0},likeReply:function(){this.myLike(this.reply.id).length?this.$store.dispatch("topics/replies/likes/removeLike",{replyId:this.reply.id}):this.$store.dispatch("topics/replies/likes/createLike",{replyId:this.reply.id})},canEditTopic:function(){var e,t,r,n;return null!==this.currentUser&&(null===(e=this.currentUser)||void 0===e||null===(t=e.user)||void 0===t?void 0:t.id)===(null===(r=this.reply)||void 0===r||null===(n=r.user)||void 0===n?void 0:n.id)}}},N=D,U=(r("1e3cc"),Object(y["a"])(N,_,C,!1,null,"351d4e1e",null)),Q=U.exports;U.options.components=Object.assign(Object.create(U.options.components||null),U.options.components||{},{QBtn:v["c"],QRating:v["F"],QInput:v["v"]});var V={components:{BaseButton:a["a"],ReplyForm:h,Reply:Q},emits:["card-click"],data:function(){return{showConfirmDialog:!1,support:null,isConnected:!1,socketMessage:"",loading:!0}},computed:Object(o["a"])(Object(o["a"])({},Object(i["d"])({topic:"topics/getCurrentTopic",supports:"topics/supports/getInfoCurrentTopicSupports",replyes:"topics/replies/getCurrentTopicReplyes",myVote:"topics/supports/getMyVoteCurrentTopic",isLoggedIn:"users/isLoggedIn",currentUser:"users/getCurrentUser"})),{},{owner:function(){return this.currentUser.id===this.topic.userId}}),mounted:function(){var e=this;this.$store.dispatch("topics/loadTopicId",{id:this.$route.params.topicId}).then((function(){e.$store.dispatch("topics/supports/loadSupportsByTopicId"),e.$store.dispatch("topics/replies/loadRepliesByTopicId"),e.$store.dispatch("topics/replies/likes/loadLikesByTopicId"),e.$store.dispatch("topics/replies/rejoinders/loadRejoindersByTopicId"),e.loading=!1}))},methods:{setTopic:function(){this.$store.commit("topics/SET_CURRENT_TOPIC",this.topic),this.$store.commit("users/SET_SELECTED_FORM","topic-editor"),this.$store.dispatch("topics/fetchStorage"),this.$router.push("/profile")},confirmSupport:function(e){this.showConfirmDialog=!0,this.support=e},computeSupport:function(){this.$store.dispatch("topics/supports/supportCurrentTopic",{supportType:this.support,$socket:this.$socket})},supportsPercentage:function(e){var t=parseInt(this.supports.positiveSupports,10),r=parseInt(this.supports.negativeSupports,10),n=parseInt(t+r,10);return n?!0===e?parseInt(t/n*100,10):parseInt(r/n*100,10):0}}},F=V,J=(r("9a7e"),Object(y["a"])(F,n,s,!1,null,"77c70c2d",null));t["default"]=J.exports;J.options.components=Object.assign(Object.create(J.options.components||null),J.options.components||{},{QInnerLoading:v["u"],QSpinner:v["J"],QItemLabel:v["x"],QIcon:v["s"],QDialog:v["m"],QCard:v["d"],QCardSection:v["f"],QCardActions:v["e"],QBtn:v["c"],QSeparator:v["I"]}),J.options.directives=Object.assign(Object.create(J.options.directives||null),J.options.directives||{},{ClosePopup:v["a"]})},f003:function(e,t,r){"use strict";r("15ab")},f26f:function(e,t,r){}}]);
//# sourceMappingURL=chunk-cc95a918.c2524e0a.js.map