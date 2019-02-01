(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,a){e.exports=a(54)},29:function(e,t,a){},52:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(19),s=a.n(c),l=(a(29),a(2)),i=a(3),o=a(5),m=a(4),u=a(6),h=a(10),d=a(20),p=a(8),v=a.n(p),b=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={terms:[],termInput:"",locInput:"",location:"",invalidSearch:!1},a.handleChange=function(e){a.setState(Object(d.a)({},e.target.name,e.target.value))},a.handleAddTerm=function(e){e.preventDefault(),0!==a.state.termInput.length&&(a.state.terms.length>3?a.setState({terms:Object(h.a)(a.state.terms.slice(1)).concat([a.state.termInput]),termInput:""}):a.setState({terms:Object(h.a)(a.state.terms).concat([a.state.termInput]),termInput:""}),e.target.reset())},a.handleRemoveTerm=function(e){console.log(e);var t=a.state.terms.filter(function(t){return t!==e});a.setState({terms:t})},a.handleSetLocation=function(e){e.preventDefault(),0!==a.state.locInput.length&&a.setState({location:a.state.locInput,locInput:""})},a.handleSubmitSearch=function(e){var t=a.state.terms,n=a.state.location;if(0===t.length||""===n)return console.log("invalid search"),void a.setState({invalidSearch:!0});a.props.triggerSearch(t,n),a.setState({terms:[],termInput:"",locInput:"",location:"",invalidSearch:!1})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.state.terms.map(function(t){return r.a.createElement("div",{className:"providedTerm  ticTac",onClick:function(){return e.handleRemoveTerm(t)},key:v()()},t," ",r.a.createElement("span",{className:"tinyX"},"X"))}),a=this.state.location;return r.a.createElement("div",{className:"searchBar"},r.a.createElement("div",{className:"searchConfig"},r.a.createElement("form",{onSubmit:this.handleSetLocation},r.a.createElement("label",{className:"searchLabel"},"Set search location:"),r.a.createElement("div",{className:"inputChiclet"},r.a.createElement("input",{type:"text",name:"locInput",value:this.state.locInput,onChange:this.handleChange,className:"textInput"}),r.a.createElement("input",{type:"submit",value:"SET",className:"submitInput"})),a?r.a.createElement("div",{className:"providedLoc ticTac"}," ",a," "):""),r.a.createElement("form",{onSubmit:this.handleAddTerm},r.a.createElement("label",{className:"searchLabel"},"Add search term:"),r.a.createElement("div",{className:"inputChiclet"},r.a.createElement("input",{type:"text",name:"termInput",value:this.state.termInput,onChange:this.handleChange,className:"textInput"}),r.a.createElement("input",{type:"submit",value:"ADD",className:"submitInput"})),r.a.createElement("div",{className:"termsHolder"},t.length?t:""))),r.a.createElement("div",{className:"submitBtnHolder"},r.a.createElement("button",{onClick:this.handleSubmitSearch,className:"submitBtn"},"Search")))}}]),t}(n.Component),g=a(21),f=a.n(g),E=a(22),N=a.n(E),y=a(23),j=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.name,a=e.url,n=e.img,c=e.idx,s=e.rating,l=e.location,i=0,o=this.props.lightSwitches.map(function(e){var t=r.a.createElement("div",{key:N()(),className:"circle circ".concat("1"===e?i:"")});return i++,t});return r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:a},r.a.createElement("div",{className:"Card"},r.a.createElement("div",{className:"bizImgBox"},r.a.createElement("img",{src:n,alt:"",className:"bizImg"}),r.a.createElement("div",{className:"bizNumberHolder"},r.a.createElement("div",{className:"bizNumber"},c))),r.a.createElement("div",{className:"bizDetailsBox"},r.a.createElement(y.a,{lines:2,trimWhitespace:!0},t),";",r.a.createElement("div",{className:"bizAddress"},l),r.a.createElement("div",{className:"bizDetailsImages"},r.a.createElement("img",{src:"./".concat(s,"stars.png"),alt:"",className:"stars"}),r.a.createElement("img",{src:"./yelp_logo.png",alt:"",className:"yelpLogo"}))),r.a.createElement("div",{className:"circleColumn"},o)))}}]),t}(n.Component),O=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=[];return this.props.businesses.forEach(function(a,n){var c=[],s=!0,l=!1,i=void 0;try{for(var o,m=e.props.terms[Symbol.iterator]();!(s=(o=m.next()).done);s=!0){var u=o.value;a.terms.includes(u)?c.push("1"):c.push("0")}}catch(h){l=!0,i=h}finally{try{s||null==m.return||m.return()}finally{if(l)throw i}}t.push(r.a.createElement(j,{name:a.name,url:a.url,key:a.id,img:a.image_url,idx:n+1,rating:a.rating,location:a.location.display_address[0],lightSwitches:c}))}),r.a.createElement("div",{className:"CardContainer"},t)}}]),t}(n.Component),S=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=0,t=this.props.terms.map(function(t){return r.a.createElement("div",{className:"termChiclet",key:v()()},r.a.createElement("div",{className:"circle circ".concat(e++)}),r.a.createElement("div",null,t))});return r.a.createElement("div",{className:"Legend"},r.a.createElement("div",{className:"locChiclet"},this.props.location),t)}}]),t}(n.Component),I="https://app-yelp-express.1d35.starter-us-east-1.openshiftapps.com/",C=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={businesses:[],searchInitiated:!1,loading:!1},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.props.terms.join("")!==e.terms.join("")&&this.getDataFromBackend(e.terms,e.location)}},{key:"getDataFromBackend",value:function(e,t){var a=this;console.log("".concat(I,"?terms=").concat(e.join(","),"&location=").concat(t)),this.setState({searchInitiated:!0,loading:!0}),f.a.get("".concat(I,"?terms=").concat(e.join(","),"&location=").concat(t)).then(function(e){var t=Object.values(e.data);a.setState({businesses:t,loading:!1}),console.log("data loaded")})}},{key:"render",value:function(){return r.a.createElement("div",{className:"ContentArea"},this.state.searchInitiated?r.a.createElement(S,{terms:this.props.terms,location:this.props.location}):r.a.createElement("div",null,"Please provide a location and one or more search terms.\n   Yelp searches for each term will be collated and displayed here."),this.state.searchInitiated?this.state.loading?r.a.createElement("div",{class:"lds-ring"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)):this.state.businesses.length?r.a.createElement(O,{businesses:this.state.businesses,terms:this.props.terms}):"No results for any of the provided search criteria.":"")}}]),t}(n.Component),k=(a(52),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={terms:[],location:""},a.triggerSearch=function(e,t){a.setState({terms:e,location:t})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.terms,n=t.location;return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"header"},r.a.createElement("span",{className:"acronym"},"MYSC"),r.a.createElement("span",{className:"fullName"},"Multiple Yelp Search Collator")),r.a.createElement(b,{triggerSearch:function(t,a){return e.triggerSearch(t,a)}}),r.a.createElement(C,{terms:a,location:n}))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[24,2,1]]]);
//# sourceMappingURL=main.d8047538.chunk.js.map