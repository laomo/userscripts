// ==UserScript==
// @name         hide already stared trending repos
// @description  fix solygen's verison
// @version      1.0.3
// @grant        none
// @icon         http://www.google.com/s2/favicons?domain=www.github.com
// @namespace    https://github.com/solygen/userscripts
// @repository   https://github.com/solygen/userscripts.git
// @license      MIT
//
// @include      https://github.com/trending*
//
// @updateURL    https://github.com/laomo/userscripts/raw/master/scripts/github.com/trending.user.js
// @downloadURL  https://github.com/laomo/userscripts/raw/master/scripts/github.com/trending.user.js
// @homepage     https://github.com/solygen/userscripts
// @require	     http://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js

// ==/UserScript==

(function () {

    'use strict';

    var list = $('.col-12.d-block.width-full.py-4.border-bottom'),
        repo;

    list.each(function (index, item) {
        repo = $(item);
        if (repo.find('.starring-container.on').length) {
            repo.remove();
        }
    });
})();
