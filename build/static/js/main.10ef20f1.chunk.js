(this["webpackJsonpgraphql-component"]=this["webpackJsonpgraphql-component"]||[]).push([[0],{129:function(e,t,a){},157:function(e,t,a){e.exports=a.p+"static/media/bitquery_logo.b137d64f.png"},204:function(e,t,a){e.exports=a(325)},209:function(e,t,a){},325:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(37),c=a.n(s),u=(a(209),a(129),a(7)),l=a.n(u),o=a(22),i=a(82),p=a(202),m=a(200),b=a(24),f=a(13),d=a(68),v=a(44),g=a(8),h=new function e(){var t=this;Object(v.a)(this,e),this.registerIsOpen=!1,this.loginIsOpen=!1,this.saveQueryIsOpen=!1,this.shareQueryIsOpen=!1,this.closeHandler=function(){t.toggleRegister(),t.resetLoginIsOpen()},this.resetLoginIsOpen=function(){t.loginIsOpen=!1},this.toggleLogin=function(e){e&&e.preventDefault(),t.loginIsOpen=!t.loginIsOpen},this.toggleRegister=function(){t.registerIsOpen=!t.registerIsOpen},this.toggleSaveQuery=function(){t.saveQueryIsOpen=!t.saveQueryIsOpen},this.toggleShareQuery=function(){t.shareQueryIsOpen=!t.shareQueryIsOpen},Object(g.f)(this,{registerIsOpen:g.g,saveQueryIsOpen:g.g,shareQueryIsOpen:g.g,loginIsOpen:g.g,closeHandler:g.b,resetLoginIsOpen:g.b,toggleLogin:g.b,toggleRegister:g.b,toggleSaveQuery:g.b,toggleShareQuery:g.b})},y=a(59),E=a(25),O=a.n(E);O.a.defaults.withCredentials=!0,O.a.defaults.credentials="include";var _=function(e,t){return O.a.post("/api/signup",{email:e,password:t})},j=function(e,t){return O.a.post("/api/login",{email:e,password:t})},q=function(e){return O.a.get("/api/getquery/".concat(e))},w=function(){function e(){var t=this;Object(v.a)(this,e),this.currentVariables="",this.showGallery=!0,this.queryJustSaved=!1,this.currentQuery={query:"",variables:"{}",id:null},this.query=[{query:"",variables:"{}",id:null}],this.setQuery=function(e,a){t.query.push({id:a||null}),e.query&&(t.query[t.query.length-1].query=e.query),e.url&&(t.query[t.query.length-1].url=e.url),t.query[t.query.length-1].variables=e.variables?e.variables:"{}"},this.updateQuery=function(e,a,r){e.query&&(t.query[a].query=e.query),e.variables&&(t.query[a].variables=e.variables),e.url&&(t.query[a].url=e.url),t.query[a].id=r||null},this.removeQuery=function(e){1!==t.query.length?t.query.splice(e,1):t.query.splice(e,1,{query:"{}",id:null})},this.toggleGallery=function(){t.showGallery=!t.showGallery},this.setCurrentQuery=function(e,a){e.query&&(t.currentQuery.query=e.query),e.variables&&(t.currentQuery.variables=e.variables),t.currentQuery.id=a||null},this.setCurrentVariables=function(e){t.currentVariables=e},this.saveQuery=function(){var e=Object(o.a)(l.a.mark((function e(a){var r,n,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.post("/api/addquery",{params:a});case 3:return r=e.sent,n=r.data,s=x.tabs.map((function(e){return e.id})).indexOf(x.currentTab),t.updateQuery(a,s,n.id),t.setCurrentQuery(a,n.id),console.log(n),t.queryJustSaved=!t.queryJustSaved,e.abrupt("return",n);case 13:return e.prev=13,e.t0=e.catch(0),console.log(e.t0.response),e.abrupt("return",e.t0.response);case 17:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}(),this.logQuery=function(){var e=Object(o.a)(l.a.mark((function e(t){var a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.post("/api/addquerylog",{params:t});case 3:a=e.sent,r=a.data,console.log(r),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),Object(g.f)(this,{currentVariables:g.g,queryJustSaved:g.g,currentQuery:g.g,showGallery:g.g,query:g.g,queryParams:g.c,setCurrentVariables:g.b,setCurrentQuery:g.b,toggleGallery:g.b,updateQuery:g.b,removeQuery:g.b,saveQuery:g.b,setQuery:g.b})}return Object(y.a)(e,[{key:"queryParams",get:function(){return{id:this.currentQuery.id,account_id:N.user&&N.user.id||null,query:this.currentQuery.query,arguments:this.currentQuery.variables}}}]),e}(),x=new function e(){var t=this;Object(v.a)(this,e),this.id=0,this.tabs=[{name:"New Tab",id:this.id}],this.currentTab=0,this.incID=function(){t.id=t.id+1},this.switchTab=function(e){t.currentTab=e;var a=t.tabs.map((function(e){return e.id})).indexOf(t.currentTab),r=k.query[a]&&k.query[a].query,n=k.query[a]&&k.query[a].variables,s=k.query[a]&&k.query[a].id,c={query:r||"{}",variables:n||"{}"};k.setCurrentQuery(c,s||null)},this.renameCurrentTab=function(e){var a=t.tabs.map((function(e){return e.id})).indexOf(t.currentTab);t.tabs[a].name=e},this.addNewTab=function(e){t.incID(),t.tabs.push({name:e,id:t.id}),t.switchTab(t.id)},this.removeTab=function(e,a){a.stopPropagation(),t.tabs.splice(e,1),0===t.tabs.length?t.addNewTab("New Tab"):t.switchTab(t.tabs[t.tabs.length-1].id)},Object(g.f)(this,{tabs:g.g,id:g.g,currentTab:g.g,switchTab:g.b,incID:g.b,removeTab:g.b,addNewTab:g.b,renameCurrentTab:g.b})},N=new function e(){var t=this;Object(v.a)(this,e),this.user=null,this.setUser=function(e){t.user=e},this.getUser=Object(o.a)(l.a.mark((function e(){var a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.get("/api/user");case 3:a=e.sent,r=a.data,t.setUser(r.user[0]),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.response.data);case 11:case"end":return e.stop()}}),e,null,[[0,8]])}))),Object(g.f)(this,{user:g.g,getUser:g.b,setUser:g.b})},k=new w,C=a(63),Q=a.n(C),T=a(28),S=a(120),I=a(326),P=a(47),D=Object(P.a)((function(){var e=h.toggleSaveQuery,t=h.toggleShareQuery,s=x.tabs,c=x.currentTab,u=N.user,v=k.toggleGallery,g=k.setCurrentQuery,y=k.query,E=k.updateQuery,O=k.queryParams,_=k.logQuery,j=Object(T.useToasts)().addToast,q=Object(r.useRef)(null),w=Object(r.useState)(Object(b.a)({},c,"https://graphql.bitquery.io")),C=Object(f.a)(w,2),P=C[0],D=C[1],L=function(e,t){var a=Object(r.useState)(e),n=Object(f.a)(a,2),s=n[0],c=n[1];return Object(r.useEffect)((function(){var a=setTimeout((function(){return c(e)}),t);return function(){return clearTimeout(a)}}),[e,t]),s}(P[c],500),R=Object(r.useState)(!1),G=Object(f.a)(R,2),U=G[0],A=G[1],M=Object(r.useState)(null),V=Object(f.a)(M,2),B=V[0],H=V[1],J=function(e){return fetch(P[c],{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e),credentials:"same-origin"})};Object(r.useEffect)((function(){if(c in P){for(var e in P)if(-1===s.map((function(e){return e.id})).indexOf(+e)){P[e];var t=Object(p.a)(P,[e].map(m.a));return void D(t)}}else D(Object(i.a)(Object(i.a)({},P),{},Object(b.a)({},c,"https://graphql.bitquery.io")))}),[s.length]);var F=function(e){D(Object(i.a)(Object(i.a)({},P),{},Object(b.a)({},c,e.target.value)))},z=function(){var e=q.current.getQueryEditor(),t=e&&e.getValue();t&&Q()(t)},W=function(){A(!0);var e=q.current.getQueryEditor(),t=e.getValue(),r=a(20),n=r.parse,s=(0,r.print)(n(t));e.setValue(s),A(!1)},Z=function(e,t){if(O.id){var a=Object(i.a)({},O);a[e]=t||!0,_(a)}},Y=function(e){u?e():j("Login required to save or share queries",{appearance:"error"})},$=function(){var e=Object(o.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J(t);case 2:return(a=e.sent).clone().json().then((function(e){"data"in e?"__schema"in e.data||Z("success"):"errors"in e&&Z("error",e.errors[0].message)})),e.abrupt("return",a.json().catch((function(){return a.text()})));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),K=function(e,t){U||(g(e),E(e,t))};return Object(r.useEffect)((function(){!function(){var e={query:Object(S.a)(),operationName:"IntrospectionQuery"};P[c].length>9&&J(e).then((function(e){return e.json()})).then((function(e){if("string"!==typeof e&&"data"in e){var t=Object(I.a)(e.data);H(t)}})).catch((function(e){}))}()}),[L]),s.map((function(a,r){return n.a.createElement("div",{className:"graphiql__wrapper "+(c===a.id?"graphiql__wrapper_active":""),key:r},n.a.createElement(d.a,{ref:q,style:{height:"100vh"},query:y[r].query,fetcher:$,schema:B,variables:y[r].variables,editorTheme:"dracula",onEditQuery:function(e){return K({query:e},r)},onEditVariables:function(e){return K({variables:e},r)}},n.a.createElement(d.a.Toolbar,null,n.a.createElement(d.a.Button,{onClick:z,label:"Copy",title:"Copy Query"}),n.a.createElement(d.a.Button,{onClick:W,label:"Prettify",title:"Prettify Query (Shift-Ctrl-P)"}),n.a.createElement(d.a.Button,{onClick:v,label:"Gallery",title:"Gallery Toggle"}),n.a.createElement(d.a.Button,{onClick:function(){return Y(e)},label:"Save",title:"Save Query"}),n.a.createElement(d.a.Button,{onClick:function(){return Y(t)},label:"Share",title:"Share Query"}),n.a.createElement("input",{className:"endpointURL",type:"text",value:P[c]||"",onChange:F}))))}))})),L=a(70),R=a.n(L),G=function(){for(var e="",t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",a=t.length,r=0;r<10;r++)e+=t.charAt(Math.floor(Math.random()*a));return e},U=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)};var A=function(e){var t=e.active,a=Object(r.useState)(""),s=Object(f.a)(a,2),c=s[0],u=s[1],i=Object(r.useState)(""),p=Object(f.a)(i,2),m=p[0],b=p[1],d=Object(T.useToasts)().addToast,v=h.toggleLogin,g=h.closeHandler,y=function(){var e=Object(o.a)(l.a.mark((function e(t){var a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!m||!U(c)){e.next=14;break}return e.prev=2,e.next=5,_(c,m);case 5:a=e.sent,r=a.data,d(r,{appearance:"success"}),g(),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),d(e.t0.response.data,{appearance:"error"});case 14:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t){return e.apply(this,arguments)}}();return n.a.createElement("form",{className:"modal__form "+(!t&&"modal__form_hide")},n.a.createElement("p",{className:"p-modal"},"Email"),n.a.createElement("input",{type:"text",className:"query__save",value:c,onChange:function(e){return u(e.target.value)}}),n.a.createElement("p",{className:"p-modal"},"Password"),n.a.createElement("input",{type:"password",className:"query__save",value:m,onChange:function(e){return b(e.target.value)}}),n.a.createElement("button",{className:"button button_filled",onClick:y},"Sign Up"),n.a.createElement("button",{className:"handler handler__back",onClick:v}),n.a.createElement("button",{className:"handler handler__close",onClick:g}))},M=a(57);var V=function(e){var t=e.active,a=Object(r.useState)(""),s=Object(f.a)(a,2),c=s[0],u=s[1],i=Object(r.useState)(""),p=Object(f.a)(i,2),m=p[0],b=p[1],d=Object(r.useState)(!1),v=Object(f.a)(d,2),g=v[0],y=v[1],E=N.getUser,_=h.toggleRegister,q=h.toggleLogin,w=h.closeHandler,x=Object(T.useToasts)().addToast,k=function(){var e=Object(o.a)(l.a.mark((function e(t){var a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!U(c)||!m){e.next=17;break}return e.prev=2,e.next=5,j(c,m);case 5:a=e.sent,r=a.data,console.log(r),x(r,{appearance:"success"}),E(),_(),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(2),x(e.t0.response.data,{appearance:"error"}),"A"===e.t0.response.data[0]&&y(!0);case 17:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(o.a)(l.a.mark((function e(t){var a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.post("/api/resendactivation",{email:c});case 3:a=e.sent,r=a.data,x(r,{appearance:"success"}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),x(e.t0.response.data,{appearance:"error"});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}();return n.a.createElement("form",{onSubmit:function(e){return k(e)},className:"modal__form "+(t&&"modal__form_hide")},n.a.createElement("p",{className:"p-modal"},"Email"),n.a.createElement("input",{type:"text",className:"query__save",value:c,onChange:function(e){return u(e.target.value)}}),n.a.createElement("p",{className:"p-modal"},"Password"),n.a.createElement("input",{type:"password",className:"query__save",value:m,onChange:function(e){return b(e.target.value)}}),n.a.createElement("button",{className:"button button_filled",onClick:k},"Login"),n.a.createElement("button",{className:"handler handler__close",onClick:w}),g&&n.a.createElement("a",{onClick:C},"Check Your email or resend activation link"),n.a.createElement("div",{className:"flex modal__form__options"},n.a.createElement(M.b,{to:"/reset",onClick:_},"Forgot password?"),n.a.createElement("a",{onClick:q},"Do not have account? Sign Up")))},B={overlay:{position:"fixed",zIndex:10,top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",overflow:"auto",display:"flex",flexDirection:"column",maxHeight:"450px",minWidth:"450px",width:"40%",backgroundColor:"#353848",backgroundClip:"padding-box",border:"1px solid rgba(0, 0, 0, 0.2)",borderRadius:"0.3rem",outline:0}};R.a.setAppElement("#graphql_ide");var H=Object(P.a)((function(){var e=h.registerIsOpen,t=h.loginIsOpen,a=h.closeHandler;return n.a.createElement(R.a,{isOpen:e,onRequestClose:a,style:B,contentLabel:"Example Modal"},n.a.createElement(V,{active:t}),n.a.createElement(A,{active:t}))}));var J=function(){var e=Object(T.useToasts)().addToast,t=Object(r.useState)(""),a=Object(f.a)(t,2),s=a[0],c=a[1],u=Object(r.useState)(""),i=Object(f.a)(u,2),p=i[0],m=i[1],b=k.saveQuery,d=k.queryParams,v=h.toggleSaveQuery,g=x.renameCurrentTab,y=function(){var t=Object(o.a)(l.a.mark((function t(a){var r,n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),r=d,n=null,!s){t.next=13;break}return r.name=s,p&&(r.description=p),t.next=8,b(r);case 8:400!==(n=t.sent).status?(g(s),e(n.msg,{appearance:"success"})):e(n.data.msg,{appearance:"error"}),v(),t.next=14;break;case 13:e("Name is required",{appearance:"error"});case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return n.a.createElement("form",{onSubmit:y,className:"modal modal__form "},n.a.createElement("p",{className:"p-modal"},"Query name (required)"),n.a.createElement("input",{type:"text",className:"query__save",value:s,onChange:function(e){return c(e.target.value)}}),n.a.createElement("p",{className:"p-modal"},"Description (optional)"),n.a.createElement("input",{type:"text",className:"query__save",value:p,onChange:function(e){return m(e.target.value)}}),n.a.createElement("button",{type:"submit",className:"button button_filled"},"Save"),n.a.createElement("button",{className:"handler handler__close",onClick:v}))};var F=function(){var e=Object(T.useToasts)().addToast,t=Object(r.useState)(""),a=Object(f.a)(t,2),s=a[0],c=a[1],u=Object(r.useState)(""),i=Object(f.a)(u,2),p=i[0],m=i[1],b=Object(r.useState)(""),d=Object(f.a)(b,2),v=d[0],g=d[1],y=k.saveQuery,E=k.queryParams,O=(k.updateQuery,h.toggleShareQuery),_=x.renameCurrentTab;Object(r.useEffect)((function(){Q()("".concat(window.location.protocol,"//").concat(window.location.host,"/").concat(p))}),[p]);var j=function(){var t=Object(o.a)(l.a.mark((function t(a){var r,n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),r=E,n=null,!s){t.next=14;break}return r.name=s,v&&(r.description=v),r.url=G(),t.next=9,y(r);case 9:400!==(n=t.sent).status?(m(r.url),_(s),e(n.msg,{appearance:"success"})):e(n.data.msg,{appearance:"error"}),O(),t.next=15;break;case 14:e("Name is required",{appearance:"error"});case 15:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return n.a.createElement("form",{onSubmit:j,className:"modal modal__form"},n.a.createElement("p",{className:"p-modal"},"Query name (required)"),n.a.createElement("input",{type:"text",className:"query__save",value:s,onChange:function(e){return c(e.target.value)}}),n.a.createElement("p",{className:"p-modal"},"Description (optional)"),n.a.createElement("input",{type:"text",className:"query__save",value:v,onChange:function(e){return g(e.target.value)}}),n.a.createElement("button",{type:"submit",className:"button button_filled"},"Get Query Link"),n.a.createElement("button",{className:"handler handler__close",onClick:O}))},z={overlay:{position:"fixed",zIndex:10,top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",overflow:"auto",display:"flex",flexDirection:"column",maxHeight:"450px",minWidth:"450px",width:"40%",backgroundColor:"#353848",backgroundClip:"padding-box",border:"1px solid rgba(0, 0, 0, 0.2)",borderRadius:"0.3rem",outline:0}};R.a.setAppElement("#graphql_ide");var W=Object(P.a)((function(){var e=h.saveQueryIsOpen,t=h.shareQueryIsOpen,a=h.toggleSaveQuery,r=h.toggleShareQuery;return n.a.createElement(n.a.Fragment,null,n.a.createElement(R.a,{isOpen:e,onRequestClose:a,style:z,contentLabel:"Example Modal"},n.a.createElement(J,null)),n.a.createElement(R.a,{isOpen:t,onRequestClose:r,style:z,contentLabel:"Example Modal"},n.a.createElement(F,null)))})),Z=a(30),Y=Object(P.a)((function(){var e=x.tabs,t=x.currentTab,a=x.switchTab,s=x.removeTab,c=x.addNewTab,u=Object(Z.g)().queryurl,i=k.setCurrentQuery,p=k.setQuery,m=k.removeQuery,b=k.query,f=Object(T.useToasts)().addToast;Object(r.useEffect)((function(){function e(){return(e=Object(o.a)(l.a.mark((function e(){var t,a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!u){e.next=8;break}return e.next=3,q(u);case 3:t=e.sent,a=t.data,r={query:a.query,variables:a.arguments,url:a.url},p(r,a.id),c(a.name);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);return n.a.createElement("div",{className:"tabs"},n.a.createElement("ul",null,e.map((function(e,r){return n.a.createElement("li",{className:t===e.id?"active":"",key:r,onClick:function(){return a(e.id)},onContextMenu:function(e){return function(e,t){t.preventDefault(),b[e].url?(Q()("http://".concat(window.location.host,"/").concat(b[e].url)),f("Query link copied to clipboard!",{appearance:"success"})):f("This query is not shared now",{appearance:"error"})}(r,e)}},e.name,n.a.createElement("span",{className:"tab__close",onClick:function(e){return a=e,m(t=r),void s(t,a);var t,a}}))})),n.a.createElement("li",{className:"tabs__add",onClick:function(){c("New Tab"),p({query:"{}",variables:"{}"}),i({query:"{}",variables:"{}"})}},n.a.createElement("span",{className:"tab__add"}))))})),$=a(198),K=a.n($),X=Object(P.a)((function(){var e=N.getUser,t=N.user,a=N.setUser,s=h.toggleRegister,c=Object(r.useState)(!1),u=Object(f.a)(c,2),i=u[0],p=u[1],m=function(){var e=Object(o.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("/api/logout").catch((function(e){return console.log(e)}));case 2:a(null),p((function(e){return!e}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){e()}),[]),t?n.a.createElement("div",{className:"profile flex"},n.a.createElement("img",{src:"https://cdn.jsdelivr.net/gh/Spendil/qqq@1.0/media/user.f49489c9.svg",className:"profile__image",alt:"Profile",onClick:function(){return t&&p((function(e){return!e}))}}),n.a.createElement("p",{className:"profile__email"}," ",t.email," "),n.a.createElement(K.a,{onClickOutside:function(e){"profile__image"!==e.target.classList.value&&p(!1)}},n.a.createElement("div",{className:"profile__controls flex flex-col "+(i&&"active")},n.a.createElement("button",{className:"profile__button"},n.a.createElement(M.b,{to:"/changepwd"},"Change password")),n.a.createElement("button",{className:"profile__button",onClick:m},"Logout")))):n.a.createElement("button",{className:"button button__signin",onClick:s}," Login ")}));var ee=function(){return n.a.createElement("div",{className:"controlpanel"},n.a.createElement(Y,null),n.a.createElement(X,null))};a(157);var te=function(){var e=Object(T.useToasts)().addToast,t=Object(r.useState)(""),a=Object(f.a)(t,2),s=a[0],c=a[1],u=Object(r.useState)(""),i=Object(f.a)(u,2),p=i[0],m=i[1],b=Object(r.useState)(""),d=Object(f.a)(b,2),v=d[0],g=d[1],h=Object(Z.f)(),y=function(){var t=Object(o.a)(l.a.mark((function t(a){var r,n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),p!==v||!s||!p){t.next=18;break}return t.prev=2,t.next=5,O.a.post("/api/changepassword",{oldPwd:s,newPwd:p});case 5:r=t.sent,n=r.data,console.log(n),setTimeout((function(){h.push("/")}),3e3),e(n,{appearance:"success"}),e("Redirect in 3 seconds...",{appearance:"success"}),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(2),e(t.t0.response.data,{appearance:"error"});case 16:t.next=19;break;case 18:e(p!==v?"Passwords do not match!":"Fill all fields",{appearance:"error"});case 19:case"end":return t.stop()}}),t,null,[[2,13]])})));return function(e){return t.apply(this,arguments)}}();return n.a.createElement("div",{className:"reset__password"},n.a.createElement("form",{style:{display:"flex",flexDirection:"column",alignItems:"center"},onSubmit:y,className:"reset__form"},n.a.createElement("h2",null,"Here you can change password"),n.a.createElement("p",{className:"p-modal"},"Old Password"),n.a.createElement("input",{type:"password",className:"query__save",value:s,onChange:function(e){return c(e.target.value)}}),n.a.createElement("p",{className:"p-modal"},"New Password"),n.a.createElement("input",{type:"password",className:"query__save",value:p,onChange:function(e){return m(e.target.value)}}),n.a.createElement("p",{className:"p-modal"},"Confirm Password"),n.a.createElement("input",{type:"password",className:"query__save",value:v,onChange:function(e){return g(e.target.value)}}),n.a.createElement("button",{className:"button button_filled",type:"submit"},"Apply")))};var ae=function(){var e=Object(r.useState)(""),t=Object(f.a)(e,2),a=t[0],s=t[1],c=Object(r.useState)(""),u=Object(f.a)(c,2),i=u[0],p=u[1],m=Object(Z.g)().token,b=Object(T.useToasts)().addToast,d=function(){var e=Object(o.a)(l.a.mark((function e(t){var r,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),a!==i){e.next=16;break}return e.prev=2,e.next=5,O.a.post("/api/reset",{password:a,token:m});case 5:r=e.sent,n=r.data,b(n,{appearance:"success"}),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(2),console.log(e.t0.response.data),b(e.t0.response.data,{appearance:"error"});case 14:e.next=17;break;case 16:b("Passwords do not match!",{appearance:"error"});case 17:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}();return n.a.createElement("form",{style:{display:"flex",flexDirection:"column",alignItems:"center"},onSubmit:d,className:"reset__form"},n.a.createElement("h1",null,"Confirm new password"),n.a.createElement("p",{className:"p-modal"},"New password"),n.a.createElement("input",{type:"password",className:"query__save",value:a,onChange:function(e){return s(e.target.value)}}),n.a.createElement("p",{className:"p-modal"},"Confirm password"),n.a.createElement("input",{type:"password",className:"query__save",value:i,onChange:function(e){return p(e.target.value)}}),n.a.createElement("button",{className:"button button_filled",type:"submit"},"Change password"))};var re=function(){var e=Object(r.useState)(""),t=Object(f.a)(e,2),a=t[0],s=t[1],c=Object(Z.h)(),u=Object(T.useToasts)().addToast,i=(Object(Z.f)(),function(){var e=Object(o.a)(l.a.mark((function e(t){var r,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!U(a)){e.next=13;break}return e.prev=2,e.next=5,O.a.post("/api/forgot",{email:a});case 5:r=e.sent,n=r.data,u(n,{appearance:"success"}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),u(e.t0.response.data,{appearance:"error"});case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}());return n.a.createElement("div",{className:"reset"},n.a.createElement(Z.c,null,n.a.createElement(Z.a,{path:"".concat(c.path,"/:token")},n.a.createElement(ae,null)),n.a.createElement(Z.a,{path:"".concat(c.path)},n.a.createElement("form",{style:{display:"flex",flexDirection:"column",alignItems:"center"},onSubmit:i,className:"reset__form"},n.a.createElement("h2",null,"Forgot password"),n.a.createElement("p",null,"Enter your email below and reset password instruction will be sent "),n.a.createElement("p",{className:"p-modal"},"Email"),n.a.createElement("input",{type:"text",className:"query__save",value:a,onChange:function(e){return s(e.target.value)}}),n.a.createElement("button",{className:"button button_filled",type:"submit"},"GO")))))};var ne=function(e){var t=e.queries,a=Object(r.useState)(!1),s=Object(f.a)(a,2),c=s[0],u=s[1],l=x.addNewTab,o=k.setQuery,i=k.setCurrentQuery;return t.map((function(e,t){return n.a.createElement("li",{className:"gallery__query",key:t},n.a.createElement("p",{className:"gallery__query__body",onMouseEnter:function(){return u(t)},onMouseLeave:function(){return u(-1)},onClick:function(){return function(e){var t={query:e.query,variables:e.arguments,url:e.url};o(t,e.id),i(t,e.id),l(e.name)}(e)}},e.name),c===t&&n.a.createElement("label",{className:"gallery__query__description"},e.description))}))},se=Object(P.a)((function(){var e=Object(r.useState)([]),t=Object(f.a)(e,2),a=t[0],s=t[1],c=Object(r.useState)([]),u=Object(f.a)(c,2),i=u[0],p=u[1],m=Object(r.useState)(!0),b=Object(f.a)(m,2),d=b[0],v=b[1],g=k.showGallery,h=k.toggleGallery,y=k.queryJustSaved,E=N.user,_=Object(T.useToasts)().addToast;return Object(r.useEffect)((function(){(function(){var e=Object(o.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.get("/api/getqueries");case 3:t=e.sent,a=t.data,s(a.queries),a.msg&&_("Account activated!",{appearance:"success"}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}})()()}),[y]),Object(r.useEffect)((function(){E&&function(){var e=Object(o.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.get("/api/getmyqueries");case 3:t=e.sent,a=t.data,p(a),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}()()}),[E,y]),n.a.createElement("div",{className:"gallery flex flex-col "+(g&&"active")},n.a.createElement("div",{className:"gallery__header flex flex-col"},n.a.createElement("span",{className:"close",onClick:h}),n.a.createElement("p",null,"Gallery"),E&&n.a.createElement("div",{className:"gallery__switch"},n.a.createElement("input",{type:"checkbox",id:"switch",onChange:function(){return v(!d)}}),n.a.createElement("label",{htmlFor:"switch",className:"flex gallery__switch__label"},n.a.createElement("span",{className:"myqueries"},"My queries"),n.a.createElement("span",{className:"allqueries"},"Published")))),n.a.createElement("ul",{className:"gallery__queries"},E?d?n.a.createElement(ne,{queries:a}):n.a.createElement(ne,{queries:i}):n.a.createElement(ne,{queries:a})))}));var ce=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(M.a,null,n.a.createElement(H,null),n.a.createElement(W,null),n.a.createElement(Z.c,null,n.a.createElement(Z.a,{path:"/reset"},n.a.createElement(re,null)),n.a.createElement(Z.a,{path:"/changepwd"},n.a.createElement(te,null)),n.a.createElement(Z.a,{path:["/:queryurl","/"]},n.a.createElement(ee,null),n.a.createElement("div",{className:"content flex"},n.a.createElement(se,null),n.a.createElement(D,null))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(324);var ue=document.getElementById("graphql_ide").getAttribute("baseurl");O.a.defaults.baseURL=ue,c.a.render(n.a.createElement(T.ToastProvider,{autoDismiss:!0},n.a.createElement(ce,null)),document.getElementById("graphql_ide")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[204,1,2]]]);
//# sourceMappingURL=main.10ef20f1.chunk.js.map