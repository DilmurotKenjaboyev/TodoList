(function(){"use strict";var a={1950:function(a,t,n){var e=n(9242),r=n(3396);const i={class:"container"};function l(a,t,n,l,d,s){const o=(0,r.up)("Nav"),c=(0,r.up)("Grid"),g=(0,r.up)("Card"),u=(0,r.up)("Modal"),h=(0,r.up)("AddBtn");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(o,{lang:d.lang,langWord:d.langWord,onChange:t[0]||(t[0]=a=>d.lang=a),search:d.search,onChangeNav:t[1]||(t[1]=a=>d.search=a),onSearchVal:t[2]||(t[2]=a=>d.searchInput=a)},null,8,["lang","langWord","search"]),(0,r._)("div",i,[(0,r.Wm)(c,{grid:d.grid,onChangeGrid:t[3]||(t[3]=a=>d.grid=a),lang:d.lang,langWord:d.langWord,cards:d.cards},null,8,["grid","lang","langWord","cards"]),(0,r.Wm)(g,{grid:d.grid,cards:s.cardFilter,onChangeCard:s.changeCard,search:d.search,lang:d.lang,langWord:d.langWord},null,8,["grid","cards","onChangeCard","search","lang","langWord"])]),(0,r.Wm)(e.uT,{name:"modal"},{default:(0,r.w5)((()=>[d.modal?((0,r.wg)(),(0,r.j4)(u,{key:0,onChangeModal:t[4]||(t[4]=a=>d.modal=a),onAddCard:s.addCard,add:d.add,saveChange:d.saveChange,onSaveCard:s.saveCard,lang:d.lang,langWord:d.langWord},null,8,["onAddCard","add","saveChange","onSaveCard","lang","langWord"])):(0,r.kq)("",!0)])),_:1}),d.modal?(0,r.kq)("",!0):(0,r.wy)(((0,r.wg)(),(0,r.j4)(h,{key:0,onChangeModal:t[5]||(t[5]=a=>d.modal=a)},null,512)),[[e.F8,!d.search]])],64)}n(7658);var d=n(7139);const s={class:"modal"},o={class:"modal__card"},c={key:0,class:"modal__title"},g={key:1,class:"modal__title"},u={class:"card__btn"};function h(a,t,n,i,l,h){return(0,r.wg)(),(0,r.iD)("div",s,[(0,r._)("div",o,[n.add?((0,r.wg)(),(0,r.iD)("h2",c,(0,d.zw)(n.langWord.titlewindow[n.lang]),1)):((0,r.wg)(),(0,r.iD)("h2",g,(0,d.zw)(n.langWord.titlewindowedit[n.lang]),1)),(0,r._)("label",null,[(0,r.Uk)(" Title "),(0,r.wy)((0,r._)("input",{type:"text",placeholder:"Title","onUpdate:modelValue":t[0]||(t[0]=a=>l.title=a)},null,512),[[e.nr,l.title]])]),(0,r._)("label",null,[(0,r.Uk)(" Content "),(0,r.wy)((0,r._)("input",{type:"text",placeholder:"Content","onUpdate:modelValue":t[1]||(t[1]=a=>l.text=a)},null,512),[[e.nr,l.text]])]),(0,r._)("div",u,[(0,r._)("button",{class:"card__btn-delete",onClick:t[2]||(t[2]=t=>a.$emit("changeModal",!1))},(0,d.zw)(n.langWord.closebtn[n.lang]),1),n.add?((0,r.wg)(),(0,r.iD)("button",{key:0,class:"card__btn-edit",onClick:t[3]||(t[3]=(...a)=>h.addCard&&h.addCard(...a))},(0,d.zw)(n.langWord.addbtn[n.lang]),1)):((0,r.wg)(),(0,r.iD)("button",{key:1,class:"card__btn-edit",onClick:t[4]||(t[4]=(...a)=>h.saveCard&&h.saveCard(...a))},(0,d.zw)(n.langWord.editwindowbtn[n.lang]),1))])])])}var m={props:{add:Boolean,saveChange:Object,lang:String,langWord:Object},data(){return{title:"",text:""}},methods:{addCard(){""!=this.title&&""!=this.text&&(this.$emit("addCard",{title:this.title,text:this.text,date:(new Date).toLocaleDateString()}),this.title="",this.text="")},saveCard(){""!=this.title&&""!=this.text&&(this.$emit("saveCard",{id:this.saveChange.id,title:this.title,text:this.text,date:(new Date).toLocaleDateString()}),this.title="",this.text="")}},mounted(){this.add||(this.title=this.saveChange.title,this.text=this.saveChange.text)}},v=n(89);const _=(0,v.Z)(m,[["render",h]]);var p=_,w=n.p+"img/Uzbekistan-flag.de497f87.webp",b=n.p+"img/russia.a6b287d7.png",f=n.p+"img/search.2c9e71ed.svg",C=n.p+"img/back.a1821e6b.svg",k=n.p+"img/clear.e9281049.svg";const y={key:0,class:"nav"},W=(0,r._)("img",{src:w,alt:""},null,-1),z=(0,r._)("img",{src:b,alt:""},null,-1),x={class:"container"},D={class:"nav__title"},O=(0,r._)("img",{src:f,alt:""},null,-1),S=[O],j={key:1,class:"nav"},U=(0,r._)("img",{src:C,alt:""},null,-1),I=[U],V={class:"container"},$=["placeholder"],L=(0,r._)("img",{src:k,alt:""},null,-1),B=[L];function N(a,t,n,i,l,s){return(0,r.wg)(),(0,r.j4)(e.uT,{name:"nav",mode:"out-in"},{default:(0,r.w5)((()=>[n.search?((0,r.wg)(),(0,r.iD)("nav",j,[(0,r._)("button",{onClick:t[3]||(t[3]=(...a)=>s.back&&s.back(...a))},I),(0,r._)("div",V,[(0,r.wy)((0,r._)("input",{type:"text",class:"nav__input",placeholder:n.langWord.appbarseacrch[n.lang],"onUpdate:modelValue":t[4]||(t[4]=a=>l.searchVal=a)},null,8,$),[[e.nr,l.searchVal]])]),(0,r._)("button",{onClick:t[5]||(t[5]=a=>l.searchVal="")},B)])):((0,r.wg)(),(0,r.iD)("nav",y,[(0,r.Wm)(e.uT,{name:"nav",mode:"out-in"},{default:(0,r.w5)((()=>["ru"==n.lang?((0,r.wg)(),(0,r.iD)("button",{key:0,class:"nav__lang",onClick:t[0]||(t[0]=(...a)=>s.changeLang&&s.changeLang(...a))},[(0,r.Uk)(" Uz "),W])):((0,r.wg)(),(0,r.iD)("button",{key:1,class:"nav__lang",onClick:t[1]||(t[1]=(...a)=>s.changeLang&&s.changeLang(...a))},[(0,r.Uk)(" Ru "),z]))])),_:1}),(0,r._)("div",x,[(0,r._)("h2",D,(0,d.zw)(n.langWord.appbartitle[n.lang]),1)]),(0,r._)("button",{class:"nav__search",onClick:t[2]||(t[2]=t=>a.$emit("changeNav",!0))},S)]))])),_:1})}var T={data(){return{searchVal:""}},props:{lang:String,langWord:Object,search:Boolean},methods:{changeLang(){this.$emit("change","uz"==this.lang?"ru":"uz")},back(){this.$emit("changeNav",!1),this.searchVal=""}},watch:{searchVal(a){this.$emit("searchVal",a)}}};const E=(0,v.Z)(T,[["render",N]]);var A=E,M=n.p+"img/grid.dbae4039.svg",Z=n.p+"img/list.4ed3d4be.svg";const F={class:"grid"},G={key:0,class:"grid__title"},q={key:1,class:"grid__title"},J=(0,r._)("img",{src:M,alt:""},null,-1),R=(0,r._)("img",{src:Z,alt:""},null,-1);function H(a,t,n,i,l,s){return(0,r.wg)(),(0,r.iD)("div",F,[n.cards.length>0?((0,r.wg)(),(0,r.iD)("h2",G,(0,d.zw)(n.langWord.infobar[n.lang]),1)):((0,r.wg)(),(0,r.iD)("h2",q,(0,d.zw)(n.langWord.nonote[n.lang]),1)),n.grid?(0,r.wy)(((0,r.wg)(),(0,r.iD)("button",{key:3,class:"grid__btn",onClick:t[1]||(t[1]=t=>a.$emit("changeGrid",!n.grid))},[R,(0,r.Uk)(" "+(0,d.zw)(n.langWord.list[n.lang]),1)],512)),[[e.F8,n.cards.length>0]]):(0,r.wy)(((0,r.wg)(),(0,r.iD)("button",{key:2,class:"grid__btn",onClick:t[0]||(t[0]=t=>a.$emit("changeGrid",!n.grid))},[J,(0,r.Uk)(" "+(0,d.zw)(n.langWord.grid[n.lang]),1)],512)),[[e.F8,n.cards.length>0]])])}var Q={props:{grid:Boolean,lang:String,langWord:Object,cards:Array}};const P=(0,v.Z)(Q,[["render",H]]);var Y=P,K=n.p+"img/change.092f5b23.svg",X=n.p+"img/delete.f04c87ff.svg";const aa={class:"card__title"},ta={class:"card__time"},na={class:"card__text"},ea={key:0,class:"card__btn"},ra=["onClick"],ia=(0,r._)("img",{src:K,alt:""},null,-1),la=["onClick"],da=(0,r._)("img",{src:X,alt:""},null,-1);function sa(a,t,n,e,i,l){return(0,r.wg)(),(0,r.iD)("div",{class:(0,d.C_)({grid__box:n.grid,list__box:!n.grid})},[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(n.cards,((t,e)=>((0,r.wg)(),(0,r.iD)("div",{class:"card",key:e},[(0,r._)("h2",aa,(0,d.zw)(t.title),1),(0,r._)("p",ta,(0,d.zw)(t.date),1),(0,r._)("p",na,(0,d.zw)(t.text),1),n.search?(0,r.kq)("",!0):((0,r.wg)(),(0,r.iD)("div",ea,[(0,r._)("button",{class:"card__btn-edit",onClick:n=>a.$emit("changeCard",t.id)},[ia,(0,r.Uk)(" "+(0,d.zw)(n.langWord.editbtn[n.lang]),1)],8,ra),(0,r._)("button",{class:"card__btn-delete",onClick:a=>l.delCard(t.id)},[da,(0,r.Uk)(" "+(0,d.zw)(n.langWord.deledit[n.lang]),1)],8,la)]))])))),128))],2)}var oa={props:{grid:Boolean,cards:Array,search:Boolean,lang:String,langWord:Object},methods:{delCard(a){this.cards.forEach(((t,n)=>{t.id==a&&this.cards.splice(n,1)}))}}};const ca=(0,v.Z)(oa,[["render",sa]]);var ga=ca,ua=n.p+"img/add.092f5b23.svg";const ha=(0,r._)("img",{src:ua,alt:""},null,-1),ma=[ha];function va(a,t,n,e,i,l){return(0,r.wg)(),(0,r.iD)("button",{class:"app__btn",onClick:t[0]||(t[0]=t=>a.$emit("changeModal",!0))},ma)}var _a={};const pa=(0,v.Z)(_a,[["render",va]]);var wa=pa;const ba={appbartitle:{ru:"Заметки",uz:"Eslatmalar"},appbarseacrch:{ru:"Поиск...",uz:"Qidirish..."},infobar:{ru:"Все заметки",uz:"Barcha eslatmalar"},infobarsearch:{ru:"Поиск",uz:"Qidirish"},list:{ru:"Список",uz:"Roʻyxat"},grid:{ru:"Сетка",uz:"Jadval"},titlewindow:{ru:"Добавить заметку",uz:"Eslatma qo’shish"},titlewindowedit:{ru:"Изменить заметку",uz:"Elsatmani tahrirlash"},editbtn:{ru:"РЕДАКТИРОВАТЬ",uz:"O`ZGARTIRISH"},deledit:{ru:"Удалить",uz:"o'chirish"},closebtn:{ru:"Отмена",uz:"Bekor qilish"},addbtn:{ru:"Добавить",uz:"Qo’shish"},editwindowbtn:{ru:"изменить",uz:"o'zgartirish"},nonote:{ru:"Заметок нет",uz:"Eslatmalar mavjud emas"}};var fa=ba,Ca={components:{Modal:p,Nav:A,Grid:Y,Card:ga,AddBtn:wa},data(){return{lang:"uz",search:!1,grid:!0,modal:!1,cards:[],id:1,add:!0,saveChange:{},searchInput:"",langWord:{}}},methods:{addCard(a){a.id=this.id++,this.cards.push(a),this.modal=!1},changeCard(a){this.cards.forEach((t=>{t.id==a&&(this.modal=!0,this.add=!1,this.saveChange={id:t.id,title:t.title,text:t.text})}))},saveCard(a){this.cards.forEach((t=>{a.id==t.id&&(t.title=a.title,t.text=a.text,t.time=a.time,this.modal=!1,this.add=!0)}))}},computed:{cardFilter(){if(!this.search)return this.cards;let a=this.searchInput.trim().toLowerCase(),t=this.cards.filter((t=>{if(-1!=t.title.toLowerCase().indexOf(a))return t}));return t}},created(){this.langWord=fa;let a=localStorage.getItem("id"),t=localStorage.getItem("cards"),n=localStorage.getItem("lang");a&&(this.id=JSON.parse(a)),t&&(this.cards=JSON.parse(t)),n&&(this.lang=n)},watch:{id(){localStorage.setItem("id",JSON.stringify(this.id))},lang(){localStorage.setItem("lang",this.lang)},cards:{handler(a){localStorage.setItem("cards",JSON.stringify(a))},deep:!0}}};const ka=(0,v.Z)(Ca,[["render",l]]);var ya=ka;(0,e.ri)(ya).mount("#app")}},t={};function n(e){var r=t[e];if(void 0!==r)return r.exports;var i=t[e]={exports:{}};return a[e](i,i.exports,n),i.exports}n.m=a,function(){var a=[];n.O=function(t,e,r,i){if(!e){var l=1/0;for(c=0;c<a.length;c++){e=a[c][0],r=a[c][1],i=a[c][2];for(var d=!0,s=0;s<e.length;s++)(!1&i||l>=i)&&Object.keys(n.O).every((function(a){return n.O[a](e[s])}))?e.splice(s--,1):(d=!1,i<l&&(l=i));if(d){a.splice(c--,1);var o=r();void 0!==o&&(t=o)}}return t}i=i||0;for(var c=a.length;c>0&&a[c-1][2]>i;c--)a[c]=a[c-1];a[c]=[e,r,i]}}(),function(){n.n=function(a){var t=a&&a.__esModule?function(){return a["default"]}:function(){return a};return n.d(t,{a:t}),t}}(),function(){n.d=function(a,t){for(var e in t)n.o(t,e)&&!n.o(a,e)&&Object.defineProperty(a,e,{enumerable:!0,get:t[e]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(a){if("object"===typeof window)return window}}()}(),function(){n.o=function(a,t){return Object.prototype.hasOwnProperty.call(a,t)}}(),function(){n.p="/TodoList/"}(),function(){var a={143:0};n.O.j=function(t){return 0===a[t]};var t=function(t,e){var r,i,l=e[0],d=e[1],s=e[2],o=0;if(l.some((function(t){return 0!==a[t]}))){for(r in d)n.o(d,r)&&(n.m[r]=d[r]);if(s)var c=s(n)}for(t&&t(e);o<l.length;o++)i=l[o],n.o(a,i)&&a[i]&&a[i][0](),a[i]=0;return n.O(c)},e=self["webpackChunktodolist"]=self["webpackChunktodolist"]||[];e.forEach(t.bind(null,0)),e.push=t.bind(null,e.push.bind(e))}();var e=n.O(void 0,[998],(function(){return n(1950)}));e=n.O(e)})();
//# sourceMappingURL=app.f20285b4.js.map