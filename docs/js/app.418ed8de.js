(function(t){function e(e){for(var i,s,o=e[0],l=e[1],c=e[2],u=0,d=[];u<o.length;u++)s=o[u],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&d.push(r[s][0]),r[s]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);v&&v(e);while(d.length)d.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],i=!0,s=1;s<a.length;s++){var o=a[s];0!==r[o]&&(i=!1)}i&&(n.splice(e--,1),t=l(l.s=a[0]))}return t}var i={},s={app:0},r={app:0},n=[];function o(t){return l.p+"js/"+({about:"about"}[t]||t)+"."+{about:"1ea837cc"}[t]+".js"}function l(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(t){var e=[],a={about:1};s[t]?e.push(s[t]):0!==s[t]&&a[t]&&e.push(s[t]=new Promise((function(e,a){for(var i="css/"+({about:"about"}[t]||t)+"."+{about:"f36b92e3"}[t]+".css",r=l.p+i,n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var c=n[o],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===i||u===r))return e()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){c=d[o],u=c.getAttribute("data-href");if(u===i||u===r)return e()}var v=document.createElement("link");v.rel="stylesheet",v.type="text/css",v.onload=e,v.onerror=function(e){var i=e&&e.target&&e.target.src||r,n=new Error("Loading CSS chunk "+t+" failed.\n("+i+")");n.code="CSS_CHUNK_LOAD_FAILED",n.request=i,delete s[t],v.parentNode.removeChild(v),a(n)},v.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(v)})).then((function(){s[t]=0})));var i=r[t];if(0!==i)if(i)e.push(i[2]);else{var n=new Promise((function(e,a){i=r[t]=[e,a]}));e.push(i[2]=n);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=o(t);var d=new Error;c=function(e){u.onerror=u.onload=null,clearTimeout(v);var a=r[t];if(0!==a){if(a){var i=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+i+": "+s+")",d.name="ChunkLoadError",d.type=i,d.request=s,a[1](d)}r[t]=void 0}};var v=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(e)},l.m=t,l.c=i,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)l.d(a,i,function(e){return t[e]}.bind(null,i));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/vuetify-instagram/",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var v=u;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"21bb":function(t,e,a){"use strict";a("2dad")},"2dad":function(t,e,a){},"4d12":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-navigation-drawer",{attrs:{app:"",width:"640",permanent:""}},[a("Navigation",{attrs:{navItem:t.navItem}}),a("Profile",{attrs:{userItem:t.userItem}})],1),a("v-app-bar",{attrs:{app:"",flat:"",height:"80",color:"white"}},[a("v-layout",{staticClass:"mx-6",attrs:{"align-center":""}},[a("v-text-field",{attrs:{flat:"","solo-inverted":"",filled:"","prepend-inner-icon":"mdi-magnify",rounded:"",dense:"","hide-details":"",label:"Search..."},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.searchPhoto(e)}},model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}}),a("v-spacer"),a("v-spacer"),a("v-spacer"),a("v-btn",{attrs:{icon:"",color:"success"}},[a("v-badge",{attrs:{bordered:"",overlap:"",dot:"",left:"",color:"error"}},[a("v-icon",[t._v("mdi-bell")])],1)],1),a("v-menu",{attrs:{"offset-y":"","open-on-hover":""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,s=e.attrs;return[a("v-btn",t._g(t._b({attrs:{icon:"",color:"success"}},"v-btn",s,!1),i),[a("v-icon",[t._v("mdi-menu")])],1)]}}])},[a("v-list",t._l(t.navItem.items,(function(e,i){return a("v-list-item",{key:i},[a("v-list-item-title",[t._v(t._s(e.title))])],1)})),1)],1)],1)],1),a("v-main",[a("v-divider"),a("router-view")],1)],1)},r=[],n=(a("ac1f"),a("841c"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"nav"},[a("v-navigation-drawer",{staticClass:"px-7",attrs:{fixed:"",permanent:"",width:"320"}},[a("v-list",{staticClass:"mt-1"},[a("v-list-item",{staticClass:"d-flex align-center"},[a("v-list-item-icon",[a("v-icon",{attrs:{small:""}},[t._v("mdi-instagram")])],1),a("v-card",{attrs:{width:"110",flat:"",link:""}},[a("v-img",{attrs:{src:t.navItem.logo}})],1)],1)],1),a("v-card",{staticClass:"mt-16 pt-8",attrs:{flat:""}},[a("div",{staticClass:"d-flex justify-center",attrs:{color:"primary"}},[a("v-avatar",{staticClass:"avatar",attrs:{size:"80"}},[a("v-img",{attrs:{src:t.navItem.avatar}})],1)],1),a("v-card-title",{staticClass:"justify-center"},[a("div",{staticClass:"text-center "},[a("p",{staticClass:"subtitle-2 mb-0"},[t._v("Lady Gaga")]),a("p",{staticClass:"caption grey--text"},[t._v("New York, USA")])])])],1),a("v-divider",{staticClass:"ma-4"}),a("v-container",{staticClass:"d-flex flex-row justify-space-between text-center"},[a("v-flex",[a("div",{staticClass:"subtitle-2"},[t._v("784")]),a("div",{staticClass:"caption grey--text"},[t._v("POSTS")])]),a("v-flex",[a("div",{staticClass:"subtitle-2"},[t._v("784")]),a("div",{staticClass:"caption grey--text"},[t._v("POSTS")])]),a("v-flex",[a("div",{staticClass:"subtitle-2"},[t._v("784")]),a("div",{staticClass:"caption grey--text"},[t._v("POSTS")])])],1),a("v-divider",{staticClass:"ma-4"}),a("v-list",{attrs:{dense:"",nav:""}},t._l(t.navItem.items,(function(e){return a("v-list-group",{key:e.title,attrs:{"prepend-icon":e.action,"no-action":""},scopedSlots:t._u([{key:"activator",fn:function(){return[a("v-list-item-content",[a("v-list-item-title",{domProps:{textContent:t._s(e.title)}})],1)]},proxy:!0}],null,!0),model:{value:e.active,callback:function(a){t.$set(e,"active",a)},expression:"item.active"}},t._l(e.items,(function(e){return a("v-list-item",{key:e.title},[a("v-list-item-content",[a("v-list-item-title",{domProps:{textContent:t._s(e.title)}})],1)],1)})),1)})),1),a("v-container",{staticClass:"d-flex justify-space-between"},[a("v-btn",{attrs:{color:"grey lighten-4 grey--text text--lighten-1",height:"60",width:"100",depressed:""}},[a("v-icon",[t._v("mdi-cog")])],1),a("v-btn",{attrs:{color:"grey lighten-4 grey--text text--lighten-1",height:"60",width:"100",depressed:""}},[a("v-icon",[t._v("mdi-account-multiple")])],1)],1)],1)],1)}),o=[],l={props:["navItem"]},c=l,u=(a("a4e1"),a("2877")),d=a("6544"),v=a.n(d),p=a("8212"),m=a("8336"),f=a("b0af"),h=a("99d9"),g=a("a523"),b=a("ce7e"),y=a("0e8f"),w=a("132d"),x=a("adda"),C=a("8860"),_=a("56b0"),V=a("da13"),k=a("5d23"),P=a("34c3"),I=a("f774"),S=Object(u["a"])(c,n,o,!1,null,null,null),j=S.exports;v()(S,{VAvatar:p["a"],VBtn:m["a"],VCard:f["a"],VCardTitle:h["a"],VContainer:g["a"],VDivider:b["a"],VFlex:y["a"],VIcon:w["a"],VImg:x["a"],VList:C["a"],VListGroup:_["a"],VListItem:V["a"],VListItemContent:k["a"],VListItemIcon:P["a"],VListItemTitle:k["b"],VNavigationDrawer:I["a"]});var L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-sheet",{staticClass:"px-10",staticStyle:{"margin-left":"320px"},attrs:{width:"320"}},[a("v-list",[a("v-list-item-icon",[a("v-icon",{staticClass:"mr-3",attrs:{small:""}},[t._v("mdi-arrow-left")]),a("span",{staticClass:"subtitle-2"},[t._v("back to people")])],1)],1),a("v-list",{staticClass:"mt-5"},[a("v-list-item-content",[a("v-img",{staticClass:"rounded-lg mb-5",attrs:{src:t.userItem.user,height:"290"}}),a("v-list-item-title",{staticClass:"title align-center"},[a("span",[t._v("Karry Woodson")]),a("v-btn",{attrs:{icon:"",color:"red"}},[a("v-icon",[t._v("mdi-check-decagram")])],1)],1),a("div",{staticClass:"d-flex caption font-weight-bold mb-5"},[a("div",{staticClass:"mr-5"},[t._v("899 photos")]),a("div",[t._v("16k followers")])]),a("div",{staticClass:"sub_text"},[t._v(" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet illo unde neque quod repellat nihil id, dolores vero reprehenderit molestias dolor? Incidunt ")])],1),a("v-list-item-content",[a("v-list-item-title",{staticClass:"font-weight-bold"},[t._v("Favorite Tags ")]),a("div",{staticClass:"sub_text"},[t._v(" Lorem, ipsum, dolor, sit, amet, consectetur, adipisicing, elit, sit, amet ")])],1),a("v-list-item-content",[a("v-list-item-title",{staticClass:"font-weight-bold"},[t._v("Activity")]),a("div",{staticClass:"sub_text"},[t._v(" Professional Photographer ")])],1),a("v-list-item-content",[a("v-list-item-title",{staticClass:"font-weight-bold"},[t._v("Location")]),a("div",{staticClass:"sub_text"},[t._v("Paris, France")])],1),a("v-list-item-content",[a("v-list-item-title",{staticClass:"font-weight-bold"},[t._v("Favorite Profiles")]),a("div",{staticClass:"fa_user"},t._l(t.userItem.friends,(function(t,e){return a("div",{key:e},[a("v-img",{attrs:{src:t.urls.thumb}})],1)})),0)],1)],1)],1)},T=[],O={props:["userItem"]},B=O,A=a("8dd9"),F=Object(u["a"])(B,L,T,!1,null,null,null),E=F.exports;v()(F,{VBtn:m["a"],VIcon:w["a"],VImg:x["a"],VList:C["a"],VListItemContent:k["a"],VListItemIcon:P["a"],VListItemTitle:k["b"],VSheet:A["a"]});var M={components:{Navigation:j,Profile:E},data:function(){return{keyword:"",navItem:{logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png",avatar:"https://images.unsplash.com/photo-1578910985276-6cd1a7bc6dd4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=637&q=80",items:[{action:"mdi-home",title:"Feed"},{action:"mdi-magnify",active:!0,items:[{title:"Tranding Tags"},{title:"Top Posts"},{title:"People"}],title:"Explore"},{action:"mdi-bell",title:"Notification"},{action:"mdi-camera",title:"Direct"},{action:"mdi-chart-arc",title:"Stats"}]},userItem:{user:"https://images.unsplash.com/photo-1578774296842-c45e472b3028?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=621&q=80",friends:[]},photos:[]}},created:function(){this.getFriends("woman")},methods:{getFriends:function(t){var e=this;this.$unsplash.search.getPhotos({query:t,orientation:"portrait",page:1,perPage:5}).then((function(t){e.userItem.friends=t.response.results,console.log(e.userItem.friends)})).catch((function(){console.log("something went wrong!")}))},searchPhoto:function(){this.$eventBus.$emit("getPhoto",this.keyword),this.keyword=""}}},$=M,D=(a("5c0b"),a("7496")),N=a("40dc"),q=a("4ca6"),H=a("a722"),z=a("f6c4"),G=a("e449"),W=a("2fa4"),X=a("8654"),K=Object(u["a"])($,s,r,!1,null,null,null),Y=K.exports;v()(K,{VApp:D["a"],VAppBar:N["a"],VBadge:q["a"],VBtn:m["a"],VDivider:b["a"],VIcon:w["a"],VLayout:H["a"],VList:C["a"],VListItem:V["a"],VListItemTitle:k["b"],VMain:z["a"],VMenu:G["a"],VNavigationDrawer:I["a"],VSpacer:W["a"],VTextField:X["a"]});a("d3b7");var J=a("8c4f"),U=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"pa-10"},[a("div",{staticClass:"gallery mb-16 pb-16"},[a("div",{staticClass:"title mb-10 px-3"},[a("h3",[t._v(" Featured Stories "),t.chip?a("v-chip",{staticClass:"ma-2",attrs:{color:"green","text-color":"white",small:""},model:{value:t.chip,callback:function(e){t.chip=e},expression:"chip"}},[a("span",{staticClass:"caption"},[t._v(t._s(t.chip))])]):t._e()],1),a("v-select",{staticClass:"select",attrs:{items:t.items,label:"All Time",dense:"","hide-details":"","solo-inverted":"",rounded:"",filled:"",flat:""}})],1),a("v-row",t._l(t.featured,(function(e){return a("v-col",{key:e.id,staticClass:"d-flex child-flex",attrs:{xl:"2",lg:"3",sm:"4"}},[a("v-img",{staticClass:"grey lighten-2",attrs:{src:e.urls.thumb,"lazy-src":e.urls.thumb,"aspect-ratio":1/1.5},scopedSlots:t._u([{key:"placeholder",fn:function(){return[a("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[a("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}],null,!0)})],1)})),1)],1),a("div",{staticClass:"gallery"},[a("div",{staticClass:"title mb-10 px-3"},[a("h3",[t._v("Photo Feed")]),a("v-select",{staticClass:"select",attrs:{items:t.items,label:"For 2020",dense:"","hide-details":"","solo-inverted":"",rounded:"",filled:"",flat:""}})],1),a("v-row",t._l(t.photos,(function(e){return a("v-col",{key:e.id,staticClass:"d-flex child-flex",attrs:{xl:"3",lg:"4",sm:"6"}},[a("v-img",{staticClass:"grey lighten-2",attrs:{src:e.urls.thumb,"lazy-src":e.urls.thumb,"aspect-ratio":1},scopedSlots:t._u([{key:"placeholder",fn:function(){return[a("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[a("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}],null,!0)})],1)})),1)],1)])},R=[],Q={data:function(){return{items:["Foo","Bar","Fizz","Buzz"],featured:[],photos:[],chip:"aaa"}},created:function(){var t=this;this.getFeatured("chair"),this.getPhotos("interior"),this.$eventBus.$on("getPhoto",(function(e){t.getFeatured(e)}))},methods:{getFeatured:function(t){var e=this;this.$unsplash.search.getPhotos({query:t,orientation:"portrait",page:1,perPage:6}).then((function(a){e.featured=a.response.results,e.chip=t})).catch((function(){console.log("something went wrong!")}))},getPhotos:function(t){var e=this;this.$unsplash.search.getPhotos({query:t,orientation:"portrait",page:1,perPage:12}).then((function(t){e.photos=t.response.results})).catch((function(){console.log("something went wrong!")}))}}},Z=Q,tt=(a("21bb"),a("cc20")),et=a("62ad"),at=a("490a"),it=a("0fd9"),st=a("b974"),rt=Object(u["a"])(Z,U,R,!1,null,null,null),nt=rt.exports;v()(rt,{VChip:tt["a"],VCol:et["a"],VContainer:g["a"],VImg:x["a"],VProgressCircular:at["a"],VRow:it["a"],VSelect:st["a"]}),i["a"].use(J["a"]);var ot=[{path:"/",name:"Home",component:nt},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],lt=new J["a"]({mode:"history",base:"/vuetify-instagram/",routes:ot}),ct=lt,ut=a("2f62");i["a"].use(ut["a"]);var dt=new ut["a"].Store({state:{},mutations:{},actions:{},modules:{}}),vt=a("f309");i["a"].use(vt["a"]);var pt=new vt["a"]({}),mt=a("bc3a"),ft=a.n(mt),ht=a("ba1d");i["a"].config.productionTip=!1;var gt=new ht["a"]({accessKey:"e6MD8Gpf5agAWPP4BsapuMe7Htj7sOSXMluIMTbuAXo"});i["a"].prototype.$unsplash=gt,i["a"].prototype.$axios=ft.a,i["a"].prototype.$eventBus=new i["a"],new i["a"]({router:ct,store:dt,vuetify:pt,render:function(t){return t(Y)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";a("9c0c")},"9c0c":function(t,e,a){},a4e1:function(t,e,a){"use strict";a("4d12")}});
//# sourceMappingURL=app.418ed8de.js.map