(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(8),i=n.n(s),o=(n(16),n(11)),r=n(2),l=n.p+"static/media/logo.bbe2a6ea.svg",u=n(0);var p=function(){return Object(u.jsx)("header",{className:"header",children:Object(u.jsx)("img",{className:"header__logo",src:l,alt:"\u043b\u043e\u0433\u043e\u0442\u0438\u043f"})})};var d=function(){return Object(u.jsx)("footer",{className:"footer",children:Object(u.jsx)("p",{className:"footer__copyright",children:"\xa9\ufe0f 2021. \u041a\u0438\u0440\u0438\u043d\u0446\u0435\u0432 \u0421\u0435\u0440\u0433\u0435\u0439"})})},b=c.a.createContext();var j=function(e){var t=e.card,n=e.onCardClick,a=e.onCardLike,s=e.onCardDelete,i=c.a.useContext(b),o=t.owner._id===i._id,r=t.likes.some((function(e){return e._id===i._id}));return Object(u.jsxs)("li",{className:"elements__element",children:[o&&Object(u.jsx)("button",{onClick:function(){s(t)},type:"button","aria-label":"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",className:"elements__trash-btn btn-hover"}),Object(u.jsx)("div",{className:"elements__img-wrap",children:Object(u.jsx)("img",{onClick:function(){n(t)},src:t.link,alt:t.name,className:"elements__img"})}),Object(u.jsxs)("div",{className:"elements__description",children:[Object(u.jsx)("h2",{className:"elements__text block",children:t.name}),Object(u.jsxs)("div",{className:"elements__like-wrap",children:[Object(u.jsx)("button",{onClick:function(){a(t)},type:"button","aria-label":"\u041d\u0440\u0430\u0432\u0438\u0442\u0441\u044f",className:"elements__like-btn btn-hover ".concat(r?"elements__like-btn_active":"")}),Object(u.jsx)("span",{className:"elements__like-count",children:t.likes.length})]})]})]})};var h=function(e){var t=e.onEditProfile,n=e.onEditAvatar,a=e.onAddPlace,s=e.onCardClick,i=e.cards,o=e.onCardLike,r=e.onCardDelete,l=c.a.useContext(b),p=i.map((function(e){return Object(u.jsx)(j,{card:e,onCardClick:s,onCardLike:o,onCardDelete:r},e._id)}));return Object(u.jsxs)("main",{className:"content",children:[Object(u.jsxs)("section",{className:"profile",children:[Object(u.jsxs)("div",{onClick:n,className:"profile__avatar-wrapper",children:[Object(u.jsx)("div",{className:"profile__avatar",style:{backgroundImage:"url(".concat(l.avatar,")")}}),Object(u.jsx)("div",{className:"profile__avatar-overlay"})]}),Object(u.jsxs)("div",{className:"profile__info",children:[Object(u.jsxs)("div",{className:"profile__row",children:[Object(u.jsx)("h1",{className:"profile__name block",children:l.name}),Object(u.jsx)("button",{onClick:t,type:"button","aria-label":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",className:"profile__edit-btn btn-hover"})]}),Object(u.jsx)("p",{className:"profile__profession block",children:l.about})]}),Object(u.jsx)("button",{onClick:a,type:"button","aria-label":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443",className:"profile__add-btn btn-hover"})]}),Object(u.jsx)("section",{className:"elements",children:Object(u.jsx)("ul",{className:"elements__list",children:p})})]})};var m=function(e){var t=e.card,n=e.onClose;return Object(u.jsx)("div",{className:"popup popup_img_view ".concat(t?"popup_is-opened":""),children:Object(u.jsxs)("div",{className:"popup__img-wrapper",children:[Object(u.jsx)("button",{onClick:n,type:"button",className:"popup__close-btn btn-hover"}),Object(u.jsxs)("figure",{className:"popup__figure",children:[Object(u.jsx)("img",{className:"popup__image",src:null===t||void 0===t?void 0:t.link,alt:null===t||void 0===t?void 0:t.name}),Object(u.jsx)("figcaption",{className:"popup__caption",children:null===t||void 0===t?void 0:t.name})]})]})})},_=n(9),f=n(10),O=new(function(){function e(t){var n=t.baseUrl,a=t.headers;Object(_.a)(this,e),this._baseUrl=n,this._headers=a}return Object(f.a)(e,[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430 ".concat(e.status))}},{key:"getCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then(this._checkResponse)}},{key:"getUserInfo",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then(this._checkResponse)}},{key:"setUserInfo",value:function(e){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).then(this._checkResponse)}},{key:"createCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then(this._checkResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"changeLikeCardStatus",value:function(e,t){var n=t?"PUT":"DELETE";return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:n,headers:this._headers}).then(this._checkResponse)}},{key:"setUserAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then(this._checkResponse)}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-22",headers:{authorization:"9405df8f-2b49-4fde-857c-7e0c079d778d","Content-Type":"application/json"}}),v=n(3);var x=function(e){var t=e.submitBtnCaptionIsLoading||"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...";return Object(u.jsx)("div",{className:"popup ".concat(e.isOpen?"popup_is-opened":""),children:Object(u.jsxs)("div",{className:"popup__container",children:[Object(u.jsx)("button",{onClick:e.onClose,type:"button",className:"popup__close-btn btn-hover"}),Object(u.jsx)("h2",{className:"popup__title",children:e.title}),Object(u.jsxs)("form",{onSubmit:e.onSubmit,name:e.type,className:"popup__form",noValidate:!0,children:[e.children,Object(u.jsx)("button",{type:"submit",className:"popup__form-submit btn-hover",children:e.isLoading?t:e.submitBtnCaption})]})]})})};var C=function(e){var t=c.a.useContext(b),n=c.a.useState(),a=Object(r.a)(n,2),s=a[0],i=a[1],o=c.a.useState(),l=Object(r.a)(o,2),p=l[0],d=l[1];return c.a.useEffect((function(){i(t.name),d(t.about)}),[t,e.isOpen]),Object(u.jsxs)(x,Object(v.a)(Object(v.a)({},e),{},{type:"edit_profile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",submitBtnCaption:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:s,about:p})},children:[Object(u.jsxs)("section",{className:"popup__section",children:[Object(u.jsx)("input",{onChange:function(e){i(e.target.value)},id:"name-profile",type:"text",name:"name",className:"popup__input popup__input_type_name",value:s||"",placeholder:"\u0418\u043c\u044f",required:!0,minLength:"2",maxLength:"40","aria-label":"\u0418\u043c\u044f"}),Object(u.jsx)("span",{className:"popup__input-error name-profile-error"})]}),Object(u.jsxs)("section",{className:"popup__section",children:[Object(u.jsx)("input",{onChange:function(e){d(e.target.value)},id:"job-profile",type:"text",name:"about",className:"popup__input popup__input_type_job",value:p||"",placeholder:"\u0423\u0432\u043b\u0435\u0447\u0435\u043d\u0438\u0435/\u0440\u0430\u0431\u043e\u0442\u0430",required:!0,minLength:"2",maxLength:"200","aria-label":"\u041e \u0441\u0435\u0431\u0435"}),Object(u.jsx)("span",{className:"popup__input-error job-profile-error"})]})]}))};var k=function(e){var t=c.a.useRef(null);return Object(u.jsx)(x,Object(v.a)(Object(v.a)({},e),{},{type:"avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",submitBtnCaption:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",onSubmit:function(n){n.preventDefault(),e.onUpdateAvatar({avatar:t.current.value})},children:Object(u.jsxs)("section",{className:"popup__section",children:[Object(u.jsx)("input",{ref:t,id:"avatar-link",type:"url",name:"avatar",className:"popup__input",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0430\u0432\u0430\u0442\u0430\u0440",required:!0,"aria-label":"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0430\u0432\u0430\u0442\u0430\u0440"}),Object(u.jsx)("span",{className:"popup__input-error avatar-link-error"})]})}))},g=n(6);var N=function(e){var t=c.a.useState({name:"",link:""}),n=Object(r.a)(t,2),a=n[0],s=n[1],i=function(e){s((function(t){return Object(v.a)(Object(v.a)({},t),{},Object(g.a)({},e.target.name,e.target.value))}))};return c.a.useEffect((function(){s({name:"",link:""})}),[e.isOpen]),Object(u.jsxs)(x,Object(v.a)(Object(v.a)({},e),{},{type:"add_card",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",submitBtnCaption:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",onSubmit:function(t){t.preventDefault(),e.onAddPlaceSubmit(a)},children:[Object(u.jsxs)("section",{className:"popup__section",children:[Object(u.jsx)("input",{onChange:i,value:a.name||"",id:"card-name",type:"text",name:"name",className:"popup__input popup__input_type_img-name",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",required:!0,minLength:"2",maxLength:"30","aria-label":"\u0418\u043c\u044f"}),Object(u.jsx)("span",{className:"popup__input-error card-name-error"})]}),Object(u.jsxs)("section",{className:"popup__section",children:[Object(u.jsx)("input",{onChange:i,value:a.link||"",id:"card-link",type:"url",name:"link",className:"popup__input popup__input_type_img-link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0,"aria-label":"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443"}),Object(u.jsx)("span",{className:"popup__input-error card-link-error"})]})]}))};var y=function(e){return Object(u.jsx)(x,Object(v.a)(Object(v.a)({},e),{},{type:"confirm",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",submitBtnCaption:"\u0414\u0430",submitBtnCaptionIsLoading:"\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435...",onSubmit:function(t){t.preventDefault(),e.onConfirmDeleteCard()}}))};var S=function(){var e=c.a.useState(!1),t=Object(r.a)(e,2),n=t[0],a=t[1],s=c.a.useState(!1),i=Object(r.a)(s,2),l=i[0],j=i[1],_=c.a.useState(!1),f=Object(r.a)(_,2),v=f[0],x=f[1],g=c.a.useState(!1),S=Object(r.a)(g,2),U=S[0],L=S[1],A=c.a.useState(null),E=Object(r.a)(A,2),D=E[0],P=E[1],w=c.a.useState({}),I=Object(r.a)(w,2),R=I[0],B=I[1],T=c.a.useState([]),q=Object(r.a)(T,2),J=q[0],H=q[1],z=c.a.useState(!1),M=Object(r.a)(z,2),V=M[0],F=M[1],G=c.a.useState(null),K=Object(r.a)(G,2),Q=K[0],W=K[1];c.a.useEffect((function(){O.getCards().then((function(e){H(e)})).catch((function(e){console.log("getCards",e)}))}),[]),c.a.useEffect((function(){O.getUserInfo().then((function(e){B(e)})).catch((function(e){console.log("getUserInfo",e)}))}),[]);var X=function(){x(!1),a(!1),j(!1),L(!1),P(null),F(!1),W(null)};return Object(u.jsx)("div",{className:"page",children:Object(u.jsxs)(b.Provider,{value:R,children:[Object(u.jsx)(p,{}),Object(u.jsx)(h,{onEditProfile:function(){a(!0)},onAddPlace:function(){j(!0)},onEditAvatar:function(){x(!0)},onCardClick:function(e){P(e)},cards:J,onCardLike:function(e){var t=e.likes.some((function(e){return e._id===R._id}));O.changeLikeCardStatus(e._id,!t).then((function(t){H((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))})).catch((function(e){console.log("handleCardLike",e)}))},onCardDelete:function(e){W(e._id),L(!0)}}),Object(u.jsx)(d,{}),Object(u.jsx)(m,{card:D,onClose:X}),Object(u.jsx)(C,{isOpen:n,onClose:X,onUpdateUser:function(e){F(!0),O.setUserInfo(e).then((function(e){B(e),X()})).catch((function(e){console.log("handleUpdateUser",e)}))},isLoading:V}),Object(u.jsx)(k,{isOpen:v,onClose:X,onUpdateAvatar:function(e){var t=e.avatar;F(!0),O.setUserAvatar(t).then((function(e){B(e),X()})).catch((function(e){console.log("handleUpdateAvatar",e)}))},isLoading:V}),Object(u.jsx)(N,{isOpen:l,onClose:X,onAddPlaceSubmit:function(e){F(!0),O.createCard(e).then((function(e){H([e].concat(Object(o.a)(J))),X()})).catch((function(e){console.log("handleAddPlaceSubmit",e)}))},isLoading:V}),Object(u.jsx)(y,{isOpen:U,onClose:X,onConfirmDeleteCard:function(){F(!0),O.deleteCard(Q).then((function(){H((function(e){return e.filter((function(e){return e._id!==Q}))})),X()})).catch((function(e){console.log("handleCardDeleteAfterConfirm",e)}))},isLoading:V})]})})};i.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(S,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.af7443b5.chunk.js.map