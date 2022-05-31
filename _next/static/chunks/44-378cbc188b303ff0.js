"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[44],{5120:function(e,t,n){n.d(t,{Z:function(){return a}});n(7294);var r=n(5893);function a(e){var t=e.icon,n=e.children,a=e.onClick;return(0,r.jsxs)("div",{className:"_text-card hover:bg-day-600 hover:dark:bg-night-600 text-day-500 dark:text-night-500 w-fit px-3 py-1 rounded-md transition-colors cursor-pointer flex items-center",onClick:a,children:[null!=t?(0,r.jsx)("span",{className:"mr-2",children:t}):(0,r.jsx)(r.Fragment,{}),(0,r.jsx)("p",{children:n})]})}},6229:function(e,t,n){n.d(t,{Z:function(){return o}});n(7294);var r=n(2370),a=n(9611),i=n(5893);function o(e){var t=e.grade,n=e.alwaysOpaque,o=(0,a.EA)(t,!0),c="number"!==typeof o?"unsure":function(e,t){return e>=t?"high":"low"}(t,85),l=null==t||""===t.toString().trim()?"NG":t;return(0,i.jsx)("div",{className:"_grade-wrapper",children:"string"!==typeof l?(0,i.jsx)("span",{className:"h-8 whitespace-nowrap block mt-2 text-day-400 dark:text-night-400",children:void 0===l?(0,i.jsx)(r.Dt0,{fontSize:20,className:"ml-auto"}):(0,i.jsx)(r.OvZ,{fontSize:20,className:"ml-auto"})}):(0,i.jsxs)("span",{className:"block from-theme-600 to-theme-700 bg-gradient-to-tr w-fit py-1 px-3 rounded-xl my-1 text-white ml-auto relative ".concat("high"===c||n?"":"opacity-50"),children:["number"!==typeof o?l:o.toFixed(0),"unsure"===c?(0,i.jsx)("span",{className:"absolute w-5 h-5 bg-theme-800 -right-1 -bottom-1 rounded-full flex justify-center items-center",children:(0,i.jsx)(r.E6h,{fontSize:14})}):(0,i.jsx)(i.Fragment,{})]})})}},4992:function(e,t,n){n.d(t,{Z:function(){return i}});n(7294);var r=n(2370),a=n(5893);function i(e){var t=e.checked,n=e.editingEnabled,i=e.onClick,o=e.cancelEvent;return(0,a.jsx)("div",{onClick:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e){n&&i(!t),o&&(e.preventDefault(),e.stopPropagation())})),children:(0,a.jsx)("div",{className:"text-day-100 w-5 h-5 flex items-center justify-center rounded-sm text-sm my-4 ".concat(t?n?"bg-theme-200":"bg-day-500 dark:bg-night-500":"border border-day-400 dark:border-night-400"),children:(0,a.jsx)("div",{children:(0,a.jsx)(r.VQF,{className:t?"opacity-100":"opacity-0"})})})})}},7750:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(7294),a=n(2370),i=n(6382),o=n(5893);function c(e){var t=e.children,n=r.createRef(),a=(0,r.useState)(0),i=a[0],c=a[1],l=(0,r.useState)(t),s=l[0],u=l[1],d=(0,r.useState)(1),f=d[0],h=d[1];return(0,r.useEffect)((function(){var e,r,a=i,o=null!==(e=null===(r=n.current)||void 0===r?void 0:r.clientWidth)&&void 0!==e?e:0;c(o),h(0),setTimeout((function(){h(1),u(t)}),a>o?300:0)}),[t]),(0,o.jsxs)("div",{style:{width:i,transition:"0.3s width ease, 0.3s opacity ease",overflow:"hidden",opacity:f},children:[(0,o.jsx)("div",{className:"w-fit whitespace-nowrap",children:s}),(0,o.jsx)("div",{ref:n,className:"w-fit whitespace-nowrap invisible absolute",children:t})]})}function l(e){var t=e.editing,n=e.setEditing,r=e.textStart,l=e.textDone;return(0,o.jsx)("div",{className:"".concat(t?"mt-4":"mt-2"," transition-all h-fit"),children:(0,o.jsx)(c,{children:t?(0,o.jsx)(i.Z,{colored:!0,onClick:function(){n(!t)},icon:(0,o.jsx)(a.whI,{}),children:null!==l&&void 0!==l?l:"Done"}):(0,o.jsx)(i.Z,{colored:!0,icon:(0,o.jsx)(a.whI,{}),onClick:function(){n(!t)},children:null!==r&&void 0!==r?r:"Edit"})})})}},5177:function(e,t,n){n.d(t,{Z:function(){return i}});n(7294);var r=n(2370),a=n(5893);function i(e){var t=e.min,n=e.max,i=e.children,o=e.setNumber,c=e.editingEnabled;return(0,a.jsxs)("div",{className:"_number-scale flex flex-row justify-between",children:[(0,a.jsx)("p",{children:i}),(0,a.jsxs)("div",{className:"flex gap-1 transition-opacity-transform ".concat(c?"opacity-100":"opacity-0 scale-50"),children:[(0,a.jsx)("button",{onClick:function(){n!==i&&c&&o(i+1)},className:"".concat(i===n?"bg-day-600 text-day-500 dark:bg-day-600 dark:text-day-500":"bg-theme-200 text-day-100"," w-6 h-6 flex items-center justify-center align-middle text-sm rounded-lg"),children:(0,a.jsx)(r.xcL,{})}),(0,a.jsx)("button",{onClick:function(){t!==i&&c&&o(i-1)},className:"".concat(i===t?"bg-day-600 text-day-500 dark:bg-day-600 dark:text-day-500":"bg-theme-200 text-day-100"," w-6 h-6 flex items-center justify-center align-middle text-sm rounded-lg"),children:(0,a.jsx)(r._kz,{})})]})]})}},8454:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(7294),a=n(3780),i=n(2370),o=n(5893);function c(e){var t=e.children,n=e.setName,c=e.editingEnabled,l=(0,r.useState)(!1),s=l[0],u=l[1],d=r.createRef(),f=r.createRef(),h=(0,r.useState)(t),m=h[0],p=h[1],v=(0,r.useState)(0),g=v[0],b=v[1];(0,r.useEffect)((function(){var e,t=null===(e=f.current)||void 0===e?void 0:e.clientWidth;b(t?t+0:void 0)}),[m]),(0,r.useEffect)((function(){var e;s&&(null===(e=d.current)||void 0===e||e.focus())}),[s]),(0,r.useEffect)((function(){!c&&s&&(n(m||t),u(!1),m||p(t))}),[c]);var x=(0,r.useState)(!1),y=x[0],j=x[1];return(0,r.useEffect)((function(){var e,t=null===(e=f.current)||void 0===e?void 0:e.clientWidth;b(t?t+0:void 0),j(!0)}),[f]),(0,r.useEffect)((function(){p(t)}),[t]),(0,o.jsxs)("div",{className:"_renameable flex flex-row cursor-auto items-center w-fit mr-0",children:[y?(0,o.jsxs)("div",{className:"relative",children:[(0,o.jsx)("p",{className:"absolute top-0 left-0 invisible whitespace-pre",ref:f,children:m||t}),(0,o.jsx)("label",{ref:d,children:(0,o.jsx)("input",{style:{maxWidth:g},className:"mr-4 outline-none transition-background-padding duration-300 rounded-md resize-none h-8 w-fit box-content ".concat(s?"bg-theme-100 dark:bg-night-250 px-2":"bg-transparent"),autoFocus:!0,disabled:!s,value:m,onChange:function(e){p(e.target.value)},placeholder:t,maxLength:28})})]}):(0,o.jsx)("p",{className:"mr-4 h-8 flex items-center",ref:f,children:(0,o.jsx)("span",{children:m})}),(0,o.jsx)("div",{className:"flex gap-1 transition-opacity-transform ".concat(c?"opacity-100":"opacity-0 scale-50"),children:(0,o.jsx)("button",{onClick:function(){c&&(s&&(n(m||t),m||p(t)),u(!s))},className:"bg-theme-200 text-day-100 w-6 h-6 flex items-center justify-center align-middle text-sm rounded-lg",children:s?(0,o.jsx)(a.E.div,{initial:{rotate:180},animate:{rotate:360},transition:{duration:.7,type:"spring"},children:(0,o.jsx)(i.VQF,{})}):(0,o.jsx)(i.qEA,{})})})]})}},5863:function(e,t,n){n.d(t,{Z:function(){return h}});var r=n(2809),a=n(7294),i=n(3780),o=n(6229),c=n(1664),l=n(5893);function s(e){var t=e.enabled,n=e.children,r=e.href;return(0,l.jsx)(c.default,{href:null!==r&&void 0!==r?r:"#",children:(0,l.jsx)("a",{onClick:function(e){t||(e.preventDefault(),e.stopPropagation())},children:n})})}function u(e){var t=e.message;return e.shown?(0,l.jsx)("span",{className:"relative bg-black bg-opacity-50 text-white text-center px-3 py-1 rounded w-fit animate-tooltip-appear whitespace-nowrap block",children:t}):(0,l.jsx)(l.Fragment,{})}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function h(e){var t=e.header,n=e.cells,r=e.type,c=e.setComponentShowing,d=e.getSetComponentShowing,h=e.amFirstColumn,m=e.amLastColumn,p=e.hoveredRow,v=e.onCellMouseOver,g=e.clickable,b=e.onResize,x=e.animated,y=e.deltaSnapPoint,j=e.forceShow,w=e.outerBorders,k=(0,a.useState)(0),N=k[0],E=k[1],O=(0,a.useRef)(N),S=function(e){E(e),O.current=e},C=(0,a.useState)(!1),D=C[0],_=C[1],P=(0,a.useRef)(null),M=(0,a.useRef)(null),R=N<-8,z=(0,a.useState)(void 0),Z=z[0],A=z[1],F=(0,a.useState)(0),W=F[0],G=F[1],L=function(e){var t,n,r=e/(null!==(t=null===(n=P.current)||void 0===n?void 0:n.clientWidth)&&void 0!==t?t:1),a=Math.min(-3.3*r,1);return 1-Math.max(0,.8*a)};return(0,a.useEffect)((function(){Z?A(0):null==Z&&c(!0)}),[Z]),(0,a.useEffect)((function(){d((function(e){if(e&&-1!==Z)A(void 0);else if(!e&&void 0===Z){var t;A(null===(t=P.current)||void 0===t?void 0:t.clientWidth),c(!1),S(0),S(Math.max(0,O.current))}}))}),[]),(0,a.useEffect)((function(){var e,t;G(null!==(e=null===(t=M.current)||void 0===t?void 0:t.clientWidth)&&void 0!==e?e:0)}),[]),(0,l.jsxs)("div",{className:"_table-column group-2 ".concat(D?"cursor-col-resize":"").concat(""),children:[(0,l.jsx)("div",{className:"_table-column-header block relative transition-opacity ".concat(0===Z?"opacity-0 w-0":"opacity-100"),ref:M,children:t}),(0,l.jsxs)("div",{className:"_table-column-cells-wrapper flex w-fit",children:[(0,l.jsxs)("div",{className:"_table-column-cells",ref:P,style:f({},null!=Z&&{whiteSpace:"nowrap",height:0,transition:"0.4s width ease",width:Z}),children:[function(){var e=-1;return n.map((function(t,a){var c;n[a-1]&&"CATEGORY"===(null===(c=n[a-1])||void 0===c?void 0:c.type)||(e+=1);var u=e,d=(0,l.jsx)(i.E.div,{initial:f({},x&&{translateX:-75,translateY:-10,opacity:0}),animate:{translateX:0,translateY:0,opacity:1},transition:{delay:.03*u,duration:.3},className:"_table-column-single-cell border-b py-1 transition-colors ".concat(g?"cursor-pointer":""," ").concat(R?"border-red-500":"border-day-300 dark:border-night-300").concat("OTHER_FIELD"!==r?" text-day-700 dark:text-night-700 bg-day-200 dark:bg-night-200 ".concat(p===u&&g?"group-1-hover:bg-day-250 group-1-hover:dark:bg-night-250":""):" text-day-400 dark:text-night-400 bg-day-100 dark:bg-night-100 ".concat(p===u&&g?"group-1-hover:bg-day-150 group-1-hover:dark:bg-night-150":"")," ").concat("CATEGORY"===t.type?" absolute bg-day-200 dark:bg-night-200 z-10 w-full":" pl-4 pr-4 w-full"," ").concat(w?"group-3-first:border-t border-r group-2-first:border-l":""),onMouseOver:v&&function(){v(u)},style:f(f({},{paddingLeft:"GRADE"!==r||"CATEGORY"===t.type?void 0:Math.max(N,0)+40,paddingRight:"GRADE"===r||"CATEGORY"===t.type?void 0:Math.max(N,0)+40,opacity:L(N)}),null!=Z&&{transition:"0.15s opacity ease, 0.15s padding ease",opacity:0}),children:(0,l.jsx)("span",{className:"_table-column-single-cell-inner block",style:{minWidth:Math.max(W-46,70)},children:"GRADE"===r?(0,l.jsx)(o.Z,{grade:t.element}):t.element})});return(0,l.jsx)("div",{className:"group-3",children:(0,l.jsx)(s,{href:t.link,enabled:null!=t.link,children:d})},a)}))}(),N<-20?(0,l.jsx)("div",{className:"w-full h-full -translate-y-full z-10 relative",style:{background:function(e){var t,n;if(!R)return"rgba(255,0,0,0)";var r=e/(null!==(t=null===(n=P.current)||void 0===n?void 0:n.clientWidth)&&void 0!==t?t:1),a=Math.min(-2.7*r,1);return"rgba(255,0,0,".concat(Math.max(0,.45*a))}(N)},children:(0,l.jsx)("div",{className:"_table-column-tooltip absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden max-w-full z-10",children:(0,l.jsx)(u,{message:"Hide Column",shown:N<-20})})}):(0,l.jsx)(l.Fragment,{})]}),(0,l.jsxs)("div",{className:"_table-column-handle-wrapper cursor-col-resize group relative ".concat(N<-20?"z-10":""),onMouseDown:function(e){e.preventDefault(),_(!0);var t,n=Date.now(),r=function(r){var a=r.clientX-e.clientX,i=null!=y&&Math.abs(y-a)<=10,o=N+(i?y:a),c=Date.now();t&&clearTimeout(t),o<=-8&&c-n<750?(S(0),h||m||j||(t=setTimeout((function(){S(o)}),500))):S(h||m||j?Math.max(o,0):o)};document.documentElement.addEventListener("mousemove",r),document.documentElement.addEventListener("mouseup",(function e(){var n;(t&&clearTimeout(t),O.current<-16)&&(A(null===(n=P.current)||void 0===n?void 0:n.clientWidth),c(!1),S(0));S(Math.max(0,O.current)),document.documentElement.removeEventListener("mousemove",r),document.documentElement.removeEventListener("mouseup",e),_(!1),b&&b()}))},children:[(0,l.jsx)("div",{className:"_table-column-handle absolute top-0 right-0 h-full w-2 border-r group-2-last:border-r-0 border-r-day-300 dark:border-r-night-300 transition-colors duration-200 group-hover:border-r-blue-400 dark:group-hover:border-r-blue-400 group-hover:border-r-2 group-2-last:group-hover:border-r-2 ".concat(D?"".concat(R?"border-r-red-500 dark:border-r-red-500":"border-r-blue-400 dark:border-r-blue-400"," border-r-2"):"")}),(0,l.jsx)("div",{className:"_table-column-handle-grabbable-overhang absolute top-0 -right-2 h-full w-2"})]}),(0,l.jsx)("div",{className:"_table-column-handle-cursor-overhang absolute top-0 -right-4 h-full w-4 ".concat(D?"cursor-col-resize":"hidden")})]})]})}},9611:function(e,t,n){n.d(t,{g4:function(){return o},j3:function(){return c},Hw:function(){return l},EA:function(){return s}});var r=n(2809);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var o=function(e){var t=0,n=0;return e.assignments.forEach((function(e){if(!(e.dropped||e.weight<=0||""===e.grade)){var r=Math.max(parseInt(e.grade.toString(),10),0);if(Number.isNaN(r)){if("MSG"!==e.grade)return}else t+=r*e.weight;n+=e.weight}})),n<=0?{average:0,dropped:!0}:{average:t/n}},c=function(e){var t=0,n=0;return e.forEach((function(e){t+=e.average*e.weight,n+=e.dropped?0:e.weight})),n<=0?-1:Math.min(120,t/n)},l=function(e,t){var n,r;return c(null!==(n=null===(r=e.gradebook[t])||void 0===r?void 0:r.map((function(e){return i(i({},o(e)),{},{weight:e.category.weight})})))&&void 0!==n?n:[])},s=function(e,t){if("number"===typeof e||void 0===e)return e;var n=parseInt(e,10);return Number.isNaN(n)||t&&Number.isNaN(+e)?e:n}}}]);