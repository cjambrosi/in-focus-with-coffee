(this["webpackJsonpreact-salario"]=this["webpackJsonpreact-salario"]||[]).push([[0],{17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),l=a.n(c),i=(a(14),a(15),a(6)),s=a.n(i),u=(a(17),a(1)),o=a(2),p=a(4),d=a(3),m=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleInputChange=function(t){var a=t.target.value;e.props.onChangeSalary(a)},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props.fullSalary;return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-field col s12 offset-m4 m4"},r.a.createElement("input",{id:"salary_base",type:"number",value:e,onChange:this.handleInputChange}),r.a.createElement("label",{htmlFor:"salary_base"},"Sal\xe1rio Base")))}}]),a}(n.Component),f=a(5),y=a.n(f),S=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props.salaryObj,t=e.discountINSSPercent,a=e.discountIRPFPercent,n=e.netSalaryPercent;return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12"},r.a.createElement("div",{className:y.a.progressiveBar},r.a.createElement("div",{className:y.a.inssSalary,style:{width:"".concat(t,"%")}}),r.a.createElement("div",{className:y.a.irpfSalary,style:{width:"".concat(a,"%")}}),r.a.createElement("div",{className:y.a.netSalary,style:{width:"".concat(n,"%")}}))))}}]),a}(n.Component),v=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).componentDidUpdate=function(){s.a.updateTextFields()},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props,t=e.idInput,a=e.inputValue,n=e.title,c=e.styleInput;return r.a.createElement("div",{className:"input-field col s12 m3"},r.a.createElement("input",{id:t,style:c,type:"text",value:a,disabled:!0}),r.a.createElement("label",{className:"active",htmlFor:t},n))}}]),a}(n.Component),h=[{id:1,minValue:0,maxValue:1045,difference:1045,discountPercentage:.075,discountValue:-1},{id:2,minValue:1045.01,maxValue:2089.6,difference:1044.6,discountPercentage:.09},{id:3,minValue:2089.61,maxValue:3134.4,difference:3134.4-2089.6,discountPercentage:.12},{id:4,minValue:3134.41,maxValue:6101.06,difference:6101.06-3134.4,discountPercentage:.14}];function I(e){return+e.toFixed(2)}function b(e,t){var a=0;return e&&t&&(a=e/t*100),I(a)}function g(e){var t=+e,a=function(e){var t=0;if(e>6101.07)return 713.1;for(var a=0;a<h.length;a++){var n=h[a];if(!(e>n.maxValue)){t+=I((e-n.minValue)*n.discountPercentage);break}t+=I(n.difference*n.discountPercentage)}return t=I(t)}(t),n=t-a,r=function(e){var t=e<1903.98?0:e<2826.65?I(.075*e)-142.8:e<3751.05?I(.15*e)-354.8:e<4664.68?I(.225*e)-636.13:I(.275*e)-869.36;return t=I(t)}(n),c=t-a-r;return{baseINSS:t,discountINSS:a,baseIRPF:n,discountIRPF:r,netSalary:c,discountINSSPercent:b(a,t),discountIRPFPercent:b(r,t),netSalaryPercent:b(c,t)}}var E=Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"});function N(e){return E.format(e)}var P=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(u.a)(this,a),(e=t.call(this)).handleSalaryChange=function(t){e.setState({fullSalary:t})},e.state={fullSalary:""},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state.fullSalary,t=g(e);return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 center"},r.a.createElement("h1",null,"React Sal\xe1rio"))),r.a.createElement(m,{fullSalary:e,onChangeSalary:this.handleSalaryChange}),r.a.createElement(S,{salaryObj:t}),r.a.createElement("div",{className:"row"},r.a.createElement(v,{idInput:"inss_base",inputValue:"".concat(N(t.baseINSS)),title:"Base INSS",styleInput:_.inputBaseInss}),r.a.createElement(v,{idInput:"inss_discount",inputValue:"".concat(N(t.discountINSS)," (").concat(t.discountINSSPercent,"%)"),title:"Desconto INSS",styleInput:_.inputBaseInss}),r.a.createElement(v,{idInput:"irpf_base",inputValue:"".concat(N(t.baseIRPF)),title:"Base IRPF",styleInput:_.inputDiscountInss}),r.a.createElement(v,{idInput:"irpf_discount",inputValue:"".concat(N(t.discountIRPF)," (").concat(t.discountIRPFPercent,"%)"),title:"Desconto IRPF",styleInput:_.inputDiscounIrpf}),r.a.createElement(v,{idInput:"net_salary",inputValue:"".concat(N(t.netSalary)," (").concat(t.netSalaryPercent,"%)"),title:"Sal\xe1rio L\xedquido",styleInput:_.inputNetSalay})))}}]),a}(n.Component),_={inputBaseInss:{color:"#000",fontWeight:"700"},inputDiscountInss:{color:"#e67e22",fontWeight:"700"},inputBaseIrpf:{color:"#000",fontWeight:"700"},inputDiscounIrpf:{color:"#c0392b",fontWeight:"700"},inputNetSalay:{color:"#16a085",fontWeight:"700"}};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(P,null)),document.getElementById("root"))},5:function(e,t,a){e.exports={progressiveBar:"progresseBar_progressiveBar__11r2P",inssSalary:"progresseBar_inssSalary__3cZJx",irpfSalary:"progresseBar_irpfSalary__2cDre",netSalary:"progresseBar_netSalary__20rTU"}},9:function(e,t,a){e.exports=a(18)}},[[9,1,2]]]);
//# sourceMappingURL=main.1d2fb681.chunk.js.map