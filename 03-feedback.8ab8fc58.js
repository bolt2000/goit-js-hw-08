function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o="Expected a function",r=NaN,i="[object Symbol]",f=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,l=/^0o[0-7]+$/i,c=parseInt,s="object"==typeof n&&n&&n.Object===Object&&n,m="object"==typeof self&&self&&self.Object===Object&&self,d=s||m||Function("return this")(),v=Object.prototype.toString,g=Math.max,p=Math.min,y=function(){return d.Date.now()};function b(e,t,n){var r,i,f,a,u,l,c=0,s=!1,m=!1,d=!0;if("function"!=typeof e)throw new TypeError(o);function v(t){var n=r,o=i;return r=i=void 0,c=t,a=e.apply(o,n)}function b(e){var n=e-l;return void 0===l||n>=t||n<0||m&&e-c>=f}function S(){var e=y();if(b(e))return E(e);u=setTimeout(S,function(e){var n=t-(e-l);return m?p(n,f-(e-c)):n}(e))}function E(e){return u=void 0,d&&r?v(e):(r=i=void 0,a)}function j(){var e=y(),n=b(e);if(r=arguments,i=this,l=e,n){if(void 0===u)return function(e){return c=e,u=setTimeout(S,t),s?v(e):a}(l);if(m)return u=setTimeout(S,t),v(l)}return void 0===u&&(u=setTimeout(S,t)),a}return t=O(t)||0,T(n)&&(s=!!n.leading,f=(m="maxWait"in n)?g(O(n.maxWait)||0,t):f,d="trailing"in n?!!n.trailing:d),j.cancel=function(){void 0!==u&&clearTimeout(u),c=0,r=l=i=u=void 0},j.flush=function(){return void 0===u?a:E(y())},j}function T(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function O(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&v.call(e)==i}(e))return r;if(T(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=T(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(f,"");var n=u.test(e);return n||l.test(e)?c(e.slice(2),n?2:8):a.test(e)?r:+e}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return T(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),b(e,t,{leading:r,maxWait:t,trailing:i})};const S={},E={form:document.querySelector(".feedback-form")};E.form.addEventListener("submit",(function(e){e.preventDefault(),console.log("Send forms"),console.log({email:E.form.email.value,message:E.form.message.value}),e.currentTarget.reset(),localStorage.removeItem("STORAGE_KEY")})),E.form.addEventListener("input",e(t)((function(e){S[e.target.name]=e.target.value,localStorage.setItem("STORAGE_KEY",JSON.stringify(S))}),500)),function(){const e=JSON.parse(localStorage.getItem("STORAGE_KEY"));e&&(E.form.email.value=e.email,E.form.message.value=e.message)}();
//# sourceMappingURL=03-feedback.8ab8fc58.js.map