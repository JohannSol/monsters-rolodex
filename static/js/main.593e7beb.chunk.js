(this["webpackJsonpmonsters-rolodex"]=this["webpackJsonpmonsters-rolodex"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),s=n(1),c=n.n(s),o=n(7),a=n.n(o),i=(n(13),n(2)),u=n(3),h=n(5),l=n(4),j=(n(14),n(15),function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(r.jsxs)("div",{className:"card-container",children:[Object(r.jsx)("img",{alt:"monster",src:"https://robohash.org/".concat(this.props.monster.id,"?set=set2")}),Object(r.jsx)("h2",{children:this.props.monster.name}),Object(r.jsx)("p",{children:this.props.monster.email})]})}}]),n}(s.Component)),d=(n(16),function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(r.jsx)("div",{className:"card-list",children:this.props.monsters.map((function(e){return Object(r.jsx)(j,{monster:e},e.id)}))})}}]),n}(s.Component)),p=(n(17),function(e){var t=e.placeholder,n=e.handleChange;return Object(r.jsx)("div",{children:Object(r.jsx)("input",{className:"search",type:"search",name:"monsters",placeholder:t,onChange:n})})}),m=function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).updateQuery=function(e){r.setState({searchField:e.target.value})},r.state={monsters:[],searchField:""},r}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})}))}},{key:"render",value:function(){var e=this.state,t=e.monsters,n=e.searchField,s=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)("h1",{className:"App-title",children:"Monsters Rolodex"}),Object(r.jsx)(p,{handleChange:this.updateQuery,placeholder:"search monsters"}),Object(r.jsx)(d,{monsters:s})]})}}]),n}(s.Component),b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,r=t.getFID,s=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),r(e),s(e),c(e),o(e)}))};a.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(m,{})}),document.getElementById("root")),b()}],[[18,1,2]]]);
//# sourceMappingURL=main.593e7beb.chunk.js.map