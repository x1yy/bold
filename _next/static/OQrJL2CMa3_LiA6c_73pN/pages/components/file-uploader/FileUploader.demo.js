(window.webpackJsonp=window.webpackJsonp||[]).push([["983c"],{"0PN5":function(n,e,t){"use strict";t.r(e);var r=t("Rbzu"),o=t("hDBU"),u=t("mXGw"),c=t.n(u),a=t("c2a7");e.default=function(){var n=Object(u.useState)(),e=Object(o.default)(n,2),t=e[0],i=e[1];return c.a.createElement(a.FileUploader,{text:"Click or drop files here to upload",file:t,onDropAccepted:function(n){i({selectedFile:n[0],uploading:!0,progress:0});var e=setInterval(function(){i(function(n){return n&&n.progress>=100?(clearInterval(e),Object(r.a)({},n,{uploading:!1,progress:100})):Object(r.a)({},n,{progress:n.progress+10*Math.random()})})},100)}})}},"9lmX":function(n,e,t){t("zWrT");var r=t("TaGV").Object;n.exports=function(n,e){return r.getOwnPropertyDescriptor(n,e)}},Hdyu:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/file-uploader/FileUploader.demo",function(){var n=t("0PN5");return{page:n.default||n}}])},IH2s:function(n,e,t){var r=t("/6KZ");r(r.S+r.F*!t("lBnu"),"Object",{defineProperty:t("eOWL").f})},Rbzu:function(n,e,t){"use strict";t.d(e,"a",function(){return s});var r=t("tvLF"),o=t.n(r),u=t("s4hn"),c=t.n(u),a=t("1qCV"),i=t.n(a),f=t("azxR");function s(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=i()(t);"function"==typeof c.a&&(r=r.concat(c()(t).filter(function(n){return o()(t,n).enumerable}))),r.forEach(function(e){Object(f.a)(n,e,t[e])})}return n}},azxR:function(n,e,t){"use strict";t.d(e,"a",function(){return u});var r=t("hHgk"),o=t.n(r);function u(n,e,t){return e in n?o()(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}},bztI:function(n,e,t){t("IH2s");var r=t("TaGV").Object;n.exports=function(n,e,t){return r.defineProperty(n,e,t)}},hHgk:function(n,e,t){n.exports=t("bztI")},tvLF:function(n,e,t){n.exports=t("9lmX")},zWrT:function(n,e,t){var r=t("T/1i"),o=t("0HwX").f;t("qNvu")("getOwnPropertyDescriptor",function(){return function(n,e){return o(r(n),e)}})}},[["Hdyu","5d41","9da1"]]]);