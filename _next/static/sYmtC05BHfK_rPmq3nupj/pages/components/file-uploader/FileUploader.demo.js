(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{"+Bi/":function(n,e,t){var r=t("26mQ");r(r.S+r.F*!t("zJRt"),"Object",{defineProperty:t("6s2L").f})},"0PN5":function(n,e,t){"use strict";t.r(e);var r=t("Rbzu"),o=t("mXGw"),u=t.n(o),c=t("c2a7"),i=u.a.createElement;e.default=function(){var n=Object(o.useState)(),e=n[0],t=n[1];return i(c.FileUploader,{text:"Click or drop files here to upload",file:e,onDropAccepted:function(n){t({selectedFile:n[0],uploading:!0,progress:0});var e=setInterval(function(){t(function(n){return n&&n.progress>=100?(clearInterval(e),Object(r.a)({},n,{uploading:!1,progress:100})):Object(r.a)({},n,{progress:n.progress+10*Math.random()})})},100)}})}},AjC8:function(n,e,t){t("InUF");var r=t("5e9t").Object;n.exports=function(n,e){return r.getOwnPropertyDescriptor(n,e)}},Hdyu:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/file-uploader/FileUploader.demo",function(){var n=t("0PN5");return{page:n.default||n}}])},InUF:function(n,e,t){var r=t("dleS"),o=t("kYzV").f;t("PHgy")("getOwnPropertyDescriptor",function(){return function(n,e){return o(r(n),e)}})},Rbzu:function(n,e,t){"use strict";t.d(e,"a",function(){return p});var r=t("tvLF"),o=t.n(r),u=t("s4hn"),c=t.n(u),i=t("1qCV"),a=t.n(i),f=t("azxR");function p(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=a()(t);"function"===typeof c.a&&(r=r.concat(c()(t).filter(function(n){return o()(t,n).enumerable}))),r.forEach(function(e){Object(f.a)(n,e,t[e])})}return n}},azxR:function(n,e,t){"use strict";t.d(e,"a",function(){return u});var r=t("hHgk"),o=t.n(r);function u(n,e,t){return e in n?o()(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}},gAdt:function(n,e,t){t("+Bi/");var r=t("5e9t").Object;n.exports=function(n,e,t){return r.defineProperty(n,e,t)}},hHgk:function(n,e,t){n.exports=t("gAdt")},tvLF:function(n,e,t){n.exports=t("AjC8")}},[["Hdyu",1,0]]]);