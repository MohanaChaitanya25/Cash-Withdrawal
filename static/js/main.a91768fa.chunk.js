(this["webpackJsonpcash-withdrawal"]=this["webpackJsonpcash-withdrawal"]||[]).push([[0],{12:function(e,a,n){},14:function(e,a,n){},15:function(e,a,n){},16:function(e,a,n){"use strict";n.r(a);var c=n(1),s=n.n(c),t=n(3),i=n.n(t),r=n(4),l=n(5),o=n(7),d=n(6),u=(n(12),n(0)),h=function(e){var a=e.rupees,n=e.withDrawMoney;return Object(u.jsx)("li",{className:"listItem",children:Object(u.jsx)("button",{type:"button",value:a,className:"rupees-item",onClick:function(){n(a)},children:a})})},j=(n(14),[{id:1,rupees:50},{id:2,rupees:100},{id:3,rupees:200},{id:4,rupees:500}]),b=function(e){Object(o.a)(n,e);var a=Object(d.a)(n);function n(){var e;Object(r.a)(this,n);for(var c=arguments.length,s=new Array(c),t=0;t<c;t++)s[t]=arguments[t];return(e=a.call.apply(a,[this].concat(s))).state={balance:"2000"},e.withDrawMoney=function(a){var n=e.state.balance;console.log(a),n-a>=0&&(e.setState({balance:parseInt(n)-a}),console.log("1 "))},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this,a=this.state.balance;return Object(u.jsx)("div",{className:"cashWithdrawal-bg-container",children:Object(u.jsxs)("div",{className:"cashWithdrawal-container",children:[Object(u.jsxs)("div",{className:"name-container",children:[Object(u.jsx)("div",{className:"name-container-logo",children:"S"}),Object(u.jsx)("h1",{className:"name-container-name",children:"Sarah Williams"})]}),Object(u.jsxs)("div",{className:"your-balance-section",children:[Object(u.jsx)("p",{className:"your-balance-heading",children:"Your Balance"}),Object(u.jsx)("p",{className:"your-balance",children:a})]}),Object(u.jsx)("div",{className:"inRupees-section",children:Object(u.jsx)("p",{className:"in-rupees-name",children:"In Rupees"})}),Object(u.jsxs)("div",{className:"withdraw-section",children:[Object(u.jsx)("p",{className:"withdraw-heading",children:"Withdraw"}),Object(u.jsx)("p",{className:"choose-sum-name",children:"CHOOSE SUM (IN RUPEES)"})]}),Object(u.jsx)("div",{children:Object(u.jsx)("ul",{className:"rupees-container",children:j.map((function(a){return Object(u.jsx)(h,{rupees:a.rupees,withDrawMoney:e.withDrawMoney},a.id)}))})})]})})}}]),n}(c.Component),m=b,p=(n(15),[{id:1,value:50},{id:2,value:100},{id:3,value:200},{id:4,value:500}]),O=function(){return Object(u.jsx)(m,{denominationsList:p})};i.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(O,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.a91768fa.chunk.js.map