angular.module('waitSpinner.template', ['/app/src/waitSpinner/spinnerTemplate.html']);

angular.module("/app/src/waitSpinner/spinnerTemplate.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("/app/src/waitSpinner/spinnerTemplate.html",
    "<div></div>");
}]);

define("waitSpinner/waitSpinnerTemplate", function(){});

define('waitSpinner/waitSpinnerModule',['require','angular','waitSpinner/waitSpinnerTemplate'],function (require) {
    'use strict';

    var angular = require('angular');
    require('waitSpinner/waitSpinnerTemplate');

    var spinnerModule = angular.module('dk.spinner', ['waitSpinner.template']);

    return spinnerModule;
});
