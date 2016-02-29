angular.module('chartTester.template', ['/app/src/chartTester/templates/chartTesterTemplate.html']);

angular.module("/app/src/chartTester/templates/chartTesterTemplate.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("/app/src/chartTester/templates/chartTesterTemplate.html",
    "<div id=chart>Flow Chart</div>");
}]);
