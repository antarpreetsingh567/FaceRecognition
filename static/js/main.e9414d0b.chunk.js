(this.webpackJsonpfacerecognitionbrain=this.webpackJsonpfacerecognitionbrain||[]).push([[0],{102:function(e,t,a){},350:function(e,t,a){},351:function(e,t,a){},352:function(e,t,a){},353:function(e,t,a){},355:function(e,t,a){"use strict";a.r(t);var n=a(2),o=a.n(n),i=a(45),c=a.n(i),r=(a(102),a(90)),l=a(91),s=a(96),u=a(95),m=a(46),p=a.n(m),d=a(92),h=a.n(d),g=function(){return o.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end"}},o.a.createElement("p",{className:"f3 link dim black underline pa3 pointer"},"Welcome"))},f=(a(350),function(e){var t=e.imageUrl,a=e.box;return o.a.createElement("div",{className:"center ma"},o.a.createElement("div",{className:"absolute mt2"},o.a.createElement("img",{id:"inputimage",alt:"",src:t,width:"500px",height:"auto"}),o.a.createElement("div",{className:"bounding-box",style:{top:a.topRow,right:a.rightCol,bottom:a.bottomRow,left:a.leftCol}})))}),b=a(93),E=a.n(b),v=a(94),w=a.n(v),y=(a(351),function(){return o.a.createElement("div",{className:"ma4 mt0"},o.a.createElement(E.a,{className:"Tilt br2 shadow-2",options:{max:55},style:{height:170,width:150}},o.a.createElement("div",{className:"Tilt-inner",pa3:"true"}," ",o.a.createElement("img",{style:{paddingTop:"0px"},alt:"logo",src:w.a})," ")))}),N=(a(352),function(e){var t=e.onInputChange,a=e.onButtonSubmit;return o.a.createElement("div",null,o.a.createElement("p",{className:"f3"},"This Magic Brain will detect faces in your pictures. Get it a try."),o.a.createElement("div",{className:"center"},o.a.createElement("div",{className:"form center pa4 br3 shadow-5"},o.a.createElement("input",{className:"f4 pa2 w-70 center",type:"tex",onChange:t}),o.a.createElement("button",{className:"w-30 grow f4 link ph3 pv3 dib white bg-light-purple",onClick:a},"Detect"))))}),x=function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"white f3"},"By:- Antarpreet Singh"),o.a.createElement("div",{className:"white f1"},"Face Recognition App"))},C=(a(353),new p.a.App({apiKey:"7189b6032dea4dae98043465413cb14d"})),B={particles:{number:{value:200,density:{enable:!0,value_area:900}}}},k=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(r.a)(this,a),(e=t.call(this)).calculateFaceLocation=function(e){var t=e.outputs[0].data.regions[0].region_info.bounding_box,a=document.getElementById("inputimage"),n=Number(a.width),o=Number(a.height);return{leftCol:t.left_col*n,topRow:t.top_row*o,rightCol:n-t.right_col*n,bottomRow:o-t.bottom_row*o}},e.displayFaceBox=function(t){e.setState({box:t})},e.onInputChange=function(t){e.setState({input:t.target.value})},e.onButtonSubmit=function(){e.setState({imageUrl:e.state.input}),C.models.predict(p.a.FACE_DETECT_MODEL,e.state.input).then((function(t){return e.displayFaceBox(e.calculateFaceLocation(t))})).catch((function(e){return console.log(e)}))},e.state={input:"",imageUrl:"",box:{}},e}return Object(l.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(h.a,{className:"particles",params:B}),o.a.createElement(g,null),o.a.createElement(y,null),o.a.createElement(x,null),o.a.createElement(N,{onInputChange:this.onInputChange,onButtonSubmit:this.onButtonSubmit}),o.a.createElement(f,{box:this.state.box,imageUrl:this.state.imageUrl}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(354);c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},94:function(e,t,a){e.exports=a.p+"static/media/brain1.6258c582.png"},97:function(e,t,a){e.exports=a(355)}},[[97,1,2]]]);
//# sourceMappingURL=main.e9414d0b.chunk.js.map