(function(e){function t(t){for(var r,o,l=t[0],u=t[1],s=t[2],p=0,f=[];p<l.length;p++)o=l[p],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);c&&c(t);while(f.length)f.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,l=1;l<n.length;l++){var u=n[l];0!==a[u]&&(r=!1)}r&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={app:0},i=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var c=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Header",{on:{"value-search":e.setSearch}}),n("Main",{attrs:{"list-films":e.listFilms}})],1)},i=[],o=(n("ac1f"),n("841c"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"}],attrs:{type:"text",placeholder:"Cerca qualsiasi film"},domProps:{value:e.search},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.valueSearch.apply(null,arguments)},input:function(t){t.target.composing||(e.search=t.target.value)}}}),n("button",{attrs:{type:"button"},on:{click:e.valueSearch}},[e._v("Cerca")])])}),l=[],u={name:"Header",methods:{valueSearch:function(){this.$emit("value-search",this.search)}},data:function(){return{search:""}}},s=u,c=n("2877"),p=Object(c["a"])(s,o,l,!1,null,"4f126e90",null),f=p.exports,h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",[n("ul",e._l(e.listFilms,(function(t){var r=t.title,a=t.original_title,i=(t.original_language,t.vote_average),o=t.id;return n("li",{key:o},[e._v(" Titolo: "+e._s(r)),n("br"),e._v(" Titolo Originale:"+e._s(a)),n("br"),e._v(" Voto:"+e._s(i)),n("br")])})),0)])},d=[],v={name:"Main",props:["listFilms"]},m=v,b=Object(c["a"])(m,h,d,!1,null,"d4796338",null),y=b.exports,g=n("bc3a"),_=n.n(g),O={name:"App",data:function(){return{search:"",uriCall:"https://api.themoviedb.org/3/search/movie",listFilms:[],options:{params:{api_key:"ed02f30b87f7a4430cd020829fefad6e",query:"",language:"it-IT"}}}},computed:{},methods:{filmsCall:function(e){var t=this;this.options.params.query=e,_.a.get(this.uriCall,this.options).then((function(e){t.listFilms=e.data.results}))},setSearch:function(e){this.search=e,this.filmsCall(this.search)}},mounted:function(){},components:{Header:f,Main:y}},j=O,w=Object(c["a"])(j,a,i,!1,null,null,null),x=w.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(x)}}).$mount("#app")}});
//# sourceMappingURL=app.7361876d.js.map