(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,a){e.exports=a(30)},25:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var n=a(4),l=a(5),r=a(7),i=a(8),s=a(0),o=a.n(s),c=a(17),u=a.n(c),d=a(3),m=(a(25),a(26),a(15));var f=function(){var e=Object(s.useState)("invalid"),t=Object(d.a)(e,2),a=t[0],n=t[1];return o.a.createElement("div",{className:"u-body u-xl-mode","data-v-f6e7f13a":""},o.a.createElement("section",{className:"u-clearfix u-section-1",id:"sec-bd6f","data-v-f6e7f13a":""},o.a.createElement("div",{className:"u-container-style u-expanded-width u-group u-image u-image-1","data-image-width":1193,"data-image-height":676,"data-v-f6e7f13a":""},o.a.createElement("div",{className:"u-container-layout u-container-layout-1","data-v-f6e7f13a":""},o.a.createElement("img",{className:"u-image u-image-contain u-image-default u-image-2",src:"images/Group.png",alt:!0,"data-image-width":670,"data-image-height":590,"data-v-f6e7f13a":""}),o.a.createElement("h4",{className:"u-text u-text-custom-color-1 u-text-default u-text-1","data-v-f6e7f13a":""},"BGD Spin Wheel"),o.a.createElement("p",{className:"u-text u-text-custom-color-1 u-text-default u-text-2","data-v-f6e7f13a":""},"1st come win more"),o.a.createElement("a",{onClick:function(){"invalid"!=a?(document.getElementById("upload").value="",window.location.href="/bgdspinner"):alert("Please submit valid attendence sheet")},className:"u-btn u-btn-round u-button-style u-hover-palette-1-light-2 u-palette-1-base u-radius-2 u-btn-1","data-v-f6e7f13a":""},"Submit\xa0",o.a.createElement("span",{className:"u-icon u-text-white","data-v-f6e7f13a":""},o.a.createElement("svg",{className:"u-svg-content",viewBox:"0 0 512 512",x:"0px",y:"0px",style:{width:"1em",height:"1em"},"data-v-f6e7f13a":""},o.a.createElement("path",{d:"M506.134,241.843c-0.006-0.006-0.011-0.013-0.018-0.019l-104.504-104c-7.829-7.791-20.492-7.762-28.285,0.068 c-7.792,7.829-7.762,20.492,0.067,28.284L443.558,236H20c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20h423.557 l-70.162,69.824c-7.829,7.792-7.859,20.455-0.067,28.284c7.793,7.831,20.457,7.858,28.285,0.068l104.504-104 c0.006-.006,0.011-.013,0.018-.019C513.968,262.339,513.943,249.635,506.134,241.843z","data-v-f6e7f13a":""})),o.a.createElement("img",{"data-v-f6e7f13a":""}))),o.a.createElement("div",{className:"u-container-style u-group u-group-2","data-v-f6e7f13a":""},o.a.createElement("div",{class:"mb-3","data-v-f6e7f13a":""},o.a.createElement("label",{for:"",class:"form-label","data-v-f6e7f13a":""},"Choose attendence file"),o.a.createElement("input",{type:"file",class:"form-control",name:"upload",id:"upload",onChange:function(e){e.preventDefault();try{if(e.target.files){var t=new FileReader;t.onload=function(e){var t=e.target.result,a=m.a(t,{type:"array"}),l=a.SheetNames[0],r=a.Sheets[l],i=m.b.sheet_to_json(r),s=[];i.forEach(function(e){var t=Object.values(e);t.forEach(function(e){if("On Time"==e){if("Hafiz Nabeel Zia"==t[2]||"Ibtesam Moatisim Khan"==t[2]||"Muhammad Aziz"==t[2])return 0;s.push(t[2])}})}),window.localStorage.setItem("participents",JSON.stringify(s)),n("valid")},t.readAsArrayBuffer(e.target.files[0])}}catch(a){alert("Unknown error! Please try again"),n("invalid")}},"aria-describedby":"fileHelpId","data-v-f6e7f13a":""}),o.a.createElement("div",{id:"fileHelpId",class:"form-text","data-v-f6e7f13a":""},"Biomatric generated attendence sheet*")))))))},v=(a(27),a(28),a(29),function(e){Object(r.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(n.a)(this,a);for(var l=arguments.length,r=new Array(l),i=0;i<l;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={list:JSON.parse(window.localStorage.getItem("participents")),radius:75,rotate:0,easeOut:0,angle:0,top:null,offset:null,net:null,result:null,spinning:!1},e.topPosition=function(t,a){var n=null,l=null;9===t?(n=7,l=Math.PI/2-2*a):8===t?(n=6,l=0):t<=7&&t>4?(n=t-1,l=Math.PI/2-a):4===t?(n=t-1,l=0):t<=3&&(n=t,l=Math.PI/2),e.setState({top:n-1,offset:l})},e.spin=function(){var t=Math.floor(900*Math.random())+500;e.setState({rotate:t,easeOut:2,spinning:!0}),setTimeout(function(){e.getResult(t)},2e3)},e.getResult=function(t){for(var a,n=e.state,l=n.angle,r=n.top,i=n.offset,s=n.list,o=t%360*Math.PI/180,c=o+i,u=r+1;c>0;)c-=l,u--;a=u>=0?u:s.length+u,e.setState({net:o,result:a})},e.reset=function(){e.setState({rotate:0,easeOut:0,result:null,spinning:!1})},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.renderWheel()}},{key:"renderWheel",value:function(){var e=this.state.list.length,t=2*Math.PI/e;this.setState({angle:t}),this.topPosition(e,t);for(var a=0,n=0;n<e;n++){var l=this.state.list[n];this.renderSector(n+1,l,a,t,this.getColor()),a+=t}}},{key:"renderSector",value:function(e,t,a,n,l){var r=document.getElementById("wheel"),i=r.getContext("2d"),s=r.width/2,o=r.height/2,c=this.state.radius,u=a,d=a+n,m=e*n,f=3.33*c,v=f-130;i.beginPath(),i.arc(s,o,c,u,d,!1),i.lineWidth=2*c,i.strokeStyle=l,i.font="9px Arial",i.fillStyle="black",i.stroke(),i.save(),i.translate(f+Math.cos(m-n/2)*v,f+Math.sin(m-n/2)*v),i.rotate(m-n/2+Math.PI/2),i.fillText(t,-i.measureText(t).width/2,0),i.restore()}},{key:"getColor",value:function(){var e=Math.floor(255*Math.random()),t=Math.floor(255*Math.random()),a=Math.floor(255*Math.random());return"rgba(".concat(e,",").concat(t,",").concat(a,",0.4)")}},{key:"render",value:function(){return o.a.createElement("div",{className:"u-body u-xl-mode","data-v-f7311458":""},o.a.createElement("div",{"data-v-f7311458":""},o.a.createElement("section",{className:"u-clearfix u-custom-color-4 u-section-1",id:"sec-1b4d","data-v-f7311458":""},o.a.createElement("div",{className:"u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1","data-v-f7311458":""},o.a.createElement("div",{className:"u-layout","data-v-f7311458":""},o.a.createElement("div",{className:"u-layout-row","data-v-f7311458":""},o.a.createElement("div",{className:"u-container-style u-layout-cell u-size-35 u-layout-cell-1","data-v-f7311458":""},o.a.createElement("div",{className:"u-container-layout u-container-layout-1","data-v-f7311458":""},o.a.createElement("span",{id:"selector","data-v-f7311458":""}," ",o.a.createElement("img",{src:"images/arrow.png",style:{height:"70px",transform:"rotate(77deg)"},alt:"","data-v-f7311458":""})," "),o.a.createElement("canvas",{id:"wheel",width:"500",height:"500",style:{WebkitTransform:"rotate(".concat(this.state.rotate,"deg)"),WebkitTransition:"-webkit-transform ".concat(this.state.easeOut,"s ease-out")},"data-v-f7311458":""}),o.a.createElement("img",{src:"images/pillar.png",style:{height:"176px",position:"absolute",top:"419px",right:"513px"},alt:"","data-v-f7311458":""}),this.state.spinning?o.a.createElement("button",{type:"button",id:"reset",onClick:this.reset,"data-v-f7311458":""},"reset"):o.a.createElement("button",{type:"button",id:"spin",onClick:this.spin,"data-v-f7311458":""},"spin"))),o.a.createElement("div",{className:"u-container-style u-layout-cell u-size-25 u-layout-cell-2","data-v-f7311458":""},o.a.createElement("div",{className:"u-container-layout u-valign-middle u-container-layout-2","data-v-f7311458":""},o.a.createElement("h4",{className:"u-text u-text-default u-text-1","data-v-f7311458":""},o.a.createElement("span",{style:{fontWeight:700,fontSize:"2.25rem"},"data-v-f7311458":""},"BGD Spinner"),o.a.createElement("br",{"data-v-f7311458":""})),o.a.createElement("div",{className:"u-container-style u-custom-color-1 u-expanded-width u-group u-radius-12 u-shape-round u-group-1 shadow ","data-v-f7311458":""},o.a.createElement("div",{className:"u-container-layout u-container-layout-3","data-v-f7311458":""},o.a.createElement("h5",{className:"u-text u-text-default u-text-white u-text-2","data-v-f7311458":""},"Winner"),o.a.createElement("p",{className:"resulttext","data-v-f7311458":""},this.state.list[this.state.result]," "))),o.a.createElement("a",{href:"/",id:"backicon",className:"u-active-none u-btn u-button-style u-hover-none u-none u-text-hover-palette-2-base u-text-palette-1-base u-btn-2","data-v-f7311458":""},o.a.createElement("span",{className:"u-file-icon u-icon u-text-custom-color-1","data-v-f7311458":""},o.a.createElement("img",{src:"images/507257-7d3ee33e.png",alt:!0,"data-v-f7311458":""})),"\xa0Go Back")))))))))}}]),a}(s.Component)),h=a(18),p=a(1),g=function(e){Object(r.a)(a,e);var t=Object(i.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return o.a.createElement(h.a,null,o.a.createElement(p.c,null,o.a.createElement(p.a,{index:!0,element:o.a.createElement(f,null)}),o.a.createElement(p.a,{path:"/",element:o.a.createElement(f,null)}),o.a.createElement(p.a,{path:"/bgdspinner",element:o.a.createElement(v,null)})))}}]),a}(o.a.Component),E=document.getElementById("root");u.a.render(o.a.createElement(g,null),E)}},[[19,1,2]]]);
//# sourceMappingURL=main.efac5854.chunk.js.map