(this.webpackJsonpstatic=this.webpackJsonpstatic||[]).push([[0],{152:function(e,t,n){},216:function(e,t,n){},357:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),s=n(49),r=n.n(s),c=n(42),d=(n(216),n(39)),o=n.n(d),l=n(77),u=n(19),h=n(20),p=n(6),j=n(21),b=n(22),m=(n(152),n(16)),g=n.n(m),O=n(26),f=n.p+"static/media/foodbook.3c70c7e4.jpeg",v=n(1),x=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={username:"",email:"",password1:"",password2:""},a.handleInput=a.handleInput.bind(Object(p.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(p.a)(a)),a}return Object(h.a)(n,[{key:"handleInput",value:function(e){this.setState(Object(O.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.handleRegistration(this.state)}},{key:"render",value:function(){return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("img",{className:"foodbook-img",src:f}),Object(v.jsxs)("form",{className:"login-form",onSubmit:this.handleSubmit,children:[Object(v.jsxs)("div",{className:"mb-3",children:[Object(v.jsx)("label",{htmlFor:"username",className:"form-label",children:"Username"}),Object(v.jsx)("input",{onChange:this.handleInput,type:"text",className:"form-control",id:"username",name:"username"})]}),Object(v.jsxs)("div",{className:"mb-3",children:[Object(v.jsx)("label",{htmlFor:"email",className:"form-label",children:"Email"}),Object(v.jsx)("input",{onChange:this.handleInput,type:"email",className:"form-control",id:"email",name:"email"})]}),Object(v.jsxs)("div",{className:"mb-3",children:[Object(v.jsx)("label",{htmlFor:"password1",className:"form-label",children:"Password"}),Object(v.jsx)("input",{onChange:this.handleInput,type:"password",className:"form-control",id:"password1",name:"password1"})]}),Object(v.jsxs)("div",{className:"mb-3",children:[Object(v.jsx)("label",{htmlFor:"password2",className:"form-label",children:"Confirm Password"}),Object(v.jsx)("input",{onChange:this.handleInput,type:"password",className:"form-control",id:"password2",name:"password2"})]}),Object(v.jsx)("button",{type:"submit",className:"add-ingredient",children:"REGISTER"})]})]})}}]),n}(a.Component),I=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={username:"",email:"",password:""},a.handleInput=a.handleInput.bind(Object(p.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(p.a)(a)),a}return Object(h.a)(n,[{key:"handleInput",value:function(e){this.setState(Object(O.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.handleLogin(this.state)}},{key:"render",value:function(){return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("img",{className:"foodbook-img",src:f}),Object(v.jsxs)("form",{className:"login-form",onSubmit:this.handleSubmit,children:[Object(v.jsxs)("div",{className:"mb-3",children:[Object(v.jsx)("label",{htmlFor:"username",className:"form-label",children:"Username"}),Object(v.jsx)("input",{onChange:this.handleInput,type:"text",className:"form-control",id:"username",name:"username"})]}),Object(v.jsxs)("div",{className:"mb-3",children:[Object(v.jsx)("label",{htmlFor:"email",className:"form-label",children:"Email"}),Object(v.jsx)("input",{onChange:this.handleInput,type:"email",className:"form-control",id:"email",name:"email"})]}),Object(v.jsxs)("div",{className:"mb-3",children:[Object(v.jsx)("label",{htmlFor:"password",className:"form-label",children:"Password"}),Object(v.jsx)("input",{onChange:this.handleInput,type:"password",className:"form-control",id:"password",name:"password"})]}),Object(v.jsx)("button",{type:"submit",className:"add-ingredient",children:"Login"})]})]})}}]),n}(a.Component),y=n(41),k=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={name:"",price_per_pound:"",start_date:new Date},a.handleSubmit=a.handleSubmit.bind(Object(p.a)(a)),a.handleInput=a.handleInput.bind(Object(p.a)(a)),a}return Object(h.a)(n,[{key:"handleSubmit",value:function(e){e.preventDefault();var t={name:this.state.name,price_listings:[{price_per_pound:parseInt(this.state.price_per_pound.replace(".","")),start_date:this.state.start_date}]};this.props.addIngredient(t),this.setState({name:"",price_per_pound:"",start_date:new Date})}},{key:"handleInput",value:function(e){this.setState(Object(O.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("form",{className:"ingredient-form",onSubmit:this.handleSubmit,children:[Object(v.jsx)("input",{className:"ingredient-input",type:"text",name:"name",value:this.state.name,placeholder:"Enter ingredient name",onChange:this.handleInput}),Object(v.jsx)("input",{className:"ingredient-input",type:"text",name:"price_per_pound",value:this.state.price_per_pound,placeholder:"Enter price per pound",onChange:this.handleInput}),Object(v.jsx)("button",{className:"add-ingredient",type:"submit",children:"Add"})]})})}}]),n}(a.Component),_=n(32),S=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state=Object(_.a)(Object(_.a)({},a.props.ingredient),{},{price_per_pound:"",isEditing:!1,new_price_per_pound:"",new_start_date:(new Date).toISOString().split("T")[0]}),a.editIngredient=a.editIngredient.bind(Object(p.a)(a)),a.handleInput=a.handleInput.bind(Object(p.a)(a)),a.toggleIngredientActiveStatus=a.toggleIngredientActiveStatus.bind(Object(p.a)(a)),a.findCurrentPriceListing=a.findCurrentPriceListing.bind(Object(p.a)(a)),a.handlePriceChange=a.handlePriceChange.bind(Object(p.a)(a)),a}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this.findCurrentPriceListing();this.setState({price_per_pound:e.price_per_pound,start_date:new Date(e.start_date).toISOString().split("T")[0]})}},{key:"componentDidUpdate",value:function(e){if(this.props.ingredient.price_listings.length!==e.ingredient.price_listings.length){var t=this.findCurrentPriceListing();this.setState(Object(_.a)(Object(_.a)({},this.props.ingredient),{},{price_per_pound:t.price_per_pound,start_date:t.start_date}))}}},{key:"handlePriceChange",value:function(e){var t=this.state,n=t.id,a=t.is_active,i=t.name,s=(t.new_price_per_pound,t.new_start_date),r=t.price_listings;r.push({start_date:s,price_per_pound:parseInt(this.state.new_price_per_pound.replace(".",""))}),console.log("price_listings",r);var c={id:n,is_active:a,name:i,price_listings:r};this.props.editIngredient(c);var d=this.findCurrentPriceListing();this.setState({price_per_pound:d.price_per_pound,start_date:new Date(d.start_date).toISOString().split("T")[0],new_price_per_pound:"",new_start_date:(new Date).toISOString().split("T")[0]})}},{key:"editIngredient",value:function(){this.setState({isEditing:!1});var e=Object(_.a)({},this.state);e.price_per_pound=parseInt(e.price_per_pound),delete e.isEditing,delete e.price_per_pound,delete e.new_price_per_pound,delete e.new_start_date,console.log(e);var t=this.findCurrentPriceListing();console.log(t);var n=e.price_listings.indexOf(t);console.log(n),e.price_listings[n].price_per_pound=100*parseFloat(this.state.price_per_pound),e.price_listings[n].start_date=this.state.start_date,this.props.editIngredient(e)}},{key:"toggleIngredientActiveStatus",value:function(){var e=this.state,t=e.id,n=e.is_active;this.props.toggleIngredientActiveStatus(t,!n),this.setState({is_active:!n})}},{key:"handleInput",value:function(e){this.setState(Object(O.a)({},e.target.name,e.target.value))}},{key:"findCurrentPriceListing",value:function(){var e=this.state.price_listings.reduce((function(e,t){return new Date(e.start_date)>new Date(t.start_date)?e:t}));return console.log("here",e),e}},{key:"render",value:function(){var e=this,t=this.state,n=t.name,a=t.price_per_pound,i=t.start_date,s=t.is_active,r=t.isEditing;return Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:Object(v.jsx)("input",{type:"text",name:"name",value:n,onChange:this.handleInput,disabled:!r})}),Object(v.jsx)("td",{children:Object(v.jsx)("input",{type:"text",name:"price_per_pound",value:a,onChange:this.handleInput,disabled:!r})}),Object(v.jsx)("td",{children:Object(v.jsx)("input",{type:"date",name:"start_date",value:i,onChange:this.handleInput,disabled:!r})}),Object(v.jsxs)("td",{className:"d-flex",children:[this.state.isEditing?Object(v.jsx)("button",{className:"btn btn-dark",type:"button",onClick:this.editIngredient,children:"Save"}):Object(v.jsx)("button",{className:"btn btn-dark",type:"button",onClick:function(){return e.setState({isEditing:!0})},children:"Edit"}),Object(v.jsx)("button",{className:"toggle-button",onClick:this.toggleIngredientActiveStatus,children:s?Object(v.jsx)("button",{className:"btn btn-primary",children:"Active"}):Object(v.jsx)("button",{className:"btn btn-danger",children:"Inactive"})})]}),Object(v.jsx)("td",{children:Object(v.jsx)("input",{type:"text",name:"new_price_per_pound",value:this.state.new_price_per_pound,onChange:this.handleInput})}),Object(v.jsx)("td",{children:Object(v.jsx)("input",Object(O.a)({type:"date",name:"new_start_date",value:this.state.new_start_date,onChange:this.handleInput},"onChange",this.handleInput))}),Object(v.jsx)("td",{children:Object(v.jsx)("button",{type:"button",className:"btn btn-dark",onClick:this.handlePriceChange,children:"Add"})})]})}}]),n}(a.Component),w=(a.Component,n(367)),N=n(368),C=n(120),F=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={ingredients:[]},a.toggleIngredientActiveStatus=a.toggleIngredientActiveStatus.bind(Object(p.a)(a)),a.editIngredient=a.editIngredient.bind(Object(p.a)(a)),a.fetchIngredients=a.fetchIngredients.bind(Object(p.a)(a)),a.addIngredient=a.addIngredient.bind(Object(p.a)(a)),a}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.fetchIngredients()}},{key:"fetchIngredients",value:function(){var e=this;fetch("/api/v1/menu/ingredients/").then((function(e){if(!e.ok)throw new Error("Network response was not ok");return e.json()})).then((function(t){t.forEach((function(e){e.price_listings.forEach((function(e){e.price_per_pound=e.price_per_pound/100}))})),e.setState({ingredients:t})}))}},{key:"toggleIngredientActiveStatus",value:function(e,t){var n=this;console.log("status",t);var a={method:"PATCH",headers:{"Content-Type":"application/json","X-CSRFToken":g.a.get("csrftoken")},body:JSON.stringify({is_active:t})};fetch("/api/v1/menu/ingredients/".concat(e,"/"),a).then((function(a){if(!a.ok)throw new Error("Network response was not ok");var i=Object(y.a)(n.state.ingredients),s=i.findIndex((function(t){return t.id===e}));i[s].is_active=t,n.setState({ingredients:i})}))}},{key:"addIngredient",value:function(e){var t=this,n={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":g.a.get("csrftoken")},body:JSON.stringify(e)};fetch("/api/v1/menu/ingredients/",n).then((function(e){if(!e.ok)throw new Error("Network response was not ok");return e.json()})).then((function(e){console.log("data",e);var n=e.price_listings.map((function(e){return e.price_per_pound=(e.price_per_pound/100).toFixed(2),e}));e.price_listings=n;var a=[].concat(Object(y.a)(t.state.ingredients),[e]);t.setState({ingredients:a})})).catch()}},{key:"editIngredient",value:function(e){var t=this,n=e.id,a={method:"PUT",headers:{"Content-Type":"application/json","X-CSRFToken":g.a.get("csrftoken")},body:JSON.stringify(e)};fetch("/api/v1/menu/ingredients/".concat(n,"/"),a).then((function(e){if(!e.ok)throw console.log(e),new Error("Network response was not ok");return e.json()})).then((function(e){var a=Object(y.a)(t.state.ingredients),i=a.findIndex((function(e){return e.id==n}));a[i]=e,t.setState({ingredients:a})}))}},{key:"render",value:function(){var e=this,t=(this.state.ingredients.filter((function(e){return e.is_active})),this.state.ingredients.map((function(t){return Object(v.jsx)(S,{ingredient:t,toggleIngredientActiveStatus:e.toggleIngredientActiveStatus,editIngredient:e.editIngredient},t.id)})));return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("div",{className:"ingredient-container",children:[Object(v.jsx)("h2",{className:"ingredient-header",children:"Ingredient List"}),Object(v.jsx)(w.a,{children:Object(v.jsxs)(N.a,{className:"accordion-card",children:[Object(v.jsx)(N.a.Header,{className:"accordion-header",children:Object(v.jsx)(w.a.Toggle,{as:C.a,eventKey:"0",children:Object(v.jsx)("span",{className:"accordion-toggle",children:"Create Ingredient"})})}),Object(v.jsx)(w.a.Collapse,{eventKey:"0",children:Object(v.jsx)(N.a.Body,{children:Object(v.jsx)(k,{className:"ingredient-form",addIngredient:this.addIngredient,ingredients:this.state.ingredients})})})]})}),Object(v.jsx)("div",{className:"table-responsive",children:Object(v.jsxs)("table",{class:"table",children:[Object(v.jsx)("thead",{children:Object(v.jsxs)("tr",{children:[Object(v.jsx)("th",{scope:"col",children:"Ingredients"}),Object(v.jsx)("th",{scope:"col",children:"Price"}),Object(v.jsx)("th",{scope:"col",children:"Effective Date"}),Object(v.jsx)("th",{scope:"col"}),Object(v.jsx)("th",{scope:"col",children:"Price Change"}),Object(v.jsx)("th",{scope:"col",children:"Effective Date"}),Object(v.jsx)("th",{scope:"col"})]})}),Object(v.jsx)("tbody",{children:t})]})})]})})}}]),n}(a.Component),A=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={display_name:"",avatar:null,preview:""},a.handleInput=a.handleInput.bind(Object(p.a)(a)),a.handleImage=a.handleImage.bind(Object(p.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(p.a)(a)),a}return Object(h.a)(n,[{key:"handleInput",value:function(e){this.setState(Object(O.a)({},e.target.name,e.target.value))}},{key:"handleImage",value:function(e){var t=this,n=e.target.files[0];this.setState({avatar:n});var a=new FileReader;a.onloadend=function(){t.setState({preview:a.result})},a.readAsDataURL(n)}},{key:"handleSubmit",value:function(){var e=Object(l.a)(o.a.mark((function e(t){var n,a,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),(n=new FormData).append("avatar",this.state.avatar),n.append("display_name",this.state.display_name),n.append("user",this.state.user),a={method:"POST",headers:{"X-CSRFToken":g.a.get("csrftoken")},body:n},e.next=8,fetch("/api/v1/users/profiles/",a);case 8:i=e.sent,console.log(i);case 10:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("form",{children:[Object(v.jsx)("input",{type:"text",name:"display_name",value:this.state.display_name,onChange:this.handleInput}),Object(v.jsx)("input",{type:"file",name:"avatar",onChange:this.handleImage}),Object(v.jsx)("button",{type:"submit",children:"Save profile!"}),this.state.avatar?Object(v.jsx)("img",{src:this.state.preview,alt:""}):null]})})}}]),n}(a.Component),T=n(27),M=n(44),E=n.p+"static/media/default-image.2e01288c.jpeg",D=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state=Object(_.a)(Object(_.a)({},a.props.menuitem),{},{isEditing:!1,show:!1,ingredientName:"",ingredientWeight:"",updatedIngredientWeight:"",availableIngredients:a.props.availableIngredients}),a.timer=null,a.editMenuItem=a.editMenuItem.bind(Object(p.a)(a)),a.handleInput=a.handleInput.bind(Object(p.a)(a)),a.toggleMenuActiveStatus=a.toggleMenuActiveStatus.bind(Object(p.a)(a)),a.handleClose=a.handleClose.bind(Object(p.a)(a)),a.handleShow=a.handleShow.bind(Object(p.a)(a)),a.deleteIngredient=a.deleteIngredient.bind(Object(p.a)(a)),a.handleNewIngredient=a.handleNewIngredient.bind(Object(p.a)(a)),a.addIngredient=a.addIngredient.bind(Object(p.a)(a)),a.updateIngredientWeight=a.updateIngredientWeight.bind(Object(p.a)(a)),a}return Object(h.a)(n,[{key:"handleClose",value:function(){this.setState({show:!1})}},{key:"handleShow",value:function(){this.setState({show:!0})}},{key:"editMenuItem",value:function(){this.setState({isEditing:!1});var e={id:this.state.id,name:this.state.name,menu_price:this.state.menu_price};this.props.editMenuItem(e)}},{key:"handleInput",value:function(e){var t=this;this.setState(Object(O.a)({},e.target.name,e.target.value),(function(){clearTimeout(t.timer),t.timer=setTimeout((function(){var e=t.props.menuitem.id,n={name:t.state.name},a={method:"PATCH",headers:{"Content-Type":"application/json","X-CSRFToken":g.a.get("csrftoken")},body:JSON.stringify(n)};fetch("/api/v1/menu/".concat(e,"/"),a).then((function(e){return e.json()})).then((function(e){t.setState({menuitems:e})}))}),1e3)}))}},{key:"deleteIngredient",value:function(e){var t=Object(_.a)({},this.state.ingredients);delete t[e],this.setState({ingredients:t}),this.props.updateIngredient(this.state.id,t)}},{key:"handleNewIngredient",value:function(e){this.setState(Object(O.a)({},e.target.name,e.target.value))}},{key:"addIngredient",value:function(e){e.preventDefault();var t=Object(_.a)({},this.state.ingredients);t[this.state.ingredientName]=this.state.ingredientWeight,this.setState({ingredients:t}),this.props.updateIngredient(this.state.id,t)}},{key:"handleIngredient",value:function(e){var t=Object(_.a)({},this.state.ingredients);""===e.target.value?delete t[e.target.name]:t[e.target.name]=parseInt(e.target.value),this.setState({ingredients:t})}},{key:"updateIngredientWeight",value:function(e){var t=Object(_.a)({},this.state.ingredients);t[e.target.name]=e.target.value,this.setState({ingredients:t})}},{key:"toggleMenuActiveStatus",value:function(){var e=this.state,t=e.id,n=e.is_active;this.props.toggleMenuActiveStatus(t,!n),this.setState({is_active:!n})}},{key:"render",value:function(){var e=this,t=(this.props.menuitem,this.state),n=(t.is_active,t.isEditing,Object.entries(this.state.ingredients));return n=n.map((function(t,n){return Object(v.jsxs)("li",{className:"ingredients-on-menu",children:[Object(v.jsx)("span",{className:"ingredient-name",children:t[0]}),Object(v.jsx)("div",{children:Object(v.jsx)("input",{className:"ingredient-weight",type:"text",name:t[0],value:t[1],onChange:e.updateIngredientWeight})}),Object(v.jsx)("button",{className:"btn btn-outline-danger",onClick:function(){return e.deleteIngredient(t[0])},children:"X"})]},n)})),Object(v.jsxs)("li",{className:"list",children:[Object(v.jsxs)("div",{className:"card menuitem",children:[Object(v.jsx)("div",{children:Object(v.jsx)("input",{className:"menu-input",type:"text",name:"name",value:this.state.name,onChange:this.handleInput})}),Object(v.jsx)(C.a,{variant:"warning",onClick:this.handleShow,children:"See Ingredients"})]}),Object(v.jsxs)(M.a,{show:this.state.show,onHide:this.handleClose,children:[Object(v.jsx)(M.a.Header,{closeButton:!0,children:Object(v.jsx)(M.a.Title,{className:"ingredient-title",children:"Ingredients"})}),Object(v.jsxs)(M.a.Body,{children:[Object(v.jsx)(w.a,{children:Object(v.jsxs)(N.a,{className:"accordion-card",children:[Object(v.jsx)(N.a.Header,{className:"accordion-header",children:Object(v.jsx)(w.a.Toggle,{as:C.a,eventKey:"0",children:Object(v.jsx)("span",{className:"accordion-toggle",children:"Add an Ingredient"})})}),Object(v.jsx)(w.a.Collapse,{eventKey:"0",children:Object(v.jsx)(N.a.Body,{className:"end-of-form",children:Object(v.jsxs)("form",{className:"add-ingredient-form",children:[Object(v.jsxs)("select",{className:"ingredient-dropdown",name:"ingredientName",value:this.state.ingredientName,onChange:this.handleNewIngredient,children:[Object(v.jsx)("option",{children:"Select an ingredient"}),this.props.ingredients.map((function(e){return Object(v.jsx)("option",{value:e.name,children:e.name},e.id)})),";"]}),Object(v.jsx)("input",{type:"text",name:"ingredientWeight",value:this.state.ingredientWeight,placeholder:"Weight in Grams",onChange:this.handleNewIngredient}),Object(v.jsx)("button",{className:"add-ingredient",type:"submit",onClick:this.addIngredient,children:"Add"})]})})})]})}),n]}),Object(v.jsx)(M.a.Footer,{children:Object(v.jsx)(C.a,{variant:"danger",onClick:this.handleClose,children:"Exit"})})]})]})}}]),n}(a.Component),P=Object(T.g)(D),L=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={availableIngredients:a.props.availableIngredients,preview:"",name:"",menu_price:"",ingredients:{},image:null},a.handleSubmit=a.handleSubmit.bind(Object(p.a)(a)),a.handleInput=a.handleInput.bind(Object(p.a)(a)),a.handleIngredient=a.handleIngredient.bind(Object(p.a)(a)),a.handleImage=a.handleImage.bind(Object(p.a)(a)),a}return Object(h.a)(n,[{key:"componentDidUpdate",value:function(e){this.props.availableIngredients!==e.availableIngredients&&this.setState({availableIngredients:this.props.availableIngredients})}},{key:"handleImage",value:function(e){var t=this,n=e.target.files[0];this.setState({image:n});var a=new FileReader;a.onloadend=function(){t.setState({preview:a.result})},a.readAsDataURL(n)}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=this.state,n=t.name,a=t.ingredients,i=t.menu_price,s=t.image,r={name:n,ingredients:a,menu_price:100*Number(i),image:s};this.props.addMenuItem(r),this.setState({name:"",menu_price:"",ingredients:{},image:null})}},{key:"handleInput",value:function(e){this.setState(Object(O.a)({},e.target.name,e.target.value))}},{key:"handleIngredient",value:function(e){var t=Object(_.a)({},this.state.ingredients);""===e.target.value?delete t[e.target.name]:t[e.target.name]=parseInt(e.target.value),this.setState({ingredients:t})}},{key:"render",value:function(){var e,t=this,n=null===(e=this.state.availableIngredients)||void 0===e?void 0:e.map((function(e){return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("li",{className:"mb-3 available-ingredients",children:[Object(v.jsx)("label",{htmlFor:e.name,children:e.name}),Object(v.jsx)("input",{type:"text",id:e.name,name:e.name,value:t.state[e.name],placeholder:"Weight in Grams",onChange:t.handleIngredient})]},e.id)})}));return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(v.jsxs)("div",{className:"create-menu-box",children:[Object(v.jsx)("button",{className:"add-ingredient",type:"submit",children:"Create menu item"}),Object(v.jsx)("input",{className:"ingredient-input",type:"text",name:"name",value:this.state.name,placeholder:"Menu Item Name",onChange:this.handleInput}),Object(v.jsx)("input",{className:"ingredient-input",type:"text",name:"menu_price",value:this.state.menu_price,placeholder:"Price on Menu",onChange:this.handleInput})]}),Object(v.jsx)("ul",{className:"ingredient-grid",children:n}),Object(v.jsx)("img",{className:"preview-img",src:E,alt:""}),Object(v.jsx)("input",{type:"file",name:"menuImg",onChange:this.handleImage}),this.state.menuImg?Object(v.jsx)("img",{className:"img",src:this.state.preview,alt:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fmartialartsplusinc.com%2Fhome%2Fdefault-image%2F&psig=AOvVaw2_wxZFvSEbu5shUuae6NFO&ust=1627012298162000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCMj6nbLj9fECFQAAAAAdAAAAABAD"}):null]})})}}]),n}(a.Component),R=(a.Component,function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={menuitems:[],ingredients:[]},a.deleteMenuItem=a.deleteMenuItem.bind(Object(p.a)(a)),a.editMenuItem=a.editMenuItem.bind(Object(p.a)(a)),a.fetchMenuItems=a.fetchMenuItems.bind(Object(p.a)(a)),a.addMenuItem=a.addMenuItem.bind(Object(p.a)(a)),a.fetchIngredients=a.fetchIngredients.bind(Object(p.a)(a)),a.toggleMenuActiveStatus=a.toggleMenuActiveStatus.bind(Object(p.a)(a)),a.updateIngredient=a.updateIngredient.bind(Object(p.a)(a)),a}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.fetchMenuItems(),this.fetchIngredients()}},{key:"componentWillUnmount",value:function(){clearInterval(this.retrieveMenuitems)}},{key:"updateIngredient",value:function(e,t){var n={method:"PATCH",headers:{"Content-Type":"application/json","X-CSRFToken":g.a.get("csrftoken")},body:JSON.stringify({ingredients:t})};fetch("/api/v1/menu/".concat(e,"/"),n);var a=Object(y.a)(this.state.menuitems),i=a.findIndex((function(t){return t.id===e}));a[i].ingredients=t,this.setState({menuitems:a})}},{key:"toggleMenuActiveStatus",value:function(e,t){var n=this,a={method:"PATCH",headers:{"Content-Type":"application/json","X-CSRFToken":g.a.get("csrftoken")},body:JSON.stringify({is_active:t})};fetch("/api/v1/menu/".concat(e,"/"),a).then((function(a){if(!a.ok)throw new Error("Network response was not ok");var i=Object(y.a)(n.state.menuitems),s=i.findIndex((function(t){return t.id===e}));i[s].is_active=t,n.setState({menuitems:i})}))}},{key:"fetchMenuItems",value:function(){var e=this;fetch("/api/v1/menu/").then((function(e){if(!e.ok)throw new Error("Network response was not ok");return e.json()})).then((function(t){return e.setState({menuitems:t})}))}},{key:"fetchIngredients",value:function(){var e=this;fetch("/api/v1/menu/ingredients/").then((function(e){return e.json()})).then((function(t){return e.setState({ingredients:t})}))}},{key:"deleteMenuItem",value:function(e){var t=this,n={method:"DELETE",headers:{"Content-Type":"application/json","X-CSRFToken":g.a.get("csrftoken")}};fetch("/api/v1/menu/".concat(e),n).then((function(n){var a=Object(y.a)(t.state.menuitems),i=a.findIndex((function(t){return t.id===e}));a.splice(i,1),t.setState({menuitems:a})})).catch((function(e){console.log.error("Error:",e)}))}},{key:"addMenuItem",value:function(e){var t=this,n=new FormData;e instanceof File&&n.append("image",e.image),n.append("name",e.name),n.append("menu_price",e.menu_price),n.append("ingredients",JSON.stringify(e.ingredients));var a={method:"POST",headers:{"X-CSRFToken":g.a.get("csrftoken")},body:n};fetch("/api/v1/menu/",a).then((function(e){if(!e.ok)throw new Error("Network response was not ok");return e.json()})).then((function(e){var n=[].concat(Object(y.a)(t.state.menuitems),[e]);t.setState({menuitems:n})})).catch()}},{key:"editMenuItem",value:function(e){var t=this,n=e.id,a={method:"PUT",headers:{"Content-Type":"application/json","X-CSRFToken":g.a.get("csrftoken")},body:JSON.stringify(e)};fetch("/api/v1/menu/".concat(n,"/"),a).then((function(e){if(!e.ok)throw new Error("Network response was not ok");var n=Object(y.a)(t.state.menuitems);t.setState({menuitems:n})}))}},{key:"render",value:function(){var e=this,t=this.state.menuitems.map((function(t){return Object(v.jsx)(P,{menuitem:t,ingredients:e.state.ingredients,updateIngredient:e.updateIngredient,toggleMenuActiveStatus:e.toggleMenuActiveStatus,editMenuItem:e.editMenuItem},t.id)}));return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("div",{className:"menu-form",children:[Object(v.jsx)("h2",{className:"menu-list",children:"Menu Item List"}),Object(v.jsx)(w.a,{children:Object(v.jsxs)(N.a,{className:"accordion-card",children:[Object(v.jsx)(N.a.Header,{className:"accordion-header",children:Object(v.jsx)(w.a.Toggle,{as:C.a,eventKey:"0",children:Object(v.jsx)("span",{className:"accordion-toggle",children:"Create a Menu Item"})})}),Object(v.jsx)(w.a.Collapse,{eventKey:"0",children:Object(v.jsx)(N.a.Body,{className:"end-of-form",children:Object(v.jsx)(L,{availableIngredients:this.state.ingredients,addMenuItem:this.addMenuItem})})})]})}),Object(v.jsx)("ul",{className:"container-menuitems",children:t})]})})}}]),n}(a.Component)),J=n(361),X=n(365),W=n(203),U=n(204),H=n(96),z=n(206),B="",K=0,G=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={joke:"",menuitems:[],ingredients:[]},a.fetchJoke=a.fetchJoke.bind(Object(p.a)(a)),a.fetchData=a.fetchData.bind(Object(p.a)(a)),a.fetchIngredients=a.fetchIngredients.bind(Object(p.a)(a)),a.calculateMenuItemCost=a.calculateMenuItemCost.bind(Object(p.a)(a)),a}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.fetchJoke(),this.fetchData(),this.fetchIngredients()}},{key:"componentWillUnmount",value:function(){clearInterval(this.retrieveMenuitems)}},{key:"fetchData",value:function(){var e=this;fetch("/api/v1/menu/").then((function(e){if(!e.ok)throw new Error("Network response was not ok");return e.json()})).then((function(t){return e.setState({menuitems:t})}))}},{key:"fetchIngredients",value:function(){var e=this;fetch("/api/v1/menu/ingredients/").then((function(e){return e.json()})).then((function(t){t.forEach((function(e){e.price_listings=e.price_listings.reduce((function(e,t){return new Date(e.start_date)>new Date(t.start_date)?e:t}))})),e.setState({ingredients:t})}))}},{key:"fetchJoke",value:function(){fetch("https://api.spoonacular.com/food/jokes/random?apiKey=".concat("7f40aaf07d494a74910b1ac4fcff7357")).then((function(e){return e.json()})).then((function(e){return console.log(e)}))}},{key:"calculateMenuItemCost",value:function(e){var t=this;return 0==this.state.ingredients.length?0:Object.entries(e.ingredients).reduce((function(e,n){var a=n[0];return e+.0022046226*n[1]*(t.state.ingredients.find((function(e){return e.name===a})).price_listings.price_per_pound/100)}),0)}},{key:"render",value:function(){var e=this,t=[],n=this.state.menuitems.map((function(n){B=n.name;var a=e.calculateMenuItemCost(n);return t.push({name:B,price:a}),K=parseFloat(a).toFixed(2),Object(v.jsxs)("div",{className:"menuCost",children:[B,Object(v.jsx)("h1",{}),Object(v.jsx)("p",{}),"$",K]})}));return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("div",{className:"homepage",children:[Object(v.jsx)("h2",{className:"foodbook-title",children:"FoodBook"}),Object(v.jsx)("div",{children:Object(v.jsx)("ul",{children:n})}),Object(v.jsx)("header",{children:"Cost per Plate "}),Object(v.jsxs)(J.a,{width:1200,height:500,data:t,margin:{top:5,right:30,left:20,bottom:5},children:[Object(v.jsx)(X.a,{strokeDasharray:"3 3"}),Object(v.jsx)(W.a,{dataKey:"name"}),Object(v.jsx)(U.a,{}),Object(v.jsx)(H.a,{}),Object(v.jsx)(z.a,{dataKey:"price",fill:"#82ca9d"})]})]})})}}]),n}(a.Component),Q=n(140);n(207);var q=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={},a.handleLogin=a.handleLogin.bind(Object(p.a)(a)),a.handleLogout=a.handleLogout.bind(Object(p.a)(a)),a.handleRegistration=a.handleRegistration.bind(Object(p.a)(a)),a.handleNavigation=a.handleNavigation.bind(Object(p.a)(a)),a}return Object(h.a)(n,[{key:"handleLogin",value:function(){var e=Object(l.a)(o.a.mark((function e(t){var n,a,i,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":g.a.get("csrftoken")},body:JSON.stringify(t)},a=function(e){return console.warn(e)},e.next=4,fetch("/rest-auth/login/",n).catch(a);case 4:if(!(i=e.sent).ok){e.next=11;break}return e.next=8,i.json().catch(a);case 8:s=e.sent,g.a.set("Authorization","Token ".concat(s.key)),this.props.history.push("/ingredientlist");case 11:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"handleRegistration",value:function(){var e=Object(l.a)(o.a.mark((function e(t){var n,a,i,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":g.a.get("csrftoken")},body:JSON.stringify(t)},a=function(e){return console.warn(e)},e.next=4,fetch("/rest-auth/registration/",n).catch(a);case 4:if(!(i=e.sent).ok){e.next=11;break}return e.next=8,i.json().catch(a);case 8:s=e.sent,g.a.set("Authorization","Token ".concat(s.key)),this.props.history.push("/ingredientlist");case 11:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"handleNavigation",value:function(e){this.setState({selection:e})}},{key:"handleLogout",value:function(){var e=Object(l.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":g.a.get("csrftoken")}},n=function(e){return console.warn(e)},e.next=4,fetch("/rest-auth/logout/",t).catch(n);case 4:e.sent.ok&&(g.a.remove("Authorization"),this.props.history.push("/"));case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)(Q.a,{className:"navbar-links",children:[!g.a.get("Authorization")&&Object(v.jsx)(c.b,{className:"btn btn-primary",to:"/registration",children:"Registration"}),!g.a.get("Authorization")&&Object(v.jsx)(c.b,{className:"btn btn-primary",to:"/",children:"Login"}),g.a.get("Authorization")&&Object(v.jsx)(c.b,{className:"btn btn-outline-warning",to:"/homepage",children:"Homepage"}),g.a.get("Authorization")&&Object(v.jsx)(c.b,{className:"btn btn-outline-warning",to:"/ingredientlist",children:"Ingredients"}),g.a.get("Authorization")&&Object(v.jsx)(c.b,{className:"btn btn-outline-warning",to:"/menulist",children:"Menu"}),g.a.get("Authorization")&&Object(v.jsx)(c.b,{className:"btn btn-outline-warning",id:"logout-btn",onClick:this.handleLogout,children:"Logout"})]}),Object(v.jsxs)(T.d,{children:[Object(v.jsx)(T.b,{path:"/registration",children:Object(v.jsx)(x,{handleRegistration:this.handleRegistration,handleNavigation:this.handleNavigation})}),Object(v.jsx)(T.b,{exact:!0,path:"/",children:Object(v.jsx)(I,{handleLogin:this.handleLogin,handleNavigation:this.handleNavigation})}),Object(v.jsx)(T.b,{path:"/profile",children:Object(v.jsx)(A,{})}),Object(v.jsx)(T.b,{path:"/ingredientlist",children:Object(v.jsx)(F,{})}),Object(v.jsx)(T.b,{path:"/homepage",children:Object(v.jsx)(G,{})}),Object(v.jsx)(T.b,{path:"/menulist",children:Object(v.jsx)(R,{})})]})]})}}]),n}(a.Component),V=Object(T.g)(q),Z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,369)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),i(e),s(e),r(e)}))};n(356);r.a.render(Object(v.jsx)(i.a.StrictMode,{children:Object(v.jsx)(c.a,{children:Object(v.jsx)(V,{})})}),document.getElementById("root")),Z()}},[[357,1,2]]]);
//# sourceMappingURL=main.05b4f071.chunk.js.map