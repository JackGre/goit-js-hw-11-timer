parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"P4Zx":[function(require,module,exports) {

},{}],"Focm":[function(require,module,exports) {
"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function n(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}require("../src/style/style.css");var a=function(){function t(n){var a=n.selector,r=n.targetDate;e(this,t),this._elements=this._getElements(a),this._targetDate=r,this._init(),this._startCount()}return n(t,[{key:"_getElements",value:function(e){return{dayCell:document.querySelector("".concat(e,' [data-value="days"]')),hourCell:document.querySelector("".concat(e,' [data-value="hours"]')),minCell:document.querySelector("".concat(e,' [data-value="mins"]')),secCell:document.querySelector("".concat(e,' [data-value="secs"]'))}}},{key:"_convertTime",value:function(e){var t=function(e){return String(e).padStart(2,"0")};return function(e){return{days:t(Math.floor(e/864e5)),hours:t(Math.floor(e%864e5/36e5)),mins:t(Math.floor(e%36e5/6e4)),secs:t(Math.floor(e%6e4/1e3))}}(e)}},{key:"_initVals",value:function(){var e=this._convertTime(this._targetDate-new Date);this._elements.dayCell.textContent=e.days,this._elements.hourCell.textContent=e.hours,this._elements.minCell.textContent=e.mins,this._elements.secCell.textContent=e.secs}},{key:"_init",value:function(){if(this._targetDate<=new Date)return this._elements.dayCell.textContent="00",this._elements.hourCell.textContent="00",this._elements.minCell.textContent="00",void(this._elements.secCell.textContent="00");this._initVals()}},{key:"_startCount",value:function(){var e=this,t=setInterval(function(){e.targetDate<=new Date?clearInterval(t):e._initVals()},1e3)}}]),t}(),r=new a({selector:"#timer-1",targetDate:new Date("Jun 25, 2021")});
},{"../src/style/style.css":"P4Zx"}]},{},["Focm"], null)
//# sourceMappingURL=/goit-js-hw-11-timer/src.551ba5ed.js.map