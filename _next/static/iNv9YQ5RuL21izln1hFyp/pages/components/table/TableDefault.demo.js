(window.webpackJsonp=window.webpackJsonp||[]).push([["d89a"],{"0XBy":function(t,n,e){var r=e("/1nD"),o=e("0Sp3")("iterator"),a=e("N9zW");t.exports=e("TaGV").isIterable=function(t){var n=Object(t);return void 0!==n[o]||"@@iterator"in n||a.hasOwnProperty(r(n))}},"0tNF":function(t,n,e){"use strict";e.r(n);var r=e("s20r"),o=e.n(r);var a=e("8ET1"),i=e.n(a),u=e("7X5e"),c=e.n(u);function f(t){return function(t){if(o()(t)){for(var n=0,e=new Array(t.length);n<t.length;n++)e[n]=t[n];return e}}(t)||function(t){if(c()(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return i()(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}e.d(n,"default",function(){return f})},"2agv":function(t,n,e){"use strict";var r=e("8Xl/"),o=e("/6KZ"),a=e("dCrc"),i=e("oICS"),u=e("Ng5M"),c=e("gou2"),f=e("ErhN"),s=e("VJcA");o(o.S+o.F*!e("Clx3")(function(t){Array.from(t)}),"Array",{from:function(t){var n,e,o,l,d=a(t),p="function"==typeof this?this:Array,g=arguments.length,v=g>1?arguments[1]:void 0,h=void 0!==v,m=0,b=s(d);if(h&&(v=r(v,g>2?arguments[2]:void 0,2)),null==b||p==Array&&u(b))for(e=new p(n=c(d.length));n>m;m++)f(e,m,h?v(d[m],m):d[m]);else for(l=b.call(d),e=new p;!(o=l.next()).done;m++)f(e,m,h?i(l,v,[o.value,m],!0):o.value);return e.length=m,e}})},"7X5e":function(t,n,e){t.exports=e("8/po")},"8/po":function(t,n,e){e("k/kI"),e("WwSA"),t.exports=e("0XBy")},"8ET1":function(t,n,e){t.exports=e("Vlwe")},"9lmX":function(t,n,e){e("zWrT");var r=e("TaGV").Object;t.exports=function(t,n){return r.getOwnPropertyDescriptor(t,n)}},Clx3:function(t,n,e){var r=e("0Sp3")("iterator"),o=!1;try{var a=[7][r]();a.return=function(){o=!0},Array.from(a,function(){throw 2})}catch(i){}t.exports=function(t,n){if(!n&&!o)return!1;var e=!1;try{var a=[7],u=a[r]();u.next=function(){return{done:e=!0}},a[r]=function(){return u},t(a)}catch(i){}return e}},ErhN:function(t,n,e){"use strict";var r=e("eOWL"),o=e("zJT+");t.exports=function(t,n,e){n in t?r.f(t,n,o(0,e)):t[n]=e}},IH2s:function(t,n,e){var r=e("/6KZ");r(r.S+r.F*!e("lBnu"),"Object",{defineProperty:e("eOWL").f})},Lvfp:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/table/TableDefault.demo",function(){var t=e("Xd7f");return{page:t.default||t}}])},Ng5M:function(t,n,e){var r=e("N9zW"),o=e("0Sp3")("iterator"),a=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||a[o]===t)}},Rbzu:function(t,n,e){"use strict";e.d(n,"a",function(){return s});var r=e("tvLF"),o=e.n(r),a=e("s4hn"),i=e.n(a),u=e("1qCV"),c=e.n(u),f=e("azxR");function s(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{},r=c()(e);"function"==typeof i.a&&(r=r.concat(i()(e).filter(function(t){return o()(e,t).enumerable}))),r.forEach(function(n){Object(f.a)(t,n,e[n])})}return t}},Vlwe:function(t,n,e){e("WwSA"),e("2agv"),t.exports=e("TaGV").Array.from},Xd7f:function(t,n,e){"use strict";e.r(n);var r=e("Rbzu"),o=e("hDBU"),a=e("0tNF"),i=e("mXGw"),u=e.n(i),c=e("c2a7"),f=1,s=Array(30).fill(!0).reduce(function(t){return[].concat(Object(a.default)(t),[{id:f++,name:"MARIA MACHADO DE JESUS",age:42},{id:f++,name:"JOSÉ DA SILVA MOREIRA",age:34},{id:f++,name:"ALICE BARBOSA",age:27}])},[]);n.default=function(){var t=Object(i.useState)({page:0,size:10,totalElements:s.length,totalPages:s.length/10,sort:["id"]}),n=Object(o.default)(t,2),e=n[0],a=n[1],f=s.sort(function(t,n){return"id"===e.sort[0]?t.id-n.id:"-id"===e.sort[0]?n.id-t.id:0}).slice(e.page*e.size,e.page*e.size+e.size);return u.a.createElement(c.PagedTable,{rows:f,page:e.page,size:e.size,totalElements:e.totalElements,totalPages:e.totalPages,sort:e.sort,onSortChange:function(t){return a(function(n){return Object(r.a)({},n,{sort:t})})},onPageChange:function(t){return a(function(n){return Object(r.a)({},n,{page:t})})},onSizeChange:function(t){return a(function(n){return Object(r.a)({},n,{size:t,totalPages:Math.max(1,n.totalElements/t)})})},loading:!1,columns:[{name:"id",header:"ID",sortable:!0,render:function(t){return t.id}},{name:"name",header:"Name",render:function(t){return t.name}},{name:"age",header:"Age",render:function(t){return t.age}},{name:"actions",render:function(t){return u.a.createElement(c.Button,{size:"small",skin:"ghost"},u.a.createElement(c.Icon,{icon:"penOutline"}))},style:{textAlign:"right"}}]})}},azxR:function(t,n,e){"use strict";e.d(n,"a",function(){return a});var r=e("hHgk"),o=e.n(r);function a(t,n,e){return n in t?o()(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}},bztI:function(t,n,e){e("IH2s");var r=e("TaGV").Object;t.exports=function(t,n,e){return r.defineProperty(t,n,e)}},hHgk:function(t,n,e){t.exports=e("bztI")},oICS:function(t,n,e){var r=e("ADe/");t.exports=function(t,n,e,o){try{return o?n(r(e)[0],e[1]):n(e)}catch(i){var a=t.return;throw void 0!==a&&r(a.call(t)),i}}},tvLF:function(t,n,e){t.exports=e("9lmX")},zWrT:function(t,n,e){var r=e("T/1i"),o=e("0HwX").f;e("qNvu")("getOwnPropertyDescriptor",function(){return function(t,n){return o(r(t),n)}})}},[["Lvfp","5d41","9da1"]]]);