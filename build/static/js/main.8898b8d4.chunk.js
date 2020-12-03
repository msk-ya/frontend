(this["webpackJsonpreact-frontend"]=this["webpackJsonpreact-frontend"]||[]).push([[0],{122:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a(0),s=a(13),r=a.n(s),i=(a(80),a(9)),l=a(26),o=a(8),d=(a(37),a(131)),j=a(130),b=(a(81),a(27)),h=a.n(b),m=a(34),u=a(125),O=a(72),x=a(126),p=a(127),g=a(10),f=a.n(g),v=(a(42),a(16)),y={border:"none",background:"none",color:"#333399",outline:"none",fontWeight:"bold",textDecoration:"underline"};var N=Object(o.e)(Object(v.b)((function(e){return e}))((function(e){var t=Object(n.useState)({data:localStorage.getItem("users")?JSON.parse(localStorage.getItem("users")):[]}),a=Object(i.a)(t,2),s=a[0],r=a[1];function l(){return(l=Object(m.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("https://uematsu-backend.herokuapp.com/users").then((function(e){localStorage.setItem("users",JSON.stringify(e.data))})).catch((function(e){console.log(e)}));case 2:r({data:JSON.parse(localStorage.getItem("users"))});case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useState)(function(){return l.apply(this,arguments)}()),Object(n.useEffect)((function(){0===e.userData.length&&e.history.push("/login")})),Object(c.jsxs)("div",{className:"image",children:[Object(c.jsx)("div",{className:"text-center mt-5 mb-4",children:Object(c.jsx)("h2",{"data-testid":"usertitle",children:"\u4f1a\u54e1\u4e00\u89a7"})}),Object(c.jsx)(u.a,{children:Object(c.jsx)(O.a,{md:{span:8,offset:2},className:"p-5 bg-light shadow",children:s.data.length>0?Object(c.jsxs)(x.a,{striped:!0,bordered:!0,hover:!0,children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{className:"text-center align-middle bg-dark text-white",children:"\u540d\u524d"}),Object(c.jsx)("th",{className:"text-center align-middle bg-dark text-white",children:"\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9"}),Object(c.jsx)("th",{className:"text-center align-middle bg-dark text-white"})]})}),Object(c.jsx)("tbody",{children:s.data.map((function(t){return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{className:"text-center align-middle",children:Object(c.jsx)("button",{style:y,onClick:function(a){return t.id,void e.history.push("/users/show")},children:t.name})}),Object(c.jsx)("td",{className:"text-center align-middle",children:t.email}),Object(c.jsxs)("td",{children:[Object(c.jsx)(p.a,{variant:"primary",onClick:function(a){return c=t.id,e.editIdget(c),void e.history.push("/users/edit");var c},className:"ml-3",children:"\u7de8\u96c6"}),Object(c.jsx)(p.a,{variant:"danger",onClick:function(e){return function(e){window.confirm("\u524a\u9664\u3057\u3066\u3088\u308d\u3057\u3044\u3067\u3059\u304b\uff1f")&&f.a.delete("https://uematsu-backend.herokuapp.com/users/".concat(e)).then((function(e){alert(e.data.message)})).catch((function(e){console.log(e)}))}(t.id)},className:"ml-3",children:"\u524a\u9664"})]})]},t.name)}))})]}):Object(c.jsx)("div",{children:"\u30c7\u30fc\u30bf\u306a\u3057"})})})]})}))),w=a(15),k=a(12),C=a(129),S=a(46),I={userData:[]},L=function(e,t){var a=e.userData.slice();return a.splice(0),a.push(t.user),{userData:a}},G=function(e,t){var a=e.userData.slice();return a.splice(0),{userData:a}},D=Object(S.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN":return L(e,t);case"LOGOUT":return G(e,t);default:return e}})),q=Object(o.e)(Object(v.b)((function(e){return e}))((function(e){var t=Object(n.useState)({email:"",password:""}),a=Object(i.a)(t,2),s=a[0],r=a[1],l=function(e){var t=e.target,a=t.name,c=t.value;r(Object(k.a)(Object(k.a)({},s),{},Object(w.a)({},a,c)))};return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{className:"text-center mt-5 mb-4",children:Object(c.jsx)("h2",{className:"text-secondary","data-testid":"logintitle",children:"\u30ed\u30b0\u30a4\u30f3"})}),Object(c.jsx)(u.a,{children:Object(c.jsx)(O.a,{md:{span:4,offset:4},className:"p-5 bg-light shadow",children:Object(c.jsxs)(C.a,{onSubmit:function(t){t.preventDefault();var a={email:s.email,password:s.password};f.a.post("https://uematsu-backend.herokuapp.com/sessions",a).then((function(t){var a={type:"LOGIN",user:t.data};e.dispatch(a),alert("\u30ed\u30b0\u30a4\u30f3\u3057\u307e\u3057\u305f"),r({name:"",email:"",password:"",confirmation:""}),e.history.push("/users/show")})).catch((function(e){alert(e)}))},"data-testid":"loginForm",children:[Object(c.jsxs)(C.a.Group,{children:[Object(c.jsx)(C.a.Label,{children:"\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9"}),Object(c.jsx)(C.a.Control,{type:"email",name:"email",placeholder:"(\u4f8b)sample@example.com",className:"h8",onChange:l,required:!0,value:s.email,"data-testid":"ml"})]}),Object(c.jsxs)(C.a.Group,{children:[Object(c.jsx)(C.a.Label,{children:"\u30d1\u30b9\u30ef\u30fc\u30c9"}),Object(c.jsx)(C.a.Control,{type:"password",name:"password",placeholder:"(\u4f8b)password",onChange:l,required:!0,value:s.password,"data-testid":"ps"})]}),Object(c.jsx)(p.a,{type:"submit",variant:"primary",className:"btn-block mt-4",children:"\u9001\u4fe1"}),Object(c.jsx)(p.a,{variant:"primary",onClick:function(){e.history.push("/users/new")},className:"btn-block mt-3",children:"\u65b0\u898f\u767b\u9332"})]})})})]})}))),E=Object(o.e)((function(e){var t=Object(n.useState)({display:"none"}),a=Object(i.a)(t,2),s=a[0],r=a[1],l=Object(n.useState)({name:"",email:"",password:"",confirmation:""}),o=Object(i.a)(l,2),d=o[0],j=o[1],b=function(e){var t=e.target,a=t.name,c=t.value;j(Object(k.a)(Object(k.a)({},d),{},Object(w.a)({},a,c)))};return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{className:"text-center mt-5 mb-4",children:Object(c.jsx)("h2",{"data-testid":"userNewtitle",children:"\u65b0\u898f\u4f1a\u54e1\u767b\u9332"})}),Object(c.jsx)(u.a,{children:Object(c.jsxs)(O.a,{md:{span:4,offset:4},className:"pt-3 pl-5 pr-5 pb-4 bg-light shadow",children:[Object(c.jsx)(p.a,{variant:"secondary",onClick:function(){e.history.push("/login")},className:"mb-3",children:"\u623b\u308b"}),Object(c.jsxs)(C.a,{onSubmit:function(e){if(e.preventDefault(),d.password===d.confirmation){var t={name:d.name,email:d.email,password:d.password,confirmation:d.confirmation};r({display:"none"}),f.a.post("https://uematsu-backend.herokuapp.com/users",t).then((function(e){alert(e.data.message),j({name:"",email:"",password:"",confirmation:""})})).catch((function(){alert("error")}))}else r({display:"block"})},children:[Object(c.jsxs)(C.a.Group,{children:[Object(c.jsx)(C.a.Label,{children:"\u304a\u540d\u524d"}),Object(c.jsx)(C.a.Control,{type:"text",name:"name",placeholder:"*\u5fc5\u9808\u3067\u3059\u3002",className:"h8",required:!0,onChange:b,value:d.name})]}),Object(c.jsxs)(C.a.Group,{children:[Object(c.jsx)(C.a.Label,{children:"\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9"}),Object(c.jsx)(C.a.Control,{type:"email",name:"email",placeholder:"*\u5fc5\u9808\u3067\u3059\u3002",required:!0,onChange:b,value:d.email})]}),Object(c.jsxs)(C.a.Group,{children:[Object(c.jsx)(C.a.Label,{children:"\u30d1\u30b9\u30ef\u30fc\u30c9"}),Object(c.jsx)("br",{}),Object(c.jsx)("div",{class:"balloon1",style:s,children:Object(c.jsx)("p",{children:"\u30d1\u30b9\u30ef\u30fc\u30c9\u304c\u4e00\u81f4\u3057\u3066\u307e\u305b\u3093\u3002"})}),Object(c.jsx)(C.a.Control,{type:"password",name:"password",placeholder:"*\u5fc5\u9808\u3067\u3059\u3002",required:!0,onChange:b,value:d.password})]}),Object(c.jsxs)(C.a.Group,{children:[Object(c.jsx)(C.a.Label,{children:"\u30d1\u30b9\u30ef\u30fc\u30c9\u78ba\u8a8d"}),Object(c.jsx)("br",{}),Object(c.jsx)("div",{class:"balloon1",style:s,children:Object(c.jsx)("p",{children:"\u30d1\u30b9\u30ef\u30fc\u30c9\u304c\u4e00\u81f4\u3057\u3066\u307e\u305b\u3093\u3002"})}),Object(c.jsx)(C.a.Control,{type:"password",name:"confirmation",placeholder:"*\u3082\u3046\u4e00\u5ea6\u5165\u529b\u304f\u3060\u3055\u3044\u3002",required:!0,onChange:b,value:d.confirmation})]}),Object(c.jsx)(p.a,{type:"submit",variant:"primary",className:"btn-block mt-4",children:"\u9001\u4fe1"})]})]})})]})})),J=Object(o.e)((function(e){var t=function(){var t=[];return JSON.parse(localStorage.getItem("users")).forEach((function(a){a.id===e.id&&t.push(a)})),t}(),a=Object(n.useState)({display:"none"}),s=Object(i.a)(a,2),r=s[0],l=s[1],o=Object(n.useState)({name:t[0].name,email:t[0].email,password:"",confirmation:""}),d=Object(i.a)(o,2),j=d[0],b=d[1],h=function(e){var t=e.target,a=t.name,c=t.value;b(Object(k.a)(Object(k.a)({},j),{},Object(w.a)({},a,c)))};return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{className:"text-center mt-5 mb-4",children:Object(c.jsxs)("h2",{children:[j.name,"\u60c5\u5831\u7de8\u96c6"]})}),Object(c.jsx)(u.a,{children:Object(c.jsxs)(O.a,{md:{span:4,offset:4},className:"pt-3 pl-5 pr-5 pb-4 bg-light shadow",children:[Object(c.jsx)(p.a,{variant:"secondary",onClick:function(){e.history.push("/")},className:"mb-3",children:"\u623b\u308b"}),Object(c.jsxs)(C.a,{onSubmit:function(t){if(t.preventDefault(),j.password===j.confirmation){var a={name:j.name,email:j.email,password:j.password,confirmation:j.confirmation};l({display:"none"}),f.a.patch("https://uematsu-backend.herokuapp.com/users/".concat(e.id),a).then((function(e){alert(e.data.message),b({name:"",email:"",password:"",confirmation:""})})).catch((function(){alert("error")}))}else l({display:"block"})},children:[Object(c.jsxs)(C.a.Group,{children:[Object(c.jsx)(C.a.Label,{children:"\u304a\u540d\u524d"}),Object(c.jsx)(C.a.Control,{type:"text",name:"name",placeholder:"*\u5fc5\u9808\u3067\u3059\u3002",className:"h8",required:!0,onChange:h,value:j.name})]}),Object(c.jsxs)(C.a.Group,{children:[Object(c.jsx)(C.a.Label,{children:"\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9"}),Object(c.jsx)(C.a.Control,{type:"email",name:"email",placeholder:"*\u5fc5\u9808\u3067\u3059\u3002",required:!0,onChange:h,value:j.email})]}),Object(c.jsxs)(C.a.Group,{children:[Object(c.jsx)(C.a.Label,{children:"\u30d1\u30b9\u30ef\u30fc\u30c9"}),Object(c.jsx)("br",{}),Object(c.jsx)("div",{class:"balloon1",style:r,children:Object(c.jsx)("p",{children:"\u30d1\u30b9\u30ef\u30fc\u30c9\u304c\u4e00\u81f4\u3057\u3066\u307e\u305b\u3093\u3002"})}),Object(c.jsx)(C.a.Control,{type:"password",name:"password",placeholder:"*\u5fc5\u9808\u3067\u3059\u3002",required:!0,onChange:h,value:j.password})]}),Object(c.jsxs)(C.a.Group,{children:[Object(c.jsx)(C.a.Label,{children:"\u30d1\u30b9\u30ef\u30fc\u30c9\u78ba\u8a8d"}),Object(c.jsx)("br",{}),Object(c.jsx)("div",{class:"balloon1",style:r,children:Object(c.jsx)("p",{children:"\u30d1\u30b9\u30ef\u30fc\u30c9\u304c\u4e00\u81f4\u3057\u3066\u307e\u305b\u3093\u3002"})}),Object(c.jsx)(C.a.Control,{type:"password",name:"confirmation",placeholder:"*\u3082\u3046\u4e00\u5ea6\u5165\u529b\u304f\u3060\u3055\u3044\u3002",required:!0,onChange:h,value:j.confirmation})]}),Object(c.jsx)(p.a,{type:"submit",variant:"primary",className:"btn-block mt-4",children:"\u9001\u4fe1"})]})]})})]})})),F=Object(o.e)(Object(v.b)((function(e){return e}))((function(e){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{className:"text-center mt-5 mb-4  font-weight-bold",children:Object(c.jsxs)("h2",{children:[e.userData[0].name,"\u3055\u3093\u30da\u30fc\u30b8"]})}),Object(c.jsx)(u.a,{children:Object(c.jsx)(O.a,{md:{span:8,offset:2},className:"pt-3 pl-5 pr-5 pb-4 bg-light shadow",children:Object(c.jsxs)(u.a,{children:[Object(c.jsxs)(O.a,{md:{span:7},children:[Object(c.jsx)("p",{className:"font-weight-bold",children:"\u4f1a\u54e1\u60c5\u5831"}),Object(c.jsx)(x.a,{bordered:!0,className:"mt-3",children:Object(c.jsxs)("tbody",{children:[Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{className:"bg-primary text-white w-50",children:"\u540d\u524d"}),Object(c.jsx)("td",{children:e.userData[0].name})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{className:"bg-primary text-white w-50",children:"\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9"}),Object(c.jsx)("td",{children:e.userData[0].email})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{className:"bg-primary text-white w-50",children:"\u3054\u5229\u7528\u958b\u59cb\u65e5"}),Object(c.jsx)("td",{children:e.userData[0].created_at})]})]})})]}),Object(c.jsxs)(O.a,{md:{span:5},children:[Object(c.jsx)("p",{className:"font-weight-bold",children:"\u3054\u5229\u7528\u72b6\u6cc1"}),Object(c.jsx)(x.a,{bordered:!0,className:"mt-3",children:Object(c.jsxs)("tbody",{children:[Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{className:"bg-primary text-white w-50",children:"\u3054\u5229\u7528\u56de\u6570"}),Object(c.jsx)("td",{})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{className:"bg-primary text-white w-50",children:"\u6700\u7d42\u3054\u5229\u7528\u65e5"}),Object(c.jsx)("td",{})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{className:"bg-primary text-white w-50",children:"\u73fe\u5728\u6ce8\u6587\u6709\u7121"}),Object(c.jsx)("td",{})]})]})})]})]})})})]})}))),_=a(128),B={border:"none",background:"none",color:"#333399",outline:"none",fontWeight:"bold",textDecoration:"underline"};var T=Object(o.e)(Object(v.b)((function(e){return e}))((function(e){var t=JSON.parse(localStorage.getItem("items")),a=[],s=Object(n.useState)(t||[]),r=Object(i.a)(s,2),l=r[0],o=r[1],d=Object(n.useState)({status:!1,data:[]}),j=Object(i.a)(d,2),b=j[0],g=j[1];function v(){return(v=Object(m.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("https://uematsu-backend.herokuapp.com/items").then((function(e){localStorage.removeItem("items"),o(e.data),localStorage.setItem("items",JSON.stringify(e.data))})).catch((function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useState)(function(){return v.apply(this,arguments)}()),Object(n.useEffect)((function(){0===e.userData.length&&e.history.push("/login")})),Object(c.jsxs)("div",{className:!0,children:[Object(c.jsx)("div",{className:"text-center mt-5 mb-4",children:Object(c.jsx)("h2",{"data-testid":"itemstitle",children:"\u5546\u54c1\u4e00\u89a7"})}),Object(c.jsx)(u.a,{children:Object(c.jsxs)(O.a,{md:{span:8,offset:2},className:"p-5 bg-light shadow",children:[Object(c.jsx)(p.a,{variant:"primary",onClick:function(){e.history.push("/items_new")},children:"\u65b0\u898f\u5546\u54c1\u767b\u9332"}),l.length>0?Object(c.jsxs)(x.a,{striped:!0,bordered:!0,hover:!0,children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{className:"text-center align-middle bg-dark text-white",children:"\u5546\u54c1\u540d"}),Object(c.jsx)("th",{className:"text-center align-middle bg-dark text-white",children:"\u4fa1\u683c"}),Object(c.jsx)("th",{className:"text-center align-middle bg-dark text-white",children:"\u30ab\u30c6\u30b4\u30ea\u30fc"}),Object(c.jsx)("th",{className:"text-center align-middle bg-dark text-white"})]})}),Object(c.jsx)("tbody",{children:l.map((function(t,n){return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:Object(c.jsx)("button",{style:B,onClick:function(e){return function(e){a.splice(0),a.push(e),g({status:!0,data:a})}(t)},children:t.name})}),Object(c.jsx)("td",{className:"text-right text-danger",children:t.price}),Object(c.jsx)("td",{children:t.category}),Object(c.jsxs)("td",{children:[Object(c.jsx)(p.a,{variant:"primary",onClick:function(a){return c=t.id,e.itemEditIdget(c),void e.history.push("/items_edit");var c},className:"ml-3",children:"\u7de8\u96c6"}),Object(c.jsx)(p.a,{variant:"danger",onClick:function(e){return function(e){window.confirm("\u524a\u9664\u3057\u3066\u3088\u308d\u3057\u3044\u3067\u3059\u304b\uff1f")&&f.a.delete("https://uematsu-backend.herokuapp.com/items/".concat(e)).then((function(e){alert(e.data.message)})).catch((function(e){console.log(e)}))}(t.id)},className:"ml-3",children:"\u524a\u9664"})]})]})}))})]}):Object(c.jsx)("div",{className:"text-center bg-info text-white font-weight-bold p-5 mt-3",children:"\u30c7\u30fc\u30bf\u3092\u8868\u793a\u3067\u304d\u307e\u305b\u3093\u3002"})]})}),Object(c.jsxs)(_.a,{show:b.status,onHide:function(){return g({status:!1,data:b.data})},backdrop:"static",keyboard:!1,children:[Object(c.jsx)(_.a.Header,{closeButton:!0,children:Object(c.jsx)(_.a.Title,{className:"font-weight-bold",children:0===b.data.length?"":"".concat(b.data[0].name,"\u8a73\u7d30")})}),Object(c.jsx)(_.a.Body,{children:Object(c.jsx)(x.a,{bordered:!0,children:Object(c.jsxs)("tbody",{children:[Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{className:"bg-primary text-white",children:"\u5546\u54c1\u540d"}),Object(c.jsx)("td",{className:"text-center font-weight-bold",children:0===b.data.length?"":b.data[0].name})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{className:"bg-primary text-white",children:"\u4fa1\u683c"}),Object(c.jsx)("td",{className:"text-center font-weight-bold",children:0===b.data.length?"":b.data[0].price})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{className:"bg-primary text-white",children:"\u30ab\u30c6\u30b4\u30ea\u30fc"}),Object(c.jsx)("td",{className:"text-center font-weight-bold",children:0===b.data.length?"":b.data[0].category})]}),Object(c.jsx)("tr",{children:Object(c.jsx)("th",{colSpan:"2",className:"text-center bg-primary text-white",children:"\u5546\u54c1\u8aac\u660e"})}),Object(c.jsx)("tr",{children:Object(c.jsx)("td",{colSpan:"2",children:0===b.data.length?"":b.data[0].info})})]})})})]})]})}))),H=Object(o.e)((function(e){var t=Object(n.useState)({display:"none"}),a=Object(i.a)(t,2),s=a[0],r=a[1],l=Object(n.useState)({name:"",price:"",category:"",info:""}),o=Object(i.a)(l,2),d=o[0],j=o[1],b=function(e){var t=e.target,a=t.name,c=t.value;j(Object(k.a)(Object(k.a)({},d),{},Object(w.a)({},a,c)))};return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{className:"text-center mt-5 mb-4",children:Object(c.jsx)("h2",{"data-testid":"userNewtitle",children:"\u65b0\u898f\u5546\u54c1\u767b\u9332"})}),Object(c.jsx)(u.a,{children:Object(c.jsxs)(O.a,{md:{span:4,offset:4},className:"pt-3 pl-5 pr-5 pb-4 bg-light shadow",children:[Object(c.jsx)(p.a,{variant:"secondary",onClick:function(){e.history.push("/items")},className:"mb-3",children:"\u623b\u308b"}),Object(c.jsxs)(C.a,{onSubmit:function(e){if(e.preventDefault(),""===d.category)r({display:"block"});else{var t={name:d.name,price:d.price,category:d.category,info:d.info};f.a.post("https://uematsu-backend.herokuapp.com/items",t).then((function(e){alert(e.data.message),j({name:"",price:"",category:"",info:""})})).catch((function(){alert("error")})),r({display:"none"})}},children:[Object(c.jsxs)(C.a.Group,{children:[Object(c.jsx)(C.a.Label,{children:"\u5546\u54c1\u540d"}),Object(c.jsx)(C.a.Control,{type:"text",name:"name",placeholder:"*\u5fc5\u9808\u3067\u3059\u3002",className:"h8",required:!0,onChange:b,value:d.name})]}),Object(c.jsxs)(C.a.Group,{children:[Object(c.jsx)(C.a.Label,{children:"\u4fa1\u683c"}),Object(c.jsx)(C.a.Control,{type:"price",name:"price",placeholder:"*\u5fc5\u9808\u3067\u3059\u3002",required:!0,onChange:b,value:d.price})]}),Object(c.jsxs)(C.a.Group,{children:[Object(c.jsx)(C.a.Label,{children:"\u30ab\u30c6\u30b4\u30ea\u30fc"}),Object(c.jsx)("div",{class:"balloon1",style:s,children:Object(c.jsx)("p",{children:"\u9078\u629e\u3057\u3066\u304f\u3060\u3055\u3044\u3002"})}),Object(c.jsxs)(C.a.Control,{as:"select",name:"category",value:d.category,onChange:b,children:[Object(c.jsx)("option",{value:"",children:"\u9078\u629e\u3057\u3066\u304f\u3060\u3055\u3044  "}),["\u9752\u9b5a","\u767d\u8eab\u9b5a","\u5927\u578b\u9b5a","\u3044\u304b\u3001\u30bf\u30b3","\u8c9d","\u305d\u306e\u4ed6"].map((function(e,t){return Object(c.jsx)("option",{value:e,children:e},t)}))]})]}),Object(c.jsxs)(C.a.Group,{children:[Object(c.jsx)(C.a.Label,{children:"\u5546\u54c1\u8aac\u660e"}),Object(c.jsx)("textarea",{name:"info",cols:"30",rows:"10",value:d.info,onChange:b,className:"form-control",children:d.info})]}),Object(c.jsx)(p.a,{type:"submit",variant:"primary",className:"btn-block mt-4",children:"\u9001\u4fe1"})]})]})})]})})),P=Object(o.e)((function(e){var t=function(){var t=[];return JSON.parse(localStorage.getItem("items")).forEach((function(a){a.id===e.id&&t.push(a)})),t}(),a=Object(n.useState)({display:"none"}),s=Object(i.a)(a,2),r=s[0],l=s[1],o=Object(n.useState)({name:t[0].name,price:t[0].price,category:t[0].category,info:t[0].info}),d=Object(i.a)(o,2),j=d[0],b=d[1],h=function(e){var t=e.target,a=t.name,c=t.value;b(Object(k.a)(Object(k.a)({},j),{},Object(w.a)({},a,c)))};return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{className:"text-center mt-5 mb-4",children:Object(c.jsxs)("h2",{"data-testid":"userNewtitle",children:[j.name,"\u7de8\u96c6"]})}),Object(c.jsx)(u.a,{children:Object(c.jsxs)(O.a,{md:{span:4,offset:4},className:"pt-3 pl-5 pr-5 pb-4 bg-light shadow",children:[Object(c.jsx)(p.a,{variant:"secondary",onClick:function(){e.history.push("/items")},className:"mb-3",children:"\u623b\u308b"}),Object(c.jsxs)(C.a,{onSubmit:function(t){if(t.preventDefault(),""===j.category)l({display:"block"});else{var a={name:j.name,price:j.price,category:j.category,info:j.info};f.a.patch("https://uematsu-backend.herokuapp.com/items/".concat(e.id),a).then((function(t){alert(t.data.message),b({name:"",price:"",category:"",info:""}),e.history.push("/items")})).catch((function(){alert("error")})),l({display:"none"})}},children:[Object(c.jsxs)(C.a.Group,{children:[Object(c.jsx)(C.a.Label,{children:"\u5546\u54c1\u540d"}),Object(c.jsx)(C.a.Control,{type:"text",name:"name",placeholder:"*\u5fc5\u9808\u3067\u3059\u3002",className:"h8",required:!0,onChange:h,value:j.name})]}),Object(c.jsxs)(C.a.Group,{children:[Object(c.jsx)(C.a.Label,{children:"\u4fa1\u683c"}),Object(c.jsx)(C.a.Control,{type:"price",name:"price",placeholder:"*\u5fc5\u9808\u3067\u3059\u3002",required:!0,onChange:h,value:j.price})]}),Object(c.jsxs)(C.a.Group,{children:[Object(c.jsx)(C.a.Label,{children:"\u30ab\u30c6\u30b4\u30ea\u30fc"}),Object(c.jsx)("div",{class:"balloon1",style:r,children:Object(c.jsx)("p",{children:"\u9078\u629e\u3057\u3066\u304f\u3060\u3055\u3044\u3002"})}),Object(c.jsxs)(C.a.Control,{as:"select",name:"category",value:j.category,onChange:h,children:[Object(c.jsx)("option",{value:"",children:"\u9078\u629e\u3057\u3066\u304f\u3060\u3055\u3044  "}),["\u9752\u9b5a","\u767d\u8eab\u9b5a","\u5927\u578b\u9b5a","\u3044\u304b\u3001\u30bf\u30b3","\u8c9d","\u305d\u306e\u4ed6"].map((function(e,t){return Object(c.jsx)("option",{value:e,children:e},t)}))]})]}),Object(c.jsxs)(C.a.Group,{children:[Object(c.jsx)(C.a.Label,{children:"\u5546\u54c1\u8aac\u660e"}),Object(c.jsx)("textarea",{name:"info",cols:"30",rows:"10",value:j.info,onChange:h,className:"form-control",children:j.info})]}),Object(c.jsx)(p.a,{type:"submit",variant:"primary",className:"btn-block mt-4",children:"\u9001\u4fe1"})]})]})})]})}));var U=Object(o.e)(Object(v.b)((function(e){return e}))((function(e){var t=Object(n.useState)({data:localStorage.getItem("orders")?JSON.parse(localStorage.getItem("orders")):[]}),a=Object(i.a)(t,2),s=a[0],r=a[1];function l(){return(l=Object(m.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("https://uematsu-backend.herokuapp.com/orders").then((function(e){localStorage.setItem("orders",JSON.stringify(e.data))})).catch((function(e){console.log(e)}));case 2:r({data:JSON.parse(localStorage.getItem("orders"))});case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useState)(function(){return l.apply(this,arguments)}()),Object(n.useEffect)((function(){0===e.userData.length&&e.history.push("/login")})),Object(c.jsxs)("div",{className:"image",children:[Object(c.jsx)("div",{className:"text-center mt-5 mb-4",children:Object(c.jsx)("h2",{"data-testid":"usertitle",children:"\u5e97\u982d\u5546\u54c1\u4e00\u89a7"})}),Object(c.jsx)(u.a,{children:Object(c.jsxs)(O.a,{md:{span:8,offset:2},className:"p-5 bg-light shadow",children:[Object(c.jsx)(p.a,{variant:"primary",onClick:function(){return e.history.push("orders_new")},children:"\u5e97\u982d\u5546\u54c1\u8ffd\u52a0"}),s.data.length>0?Object(c.jsxs)(x.a,{striped:!0,bordered:!0,hover:!0,children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{className:"text-center align-middle bg-dark text-white",children:"\u5546\u54c1\u540d"}),Object(c.jsx)("th",{className:"text-center align-middle bg-dark text-white",children:"\u4fa1\u683c"}),Object(c.jsx)("th",{className:"text-center align-middle bg-dark text-white",children:"\u5408\u8a08\u91d1\u984d"}),Object(c.jsx)("th",{className:"text-center align-middle bg-dark text-white",children:"\u5728\u5eab"}),Object(c.jsx)("th",{className:"text-center align-middle bg-dark text-white"})]})}),Object(c.jsx)("tbody",{children:s.data.map((function(t){return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{className:"text-center align-middle",children:t.name}),Object(c.jsx)("td",{className:"text-center align-middle",children:t.price}),Object(c.jsx)("td",{className:"text-center align-middle",children:Number(t.price)*Number(t.stock)}),Object(c.jsx)("td",{className:"text-center align-middle",children:t.stock}),Object(c.jsxs)("td",{children:[Object(c.jsx)(p.a,{variant:"primary",onClick:function(a){return c=t.id,e.editIdget(c),void e.history.push("order-edit");var c},className:"ml-3",children:"\u7de8\u96c6"}),Object(c.jsx)(p.a,{variant:"danger",className:"ml-3",children:"\u524a\u9664"})]})]},t.name)}))})]}):Object(c.jsx)("div",{children:"\u30c7\u30fc\u30bf\u306a\u3057"})]})})]})}))),W=a(74),M=Object(o.e)((function(e){var t=Object(n.useState)({price:"",stock:""}),a=Object(i.a)(t,2),s=a[0],r=a[1],l=Object(n.useState)(null),o=Object(i.a)(l,2),d=o[0],j=o[1],b=function(){var e=JSON.parse(localStorage.getItem("items"));e||f.a.get("https://uematsu-backend.herokuapp.com/items").then((function(e){localStorage.removeItem("items"),localStorage.setItem("items",JSON.stringify(e.data))})).catch((function(e){console.log(e)}));var t=[];return e.forEach((function(e){t.push({value:e.name,label:e.name})})),t}(),h=function(e){var t=e.target,a=t.name,c=t.value;r(Object(k.a)(Object(k.a)({},s),{},Object(w.a)({},a,c)))};return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{className:"text-center mt-5 mb-4",children:Object(c.jsx)("h2",{"data-testid":"userNewtitle",children:"\u5e97\u982d\u5546\u54c1\u8ffd\u52a0"})}),Object(c.jsx)(u.a,{children:Object(c.jsxs)(O.a,{md:{span:4,offset:4},className:"pt-3 pl-5 pr-5 pb-4 bg-light shadow",children:[Object(c.jsx)(p.a,{variant:"secondary",className:"mb-3",children:"\u623b\u308b"}),Object(c.jsxs)(C.a,{onSubmit:function(e){e.preventDefault();var t={name:d.value,price:s.price,stock:s.stock};f.a.post("https://uematsu-backend.herokuapp.com/orders",t).then((function(e){alert(e.data.message),r({price:"",stock:""}),j(null)})).catch((function(){alert("error")}))},children:[Object(c.jsxs)(C.a.Group,{children:[Object(c.jsx)(C.a.Label,{children:"\u5546\u54c1\u540d"}),Object(c.jsx)(W.a,{options:b,defaultvalue:d,onChange:j})]}),Object(c.jsxs)(C.a.Group,{children:[Object(c.jsx)(C.a.Label,{children:"\u4fa1\u683c"}),Object(c.jsx)(C.a.Control,{type:"number",name:"price",placeholder:"*\u5fc5\u9808\u3067\u3059\u3002",value:s.price,required:!0,onChange:h})]}),Object(c.jsxs)(C.a.Group,{children:[Object(c.jsx)(C.a.Label,{children:"\u5728\u5eab"}),Object(c.jsx)(C.a.Control,{type:"number",name:"stock",value:s.stock,onChange:h})]}),Object(c.jsx)(p.a,{type:"submit",variant:"primary",className:"btn-block mt-4",children:"\u9001\u4fe1"})]})]})})]})}));var z=Object(v.b)((function(e){return e}))((function(e){var t=Object(n.useState)({editId:0,deleteId:0,itemEditId:0}),a=Object(i.a)(t,2),s=a[0],r=a[1];return Object(c.jsxs)(l.a,{children:[Object(c.jsxs)(d.a,{bg:"dark",children:[Object(c.jsx)(d.a.Brand,{href:"#home",className:"text-white font-weight-bold",children:"\u52a0\u5de5\u4f9d\u983c\u30a2\u30d7\u30ea"}),Object(c.jsxs)(j.a,{className:"mr-auto",children:[Object(c.jsx)(j.a.Item,{className:"text-light",children:e.userData.length>0?"".concat(e.userData[0].name,"\u3055\u3093"):""}),Object(c.jsx)(j.a.Item,{children:Object(c.jsx)(l.b,{to:"/",className:"text-light p-3",children:"HOME"})}),Object(c.jsx)(j.a.Item,{children:Object(c.jsx)(l.b,{to:"/items",className:"text-light p-3",children:"\u5546\u54c1\u4e00\u89a7"})}),Object(c.jsx)(j.a.Item,{children:Object(c.jsx)(l.b,{to:"/orders",className:"text-light p-3",children:"\u5e97\u982d\u5546\u54c1\u4e00\u89a7"})})]}),Object(c.jsx)(j.a,{className:"mr-right",children:e.userData.length>0?Object(c.jsx)(j.a.Item,{children:Object(c.jsx)("button",{className:"logout",onClick:function(){var t={type:"LOGOUT"};e.dispatch(t)},"data-testid":"logintrue",children:"\u30ed\u30b0\u30a2\u30a6\u30c8"})}):Object(c.jsx)(j.a.Item,{children:Object(c.jsx)(l.b,{to:"/login",className:"text-light p-3","data-testid":"loginfalse",children:"\u30ed\u30b0\u30a4\u30f3"})})})]}),Object(c.jsx)(o.a,{exact:!0,path:"/",render:function(){return Object(c.jsx)(N,{editIdget:function(e){return function(e){r({editId:e,deleteId:s.deleteId,itemEditId:s.itemEditId})}(e)}})}}),Object(c.jsx)(o.a,{path:"/login",render:function(){return Object(c.jsx)(q,{})}}),Object(c.jsx)(o.a,{path:"/users/new",component:E}),Object(c.jsx)(o.a,{path:"/users/edit",render:function(){return Object(c.jsx)(J,{id:s.editId})}}),Object(c.jsx)(o.a,{path:"/users/show",component:F}),Object(c.jsx)(o.a,{path:"/items",render:function(){return Object(c.jsx)(T,{itemEditIdget:function(e){return function(e){r({editId:s.editId,deleteId:s.deleteId,itemEditId:e})}(e)}})}}),Object(c.jsx)(o.a,{path:"/items_new",component:H}),Object(c.jsx)(o.a,{path:"/items_edit",render:function(){return Object(c.jsx)(P,{id:s.itemEditId})}}),Object(c.jsx)(o.a,{path:"/orders",component:U}),Object(c.jsx)(o.a,{path:"/orders_new",component:M})]})})),A=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,132)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),s(e),r(e)}))};r.a.render(Object(c.jsx)(v.a,{store:D,children:Object(c.jsx)(z,{})}),document.getElementById("root")),A()},37:function(e,t,a){},42:function(e,t,a){},80:function(e,t,a){}},[[122,1,2]]]);
//# sourceMappingURL=main.8898b8d4.chunk.js.map