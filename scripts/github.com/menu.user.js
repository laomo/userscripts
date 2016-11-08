// ==UserScript==
// @name		Github Menu Helper
// @namespace	https://github.com/laomo/userscripts
// @author      laomo <laomo@lmbj.net>
// @description Enhance github menu
// @include     https://github.com/*
// @license     MIT
// @icon       	https://www.google.com/s2/favicons?domain=www.github.com
// @updateURL  	https://github.com/laomo/userscripts/raw/master/scripts/github.com/menu.user.js
// @downloadURL https://github.com/laomo/userscripts/raw/master/scripts/github.com/menu.user.js
// @homepage    https://github.com/laomo/userscripts
// @require	    https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js
// @version		0.2
// ==/UserScript==

var me = $("meta[name=user-login]").attr("content");
//alert(me);

html ='<li class="header-nav-item"><a href="/' + me +'" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:pulls context:user">My</a></li>'
+'<li class="header-nav-item"><a href="/stars" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:pulls context:user">Stars</a></li>'
+'<li class="header-nav-item"><a href="/trending" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:pulls context:user">Trending</a></li>'; 

$(".float-left").filter(".header-nav").prepend(html);
