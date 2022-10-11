"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[55],{3134:function(e,t,n){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var t=i();if(t&&t.has(e))return t.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var l=o?Object.getOwnPropertyDescriptor(e,a):null;l&&(l.get||l.set)?Object.defineProperty(n,a,l):n[a]=e[a]}return n.default=e,t&&t.set(e,n),n}(n(7294)),a=n(6281),l=n(9790);function i(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(P,e);var t,n,i,b,d,h=(n=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}(),function(){var e,t,o,a=y(P);if(n){var l=y(this).constructor;o=Reflect.construct(a,arguments,l)}else o=a.apply(this,arguments);return e=this,t=o,t&&("object"===r(t)||"function"==typeof t)?t:p(e)});function P(){var e;!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,P);for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];return e=h.call.apply(h,[this].concat(n)),f(p(e),"callPlayer",a.callPlayer),f(p(e),"playerID",e.props.config.playerId||"".concat("wistia-player-").concat((0,a.randomString)())),f(p(e),"onPlay",function(){var t;return(t=e.props).onPlay.apply(t,arguments)}),f(p(e),"onPause",function(){var t;return(t=e.props).onPause.apply(t,arguments)}),f(p(e),"onSeek",function(){var t;return(t=e.props).onSeek.apply(t,arguments)}),f(p(e),"onEnded",function(){var t;return(t=e.props).onEnded.apply(t,arguments)}),f(p(e),"onPlaybackRateChange",function(){var t;return(t=e.props).onPlaybackRateChange.apply(t,arguments)}),f(p(e),"mute",function(){e.callPlayer("mute")}),f(p(e),"unmute",function(){e.callPlayer("unmute")}),e}return b=[{key:"componentDidMount",value:function(){this.props.onMount&&this.props.onMount(this)}},{key:"load",value:function(e){var t=this,n=this.props,r=n.playing,o=n.muted,l=n.controls,i=n.onReady,c=n.config,s=n.onError;(0,a.getSDK)("https://fast.wistia.com/assets/external/E-v1.js","Wistia").then(function(e){c.customControls&&c.customControls.forEach(function(t){return e.defineControl(t)}),window._wq=window._wq||[],window._wq.push({id:t.playerID,options:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach(function(t){f(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({autoPlay:r,silentAutoPlay:"allow",muted:o,controlsVisibleOnLoad:l,fullscreenButton:l,playbar:l,playbackRateControl:l,qualityControl:l,volumeControl:l,settingsControl:l,smallPlayButton:l},c.options),onReady:function(e){t.player=e,t.unbind(),t.player.bind("play",t.onPlay),t.player.bind("pause",t.onPause),t.player.bind("seek",t.onSeek),t.player.bind("end",t.onEnded),t.player.bind("playbackratechange",t.onPlaybackRateChange),i()}})},s)}},{key:"unbind",value:function(){this.player.unbind("play",this.onPlay),this.player.unbind("pause",this.onPause),this.player.unbind("seek",this.onSeek),this.player.unbind("end",this.onEnded),this.player.unbind("playbackratechange",this.onPlaybackRateChange)}},{key:"play",value:function(){this.callPlayer("play")}},{key:"pause",value:function(){this.callPlayer("pause")}},{key:"stop",value:function(){this.unbind(),this.callPlayer("remove")}},{key:"seekTo",value:function(e){this.callPlayer("time",e)}},{key:"setVolume",value:function(e){this.callPlayer("volume",e)}},{key:"setPlaybackRate",value:function(e){this.callPlayer("playbackRate",e)}},{key:"getDuration",value:function(){return this.callPlayer("duration")}},{key:"getCurrentTime",value:function(){return this.callPlayer("time")}},{key:"getSecondsLoaded",value:function(){return null}},{key:"render",value:function(){var e=this.props.url,t=e&&e.match(l.MATCH_URL_WISTIA)[1],n="wistia_embed wistia_async_".concat(t);return o.default.createElement("div",{id:this.playerID,key:t,className:n,style:{width:"100%",height:"100%"}})}}],c(P.prototype,b),d&&c(P,d),P}(o.Component);t.default=b,f(b,"displayName","Wistia"),f(b,"canPlay",l.canPlay.wistia),f(b,"loopOnEnded",!0)}}]);