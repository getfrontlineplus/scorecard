(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[122],{6229:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});n(7294);var r=n(2370),i=n(9611),a=n(5893);function s(e){var t=e.grade,n=e.alwaysOpaque,s=(0,i.EA)(t,!0),o="number"!==typeof s?"unsure":function(e,t){return e>=t?"high":"low"}(t,85),c=null==t||""===t.toString().trim()?"NG":t;return(0,a.jsx)("div",{className:"_grade-wrapper",children:"string"!==typeof c?(0,a.jsx)("span",{className:"h-8 whitespace-nowrap block mt-2 text-day-400 dark:text-night-400",children:void 0===c?(0,a.jsx)(r.Dt0,{fontSize:20,className:"ml-auto"}):(0,a.jsx)(r.OvZ,{fontSize:20,className:"ml-auto"})}):(0,a.jsxs)("span",{className:"block from-theme-600 to-theme-700 bg-gradient-to-tr w-fit py-1 px-3 rounded-xl my-1 text-white ml-auto relative ".concat("high"===o||n?"":"opacity-50"),children:["number"!==typeof s?c:s.toFixed(0),"unsure"===o?(0,a.jsx)("span",{className:"absolute w-5 h-5 bg-theme-800 -right-1 -bottom-1 rounded-full flex justify-center items-center",children:(0,a.jsx)(r.E6h,{fontSize:14})}):(0,a.jsx)(a.Fragment,{})]})})}},4992:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});n(7294);var r=n(2370),i=n(5893);function a(e){var t=e.checked,n=e.editingEnabled,a=e.onClick,s=e.cancelEvent;return(0,i.jsx)("div",{onClick:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e){n&&a(!t),s&&(e.preventDefault(),e.stopPropagation())})),children:(0,i.jsx)("div",{className:"text-day-100 w-5 h-5 flex items-center justify-center rounded-sm text-sm my-4 ".concat(t?n?"bg-theme-200":"bg-day-500 dark:bg-night-500":"border border-day-400 dark:border-night-400"),children:(0,i.jsx)("div",{children:(0,i.jsx)(r.VQF,{className:t?"opacity-100":"opacity-0"})})})})}},8454:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(7294),i=n(3780),a=n(2370),s=n(5893);function o(e){var t=e.children,n=e.setName,o=e.editingEnabled,c=(0,r.useState)(!1),d=c[0],u=c[1],l=r.createRef(),g=r.createRef(),f=(0,r.useState)(t),h=f[0],p=f[1],m=(0,r.useState)(0),x=m[0],v=m[1];(0,r.useEffect)((function(){var e,t=null===(e=g.current)||void 0===e?void 0:e.clientWidth;v(t?t+0:void 0)}),[h]),(0,r.useEffect)((function(){var e;d&&(null===(e=l.current)||void 0===e||e.focus())}),[d]),(0,r.useEffect)((function(){!o&&d&&(n(h||t),u(!1),h||p(t))}),[o]);var b=(0,r.useState)(!1),y=b[0],j=b[1];return(0,r.useEffect)((function(){var e,t=null===(e=g.current)||void 0===e?void 0:e.clientWidth;v(t?t+0:void 0),j(!0)}),[g]),(0,r.useEffect)((function(){p(t)}),[t]),(0,s.jsxs)("div",{className:"_renameable flex flex-row cursor-auto items-center w-fit mr-0",children:[y?(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsx)("p",{className:"absolute top-0 left-0 invisible whitespace-pre",ref:g,children:h||t}),(0,s.jsx)("label",{ref:l,children:(0,s.jsx)("input",{style:{maxWidth:x},className:"mr-4 outline-none transition-background-padding duration-300 rounded-md resize-none h-8 w-fit box-content ".concat(d?"bg-theme-100 dark:bg-night-250 px-2":"bg-transparent"),autoFocus:!0,disabled:!d,value:h,onChange:function(e){p(e.target.value)},placeholder:t,maxLength:28})})]}):(0,s.jsx)("p",{className:"mr-4 h-8 flex items-center",ref:g,children:(0,s.jsx)("span",{children:h})}),(0,s.jsx)("div",{className:"flex gap-1 transition-opacity-transform ".concat(o?"opacity-100":"opacity-0 scale-50"),children:(0,s.jsx)("button",{onClick:function(){o&&(d&&(n(h||t),h||p(t)),u(!d))},className:"bg-theme-200 text-day-100 w-6 h-6 flex items-center justify-center align-middle text-sm rounded-lg",children:d?(0,s.jsx)(i.E.div,{initial:{rotate:180},animate:{rotate:360},transition:{duration:.7,type:"spring"},children:(0,s.jsx)(a.VQF,{})}):(0,s.jsx)(a.qEA,{})})})]})}},3524:function(e,t,n){"use strict";n.d(t,{K:function(){return r},C:function(){return i}});var r=function(e,t,n){var r="string"===typeof e?parseInt(e,10):e;return r<70?0:Number.isNaN(r)?-1:(r+(n.weighted&&t?10:0)-60)/10},i=function(e,t,n){var i=0,a=0;return e.forEach((function(e){var s,o=r(null!==(s=e.grades[t])&&void 0!==s?s:"NG",e.weighted,n);-1!==o&&(i+=o*e.credit,a+=e.credit)})),0===a?-1:Math.round(i/a*100)/100}},9611:function(e,t,n){"use strict";n.d(t,{g4:function(){return s},j3:function(){return o},Hw:function(){return c},EA:function(){return d}});var r=n(2809);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var s=function(e){var t=0,n=0;return e.assignments.forEach((function(e){if(!(e.dropped||e.weight<=0||""===e.grade)){var r=Math.max(parseInt(e.grade.toString(),10),0);if(Number.isNaN(r)){if("MSG"!==e.grade)return}else t+=r*e.weight;n+=e.weight}})),n<=0?{average:0,dropped:!0}:{average:t/n}},o=function(e){var t=0,n=0;return e.forEach((function(e){t+=e.average*e.weight,n+=e.dropped?0:e.weight})),n<=0?-1:Math.min(120,t/n)},c=function(e,t){var n,r;return o(null!==(n=null===(r=e.gradebook[t])||void 0===r?void 0:r.map((function(e){return a(a({},s(e)),{},{weight:e.category.weight})})))&&void 0!==n?n:[])},d=function(e,t){if("number"===typeof e||void 0===e)return e;var n=parseInt(e,10);return Number.isNaN(n)||t&&Number.isNaN(+e)?e:n}},756:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(8216),i=n(2809),a=function e(t,n){(0,r.Z)(this,e),(0,i.Z)(this,"name",void 0),(0,i.Z)(this,"weight",void 0),this.name=t,this.weight=n}},3179:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return Z},default:function(){return M}});var r=n(1243),i=n(7294),a=n(2962),s=n(2370),o=n(3780),c=n(6229),d=n(5893);function u(e){var t=e.expanded;return(0,d.jsx)(o.E.div,{className:"text-day-400 dark:text-night-400 transition-colors duration-200 ease-out p-2 rounded-full text-sm",initial:!1,animate:t?"open":"closed",variants:{closed:{rotate:0},open:{rotate:90}},children:(0,d.jsx)(s.mzm,{})})}var l=n(2809),g=n(4992),f=n(8454);function h(e){var t=e.value,n=e.onFocusChange,r=e.checkValidity,a=e.update,s=e.checkFade,o=e.inputRef,c=i.createRef(),u=(0,i.useState)(void 0),l=u[0],g=u[1];return(0,i.useEffect)((function(){var e;g(null===(e=c.current)||void 0===e?void 0:e.clientWidth)}),[t,c]),(0,d.jsxs)("label",{className:"_scaling-input relative ",children:[(0,d.jsx)("input",{ref:o,style:{width:null!=l?l+18:void 0},className:"whitespace-nowrap outline-none w-fit py-1 px-2 border border-day-300 dark:border-night-300 rounded-lg transition-colors bg-day-100 dark:bg-night-100 ".concat(r(t)?"focus:border-theme-200":"focus:border-red-400"," ").concat(s&&!s(t)?"text-day-400 dark:text-night-400":"text-day-700 dark:text-night-700"),value:t,onFocus:function(){null===n||void 0===n||n(!0)},onBlur:function(){null===n||void 0===n||n(!1)},onInput:function(e){a(e.currentTarget.value)}}),(0,d.jsx)("div",{ref:c,className:"w-fit whitespace-pre invisible absolute top-0 left-0",children:t})]})}var p=n(9611);function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){(0,l.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function v(e){var t=e.assignment,n=e.originalAssignment,r=e.setAssignment,a=e.removeMe,o=(0,i.useState)(t.weight.toString()),c=o[0],u=o[1];(0,i.useEffect)((function(){var e=(0,p.EA)(c,!0);r(x(x({},t),{},{weight:"number"===typeof e?e:0}))}),[c]);var l=(0,i.useState)(-2),f=l[0],m=l[1];return(0,i.useEffect)((function(){if(0===f&&m(1),1===f){var e=function(){m(-1)};return document.addEventListener("click",e),function(){document.removeEventListener("click",e)}}return-1===f&&setTimeout((function(){m(-2)}),200),function(){}}),[f]),(0,d.jsxs)("div",{className:"relative",children:[(0,d.jsxs)("div",{className:"w-8 h-8 hover:bg-theme-100 dark:hover:bg-night-250 rounded-lg flex items-center justify-center relative",onClick:function(){-2===f?m(0):1===f&&m(-1)},children:[JSON.stringify(x(x({},n),{},{dropped:!!n.dropped,grade:0}))===JSON.stringify(x(x({},t),{},{grade:0,dropped:!!t.dropped}))||a?(0,d.jsx)(d.Fragment,{}):(0,d.jsx)("span",{className:"bg-theme-200 w-2 h-2 block rounded-full absolute right-1 top-1.5"}),(0,d.jsx)(s.lIk,{className:"block text-xl text-day-400 dark:text-night-400"})]}),(0,d.jsxs)("div",{className:"_TAssignmentOptions absolute pb-2 bg-day-100 dark:bg-night-100 border border-day-300 dark:border-night-300 z-10 transition-opacity-transform duration-200 origin-top-right right-0 top-6 rounded-md text-day-400 dark:text-night-400 ".concat(-2===f?"hidden":""," ").concat(1!==f?"scale-75 opacity-0":""),onClick:function(e){e.stopPropagation()},children:[(0,d.jsx)("p",{className:"px-5 py-2 text-day-700 dark:text-night-700",children:"Options"}),(0,d.jsxs)("div",{className:"flex items-center gap-4 px-5 py-2 border-t border-day-300 dark:border-night-300",children:[(0,d.jsx)("p",{children:"Weight"}),(0,d.jsx)(h,{checkValidity:function(){return"number"===typeof(0,p.EA)(c,!0)},update:function(e){u(e)},value:c})]}),(0,d.jsxs)("div",{className:"flex items-center gap-4 px-5 border-t border-day-300 dark:border-night-300",children:[(0,d.jsx)("p",{children:"Dropped"}),(0,d.jsx)(g.Z,{checked:!!t.dropped,editingEnabled:!0,onClick:function(e){r(x(x({},t),{},{grade:100,dropped:e}))}})]})]})]})}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){(0,l.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function j(e){var t=e.assignment,n=e.setAssignment,r=e.removeMe,a=(0,i.useState)(!1),o=a[0],c=a[1],u=i.createRef(),l=function(e){u.current&&(u.current.value=null!==e&&void 0!==e?e:t.grade.toString())},m=(0,i.useMemo)((function(){return t}),[]);return(0,d.jsxs)("div",{className:"_TAssignmentRow flex justify-between h-12 items-center hover:bg-day-150 dark:hover:bg-night-150 focus-within:bg-day-150  focus-within:dark:bg-night-150 pl-12 pr-4 _TAssignmentRow-auto-focus",onClick:function(e){var t,n,r;null!==(t=e.target)&&void 0!==t&&null!==(n=t.classList)&&void 0!==n&&n.contains("_TAssignmentRow-auto-focus")&&(null===(r=u.current)||void 0===r||r.focus())},children:[(0,d.jsxs)("span",{className:"_TAssignmentRow-left text-day-700 dark:text-night-700 flex items-center gap-4 _TAssignmentRow-auto-focus",children:[(0,d.jsx)(g.Z,{checked:!t.dropped,editingEnabled:!0,onClick:function(e){n(y(y({},t),{},{dropped:!e}))},cancelEvent:!0}),r?(0,d.jsx)(f.Z,{editingEnabled:!0,setName:function(e){n(y(y({},t),{},{name:e}))},children:t.name}):(0,d.jsx)("span",{className:"_TAssignmentRow-auto-focus",children:t.name}),r?(0,d.jsx)("button",{onClick:r,className:"bg-theme-200 text-day-100 w-6 h-6 flex items-center justify-center align-middle text-sm rounded-lg",children:(0,d.jsx)(s.bjh,{})}):(0,d.jsx)(d.Fragment,{})]}),(0,d.jsx)("span",{children:(0,d.jsxs)("div",{className:"_TAssignmentRow-input-wrapper flex flex-row-reverse group items-center gap-2",children:[(0,d.jsx)(v,{assignment:t,originalAssignment:m,setAssignment:n,removeMe:r}),(0,d.jsxs)("span",{className:"relative",children:[(0,d.jsx)(h,{inputRef:u,onFocusChange:c,value:t.grade.toString(),checkValidity:function(e){var t=(0,p.EA)(e);return"number"!==typeof t||Number.isNaN(e)?["PND","MSG","EXC","","ENTER A GRADE"].includes(e.toUpperCase()):t>=0},update:function(e){var r,i=y(y({},t),{},{grade:null!==(r=(0,p.EA)(e,!0))&&void 0!==r?r:""});n(i)},checkFade:function(e){return"ENTER A GRADE"!==e.toUpperCase()}}),m.grade.toString()===t.grade.toString()||r?(0,d.jsx)(d.Fragment,{}):(0,d.jsx)("span",{className:"bg-theme-200 w-3 h-3 block rounded-full absolute -right-1 -top-1"})]}),(0,d.jsx)("div",{className:"_TAssignmentRow-input-suggestions flex flex-row text-sm items-center gap-2",children:o?function(){if("Enter a Grade"===t.grade)return["70","80","90","100"].map((function(e){return{title:e,fn:function(){n(y(y({},t),{},{grade:e}))},darkHighlight:!0}}));var e=JSON.stringify(t)!==JSON.stringify(m),r=[{title:t.dropped?"Undrop":"Drop",fn:function(){n(y(y({},t),{},{dropped:!t.dropped}))},lightHighlight:t.dropped,darkHighlight:t.dropped||!e}];e&&r.push({title:"Revert",fn:function(){n(y(y({},m),{},{name:t.name}))},lightHighlight:!0,darkHighlight:!0});var i=(0,p.EA)(t.grade);return"number"===typeof i&&i<70&&r.push({title:"Passing",fn:function(){n(y(y({},t),{},{grade:70})),l("70")},lightHighlight:!1,darkHighlight:!t.dropped&&!e}),"number"===typeof i&&i<100&&(r.push({title:"Half Back",fn:function(){var e=Math.round((100+i)/2);n(y(y({},t),{},{grade:e})),l(e.toString())},lightHighlight:!1,darkHighlight:!t.dropped&&!e}),r.push({title:"100",fn:function(){n(y(y({},t),{},{grade:100})),l("100")},lightHighlight:!1,darkHighlight:!t.dropped&&!e})),r}().map((function(e,t){return(0,d.jsx)("div",{className:"_input-suggestion-card h-fit ".concat(e.lightHighlight?"bg-theme-200 text-day-100":"bg-theme-100 text-theme-200"," ").concat(e.darkHighlight?"dark:bg-theme-200 dark:text-theme-100":"dark:text-theme-200 dark:bg-night-250"," w-fit px-1.5 py-0.5 rounded-md transition-colors cursor-pointer font-normal whitespace-nowrap overflow-hidden"),onMouseDown:function(t){0===t.button&&e.fn()},children:(0,d.jsx)("p",{className:"overflow-hidden text-ellipsis",children:e.title})},t)})):(0,d.jsx)(d.Fragment,{})})]})})]})}function w(e){var t=e.update,n=e.category,a=e.categoryIdx,o=(0,i.useState)(n.assignments),c=o[0],u=o[1],l=(0,i.useState)([]),g=l[0],f=l[1],h=(0,i.useState)(1),p=h[0],m=h[1];return(0,i.useEffect)((function(){t({category:n.category,assignments:c},{category:n.category,assignments:c.concat(g)})}),[g]),(0,i.useEffect)((function(){t({category:n.category,assignments:c},{category:n.category,assignments:c.concat(g)})}),[c]),(0,d.jsxs)("div",{className:"_TCategory border-b border-day-300 dark:border-night-300 pb-2 last:border-b-0",children:[(0,d.jsxs)("div",{className:"_TCategory-name h-12 flex items-center text-day-400 dark:text-night-400 pl-12 pr-4 justify-between",children:[(0,d.jsx)("p",{children:n.category.name}),(0,d.jsxs)("label",{className:"flex items-center gap-1 bg-theme-100 dark:bg-night-250 dark:text-theme-100 text-theme-200 py-1 px-2 rounded-md text-sm",children:[(0,d.jsx)(s.xcL,{}),(0,d.jsx)("button",{onClick:function(){f([].concat((0,r.Z)(g),[{name:1===p?"New Assignment":"New Assignment ".concat(p),grade:"Enter a Grade",weight:1,otherFields:[]}])),m(p+1)},children:"Add"})]})]}),(0,d.jsxs)("div",{className:"_TCategory-items",children:[c.map((function(e,t){return(0,d.jsx)(j,{setAssignment:function(e){var n=c.slice(0);n[t]=e,u(n)},assignment:e},t)})),g.map((function(e,t){return(0,d.jsx)(j,{removeMe:function(){var e=g.slice(0);e.splice(t,1),f(e)},setAssignment:function(e){var n=g.slice(0);n[t]=e,f(n)},assignment:e},t)}))]})]},a)}function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){(0,l.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function O(e){var t,n=e.course,r=e.selectedGradingPeriod,a=e.update,s=e.setEditingContext,c=function(){var e,t=(0,p.j3)((null!==(e=n.gradebook[r])&&void 0!==e?e:[]).map((function(e){return N(N({},(0,p.g4)(e)),{},{weight:e.category.weight})}))).toString(),i=n.grades.slice(0);return i[r]=t,i},u=function(e){return{function:function(t,i){var s,o,c=n.grades.slice(0),d=n.gradebook.slice(0),u=null!==(s=null===(o=d[r])||void 0===o?void 0:o.slice(0))&&void 0!==s?s:[];u[e]=i,d[r]=u,c[r]=(0,p.Hw)(N(N({},n),{},{gradebook:d}),r).toString(),"-1"===c[r]&&(c[r]="NG"),u[e]=t,d[r]=u,a(N(N({},n),{},{grades:c,gradebook:d}))}}},l=function(){var e=(0,p.EA)(c()[r]);"number"===typeof e&&(e=Math.round(e));var t=(0,p.EA)(n.grades[r]);return"number"===typeof t&&(t=Math.round(t)),e===t},g=(0,i.useState)(l()),f=g[0],h=g[1];return(0,i.useEffect)((function(){h(l())}),[r]),(0,d.jsx)("div",{className:"_TAssignments",children:void 0!==f?(0,d.jsx)(d.Fragment,{children:f?(0,d.jsx)(o.E.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5},children:(null!==(t=n.gradebook[r])&&void 0!==t?t:[]).map((function(e,t){return(0,d.jsx)(w,{category:e,categoryIdx:t,update:u(t).function},t)}))}):(0,d.jsxs)("div",{className:"bg-day-150 dark:bg-night-150 text-day-400 dark:text-night-400 text-center py-4 px-8 flex-col flex gap-4",children:[(0,d.jsx)("h3",{className:"text-theme-200 dark:text-night-700",children:"Accuracy Warning"}),(0,d.jsx)("p",{className:"text-sm",children:"Scorecard's average calculation differs from your actual average."}),(0,d.jsxs)("p",{className:"text-sm flex justify-center gap-4",children:[(0,d.jsxs)("p",{children:[(0,d.jsx)("span",{className:"font-medium",children:"Scorecard Average: "}),function(){var e=(0,p.EA)(c()[r]);return"number"===typeof e?Math.round(e):e}()]}),(0,d.jsxs)("p",{children:[(0,d.jsx)("span",{className:"font-medium",children:"Your Real Average: "}),function(){var e=(0,p.EA)(n.grades[r]);return"number"===typeof e?Math.round(e):e}()]})]}),(0,d.jsxs)("div",{className:"flex gap-2 justify-center mt-4",children:[(0,d.jsx)("div",{className:"rounded-lg px-4 py-2 bg-theme-200 text-white cursor-pointer",onClick:function(){h(!0),a(N(N({},n),{},{grades:c()}))},children:"Continue"}),(0,d.jsx)("div",{className:"rounded-lg cursor-pointer px-4 py-2 bg-theme-100 dark:bg-night-600 text-theme-200 dark:text-night-500",onClick:function(){s("COURSE")},children:"Cancel"})]})]})}):(0,d.jsx)(d.Fragment,{})})}function E(e){var t=e.val,n=e.min,r=e.max,i=e.set;return(0,d.jsx)("div",{className:"_grade-slider",onClick:function(e){e.stopPropagation()},children:(0,d.jsx)("input",{type:"range",min:n,max:r,value:t,step:1,className:"slider",onChange:function(e){i(e.target.value)}})})}function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(Object(n),!0).forEach((function(t){(0,l.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function A(e){var t,n,r=e.course,a=e.selectedGradingPeriod,s=e.setCourse,o=(0,i.useState)(-2),c=o[0],u=o[1];(0,i.useEffect)((function(){if(0===c&&u(1),1===c){var e=function(){u(-1)};return document.addEventListener("click",e),function(){document.removeEventListener("click",e)}}return-1===c&&setTimeout((function(){u(-2)}),200),function(){}}),[c]);var l=(0,i.useState)(r.credit.toString()),f=l[0],m=l[1];return(0,i.useEffect)((function(){var e=(0,p.EA)(f,!0);s(P(P({},r),{},{credit:"number"===typeof e?e:0}))}),[f]),(0,d.jsxs)("div",{className:"relative",children:[(0,d.jsx)("div",{className:"hover:bg-day-250 dark:hover:bg-night-250 rounded-lg flex items-center justify-center relative px-2 py-1",onClick:function(){-2===c?u(0):1===c&&u(-1)},children:(0,d.jsx)("span",{className:"text-sm text-day-400 dark:text-night-400 whitespace-nowrap",children:"More Options"})}),(0,d.jsxs)("div",{className:"_TAssignmentOptions absolute pb-2 bg-day-100 dark:bg-night-100 border border-day-300 dark:border-night-300 z-10 transition-opacity-transform duration-200 origin-top-right right-0 top-6 rounded-md text-day-400 dark:text-night-400 ".concat(-2===c?"hidden":""," ").concat(1!==c?"scale-75 opacity-0":""),onClick:function(e){e.stopPropagation()},children:[(0,d.jsx)("p",{className:"px-5 py-2 text-day-700 dark:text-night-700",children:"Options"}),(0,d.jsxs)("div",{className:"flex items-center gap-4 px-5 border-t border-t-day-300 dark:border-t-night-300 py-2",children:[(0,d.jsx)("p",{className:"text-day-400 dark:text-night-400",children:"Average"}),(0,d.jsx)(h,{value:null!==(t=null===(n=r.grades[a])||void 0===n?void 0:n.toString())&&void 0!==t?t:"",checkValidity:function(){var e,t;return"number"===typeof(0,p.EA)(r.grades[a],!0)||["NG","P","F"].includes(null!==(e=null===(t=r.grades[a])||void 0===t?void 0:t.toString().toUpperCase())&&void 0!==e?e:"")},update:function(e){var t=r.grades.slice(0);t[a]=e,s(P(P({},r),{},{grades:t}))}})]}),(0,d.jsxs)("div",{className:"flex items-center gap-4 px-5 border-t border-t-day-300 dark:border-t-night-300 py-2",children:[(0,d.jsx)("p",{className:"text-day-400 dark:text-night-400",children:"Credit"}),(0,d.jsx)(h,{value:f,checkValidity:function(){return!0},update:function(e){m(e)}})]}),(0,d.jsxs)("div",{className:"flex items-center gap-4 px-5 border-t border-t-day-300 dark:border-t-night-300",children:[(0,d.jsx)("p",{className:"text-day-400 dark:text-night-400",children:"Weighted"}),(0,d.jsx)(g.Z,{checked:r.weighted,editingEnabled:!0,onClick:function(e){s(P(P({},r),{},{weighted:e}))}})]})]})]})}function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(Object(n),!0).forEach((function(t){(0,l.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function F(e){var t,n=e.course,r=e.selectedGradingPeriod,i=e.update;return(0,d.jsxs)("div",{className:"_TAverage flex justify-between items-center py-4 px-4",children:[(0,d.jsx)(E,{max:100,min:0,set:function(e){var t=n.grades.slice(0);t[r]=e,i(_(_({},n),{},{grades:t}))},val:(null!==(t=n.grades[r])&&void 0!==t?t:0).toString()}),(0,d.jsx)(A,{course:n,setCourse:function(e){i(e)},selectedGradingPeriod:r})]})}function T(e){var t=e.course,n=e.update,r=e.selectedGradingPeriod,a=e.index,s=(0,i.useState)(!0),l=s[0],g=s[1],f=(0,i.useState)("COURSE"),h=f[0],p=f[1],m=(0,i.useState)(!1),x=m[0],v=m[1],b=(0,d.jsx)(o.E.div,{layoutId:"TCourse-".concat(a,"-tab"),className:"bg-theme-200 w-full h-1 rounded-t-md mt-1 relative z-10",transition:{type:"spring",duration:x?.5:0,bounce:.4}}),y=function(e,t){return(0,d.jsxs)("div",{className:"_TCourse-tab cursor-pointer text-sm",children:[(0,d.jsx)("p",{className:"transition-colors h-8 my-2 flex items-center ".concat(t?"text-theme-200":"text-day-400 dark:text-night-400"),children:e}),t?b:(0,d.jsx)(d.Fragment,{})]})},j=(0,i.useState)(t),w=j[0],k=j[1];(0,i.useEffect)((function(){n(w)}),[w]);var N=function(e){k(e)};return(0,i.useEffect)((function(){k(t)}),[h]),(0,i.useEffect)((function(){p("COURSE")}),[r]),(0,i.useEffect)((function(){l||p("COURSE")}),[l]),(0,d.jsxs)("div",{className:"_T-course",onMouseEnter:function(){v(!0)},onMouseLeave:function(){v(!1)},children:[(0,d.jsxs)("div",{className:"_T-course-header bg-day-200 dark:bg-night-200 flex justify-between ".concat(l?"rounded-t-md":"rounded-md"),children:[(0,d.jsxs)("div",{className:"_T-course-left flex items-center group p-2 cursor-pointer",onClick:function(){g(!l)},children:[(0,d.jsx)("span",{className:"_T-course-chevron group-hover:bg-day-250 group-hover:dark:bg-night-250 rounded-full mr-2",children:(0,d.jsx)(u,{expanded:l})}),(0,d.jsx)("span",{className:"_T-course-name text-day-700 dark:text-night-700",children:w.name})]}),(0,d.jsxs)("div",{className:"_T-course-right flex items-center",children:[(0,d.jsxs)("div",{className:"_T-course-context flex gap-4",children:[(0,d.jsx)("span",{onClick:function(){p("COURSE")},children:y("Course","COURSE"===h)}),(0,d.jsx)("span",{onClick:function(){p("ASSIGNMENTS")},children:y("Assignments","ASSIGNMENTS"===h)})]}),(0,d.jsx)("div",{className:"block w-16 ml-8 mr-4",children:(0,d.jsx)(c.Z,{grade:w.grades[r]})})]})]}),l?(0,d.jsx)("div",{className:"_T-course-tester border border-day-300 dark:border-night-300 rounded-b-md",children:"COURSE"===h?(0,d.jsx)(F,{course:w,selectedGradingPeriod:r,update:N}):(0,d.jsx)(O,{setEditingContext:function(e){v(!0),p(e)},course:w,selectedGradingPeriod:r,update:N})}):(0,d.jsx)(d.Fragment,{})]})}var D=n(6423),R=n(3524),G=n(756),Z=!0;function M(){var e=[{category:new G.Z("Major",50),assignments:[{name:"Test",grade:"107",weight:1,otherFields:[]},{name:"Project",grade:"95",weight:1,otherFields:[]}]},{category:new G.Z("Quiz",30),assignments:[{name:"Quiz no. 1",grade:"90",weight:20,otherFields:[]},{name:"Quiz no. 2",grade:"89",weight:25,otherFields:[]},{name:"Quiz no. 3",grade:"80",weight:15,otherFields:[]}]},{category:new G.Z("Daily",20),assignments:[{name:"Activity 1",grade:"90",weight:10,otherFields:[]},{name:"Activity 2",grade:"100",weight:10,otherFields:[]},{name:"Activity 3",grade:"80",weight:10,otherFields:[]},{name:"Activity 4",grade:"100",weight:10,otherFields:[]},{name:"Activity 5",grade:"70",weight:10,otherFields:[]},{name:"Activity 6",grade:"100",weight:10,otherFields:[]},{name:"Activity 7",grade:"100",weight:10,otherFields:[]},{name:"Activity 8",grade:"100",weight:10,otherFields:[]},{name:"Activity 9",grade:"90",weight:10,otherFields:[]},{name:"Activity 10",grade:"70",weight:10,dropped:!0,otherFields:[]},{name:"Activity 11",grade:"50",weight:10,dropped:!0,otherFields:[]},{name:"Activity 12",grade:"100",weight:10,otherFields:[]}]}],t=[{category:new G.Z("Total Points",100),assignments:[{name:"Homework",grade:"100",weight:1,otherFields:[]},{name:"Project",grade:"100",weight:4,otherFields:[]}]}],n=[{name:"Course",cellKey:"###",hash:"###",credit:1,grades:["70","90","95","95","80","100"],weighted:!0,gradebook:[].concat((0,r.Z)(new Array(5).fill(e)),[t]),otherFields:[]},{name:"Course Everyday",cellKey:"@@@",hash:"@@@",credit:2,grades:["100","90","95","95","60","75"],weighted:!0,gradebook:new Array(6).fill(e),otherFields:[]}],o=(0,i.useState)([]),c=o[0],u=o[1],l=(0,i.useContext)(D.R).appData;return(0,d.jsxs)("div",{children:[(0,d.jsx)(a.PB,{title:"Grade Testing"}),(0,d.jsxs)("div",{className:"use-responsive-width",children:[(0,d.jsxs)("div",{className:"leading-loose w-3/4 my-5",children:[(0,d.jsx)("h3",{className:"text-day-700 dark:text-night-700",children:"Test your Grades"}),(0,d.jsx)("p",{className:"text-day-400 dark:text-night-400",children:"Scorecard's grade testing feature can be used to experiment with new or changed grades with any of your classes. This won't actually change any grades, but you'll be able to see how a change would reflect your average or GPA."})]}),l?(0,d.jsxs)("div",{children:[(0,d.jsxs)("div",{className:"flex items-center justify-center text-theme-200 bg-theme-100 dark:text-theme-100 dark:bg-theme-200 py-3 gap-2 mb-4 rounded-md",children:[(0,d.jsx)("span",{children:(0,d.jsx)(s.URw,{})}),(0,d.jsx)("span",{children:"Your GPA would be a ".concat((0,R.C)(c,l.selectedGradingPeriod,l.formula).toFixed(2))})]}),(0,d.jsx)("div",{className:"flex-col flex gap-4",children:n.map((function(e,t){return(0,d.jsx)(T,{course:e,selectedGradingPeriod:l.selectedGradingPeriod,index:t,update:function(e){u((function(n){var r=n.slice(0);return r[t]=e,r}))}},t)}))})]}):(0,d.jsx)(d.Fragment,{})]})]})}},2284:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/insights/testing",function(){return n(3179)}])},8216:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,{Z:function(){return r}})}},function(e){e.O(0,[774,888,179],(function(){return t=2284,e(e.s=t);var t}));var t=e.O();_N_E=t}]);