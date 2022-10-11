"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[743],{6746:function(e,t,r){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var t=i();if(t&&t.has(e))return t.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var u=o?Object.getOwnPropertyDescriptor(e,a):null;u&&(u.get||u.set)?Object.defineProperty(r,a,u):r[a]=e[a]}return r.default=e,t&&t.set(e,r),r}(r(7294)),a=r(6281),u=r(9790);function i(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var d=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(b,e);var t,r,u,i,d,h=(r=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}(),function(){var e,t,o,a=f(b);if(r){var u=f(this).constructor;o=Reflect.construct(a,arguments,u)}else o=a.apply(this,arguments);return e=this,t=o,t&&("object"===n(t)||"function"==typeof t)?t:s(e)});function b(){var e;!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,b);for(var t=arguments.length,r=Array(t),n=0;n<t;n++)r[n]=arguments[n];return e=h.call.apply(h,[this].concat(r)),y(s(e),"callPlayer",a.callPlayer),y(s(e),"duration",null),y(s(e),"currentTime",null),y(s(e),"secondsLoaded",null),y(s(e),"mute",function(){e.setVolume(0)}),y(s(e),"unmute",function(){null!==e.props.volume&&e.setVolume(e.props.volume)}),y(s(e),"ref",function(t){e.container=t}),e}return i=[{key:"componentDidMount",value:function(){this.props.onMount&&this.props.onMount(this)}},{key:"load",value:function(e){var t=this;this.duration=null,(0,a.getSDK)("https://player.vimeo.com/api/player.js","Vimeo").then(function(r){if(t.container){var n=t.props.config,o=n.playerOptions,a=n.title;t.player=new r.Player(t.container,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach(function(t){y(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({url:e,autoplay:t.props.playing,muted:t.props.muted,loop:t.props.loop,playsinline:t.props.playsinline,controls:t.props.controls},o)),t.player.ready().then(function(){var e=t.container.querySelector("iframe");e.style.width="100%",e.style.height="100%",a&&(e.title=a)}).catch(t.props.onError),t.player.on("loaded",function(){t.props.onReady(),t.refreshDuration()}),t.player.on("play",function(){t.props.onPlay(),t.refreshDuration()}),t.player.on("pause",t.props.onPause),t.player.on("seeked",function(e){return t.props.onSeek(e.seconds)}),t.player.on("ended",t.props.onEnded),t.player.on("error",t.props.onError),t.player.on("timeupdate",function(e){var r=e.seconds;t.currentTime=r}),t.player.on("progress",function(e){var r=e.seconds;t.secondsLoaded=r}),t.player.on("bufferstart",t.props.onBuffer),t.player.on("bufferend",t.props.onBufferEnd),t.player.on("playbackratechange",function(e){return t.props.onPlaybackRateChange(e.playbackRate)})}},this.props.onError)}},{key:"refreshDuration",value:function(){var e=this;this.player.getDuration().then(function(t){e.duration=t})}},{key:"play",value:function(){var e=this.callPlayer("play");e&&e.catch(this.props.onError)}},{key:"pause",value:function(){this.callPlayer("pause")}},{key:"stop",value:function(){this.callPlayer("unload")}},{key:"seekTo",value:function(e){this.callPlayer("setCurrentTime",e)}},{key:"setVolume",value:function(e){this.callPlayer("setVolume",e)}},{key:"setLoop",value:function(e){this.callPlayer("setLoop",e)}},{key:"setPlaybackRate",value:function(e){this.callPlayer("setPlaybackRate",e)}},{key:"getDuration",value:function(){return this.duration}},{key:"getCurrentTime",value:function(){return this.currentTime}},{key:"getSecondsLoaded",value:function(){return this.secondsLoaded}},{key:"render",value:function(){var e=this.props.display;return o.default.createElement("div",{key:this.props.url,ref:this.ref,style:{width:"100%",height:"100%",overflow:"hidden",display:e}})}}],c(b.prototype,i),d&&c(b,d),b}(o.Component);t.default=d,y(d,"displayName","Vimeo"),y(d,"canPlay",u.canPlay.vimeo),y(d,"forceLoad",!0)}}]);