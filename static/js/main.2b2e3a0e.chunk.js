(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],[,,function(e,t,n){e.exports={form:"PhoneForm_form__2aQrQ",formInput:"PhoneForm_formInput__wBxBz",formLabel:"PhoneForm_formLabel__1vrvv",addToContacts:"PhoneForm_addToContacts__2Sjqg"}},,,,,,function(e,t,n){e.exports={list:"ContactList_list__2eTZi",item:"ContactList_item__2z1XV",deleteBtn:"ContactList_deleteBtn__3KbWg"}},,function(e,t,n){e.exports={findForm:"FilterContacts_findForm__16RJZ",findFormLabel:"FilterContacts_findFormLabel__GTh94"}},,function(e,t,n){e.exports={container:"MainContainer_container__3YcJh"}},,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(11),c=n.n(o),i=(n(18),n(7)),s=n(13),u=n(3),l=n(4),m=n(6),d=n(5),b=n(2),h=n.n(b),f=n(0),j=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={name:"",number:""},e.handleInputChange=function(t){var n=t.currentTarget.value;e.setState(Object(i.a)({},t.currentTarget.name,n))},e.addToContacts=function(t){t.preventDefault(),e.props.onSubmit(e.state),e.resetForm()},e.resetForm=function(){e.setState({name:"",number:""})},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("form",{onSubmit:this.addToContacts,className:h.a.form,children:[Object(f.jsxs)("label",{className:h.a.formLabel,children:["Name",Object(f.jsx)("input",{className:h.a.formInput,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:this.state.name,onChange:this.handleInputChange})]}),Object(f.jsxs)("label",{className:h.a.formLabel,children:["Number",Object(f.jsx)("input",{className:h.a.formInput,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:this.state.number,onChange:this.handleInputChange})]}),Object(f.jsx)("button",{className:h.a.addToContacts,type:"submit",children:"Add to contacts"})]})}}]),n}(a.Component),p=(n(20),n(23)),O=n(10),C=n.n(O),_=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(f.jsx)("form",{className:C.a.findForm,children:Object(f.jsxs)("label",{className:C.a.findFormLabel,children:["Find contacts by name",Object(f.jsx)("input",{type:"text",name:"filter",value:this.props.value,onChange:this.props.onSubmit})]})})}}]),n}(a.Component),x=n(8),v=n.n(x),g=function(e){var t=e.data,n=e.onDeleteItem,a=t.contacts.filter((function(e){return e.name.toLowerCase().trim().includes(t.filter.toLowerCase().trim())}));return Object(f.jsx)("ul",{className:v.a.list,children:a.map((function(e){return Object(f.jsxs)("li",{className:v.a.item,children:[e.name,": ",e.number,Object(f.jsx)("button",{className:v.a.deleteBtn,type:"button",name:"delete",onClick:function(){return n(e.id)},children:"Delete"})]},e.id)}))})},F=n(12),S=n.n(F);var y=function(e){var t=e.children;return Object(f.jsx)("div",{className:S.a.container,children:t})},L=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(u.a)(this,n),(e=t.call(this)).formSubmitHandler=function(t){e.state.contacts.find((function(e){return e.name.toLowerCase().trim()===t.name.toLowerCase().trim()}))?alert("".concat(t.name," is already in contacts")):e.setState((function(e){var n={name:t.name,number:t.number,id:Object(p.a)()};return{contacts:[].concat(Object(s.a)(e.contacts),[n])}}))},e.handleFilterField=function(t){return e.setState({filter:t.target.value})},e.handleInputChange=function(t){return e.setState(Object(i.a)({},t.currentTarget.name,t.currentTarget.value))},e.deleteButtonHandler=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e.state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)(y,{children:[Object(f.jsx)("h1",{children:"Phonebook"}),Object(f.jsx)(j,{onSubmit:this.formSubmitHandler}),Object(f.jsx)("h2",{children:"Contacts:"}),Object(f.jsx)(_,{value:this.state.filter,onSubmit:this.handleFilterField}),Object(f.jsx)(g,{data:this.state,onDeleteItem:this.deleteButtonHandler})]})})}}]),n}(r.a.Component);c.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(L,{})}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.2b2e3a0e.chunk.js.map