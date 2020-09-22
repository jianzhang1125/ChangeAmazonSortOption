// ==UserScript==
// @name         Change Amazon Sort Option
// @author       Eli
// @supportURL   https://github.com/jianzhang1125/ChangeAmazonSortOption/
// @include      *www.amazon.*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function() {
    function changeOption() {
        var dropDownOption = document.getElementById('s-result-sort-select_3');
        dropDownOption.textContent = "Costomer Review Count";

        var url = window.location.href;
        if (url.indexOf('s=review-rank') > -1){
            url = url.replace('s=review-rank','s=review-count-rank');
            window.location.href = url;
        }
    }
    setInterval(changeOption, 300);
})();
