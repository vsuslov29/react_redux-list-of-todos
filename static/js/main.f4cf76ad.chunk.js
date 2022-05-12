(this["webpackJsonpreact_redux-list-of-todos"]=this["webpackJsonpreact_redux-list-of-todos"]||[]).push([[0],{22:function(e,t,c){},23:function(e,t,c){},24:function(e,t,c){},26:function(e,t,c){},27:function(e,t,c){"use strict";c.r(t);var n=c(6),r=c.n(n),s=c(4),o=c(14),a=c(3),i=c(9),d=c(13),u="START_LOADING",l="FINISH_LOADING",j="SET_TODOS",b="SET_SELECTED_USER_ID",O="SET_HAS_LOADING_ERROR",h="SET_SELECTED_TODO_ID",f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"No message";return{type:l,message:e}},p=function(e){return{type:b,selectedUserId:e}},m=function(e){return{type:O,hasLoadingError:e}},_=function(e){return e.loading},x=function(e){return e.message},v=function(e){return e.selectedUserId},g=function(e){return e.hasLoadingError},T=function(e){return e.selectedTodoId},E={todos:[],loading:!1,message:"",selectedUserId:0,hasLoadingError:!1,selectedTodoId:0},I=Object(i.createStore)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(a.a)(Object(a.a)({},e),{},{loading:!0});case l:return Object(a.a)(Object(a.a)({},e),{},{loading:!1,message:t.message});case j:return Object(a.a)(Object(a.a)({},e),{},{todos:t.todos});case b:return Object(a.a)(Object(a.a)({},e),{},{selectedUserId:t.selectedUserId});case O:return Object(a.a)(Object(a.a)({},e),{},{hasLoadingError:t.hasLoadingError});case h:return Object(a.a)(Object(a.a)({},e),{},{selectedTodoId:t.selectedTodoId});default:return e}}),Object(d.composeWithDevTools)()),N=I,L=c(0),S=(c(22),c(23),c(5)),y=c(11),C=c.n(y),U=(c(24),c(1)),D=function(){var e=Object(L.useState)(""),t=Object(S.a)(e,2),c=t[0],n=t[1],r=Object(L.useState)("all"),o=Object(S.a)(r,2),a=o[0],i=o[1],d=Object(s.c)(T),u=Object(s.c)(function(e,t){return function(c){return c.todos.filter((function(t){return t.title.includes(e)})).filter((function(e){var c=e.completed;switch(t){case"active":return!c;case"completed":return c;default:return!0}}))}}(c,a)),l=Object(s.b)(),j=function(e,t){l(p(t)),l(function(e){return{type:h,selectedTodoId:e}}(e))};return Object(U.jsxs)("div",{className:"TodoList",children:[Object(U.jsx)("h2",{children:"Todos:"}),Object(U.jsxs)("div",{className:"TodoList__list-container",children:[Object(U.jsx)("input",{type:"text",onChange:function(e){n(e.target.value)},value:c}),Object(U.jsxs)("select",{value:a,onChange:function(e){i(e.target.value)},children:[Object(U.jsx)("option",{value:"all",children:"all"}),Object(U.jsx)("option",{value:"active",children:"active"}),Object(U.jsx)("option",{value:"completed",children:"completed"})]}),Object(U.jsx)("ul",{className:"TodoList__list",children:u.map((function(e){var t=e.title,c=e.id,n=e.completed,r=e.userId,s=d===c;return Object(U.jsxs)("li",{className:C()("TodoList__item",{"TodoList__item--checked":n,"TodoList__item--unchecked":!n}),children:[Object(U.jsxs)("label",{htmlFor:"checkbox",children:[Object(U.jsx)("input",{id:"checkbox",type:"checkbox",readOnly:!0}),Object(U.jsx)("p",{children:t})]}),Object(U.jsxs)("button",{className:C()("TodoList__user-button",{"TodoList__user-button--selected":s},"button"),type:"button",onClick:function(){return j(c,r)},children:["User\xa0#",r]})]},c)}))})]})]})},k=function(e){return fetch("https://mate.academy/students-api/".concat(e)).then((function(e){return e.json()}))},A=(c(26),{name:"-",email:"-",phone:"-"}),R=function(e){var t=e.userId,c=Object(L.useState)(A),n=Object(S.a)(c,2),r=n[0],o=n[1],a=Object(L.useState)(!1),i=Object(S.a)(a,2),d=i[0],u=i[1],l=Object(L.useState)(!1),j=Object(S.a)(l,2),b=j[0],O=j[1],h=Object(s.b)();Object(L.useEffect)((function(){O(!1),u(!0),function(e){return k("users/".concat(e))}(t).then((function(e){e.error?O(!0):o(e),u(!1)}))}),[t]);var f=r.name,m=r.email,_=r.phone,x=b?"Some error...":Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)("h2",{className:"CurrentUser__title",children:Object(U.jsxs)("span",{children:["Selected user:"," ",t]})}),Object(U.jsx)("h3",{className:"CurrentUser__name",children:f}),Object(U.jsx)("p",{className:"CurrentUser__email",children:m}),Object(U.jsx)("p",{className:"CurrentUser__phone",children:_}),Object(U.jsx)("button",{type:"button",onClick:function(){return h(p(0))},className:"button",children:"Clear"})]});return Object(U.jsx)("div",{className:"CurrentUser",children:d?"Loading...":x})},w=function(){var e=Object(s.b)(),t=Object(s.c)(_),c=Object(s.c)(x),n=Object(s.c)(v),r=Object(s.c)(g);Object(L.useEffect)((function(){e(m(!1)),e({type:u}),k("todos").then((function(t){var c;t.error?(e(m(!0)),c=f("Error!")):(e({type:j,todos:t}),c=f("Success!")),e(c)}))}),[]);var o=r?Object(U.jsx)("h2",{children:c}):Object(U.jsxs)("div",{className:"App__sidebar",children:[Object(U.jsx)("h2",{children:c}),Object(U.jsx)(D,{})]});return Object(U.jsxs)("div",{className:"App",children:[t?"Loading":o,Object(U.jsx)("div",{className:"App__content",children:Object(U.jsx)("div",{className:"App__content-container",children:n?Object(U.jsx)(R,{userId:n}):"No user selected"})})]})},F=function(){return Object(U.jsx)(s.a,{store:N,children:Object(U.jsx)(o.a,{children:Object(U.jsx)(w,{})})})};r.a.render(Object(U.jsx)(F,{}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.f4cf76ad.chunk.js.map