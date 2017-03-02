// ==UserScript==
// @name		Kill QRCode For 1Password Login
// @namespace	https://github.com/laomo/userscripts
// @author      laomo <laomo@lmbj.net>
// @description Kill QRCode For 1Password Login
// @include     https://login.taobao.com/*
// @include     https://passport.jd.com/*
// @include     https://user.qunar.com/passport/login.jsp
// @license     MIT
// @updateURL  	https://github.com/laomo/userscripts/raw/master/scripts/1password.com/1password-login.user.js
// @downloadURL https://github.com/laomo/userscripts/raw/master/scripts/1password.com/1password-login.user.js
// @homepage    https://github.com/laomo/userscripts
// @require	    https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js
// @version		0.2
// ==/UserScript==

setTimeout(function () {
   //alert($("div[class='login-tab login-tab-r']").attr('class'));
   //taobao
   $("#J_Quick2Static").click();
   //jd
   $("div[class='login-tab login-tab-r']").click();
   //qunar
   $(".qrlayer").css("visibility", "hidden");
}, 1000);
