(this.webpackJsonpstatic=this.webpackJsonpstatic||[]).push([[0],{151:function(e,t,n){},216:function(e,t,n){},357:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),s=n(49),r=n.n(s),c=n(42),o=(n(216),n(40)),d=n.n(o),l=n(78),u=n(19),h=n(20),j=n(6),b=n(21),p=n(22),m=(n(151),n(17)),g=n.n(m),O=n(27),f=n(1),v=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={username:"",email:"",password1:"",password2:""},a.handleInput=a.handleInput.bind(Object(j.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(j.a)(a)),a}return Object(h.a)(n,[{key:"handleInput",value:function(e){this.setState(Object(O.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.handleRegistration(this.state)}},{key:"render",value:function(){return Object(f.jsxs)("form",{className:"login-form",onSubmit:this.handleSubmit,children:[Object(f.jsxs)("div",{className:"mb-3",children:[Object(f.jsx)("label",{htmlFor:"username",className:"form-label",children:"Username"}),Object(f.jsx)("input",{onChange:this.handleInput,type:"text",className:"form-control",id:"username",name:"username"})]}),Object(f.jsxs)("div",{className:"mb-3",children:[Object(f.jsx)("label",{htmlFor:"email",className:"form-label",children:"Email"}),Object(f.jsx)("input",{onChange:this.handleInput,type:"email",className:"form-control",id:"email",name:"email"})]}),Object(f.jsxs)("div",{className:"mb-3",children:[Object(f.jsx)("label",{htmlFor:"password1",className:"form-label",children:"Password"}),Object(f.jsx)("input",{onChange:this.handleInput,type:"password",className:"form-control",id:"password1",name:"password1"})]}),Object(f.jsxs)("div",{className:"mb-3",children:[Object(f.jsx)("label",{htmlFor:"password2",className:"form-label",children:"Confirm Password"}),Object(f.jsx)("input",{onChange:this.handleInput,type:"password",className:"form-control",id:"password2",name:"password2"})]}),Object(f.jsx)("button",{type:"submit",className:"add-ingredient",children:"REGISTER"})]})}}]),n}(a.Component),x=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={username:"",email:"",password:""},a.handleInput=a.handleInput.bind(Object(j.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(j.a)(a)),a}return Object(h.a)(n,[{key:"handleInput",value:function(e){this.setState(Object(O.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.handleLogin(this.state)}},{key:"render",value:function(){return Object(f.jsxs)("form",{className:"login-form",onSubmit:this.handleSubmit,children:[Object(f.jsxs)("div",{className:"mb-3",children:[Object(f.jsx)("label",{htmlFor:"username",className:"form-label",children:"Username"}),Object(f.jsx)("input",{onChange:this.handleInput,type:"text",className:"form-control",id:"username",name:"username"})]}),Object(f.jsxs)("div",{className:"mb-3",children:[Object(f.jsx)("label",{htmlFor:"email",className:"form-label",children:"Email"}),Object(f.jsx)("input",{onChange:this.handleInput,type:"email",className:"form-control",id:"email",name:"email"})]}),Object(f.jsxs)("div",{className:"mb-3",children:[Object(f.jsx)("label",{htmlFor:"password",className:"form-label",children:"Password"}),Object(f.jsx)("input",{onChange:this.handleInput,type:"password",className:"form-control",id:"password",name:"password"})]}),Object(f.jsx)("button",{type:"submit",className:"add-ingredient",children:"Login"})]})}}]),n}(a.Component),I=n(44),k=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={name:"",price_per_pound:"",start_date:new Date},a.handleSubmit=a.handleSubmit.bind(Object(j.a)(a)),a.handleInput=a.handleInput.bind(Object(j.a)(a)),a}return Object(h.a)(n,[{key:"handleSubmit",value:function(e){e.preventDefault();var t={name:this.state.name,price_listings:[{price_per_pound:parseInt(this.state.price_per_pound.replace(".","")),start_date:this.state.start_date}]};this.props.addIngredient(t),this.setState({name:"",price_per_pound:"",start_date:new Date})}},{key:"handleInput",value:function(e){this.setState(Object(O.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("form",{className:"ingredient-form",onSubmit:this.handleSubmit,children:[Object(f.jsx)("input",{className:"ingredient-input",type:"text",name:"name",value:this.state.name,placeholder:"Enter ingredient name",onChange:this.handleInput}),Object(f.jsx)("input",{className:"ingredient-input",type:"text",name:"price_per_pound",value:this.state.price_per_pound,placeholder:"Enter price per pound",onChange:this.handleInput}),Object(f.jsx)("button",{className:"add-ingredient",type:"submit",children:"Add"})]})})}}]),n}(a.Component),y=n(38),_=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state=Object(y.a)(Object(y.a)({},a.props.ingredient),{},{price_per_pound:"",isEditing:!1,new_price_per_pound:"",new_start_date:(new Date).toISOString().split("T")[0]}),a.editIngredient=a.editIngredient.bind(Object(j.a)(a)),a.handleInput=a.handleInput.bind(Object(j.a)(a)),a.toggleIngredientActiveStatus=a.toggleIngredientActiveStatus.bind(Object(j.a)(a)),a.findCurrentPriceListing=a.findCurrentPriceListing.bind(Object(j.a)(a)),a.handlePriceChange=a.handlePriceChange.bind(Object(j.a)(a)),a}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this.findCurrentPriceListing();this.setState({price_per_pound:e.price_per_pound,start_date:new Date(e.start_date).toISOString().split("T")[0]})}},{key:"componentDidUpdate",value:function(e){if(this.props.ingredient.price_listings.length!==e.ingredient.price_listings.length){var t=this.findCurrentPriceListing();this.setState(Object(y.a)(Object(y.a)({},this.props.ingredient),{},{price_per_pound:t.price_per_pound,start_date:t.start_date}))}}},{key:"handlePriceChange",value:function(e){var t=this.state,n=t.id,a=t.is_active,i=t.name,s=(t.new_price_per_pound,t.new_start_date),r=t.price_listings;r.push({start_date:s,price_per_pound:parseInt(this.state.new_price_per_pound.replace(".",""))}),console.log("price_listings",r);var c={id:n,is_active:a,name:i,price_listings:r};this.props.editIngredient(c);var o=this.findCurrentPriceListing();this.setState({price_per_pound:o.price_per_pound,start_date:new Date(o.start_date).toISOString().split("T")[0],new_price_per_pound:"",new_start_date:(new Date).toISOString().split("T")[0]})}},{key:"editIngredient",value:function(){this.setState({isEditing:!1});var e=Object(y.a)({},this.state);e.price_per_pound=parseInt(e.price_per_pound),delete e.isEditing,delete e.price_per_pound,delete e.new_price_per_pound,delete e.new_start_date,console.log(e);var t=this.findCurrentPriceListing();console.log(t);var n=e.price_listings.indexOf(t);console.log(n),e.price_listings[n].price_per_pound=100*parseFloat(this.state.price_per_pound),e.price_listings[n].start_date=this.state.start_date,this.props.editIngredient(e)}},{key:"toggleIngredientActiveStatus",value:function(){var e=this.state,t=e.id,n=e.is_active;this.props.toggleIngredientActiveStatus(t,!n),this.setState({is_active:!n})}},{key:"handleInput",value:function(e){this.setState(Object(O.a)({},e.target.name,e.target.value))}},{key:"findCurrentPriceListing",value:function(){var e=this.state.price_listings.reduce((function(e,t){return new Date(e.start_date)>new Date(t.start_date)?e:t}));return console.log("here",e),e}},{key:"render",value:function(){var e=this,t=this.state,n=t.name,a=t.price_per_pound,i=t.start_date,s=t.is_active,r=t.isEditing;return Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:Object(f.jsx)("input",{type:"text",name:"name",value:n,onChange:this.handleInput,disabled:!r})}),Object(f.jsx)("td",{children:Object(f.jsx)("input",{type:"text",name:"price_per_pound",value:a,onChange:this.handleInput,disabled:!r})}),Object(f.jsx)("td",{children:Object(f.jsx)("input",{type:"date",name:"start_date",value:i,onChange:this.handleInput,disabled:!r})}),Object(f.jsxs)("td",{className:"d-flex",children:[this.state.isEditing?Object(f.jsx)("button",{className:"btn btn-dark",type:"button",onClick:this.editIngredient,children:"Save"}):Object(f.jsx)("button",{className:"btn btn-dark",type:"button",onClick:function(){return e.setState({isEditing:!0})},children:"Edit"}),Object(f.jsx)("button",{className:"toggle-button",onClick:this.toggleIngredientActiveStatus,children:s?Object(f.jsx)("button",{className:"btn btn-primary",children:"Active"}):Object(f.jsx)("button",{className:"btn btn-danger",children:"Inactive"})})]}),Object(f.jsx)("td",{children:Object(f.jsx)("input",{type:"text",name:"new_price_per_pound",value:this.state.new_price_per_pound,onChange:this.handleInput})}),Object(f.jsx)("td",{children:Object(f.jsx)("input",Object(O.a)({type:"date",name:"new_start_date",value:this.state.new_start_date,onChange:this.handleInput},"onChange",this.handleInput))}),Object(f.jsx)("td",{children:Object(f.jsx)("button",{type:"button",className:"btn btn-dark",onClick:this.handlePriceChange,children:"Add"})})]})}}]),n}(a.Component),S=(a.Component,n(367)),w=n(368),C=n(56),N=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={ingredients:[]},a.toggleIngredientActiveStatus=a.toggleIngredientActiveStatus.bind(Object(j.a)(a)),a.editIngredient=a.editIngredient.bind(Object(j.a)(a)),a.fetchIngredients=a.fetchIngredients.bind(Object(j.a)(a)),a.addIngredient=a.addIngredient.bind(Object(j.a)(a)),a}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.fetchIngredients()}},{key:"fetchIngredients",value:function(){var e=this;fetch("/api/v1/menu/ingredients/").then((function(e){if(!e.ok)throw new Error("Network response was not ok");return e.json()})).then((function(t){t.forEach((function(e){e.price_listings.forEach((function(e){e.price_per_pound=e.price_per_pound/100}))})),e.setState({ingredients:t})}))}},{key:"toggleIngredientActiveStatus",value:function(e,t){var n=this;console.log("status",t);var a={method:"PATCH",headers:{"Content-Type":"application/json","X-CSRFToken":g.a.get("csrftoken")},body:JSON.stringify({is_active:t})};fetch("/api/v1/menu/ingredients/".concat(e,"/"),a).then((function(a){if(!a.ok)throw new Error("Network response was not ok");var i=Object(I.a)(n.state.ingredients),s=i.findIndex((function(t){return t.id===e}));i[s].is_active=t,n.setState({ingredients:i})}))}},{key:"addIngredient",value:function(e){var t=this,n={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":g.a.get("csrftoken")},body:JSON.stringify(e)};fetch("/api/v1/menu/ingredients/",n).then((function(e){if(!e.ok)throw new Error("Network response was not ok");return e.json()})).then((function(e){console.log("data",e);var n=e.price_listings.map((function(e){return e.price_per_pound=(e.price_per_pound/100).toFixed(2),e}));e.price_listings=n;var a=[].concat(Object(I.a)(t.state.ingredients),[e]);t.setState({ingredients:a})})).catch()}},{key:"editIngredient",value:function(e){var t=this,n=e.id,a={method:"PUT",headers:{"Content-Type":"application/json","X-CSRFToken":g.a.get("csrftoken")},body:JSON.stringify(e)};fetch("/api/v1/menu/ingredients/".concat(n,"/"),a).then((function(e){if(!e.ok)throw console.log(e),new Error("Network response was not ok");return e.json()})).then((function(e){var a=Object(I.a)(t.state.ingredients),i=a.findIndex((function(e){return e.id==n}));a[i]=e,t.setState({ingredients:a})}))}},{key:"render",value:function(){var e=this,t=(this.state.ingredients.filter((function(e){return e.is_active})),this.state.ingredients.map((function(t){return Object(f.jsx)(_,{ingredient:t,toggleIngredientActiveStatus:e.toggleIngredientActiveStatus,editIngredient:e.editIngredient},t.id)})));return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("div",{className:"ingredient-container",children:[Object(f.jsx)("h2",{className:"ingredient-title",children:"Ingredient List"}),Object(f.jsx)(S.a,{children:Object(f.jsxs)(w.a,{className:"accordion-card",children:[Object(f.jsx)(w.a.Header,{className:"accordion-header",children:Object(f.jsx)(S.a.Toggle,{as:C.a,eventKey:"0",children:Object(f.jsx)("span",{className:"accordion-toggle",children:"Create Ingredient"})})}),Object(f.jsx)(S.a.Collapse,{eventKey:"0",children:Object(f.jsx)(w.a.Body,{children:Object(f.jsx)(k,{addIngredient:this.addIngredient,ingredients:this.state.ingredients})})})]})}),Object(f.jsx)("div",{className:"table-responsive",children:Object(f.jsxs)("table",{class:"table",children:[Object(f.jsx)("thead",{children:Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{scope:"col",children:"Ingredients"}),Object(f.jsx)("th",{scope:"col",children:"Price"}),Object(f.jsx)("th",{scope:"col",children:"Effective Date"}),Object(f.jsx)("th",{scope:"col"}),Object(f.jsx)("th",{scope:"col",children:"Price Change"}),Object(f.jsx)("th",{scope:"col",children:"Effective Date"}),Object(f.jsx)("th",{scope:"col"})]})}),Object(f.jsx)("tbody",{children:t})]})})]})})}}]),n}(a.Component),F=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={display_name:"",avatar:null,preview:""},a.handleInput=a.handleInput.bind(Object(j.a)(a)),a.handleImage=a.handleImage.bind(Object(j.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(j.a)(a)),a}return Object(h.a)(n,[{key:"handleInput",value:function(e){this.setState(Object(O.a)({},e.target.name,e.target.value))}},{key:"handleImage",value:function(e){var t=this,n=e.target.files[0];this.setState({avatar:n});var a=new FileReader;a.onloadend=function(){t.setState({preview:a.result})},a.readAsDataURL(n)}},{key:"handleSubmit",value:function(){var e=Object(l.a)(d.a.mark((function e(t){var n,a,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),(n=new FormData).append("avatar",this.state.avatar),n.append("display_name",this.state.display_name),n.append("user",this.state.user),a={method:"POST",headers:{"X-CSRFToken":g.a.get("csrftoken")},body:n},e.next=8,fetch("/api/v1/users/profiles/",a);case 8:i=e.sent,console.log(i);case 10:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("form",{children:[Object(f.jsx)("input",{type:"text",name:"display_name",value:this.state.display_name,onChange:this.handleInput}),Object(f.jsx)("input",{type:"file",name:"avatar",onChange:this.handleImage}),Object(f.jsx)("button",{type:"submit",children:"Save profile!"}),this.state.avatar?Object(f.jsx)("img",{src:this.state.preview,alt:""}):null]})})}}]),n}(a.Component),M=n(26),A=n(32),E=n.p+"static/media/default-image.2e01288c.jpeg",T=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state=Object(y.a)(Object(y.a)({},a.props.menuitem),{},{isEditing:!1,show:!1}),a.editMenuItem=a.editMenuItem.bind(Object(j.a)(a)),a.handleInput=a.handleInput.bind(Object(j.a)(a)),a.toggleMenuActiveStatus=a.toggleMenuActiveStatus.bind(Object(j.a)(a)),a.handleClose=a.handleClose.bind(Object(j.a)(a)),a.handleShow=a.handleShow.bind(Object(j.a)(a)),a}return Object(h.a)(n,[{key:"handleClose",value:function(){this.setState({show:!1})}},{key:"handleShow",value:function(){this.setState({show:!0})}},{key:"editMenuItem",value:function(){this.setState({isEditing:!1});var e={id:this.state.id,name:this.state.name,menu_price:this.state.menu_price};this.props.editMenuItem(e)}},{key:"handleInput",value:function(e){this.setState(Object(O.a)({},e.target.name,e.target.value))}},{key:"toggleMenuActiveStatus",value:function(){var e=this.state,t=e.id,n=e.is_active;this.props.toggleMenuActiveStatus(t,!n),this.setState({is_active:!n})}},{key:"render",value:function(){var e=this,t=(this.props.menuitem,this.state),n=(t.is_active,t.isEditing,Object.entries(this.state.ingredients));return n.map((function(e,t){return Object(f.jsxs)("li",{children:[Object(f.jsx)("p",{children:e[0]}),Object(f.jsx)("p",{children:e[1]})]},t)})),Object(f.jsx)("li",{className:"list",children:this.state.isEditing?Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("div",{className:"card menuitem",children:[Object(f.jsx)("p",{className:"menu-title",children:Object(f.jsx)("input",{type:"text",name:"name",value:this.state.name,onChange:this.handleInput})}),this.state.isEditing?Object(f.jsx)("button",{className:"btn btn-dark",type:"button",onClick:this.editMenuItem,children:"Save Edit"}):Object(f.jsx)("button",{className:"btn btn-dark",type:"button",onClick:function(){return e.setState({isEditing:!0})},children:"Edit"}),Object(f.jsx)(C.a,{variant:"warning",onClick:this.handleShow,children:"See Ingredients"}),Object(f.jsxs)(A.a,{show:this.state.show,onHide:this.handleClose,children:[Object(f.jsx)(A.a.Header,{closeButton:!0,children:Object(f.jsx)(A.a.Title,{children:"Ingredients"})}),Object(f.jsx)(A.a.Body,{children:Object(f.jsx)("div",{children:n})}),Object(f.jsx)(A.a.Footer,{children:Object(f.jsx)(C.a,{variant:"danger",onClick:this.handleClose,children:"Exit"})})]})]})}):Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("div",{className:"card menuitem",children:[Object(f.jsx)("p",{className:"menu-title",children:this.state.name}),this.state.isEditing?Object(f.jsx)("button",{className:"btn btn-dark",type:"button",onClick:this.editMenuItem,children:"Save Edit"}):Object(f.jsx)("button",{className:"btn btn-dark",type:"button",onClick:function(){return e.setState({isEditing:!0})},children:"Edit"}),Object(f.jsx)(C.a,{variant:"warning",onClick:this.handleShow,children:"See Ingredients"}),Object(f.jsxs)(A.a,{show:this.state.show,onHide:this.handleClose,children:[Object(f.jsx)(A.a.Header,{closeButton:!0,children:Object(f.jsx)(A.a.Title,{children:"Ingredients"})}),Object(f.jsx)(A.a.Body,{children:Object(f.jsx)("div",{className:"included-ingredients",children:n})}),Object(f.jsx)(A.a.Footer,{children:Object(f.jsx)(C.a,{variant:"danger",onClick:this.handleClose,children:"Exit"})})]})]})})})}}]),n}(a.Component),D=Object(M.g)(T),P=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={availableIngredients:a.props.availableIngredients,preview:"",name:"",menu_price:"",ingredients:{},image:null},a.handleSubmit=a.handleSubmit.bind(Object(j.a)(a)),a.handleInput=a.handleInput.bind(Object(j.a)(a)),a.handleIngredient=a.handleIngredient.bind(Object(j.a)(a)),a.handleImage=a.handleImage.bind(Object(j.a)(a)),a}return Object(h.a)(n,[{key:"componentDidUpdate",value:function(e){this.props.availableIngredients!==e.availableIngredients&&this.setState({availableIngredients:this.props.availableIngredients})}},{key:"handleImage",value:function(e){var t=this,n=e.target.files[0];this.setState({image:n});var a=new FileReader;a.onloadend=function(){t.setState({preview:a.result})},a.readAsDataURL(n)}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=this.state,n=t.name,a=t.ingredients,i=t.menu_price,s=t.image,r={name:n,ingredients:a,menu_price:100*Number(i),image:s};this.props.addMenuItem(r),this.setState({name:"",menu_price:"",ingredients:{},image:null})}},{key:"handleInput",value:function(e){this.setState(Object(O.a)({},e.target.name,e.target.value))}},{key:"handleIngredient",value:function(e){var t=Object(y.a)({},this.state.ingredients);""===e.target.value?delete t[e.target.name]:t[e.target.name]=parseInt(e.target.value),this.setState({ingredients:t})}},{key:"render",value:function(){var e,t=this,n=null===(e=this.state.availableIngredients)||void 0===e?void 0:e.map((function(e){return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("li",{className:"mb-3",children:[Object(f.jsx)("label",{htmlFor:e.name,children:e.name}),Object(f.jsx)("input",{type:"text",id:e.name,name:e.name,value:t.state[e.name],placeholder:"Weight in Grams",onChange:t.handleIngredient})]},e.id)})}));return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(f.jsxs)("div",{className:"ingredient-form",children:[Object(f.jsx)("input",{className:"ingredient-input",type:"text",name:"name",value:this.state.name,placeholder:"Menu Item Name",onChange:this.handleInput}),Object(f.jsx)("input",{className:"ingredient-input",type:"text",name:"menu_price",value:this.state.menu_price,placeholder:"Price on Menu",onChange:this.handleInput}),Object(f.jsx)("button",{className:"add-ingredient",type:"submit",children:"Create menu item"})]}),Object(f.jsx)("ul",{className:"ingredient-grid",children:n}),Object(f.jsx)("img",{className:"preview-img",src:E,alt:""}),Object(f.jsx)("input",{type:"file",name:"menuImg",onChange:this.handleImage}),this.state.menuImg?Object(f.jsx)("img",{className:"img",src:this.state.preview,alt:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fmartialartsplusinc.com%2Fhome%2Fdefault-image%2F&psig=AOvVaw2_wxZFvSEbu5shUuae6NFO&ust=1627012298162000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCMj6nbLj9fECFQAAAAAdAAAAABAD"}):null]})})}}]),n}(a.Component),L=(a.Component,function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={menuitems:[],ingredients:[]},a.deleteMenuItem=a.deleteMenuItem.bind(Object(j.a)(a)),a.editMenuItem=a.editMenuItem.bind(Object(j.a)(a)),a.fetchMenuItems=a.fetchMenuItems.bind(Object(j.a)(a)),a.addMenuItem=a.addMenuItem.bind(Object(j.a)(a)),a.fetchIngredients=a.fetchIngredients.bind(Object(j.a)(a)),a.toggleMenuActiveStatus=a.toggleMenuActiveStatus.bind(Object(j.a)(a)),a}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.fetchMenuItems(),this.fetchIngredients()}},{key:"componentWillUnmount",value:function(){clearInterval(this.retrieveMenuitems)}},{key:"toggleMenuActiveStatus",value:function(e,t){var n=this,a={method:"PATCH",headers:{"Content-Type":"application/json","X-CSRFToken":g.a.get("csrftoken")},body:JSON.stringify({is_active:t})};fetch("/api/v1/menu/".concat(e,"/"),a).then((function(a){if(!a.ok)throw new Error("Network response was not ok");var i=Object(I.a)(n.state.menuitems),s=i.findIndex((function(t){return t.id===e}));i[s].is_active=t,n.setState({menuitems:i})}))}},{key:"fetchMenuItems",value:function(){var e=this;fetch("/api/v1/menu/").then((function(e){if(!e.ok)throw new Error("Network response was not ok");return e.json()})).then((function(t){return e.setState({menuitems:t})}))}},{key:"fetchIngredients",value:function(){var e=this;fetch("/api/v1/menu/ingredients/").then((function(e){return e.json()})).then((function(t){return e.setState({ingredients:t})}))}},{key:"deleteMenuItem",value:function(e){var t=this,n={method:"DELETE",headers:{"Content-Type":"application/json","X-CSRFToken":g.a.get("csrftoken")}};fetch("/api/v1/menu/".concat(e),n).then((function(n){var a=Object(I.a)(t.state.menuitems),i=a.findIndex((function(t){return t.id===e}));a.splice(i,1),t.setState({menuitems:a})})).catch((function(e){console.log.error("Error:",e)}))}},{key:"addMenuItem",value:function(e){var t=this,n=new FormData;e instanceof File&&n.append("image",e.image),n.append("name",e.name),n.append("menu_price",e.menu_price),n.append("ingredients",JSON.stringify(e.ingredients));var a={method:"POST",headers:{"X-CSRFToken":g.a.get("csrftoken")},body:n};fetch("/api/v1/menu/",a).then((function(e){if(!e.ok)throw new Error("Network response was not ok");return e.json()})).then((function(e){var n=[].concat(Object(I.a)(t.state.menuitems),[e]);t.setState({menuitems:n})})).catch()}},{key:"editMenuItem",value:function(e){var t=this,n=e.id,a={method:"PUT",headers:{"Content-Type":"application/json","X-CSRFToken":g.a.get("csrftoken")},body:JSON.stringify(e)};fetch("/api/v1/menu/".concat(n,"/"),a).then((function(e){if(!e.ok)throw new Error("Network response was not ok");var n=Object(I.a)(t.state.menuitems);t.setState({menuitems:n})}))}},{key:"render",value:function(){var e=this,t=this.state.menuitems.map((function(t){return Object(f.jsx)(D,{menuitem:t,toggleMenuActiveStatus:e.toggleMenuActiveStatus,editMenuItem:e.editMenuItem},t.id)}));return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("div",{className:"menu-form",children:[Object(f.jsx)("h2",{className:"menu-list",children:"Menu Item List"}),Object(f.jsx)(S.a,{children:Object(f.jsxs)(w.a,{className:"accordion-card",children:[Object(f.jsx)(w.a.Header,{className:"accordion-header",children:Object(f.jsx)(S.a.Toggle,{as:C.a,eventKey:"0",children:Object(f.jsx)("span",{className:"accordion-toggle",children:"Create a Menu Item"})})}),Object(f.jsx)(S.a.Collapse,{eventKey:"0",children:Object(f.jsx)(w.a.Body,{className:"end-of-form",children:Object(f.jsx)(P,{availableIngredients:this.state.ingredients,addMenuItem:this.addMenuItem})})})]})}),Object(f.jsx)("ul",{className:"container-menuitems",children:t})]})})}}]),n}(a.Component)),R=n(361),J=n(365),U=n(202),X=n(203),B=n(97),z=n(205),H=(n.p,""),K=0,W=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={joke:"",menuitems:[],ingredients:[]},a.fetchJoke=a.fetchJoke.bind(Object(j.a)(a)),a.fetchData=a.fetchData.bind(Object(j.a)(a)),a.fetchIngredients=a.fetchIngredients.bind(Object(j.a)(a)),a.calculateMenuItemCost=a.calculateMenuItemCost.bind(Object(j.a)(a)),a}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.fetchData(),this.fetchIngredients()}},{key:"componentWillUnmount",value:function(){clearInterval(this.retrieveMenuitems)}},{key:"fetchData",value:function(){var e=this;fetch("/api/v1/menu/").then((function(e){if(!e.ok)throw new Error("Network response was not ok");return e.json()})).then((function(t){return e.setState({menuitems:t})}))}},{key:"fetchIngredients",value:function(){var e=this;fetch("/api/v1/menu/ingredients/").then((function(e){return e.json()})).then((function(t){t.forEach((function(e){e.price_listings=e.price_listings.reduce((function(e,t){return new Date(e.start_date)>new Date(t.start_date)?e:t}))})),e.setState({ingredients:t})}))}},{key:"fetchJoke",value:function(){fetch("https://api.spoonacular.com/food/jokes/random?apiKey=".concat("7f40aaf07d494a74910b1ac4fcff7357")).then((function(e){return e.json()})).then((function(e){return console.log(e)}))}},{key:"calculateMenuItemCost",value:function(e){var t=this;return 0==this.state.ingredients.length?0:Object.entries(e.ingredients).reduce((function(e,n){var a=n[0],i=.0022046226*n[1],s=t.state.ingredients.find((function(e){return e.name===a})).price_listings.price_per_pound,r=i*(s/100);return console.log(s),e+r}),0)}},{key:"render",value:function(){var e=this,t=[],n=this.state.menuitems.map((function(n){H=n.name;var a=e.calculateMenuItemCost(n);return t.push({name:H,price:a}),K=parseFloat(a).toFixed(2),Object(f.jsxs)("div",{className:"menuCost",children:[H,Object(f.jsx)("h1",{}),Object(f.jsx)("p",{}),"$",K]})}));return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("div",{className:"homepage",children:[Object(f.jsx)("h2",{className:"foodbook-title",children:"FoodBook"}),Object(f.jsx)("div",{children:Object(f.jsx)("ul",{children:n})}),Object(f.jsx)("header",{children:"Cost per Plate "}),Object(f.jsxs)(R.a,{width:1200,height:500,data:t,margin:{top:5,right:30,left:20,bottom:5},children:[Object(f.jsx)(J.a,{strokeDasharray:"3 3"}),Object(f.jsx)(U.a,{dataKey:"name"}),Object(f.jsx)(X.a,{}),Object(f.jsx)(B.a,{}),Object(f.jsx)(z.a,{dataKey:"price",fill:"#82ca9d"})]})]})})}}]),n}(a.Component),G=n(140);n(206);var Q=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={},a.handleLogin=a.handleLogin.bind(Object(j.a)(a)),a.handleLogout=a.handleLogout.bind(Object(j.a)(a)),a.handleRegistration=a.handleRegistration.bind(Object(j.a)(a)),a.handleNavigation=a.handleNavigation.bind(Object(j.a)(a)),a}return Object(h.a)(n,[{key:"handleLogin",value:function(){var e=Object(l.a)(d.a.mark((function e(t){var n,a,i,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":g.a.get("csrftoken")},body:JSON.stringify(t)},a=function(e){return console.warn(e)},e.next=4,fetch("/rest-auth/login/",n).catch(a);case 4:if(!(i=e.sent).ok){e.next=11;break}return e.next=8,i.json().catch(a);case 8:s=e.sent,g.a.set("Authorization","Token ".concat(s.key)),this.props.history.push("/ingredientlist");case 11:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"handleRegistration",value:function(){var e=Object(l.a)(d.a.mark((function e(t){var n,a,i,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":g.a.get("csrftoken")},body:JSON.stringify(t)},a=function(e){return console.warn(e)},e.next=4,fetch("/rest-auth/registration/",n).catch(a);case 4:if(!(i=e.sent).ok){e.next=11;break}return e.next=8,i.json().catch(a);case 8:s=e.sent,g.a.set("Authorization","Token ".concat(s.key)),this.props.history.push("/ingredientlist");case 11:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"handleNavigation",value:function(e){this.setState({selection:e})}},{key:"handleLogout",value:function(){var e=Object(l.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":g.a.get("csrftoken")}},n=function(e){return console.warn(e)},e.next=4,fetch("/rest-auth/logout/",t).catch(n);case 4:e.sent.ok&&(g.a.remove("Authorization"),this.props.history.push("/"));case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)(G.a,{className:"navbar-links",children:[!g.a.get("Authorization")&&Object(f.jsx)(c.b,{className:"btn btn-primary",to:"/registration",children:"Registration"}),!g.a.get("Authorization")&&Object(f.jsx)(c.b,{className:"btn btn-primary",to:"/",children:"Login"}),g.a.get("Authorization")&&Object(f.jsx)(c.b,{className:"btn btn-outline-warning",to:"/homepage",children:"Homepage"}),g.a.get("Authorization")&&Object(f.jsx)(c.b,{className:"btn btn-outline-warning",to:"/ingredientlist",children:"Ingredients"}),g.a.get("Authorization")&&Object(f.jsx)(c.b,{className:"btn btn-outline-warning",to:"/menulist",children:"Menu"}),g.a.get("Authorization")&&Object(f.jsx)(c.b,{className:"btn btn-outline-warning",id:"logout-btn",onClick:this.handleLogout,children:"Logout"})]}),Object(f.jsxs)(M.d,{children:[Object(f.jsx)(M.b,{path:"/registration",children:Object(f.jsx)(v,{handleRegistration:this.handleRegistration,handleNavigation:this.handleNavigation})}),Object(f.jsx)(M.b,{exact:!0,path:"/",children:Object(f.jsx)(x,{handleLogin:this.handleLogin,handleNavigation:this.handleNavigation})}),Object(f.jsx)(M.b,{path:"/profile",children:Object(f.jsx)(F,{})}),Object(f.jsx)(M.b,{path:"/ingredientlist",children:Object(f.jsx)(N,{})}),Object(f.jsx)(M.b,{path:"/homepage",children:Object(f.jsx)(W,{})}),Object(f.jsx)(M.b,{path:"/menulist",children:Object(f.jsx)(L,{})})]})]})}}]),n}(a.Component),q=Object(M.g)(Q),V=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,369)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),i(e),s(e),r(e)}))};n(356);r.a.render(Object(f.jsx)(i.a.StrictMode,{children:Object(f.jsx)(c.a,{children:Object(f.jsx)(q,{})})}),document.getElementById("root")),V()}},[[357,1,2]]]);
//# sourceMappingURL=main.7b68c333.chunk.js.map