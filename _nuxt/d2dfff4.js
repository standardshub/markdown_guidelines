(window.webpackJsonp=window.webpackJsonp||[]).push([[4,18],{375:function(t,e,n){"use strict";n.r(e);var r=n(3),component=Object(r.a)({},(function(){var t=this._self._c;return t("svg",{attrs:{fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24",stroke:"currentColor"}},[t("path",{attrs:{d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"}})])}),[],!1,null,null,null);e.default=component.exports},378:function(t,e,n){"use strict";var r=n(1),o=n(379);r({target:"String",proto:!0,forced:n(380)("link")},{link:function(t){return o(this,"a","href",t)}})},379:function(t,e,n){var r=n(5),o=n(39),c=n(19),l=/"/g,f=r("".replace);t.exports=function(t,e,n,r){var d=c(o(t)),h="<"+e;return""!==n&&(h+=" "+n+'="'+f(c(r),l,"&quot;")+'"'),h+">"+d+"</"+e+">"}},380:function(t,e,n){var r=n(4);t.exports=function(t){return r((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},386:function(t,e,n){"use strict";n.r(e);n(378),n(22),n(18),n(31),n(25),n(32);var r=n(12),o=(n(84),n(21),n(7),n(36),n(34));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={props:{document:{type:Object,required:!0}},computed:l(l({},Object(o.b)(["settings","githubUrls"])),{},{link:function(){if(this.settings.github)return[this.githubUrls.repo,"edit",this.settings.defaultBranch,this.settings.defaultDir,"content".concat(this.document.path).concat(this.document.extension)].filter((function(path){return!!path})).join("/")}})},d=n(3),component=Object(d.a)(f,(function(){var t=this,e=t._self._c;return t.link?e("div",{staticClass:"pt-4 pb-4 lg:px-8 flex flex-col sm:flex-row justify-between"},[e("a",{staticClass:"text-gray-600 dark:text-gray-400 text-sm font-medium hover:underline flex items-center",attrs:{href:t.link,target:"_blank",rel:"noopener"}},[t._v("\n    "+t._s(t.$t("article.github"))+"\n    "),e("IconExternalLink",{staticClass:"w-4 h-4 ml-1"})],1),t._v(" "),e("span",{staticClass:"text-gray-600 dark:text-gray-400 text-sm font-medium flex items-center"},[t._v("\n    "+t._s(t.$t("article.updatedAt"))+" "+t._s(t.$d(Date.parse(t.document.updatedAt),"long"))+"\n  ")])]):t._e()}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{IconExternalLink:n(375).default})}}]);