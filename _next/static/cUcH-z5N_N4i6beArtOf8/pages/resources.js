(window.webpackJsonp=window.webpackJsonp||[]).push([[159],{GY61:function(e,t,n){"use strict";var r={};n.r(r),n.d(r,"initialize",function(){return R}),n.d(r,"ga",function(){return V}),n.d(r,"set",function(){return W}),n.d(r,"send",function(){return K}),n.d(r,"pageview",function(){return U}),n.d(r,"modalview",function(){return X}),n.d(r,"timing",function(){return M}),n.d(r,"event",function(){return Q}),n.d(r,"exception",function(){return Y}),n.d(r,"plugin",function(){return Z}),n.d(r,"outboundLink",function(){return $}),n.d(r,"testModeAPI",function(){return H}),n.d(r,"default",function(){return ee});var o=n("mXGw"),i=n.n(o),a=n("W0B4"),c=n.n(a);function l(e){console.warn("[react-ga]",e)}function u(e){return(u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function f(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m="_blank",h=1,v=function(e){function t(){var e,n,r,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var i=arguments.length,a=new Array(i),c=0;c<i;c++)a[c]=arguments[c];return r=this,o=(e=g(t)).call.apply(e,[this].concat(a)),n=!o||"object"!==u(o)&&"function"!==typeof o?d(r):o,b(d(n),"handleClick",function(e){var r=n.props,o=r.target,i=r.eventLabel,a=r.to,c=r.onClick,l=r.trackerNames,u={label:i},s=o!==m,f=!(e.ctrlKey||e.shiftKey||e.metaKey||e.button===h);s&&f?(e.preventDefault(),t.trackLink(u,function(){window.location.href=a},l)):t.trackLink(u,function(){},l),c&&c(e)}),n}var n,r,a;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,o["Component"]),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.to,n=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(n,!0).forEach(function(t){b(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},f(e,["to"]),{href:t,onClick:this.handleClick});return this.props.target===m&&(n.rel="noopener noreferrer"),delete n.eventLabel,delete n.trackerNames,i.a.createElement("a",n)}}])&&p(n.prototype,r),a&&p(n,a),t}();function w(e){return e.replace(/^\s+|\s+$/g,"")}b(v,"trackLink",function(){l("ga tracking not enabled")}),b(v,"propTypes",{eventLabel:c.a.string.isRequired,target:c.a.string,to:c.a.string,onClick:c.a.func,trackerNames:c.a.arrayOf(c.a.string)}),b(v,"defaultProps",{target:null,to:null,onClick:null,trackerNames:null});var O=/^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;var k="REDACTED (Potential Email Address)";function j(e,t){return function(e){return"string"===typeof e&&-1!==e.indexOf("@")}(e)?(l("This arg looks like an email address, redacting."),k):t?w(e).replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g,function(e,t,n){return t>0&&t+e.length!==n.length&&e.search(O)>-1&&":"!==n.charAt(t-2)&&("-"!==n.charAt(t+e.length)||"-"===n.charAt(t-1))&&n.charAt(t-1).search(/[^\s-]/)<0?e.toLowerCase():e.substr(1).search(/[A-Z]|\../)>-1?e:e.charAt(0).toUpperCase()+e.substr(1)}):e}var S=function(e){var t,n,r,o,i,a,c,l="https://www.google-analytics.com/analytics.js";e&&e.gaAddress?l=e.gaAddress:e&&e.debug&&(l="https://www.google-analytics.com/analytics_debug.js"),t=window,n=document,r="script",o=l,i="ga",t.GoogleAnalyticsObject=i,t.ga=t.ga||function(){(t.ga.q=t.ga.q||[]).push(arguments)},t.ga.l=1*new Date,a=n.createElement(r),c=n.getElementsByTagName(r)[0],a.async=1,a.src=o,c.parentNode.insertBefore(a,c)};function P(e){console.info("[react-ga]",e)}var A=[],D={calls:A,ga:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];A.push([].concat(t))},resetCalls:function(){A.length=0}};function T(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function E(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function C(e){return(C="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function N(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var q="undefined"===typeof window||"undefined"===typeof document,L=!1,z=!0,_=!1,I=!0,F=function(){var e;return _?D.ga.apply(D,arguments):!q&&(window.ga?(e=window).ga.apply(e,arguments):l("ReactGA.initialize must be called first or GoogleAnalytics should be loaded manually"))};function B(e){return j(e,z)}function G(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=n[0];if("function"===typeof F){if("string"!==typeof o)return void l("ga command must be a string");!I&&Array.isArray(e)||F.apply(void 0,n),Array.isArray(e)&&e.forEach(function(e){F.apply(void 0,N(["".concat(e,".").concat(o)].concat(n.slice(1))))})}}function J(e,t){e?t&&(t.debug&&!0===t.debug&&(L=!0),!1===t.titleCase&&(z=!1),t.useExistingGa)||(t&&t.gaOptions?F("create",e,t.gaOptions):F("create",e,"auto")):l("gaTrackingID is required in initialize()")}function R(e,t){if(t&&!0===t.testMode)_=!0;else{if(q)return!1;t&&!0===t.standardImplementation||S(t)}return I=!t||"boolean"!==typeof t.alwaysSendToDefaultTracker||t.alwaysSendToDefaultTracker,Array.isArray(e)?e.forEach(function(e){"object"===C(e)?J(e.trackingId,e):l("All configs must be an object")}):J(e,t),!0}function V(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.length>0&&(F.apply(void 0,t),L&&(P("called ga('arguments');"),P("with arguments: ".concat(JSON.stringify(t))))),window.ga}function W(e,t){e?"object"===C(e)?(0===Object.keys(e).length&&l("empty `fieldsObject` given to .set()"),G(t,"set",e),L&&(P("called ga('set', fieldsObject);"),P("with fieldsObject: ".concat(JSON.stringify(e))))):l("Expected `fieldsObject` arg to be an Object"):l("`fieldsObject` is required in .set()")}function K(e,t){G(t,"send",e),L&&(P("called ga('send', fieldObject);"),P("with fieldObject: ".concat(JSON.stringify(e))),P("with trackers: ".concat(JSON.stringify(t))))}function U(e,t,n){if(e){var r=w(e);if(""!==r){var o={};if(n&&(o.title=n),G(t,"send",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(n,!0).forEach(function(t){E(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({hitType:"pageview",page:r},o)),L){P("called ga('send', 'pageview', path);");var i="";n&&(i=" and title: ".concat(n)),P("with path: ".concat(r).concat(i))}}else l("path cannot be an empty string in .pageview()")}else l("path is required in .pageview()")}function X(e,t){if(e){var n,r="/"===(n=w(e)).substring(0,1)?n.substring(1):n;if(""!==r){var o="/modal/".concat(r);G(t,"send","pageview",o),L&&(P("called ga('send', 'pageview', path);"),P("with path: ".concat(o)))}else l("modalName cannot be an empty string or a single / in .modalview()")}else l("modalName is required in .modalview(modalName)")}function M(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.category,n=e.variable,r=e.value,o=e.label,i=arguments.length>1?arguments[1]:void 0;if(t&&n&&r&&"number"===typeof r){var a={hitType:"timing",timingCategory:B(t),timingVar:B(n),timingValue:r};o&&(a.timingLabel=B(o)),K(a,i)}else l("args.category, args.variable AND args.value are required in timing() AND args.value has to be a number")}function Q(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.category,n=e.action,r=e.label,o=e.value,i=e.nonInteraction,a=e.transport,c=T(e,["category","action","label","value","nonInteraction","transport"]),u=arguments.length>1?arguments[1]:void 0;if(t&&n){var s={hitType:"event",eventCategory:B(t),eventAction:B(n)};r&&(s.eventLabel=B(r)),"undefined"!==typeof o&&("number"!==typeof o?l("Expected `args.value` arg to be a Number."):s.eventValue=o),"undefined"!==typeof i&&("boolean"!==typeof i?l("`args.nonInteraction` must be a boolean."):s.nonInteraction=i),"undefined"!==typeof a&&("string"!==typeof a?l("`args.transport` must be a string."):(-1===["beacon","xhr","image"].indexOf(a)&&l("`args.transport` must be either one of these values: `beacon`, `xhr` or `image`"),s.transport=a)),Object.keys(c).filter(function(e){return"dimension"===e.substr(0,"dimension".length)}).forEach(function(e){s[e]=c[e]}),Object.keys(c).filter(function(e){return"metric"===e.substr(0,"metric".length)}).forEach(function(e){s[e]=c[e]}),K(s,u)}else l("args.category AND args.action are required in event()")}function Y(e,t){var n=e.description,r=e.fatal,o={hitType:"exception"};n&&(o.exDescription=B(n)),"undefined"!==typeof r&&("boolean"!==typeof r?l("`args.fatal` must be a boolean."):o.exFatal=r),K(o,t)}var Z={require:function(e,t,n){if(e){var r=w(e);if(""!==r){var o=n?"".concat(n,".require"):"require";if(t){if("object"!==C(t))return void l("Expected `options` arg to be an Object");0===Object.keys(t).length&&l("Empty `options` given to .require()"),V(o,r,t),L&&P("called ga('require', '".concat(r,"', ").concat(JSON.stringify(t)))}else V(o,r),L&&P("called ga('require', '".concat(r,"');"))}else l("`name` cannot be an empty string in .require()")}else l("`name` is required in .require()")},execute:function(e,t){var n,r;if(1===(arguments.length<=2?0:arguments.length-2)?n=arguments.length<=2?void 0:arguments[2]:(r=arguments.length<=2?void 0:arguments[2],n=arguments.length<=3?void 0:arguments[3]),"string"!==typeof e)l("Expected `pluginName` arg to be a String.");else if("string"!==typeof t)l("Expected `action` arg to be a String.");else{var o="".concat(e,":").concat(t);n=n||null,r&&n?(V(o,r,n),L&&(P("called ga('".concat(o,"');")),P('actionType: "'.concat(r,'" with payload: ').concat(JSON.stringify(n))))):n?(V(o,n),L&&(P("called ga('".concat(o,"');")),P("with payload: ".concat(JSON.stringify(n))))):(V(o),L&&P("called ga('".concat(o,"');")))}}};function $(e,t,n){if("function"===typeof t)if(e&&e.label){var r={hitType:"event",eventCategory:"Outbound",eventAction:"Click",eventLabel:B(e.label)},o=!1,i=setTimeout(function(){o=!0,t()},250);r.hitCallback=function(){clearTimeout(i),o||t()},K(r,n)}else l("args.label is required in outboundLink()");else l("hitCallback function is required")}var H=D,ee={initialize:R,ga:V,set:W,send:K,pageview:U,modalview:X,timing:M,event:Q,exception:Y,plugin:Z,outboundLink:$,testModeAPI:D};function te(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function ne(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}v.origTrackLink=v.trackLink,v.trackLink=$;var re=v;t.a=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?te(n,!0).forEach(function(t){ne(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):te(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},r,{OutboundLink:re})},S7u7:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/resources",function(){return n("Up/B")}])},"Up/B":function(e,t,n){"use strict";n.r(t);var r=n("z3IF"),o=n("mXGw"),i=n.n(o),a=n("GY61"),c=n("c2a7"),l=i.a.createElement;t.default=function(){return l(c.VFlow,null,l("h1",null,"Resources"),l(c.Text,{component:"p",fontSize:1},"Here you can download some of the design resources and tools we consider will help you to build products experiences."),l(c.Grid,null,l(c.Cell,null,l("img",{width:96,src:"/static/image/diamond.svg",alt:"Sketch icon"})),l(c.Cell,null,l(c.VFlow,{vSpacing:.5},l("div",null,l(c.Text,{component:"p",fontWeight:"bold",fontSize:1},"Bold Design Kit"),l(c.Text,{component:"p",fontSize:1},"Sketch symbols, visual styles and patterns.")),l(c.Button,{kind:"primary",skin:"outline",size:"small",style:{textDecoration:"none"},render:function(e){return l("a",Object(r.a)({},e,{href:"/static/Bold-1.0.sketch"}))},onClick:function(){a.a.event({category:"Download",action:"Sketch"})}},l(c.Icon,{icon:"download",style:{marginRight:"0.5rem"}}),"Download Sketch file")))),l(c.Grid,null,l(c.Cell,null,l("img",{width:96,src:"/static/image/figma.svg",alt:"Sketch icon"})),l(c.Cell,null,l(c.VFlow,{vSpacing:.5},l("div",null,l(c.Text,{component:"p",fontWeight:"bold",fontSize:1},"Bold Design Kit"),l(c.Text,{component:"p",fontSize:1},"Figma symbols, visual styles and patterns.")),l(c.Link,{href:"https://www.figma.com/file/TE9FUDtlgVQ4FWlAPtTagxQU/Bold-Design-System",fontSize:1,target:"_blank",onClick:function(){a.a.event({category:"Download",action:"Figma"})}},"Access Figma file")))),l(c.Grid,null,l(c.Cell,null,l(c.VFlow,{vSpacing:.5},l(c.Text,{component:"p",fontWeight:"bold",fontSize:1},"Sketch's Data Suplies"),l(c.Text,{component:"p",fontSize:1},"With Sketch\u2019s Data feature you can quickly add real text data to your designs and update them, in an instant. We\u2019re sharing the text files we use on our prototypes (in PT-BR). They include dates, addresses, female names, male names, social security number (CPF), emails, gender, phone numbers, among others."),l(c.Button,{kind:"primary",skin:"outline",size:"small",style:{textDecoration:"none"},render:function(e){return l("a",Object(r.a)({},e,{href:"/static/Sketch-Data-Suplies(PT-BR).zip"}))},onClick:function(){a.a.event({category:"Download",action:"SketchData"})}},l(c.Icon,{icon:"download",style:{marginRight:"0.5rem"}}),"Download Sketch's Data Suplies")))))}}},[["S7u7",1,0]]]);