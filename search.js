(function(ns) {
    'use strict';

    function getItemData(query) {
        var results = [];

        for (var i=0; i<Math.ceil(Math.random() * 10); i++) {
            results.push(query + '' + Math.random());
        }

        return results;
    }

    ns.doSearch = function doSearch(query) {
        if (!query) {
            return null;
        }

        var resultsUI = $('.results');
        var results = getItemData(query);
        results.forEach(function addResultsToUI(item) {
            resultsUI.append('<li>' + item + '</li>');
        });
    };


    window.foo = ns;

})(window.foo || {});