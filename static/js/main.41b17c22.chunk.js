(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var s=n(3),r=n.n(s),o=n(6),c=n(4),a=n(5),i=n(8),l=n(7),u=n(1),j=n.n(u),b=(n(13),n(0)),d=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],h=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var s=arguments.length,r=new Array(s),o=0;o<s;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={goodsServer:d,isStarted:!1,isReversed:!1,isSorted:!1,sortBy:"",value:1},e.start=function(){e.setState({isStarted:!0})},e.reverse=function(){e.setState((function(e){return{isReversed:!e.isReversed}}))},e.reset=function(){e.setState({isReversed:!1,isSorted:!1})},e.sortByName=function(){e.setState({sortBy:"name",isSorted:!0})},e.sortByLength=function(){e.setState({sortBy:"length",isSorted:!0})},e.onChange=function(t){e.setState({value:Number(t.target.value)})},e}return Object(a.a)(n,[{key:"render",value:function(){var e=this.state,t=e.goodsServer,n=e.isStarted,s=e.isReversed,r=e.isSorted,c=e.sortBy,a=e.value,i=Object(o.a)(t);return i.length=a,r&&i.sort((function(e,t){switch(c){case"name":return e.localeCompare(t);case"length":return e.length-t.length;default:return 0}})),s&&i.reverse(),Object(b.jsxs)("div",{className:"app",children:[Object(b.jsx)("h1",{children:"Goods"}),n&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{children:Object(b.jsx)("ul",{children:i.map((function(e){return Object(b.jsx)("li",{children:e},e)}))})}),Object(b.jsxs)("div",{className:"app__buttons",children:[Object(b.jsx)("button",{className:"app__button",type:"button",onClick:this.reverse,children:"Reverse"}),Object(b.jsx)("button",{className:"app__button",type:"button",onClick:this.sortByName,children:"Sort by name"}),Object(b.jsx)("button",{className:"app__button",type:"button",onClick:this.sortByLength,children:"Sort by length"}),Object(b.jsx)("button",{className:"app__button",type:"button",onClick:this.reset,children:"Reset"}),Object(b.jsxs)("select",{name:"select",value:a,onChange:this.onChange,children:[Object(b.jsx)("option",{value:"1",children:"1"}),Object(b.jsx)("option",{value:"2",children:"2"}),Object(b.jsx)("option",{value:"3",children:"3"}),Object(b.jsx)("option",{value:"4",children:"4"}),Object(b.jsx)("option",{value:"5",children:"5"}),Object(b.jsx)("option",{value:"6",children:"6"}),Object(b.jsx)("option",{value:"7",children:"7"}),Object(b.jsx)("option",{value:"8",children:"8"}),Object(b.jsx)("option",{value:"9",children:"9"}),Object(b.jsx)("option",{value:"10",children:"10"})]})]})]}),!n&&Object(b.jsx)("button",{className:"app__button",type:"button",onClick:this.start,children:"Start"})]})}}]),n}(j.a.Component),p=h;r.a.render(Object(b.jsx)(p,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.41b17c22.chunk.js.map