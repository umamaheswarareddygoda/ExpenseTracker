(this["webpackJsonpexpense-tracker"]=this["webpackJsonpexpense-tracker"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(1),c=n.n(s),a=n(7),r=n.n(a),i=(n(12),n.p,n(13),n(14),n(2)),l=n(3),o=n(5),u=n(4),j=(n(15),n(16),n(17),n(0));var d=function(e){var t,n=parseInt(e.invested)-parseInt(e.returns);return console.log({profit:n}),t=n>0?Object(j.jsxs)("p",{id:"loss",children:["PENDING INVESTMENT",Object(j.jsx)("br",{}),n," \u20b9"]}):Object(j.jsxs)("p",{id:"profit",children:["PROFIT",Object(j.jsx)("br",{}),-1*n," \u20b9"]}),Object(j.jsx)("div",{children:t})},h=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(e){var s;return Object(i.a)(this,n),(s=t.call(this,e)).valChange=function(e){""===e.target.value?s.setState({value:""}):"-"===e.target.value?s.setState({value:"-"}):isNaN(e.target.value)||s.setState({value:parseInt(e.target.value)})},s.comChange=function(e){s.setState({comments:e.target.value})},s.submitHandler=function(e){if(!isNaN(s.state.value)){var t=parseInt(s.state.value),n={value:t,comments:s.state.comments};s.props.func(n),s.setState({value:""}),s.setState({comments:""}),console.log(t)}e.preventDefault()},s.state={value:"",comments:""},s}return Object(l.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("form",{children:[Object(j.jsx)("input",{type:"text",value:this.state.value,onChange:this.valChange,placeholder:"TRANSACTION AMOUNT(\u20b9)"}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("input",{type:"text",value:this.state.comments,onChange:this.comChange,placeholder:"COMMENTS"}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("button",{onClick:this.submitHandler,children:"ADD"})]})}}]),n}(s.Component);n(19);var v=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(e){var s;return Object(i.a)(this,n),(s=t.call(this,e)).transview=function(){var e=s.state.x;e+=1,e%=2,s.setState({x:e}),console.log("kefb")},s.addVal=function(e){console.log(e);var t=parseInt(s.state.invested)-e.value,n=parseInt(s.state.returns)+e.value;e.value>=0?s.setState({returns:n}):s.setState({invested:t});e.value,e.comments;var c=s.state.Trans;c.push(e),console.log(c),s.setState({Trans:c}),console.log(s.state.Trans[0].comments),console.log(s.state.returns),console.log(s.state.invested)},s.deltrans=function(e){console.log(e)},s.state={invested:0,returns:0,Trans:[],x:1},s}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state.Trans,t=[],n=e.length-5;for(n<0&&(n=0);n<e.length;n++)e[n].value>=0?t.push(Object(j.jsxs)("p",{id:"profit1",children:[e[n].value," \u20b9 -> ",e[n].comments]})):t.push(Object(j.jsxs)("p",{id:"loss1",children:[-1*e[n].value," \u20b9 -> ",e[n].comments]}));var s=[];for(n=0;n<e.length;n++)e[n].value>=0?s.push(Object(j.jsxs)("p",{id:"profit1",children:[e[n].value," \u20b9 -> ",e[n].comments]},n)):s.push(Object(j.jsxs)("p",{id:"loss1",children:[-1*e[n].value," \u20b9 -> ",e[n].comments]},n));return 1===this.state.x?Object(j.jsxs)("div",{className:"transac",children:[Object(j.jsxs)("div",{className:"transac1",children:[Object(j.jsxs)("ul",{children:[Object(j.jsxs)("li",{id:"return",children:["RETURNS ",Object(j.jsxs)("p",{id:"r1",children:[this.state.returns," \u20b9"]})]}),Object(j.jsxs)("li",{id:"invest",children:["INVESTED ",Object(j.jsxs)("p",{id:"i1",children:[this.state.invested," \u20b9"]})]})]}),Object(j.jsx)(d,{invested:this.state.invested,returns:this.state.returns}),Object(j.jsx)("p",{children:"ADD TRANSACTION"}),Object(j.jsx)(h,{func:this.addVal})]}),Object(j.jsxs)("div",{id:"xyz",children:[Object(j.jsx)("h2",{id:"tr",children:"LAST 5 TRANSACTIONS"}),t]}),Object(j.jsx)("button",{id:"btn",onClick:this.transview,children:"VIEW ALL TRANSACTIONS"})]}):Object(j.jsxs)("div",{children:[s,Object(j.jsx)("button",{onClick:this.transview,children:"GO BACK"})]})}}]),n}(s.Component),b=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(j.jsx)("div",{className:"mainBox",id:"box1",children:Object(j.jsx)(v,{invested:"5000",returns:"2000"})})}}]),n}(s.Component);var O=function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h1",{children:"EXPENSE TRACKER"}),Object(j.jsx)(b,{})]})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),s(e),c(e),a(e),r(e)}))};r.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(O,{})}),document.getElementById("root")),x()}],[[20,1,2]]]);
//# sourceMappingURL=main.637c29b0.chunk.js.map