(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{196:function(e,t,a){e.exports=a(338)},201:function(e,t,a){},202:function(e,t,a){},335:function(e,t,a){},338:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(16),i=a.n(o),s=(a(201),a(27)),l=a(28),c=a(46),u=a(45),m=a(47),h=(a(202),a(79)),g=a.n(h),d=a(116),f=a(9),p=function(){function e(){Object(s.a)(this,e),this.isGrayMode=!1,this.images=[],this.currentImages=[],this.countGalleryImages=30}return Object(l.a)(e,[{key:"fetchImages",value:function(){var e=Object(d.a)(g.a.mark(function e(){var t,a,n=arguments;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:"https://picsum.photos/list",e.next=3,fetch(t);case 3:return a=e.sent,e.next=6,a.json();case 6:this.images=e.sent,this.images.map(function(e){return e.key=Math.random(),e}),this.setRandomImages();case 9:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"setRandomImages",value:function(){for(var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.countGalleryImages,a=Math.min(t,this.images.length),n=[],r=[],o=0;o<a;o++){do{e=Math.floor(Math.random()*this.images.length)}while(n.includes(e));n.push(e),r.push(this.images[e])}this.currentImages=r}},{key:"toggleGrayMode",value:function(){this.isGrayMode=!this.isGrayMode}}]),e}();Object(f.h)(p,{images:f.m,currentImages:f.m,isGrayMode:f.m,toggleGrayMode:f.d,setRandomImages:f.d});var y=p,v=a(34),b=a(118),w=a(21),G=function(e){var t=e.picture,a=e.isGreyMode?"Picture grey":"Picture",n="https://picsum.photos/300/300?image=".concat(t.id);return r.a.createElement(w.b,{className:a},r.a.createElement("img",{src:n}),r.a.createElement(w.c,null,r.a.createElement("div",{className:"Author-name"},t.author)))},O=a(44),j=a.n(O),I=(a(335),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).filter="",a.handelChangeGreyMode=function(){a.props.galleryStore.toggleGrayMode()},a.handleFilter=function(e){a.filter=e.target.value},a.setRandomImages=function(){a.props.galleryStore.setRandomImages()},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.galleryStore.fetchImages()}},{key:"render",value:function(){var e=this,t=this.images.map(function(t){return r.a.createElement(G,{key:t.key,picture:t,isGreyMode:e.props.galleryStore.isGrayMode})});return r.a.createElement("div",{className:"Gallery"},r.a.createElement("header",null,r.a.createElement(w.e,{id:"outlined-name",label:"Filter",onChange:this.handleFilter,margin:"normal",fullWidth:!0,variant:"outlined"}),r.a.createElement(j.a,{control:r.a.createElement(w.d,{checked:this.props.galleryStore.isGrayMode,onChange:this.handelChangeGreyMode,value:"Grey filter"}),label:"Grey filter"}),r.a.createElement("div",null,r.a.createElement(w.a,{variant:"contained",className:"GetImages-button",color:"primary",onClick:this.setRandomImages},"Get images"))),r.a.createElement("section",{className:"Images"},t.length?t:"No result found"))}},{key:"images",get:function(){var e=this;return""===this.filter?this.props.galleryStore.currentImages:this.props.galleryStore.currentImages.filter(function(t){var a=t.author.split(" "),n=Object(b.a)(a,2),r=n[0],o=n[1];return r&&0===r.toLowerCase().indexOf(e.filter.toLowerCase())||o&&0===o.toLowerCase().indexOf(e.filter.toLowerCase())})}}]),t}(n.Component));Object(f.h)(I,{images:f.e,filter:f.m,handleFilter:f.d});var M=Object(v.b)("galleryStore")(Object(v.c)(I)),k={galleryStore:new y},E=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(v.a,k,r.a.createElement(M,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[196,1,2]]]);
//# sourceMappingURL=main.b4f5df60.chunk.js.map