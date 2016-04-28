angular.module('application.template', ['/app/src/organization/application/applicationTemplate.html']);

angular.module("/app/src/organization/application/applicationTemplate.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("/app/src/organization/application/applicationTemplate.html",
    "<div><div><top-nav-directive></top-nav-directive></div><div id=page-wrapper><div class=row><div class=col-lg-12><h3 class=page-header>Systems / Application Setup</h3></div></div><div class=row><div class=col-lg-12><div class=\"panel panel-default\"><div class=panel-heading>Organization Setup</div><div class=panel-body><p>* {{'orgSetUpFieldLabel.mandatoryFiels'|translate}}</p><div class=row><div class=col-lg-6><form class=form-horizontal id=form name=form role=form><div class=form-group><label class=\"control-label col-sm-3\" for=name>Application Name:</label><div class=\"input-group custom-search-form\"><input class=form-control id=name> <span class=input-group-btn><button class=\"btn btn-default\" type=button data-container=body data-toggle=popover data-placement=top title=\"Application Name\" data-content=\"The full name of the application; some of the special characters are not allowed in this field (Note: You cannot add two applications with the same name; please check to see if an application with the same name exists before you add a new application)\"><i class=\"fa fa-info\"></i></button></span></div></div><div class=form-group><label class=\"control-label col-sm-3\" for=alias>Alias:</label><div class=\"input-group custom-search-form\"><input class=form-control id=alias> <span class=input-group-btn><button class=\"btn btn-default\" type=button data-container=body data-toggle=popover data-placement=top title=Alias data-content=\"The short name by which the application is commonly known\"><i class=\"fa fa-info\"></i></button></span></div></div><div class=form-group><label class=\"control-label col-sm-3\" for=description>Description:</label><div class=\"input-group custom-search-form\"><input class=form-control id=description> <span class=input-group-btn><button class=\"btn btn-default\" type=button data-container=body data-toggle=popover data-placement=top title=Description data-content=\"High-level description of the application and the functionality\"><i class=\"fa fa-info\"></i></button></span></div></div><div class=form-group><label class=\"control-label col-sm-3\" for=status>Status:</label><div class=\"input-group custom-search-form\"><input class=form-control id=status> <span class=input-group-btn><button class=\"btn btn-default\" type=button data-container=body data-toggle=popover data-placement=top title=Status data-content=\"The status of the application; emerging, standard, contained, sunset, retired\"><i class=\"fa fa-info\"></i></button></span></div></div><div class=form-group><label class=\"control-label col-sm-3\" for=currentVersion>Current Version:</label><div class=\"input-group custom-search-form\"><input class=form-control id=currentVersion> <span class=input-group-btn><button class=\"btn btn-default\" type=button data-container=body data-toggle=popover data-placement=top title=\"Current Version\" data-content=\"Current version of the application deployed\"><i class=\"fa fa-info\"></i></button></span></div></div><div class=form-group><label class=\"control-label col-sm-3\" for=accessLocation>Access Location:</label><div class=\"input-group custom-search-form\"><input class=form-control id=accessLocation> <span class=input-group-btn><button class=\"btn btn-default\" type=button data-container=body data-toggle=popover data-placement=top title=\"Access Location\" data-content=\"Please provide the information about accessing this application. In most cases it will be a URL to the application\"><i class=\"fa fa-info\"></i></button></span></div></div><div class=form-group><label class=\"control-label col-sm-3\" for=notes>Notes:</label><div class=\"input-group custom-search-form\"><textarea type=text class=form-control id=notes></textarea><span class=input-group-btn><button class=\"btn btn-default\" type=button data-container=body data-toggle=popover title=Notes data-placement=top data-content=\"Free-form text field to enter any additional information regarding the application\"><i class=\"fa fa-info\"></i></button></span></div></div></form></div><div class=col-lg-12><ul class=\"nav nav-tabs\"><li class=active><a href=#contact data-toggle=tab>Contact</a></li><li><a href=#usage data-toggle=tab>Usage</a></li><li><a href=#deployment data-toggle=tab>Deployment</a></li><li><a href=#business data-toggle=tab>Business Value</a></li><li><a href=#cost data-toggle=tab>Cost</a></li><li><a href=#health data-toggle=tab>Health</a></li><li><a href=#security data-toggle=tab>Security</a></li></ul><div class=tab-content><div class=\"tab-pane fade in active\" id=contact><h4></h4><p><contact_directive></contact_directive></p></div><div class=\"tab-pane fade\" id=usage><h4></h4><p><usage-directive></usage-directive></p></div><div class=\"tab-pane fade\" id=deployment><h4></h4><p><deployment-directive></deployment-directive></p></div><div class=\"tab-pane fade\" id=business><h4></h4><p><business-value-directive></business-value-directive></p></div><div class=\"tab-pane fade\" id=cost><h4></h4><p><cost-directive></cost-directive></p></div><div class=\"tab-pane fade\" id=health><h4></h4><p><health-directive></health-directive></p></div><div class=\"tab-pane fade\" id=security><h4></h4><p><security-directive></security-directive></p></div></div></div></div></div><div class=panel-footer><a class=\"btn btn-success\" ng-click=Save(app)>Save</a>&nbsp;&nbsp;&nbsp; <a class=\"btn btn-success\" ng-click=SaveAndContinue(app)>Save and Continue</a>&nbsp;&nbsp;&nbsp; <a class=\"btn btn-default\">Save & Exit</a></div></div></div></div></div></div>");
}]);

define("application/applicationTemplate", function(){});

angular.module('businessValue.template', ['/app/src/organization/application/businessValue/businessValueTemplate.html']);

angular.module("/app/src/organization/application/businessValue/businessValueTemplate.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("/app/src/organization/application/businessValue/businessValueTemplate.html",
    "<div class=row><div class=col-lg-6><form class=form-horizontal role=form><div class=form-group><label class=\"control-label col-sm-3\" for=\"\">Business Criticality:</label><div class=\"input-group custom-search-form\"><select class=form-control placeholder=\"Select Scalability\"><option value=\"\" selected disabled>Select Scalability</option><option>1 - Does not support core business processes</option><option>2 - Supports a core business process (sell, deliver, etc.) but does not perform important functions for that process</option><option>3 - Supports a core business processes and performs important functions for the process</option><option>4 - Supports the most critical functions of a core business process</option><option>5 - Supports critical functions of a core business process and provides information for critical functions of other core business processes</option></select><span class=input-group-btn><button class=\"btn btn-default\" type=button data-container=body data-toggle=popover data-placement=top title=\"Business Criticality\" data-content=\"This field helps identify the extent to which the loss of this application would materially affect the company’s ability to conduct core business processes (e.g., sell, deliver, close financial books). Consider a situation of a disaster and identify how critical this application is to fulfill the business needs that it helps support. Please rate the application using the following criteria. This application   \n" +
    "                                                1.  Does not support core business processes   \n" +
    "                                                2.  Supports a core business process (sell, deliver, etc.) but does not perform important functions for that process   \n" +
    "                                                3.  Supports a core business processes and performs important functions for the process   \n" +
    "                                                4.  Supports the most critical functions of a core business process   \n" +
    "                                                5.  Supports critical functions of a core business process and provides information for critical functions of other core business processes\"><i class=\"fa fa-info\"></i></button></span></div></div><div class=form-group><label class=\"control-label col-sm-3\" for=\"\">Competitive Advantage:</label><div class=\"input-group custom-search-form\"><select class=form-control placeholder=\"Select Competitive Advantage\"><option value=\"\" selected disabled>Select Competitive Advantage</option><option>1 - Lowers operating cost but does not differentiate the company in the market</option><option>2 - Generates revenue but does not differentiate the company in the market</option><option>3 - Lowers operating costs and differentiates the company in the market</option><option>4 - Generates revenue and differentiates the company in the market</option><option>5 - Generates revenue, lowers cost, and differentiates the company in the market</option></select><span class=input-group-btn><button class=\"btn btn-default\" type=button data-container=body data-toggle=popover data-placement=top title=\"Competitive Advantage\" data-content=\"This field identifies the extent to which the application enables a capability that I) results in greater revenue or lower cost and \n" +
    "                                            2) differentiates the company in the marketplace. Please rate the application using the following criteria. This application    \n" +
    "                                            1.  Lowers operating cost but does not differentiate the company in the market   \n" +
    "                                            2.  Generates revenue but does not differentiate the company in the market   \n" +
    "                                            3.  Lowers operating costs and differentiates the company in the market   \n" +
    "                                            4.  Generates revenue and differentiates the company in the market   \n" +
    "                                            5.  Generates revenue, lowers cost, and differentiates the company in the market\"><i class=\"fa fa-info\"></i></button></span></div></div><div class=form-group><label class=\"control-label col-sm-3\" for=\"\">Current Effectiveness:</label><div class=\"input-group custom-search-form\"><select class=form-control placeholder=\"Select Current Effectiveness\"><option value=\"\" selected disabled>Please select Scalability</option><option>1 - Does not meet business needs</option><option>2 - Meets some business needs for a specific set of users</option><option>3 - Meets some business needs for a large set of business users</option><option>4 - Meets most business needs for a large set of business users</option><option>5 - Meets most business needs for a large set of business users and provides new functionality the business did not expect</option></select><span class=input-group-btn><button class=\"btn btn-default\" type=button data-container=body data-toggle=popover data-placement=top title=\"Current Effectiveness\" data-content=\"This field identifies the level to which the application effectively meets the business requirements. Please rate the application using the following criteria. This application   \n" +
    "                            1.  Does not meet business needs   \n" +
    "                            2.  Meets some business needs for a specific set of users   \n" +
    "                            3.  Meets some business needs for a large set of business users   \n" +
    "                            4.  Meets most business needs for a large set of business users   \n" +
    "                            5.  Meets most business needs for a large set of business users and provides new functionality the business did not expect\"><i class=\"fa fa-info\"></i></button></span></div></div><div class=form-group><label class=\"control-label col-sm-3\" for=\"\">Breadth of Usage:</label><div class=\"input-group custom-search-form\"><select class=form-control placeholder=\"Select Breadth of Usage\"><option value=\"\" selected disabled>Select Breadth of Usage</option><option>1 - Is used on a local scale and has a small investment profile</option><option>2 - Is used on a regional scale and has a small investment profile</option><option>3 - Is used on a local or regional scale but has a medium investment profile</option><option>4 - Is used on a local or regional scale and has a large investment profile</option><option>5 - Is used on a global scale and has a large investment profile</option></select><span class=input-group-btn><button class=\"btn btn-default\" type=button data-container=body data-toggle=popover data-placement=top title=\"Breadth of Usage\" data-content=\"Identify the governance oversight for this application. This field is driven by the level of usage (local/regional, etc.) and the investment profile (if it has a relatively high investment profile, that implies this application might need a higher level governance oversight). Please rate the application using the following criteria. This application   \n" +
    "                            1.  Is used on a local scale and has a small investment profile   \n" +
    "                            2.  Is used on a regional scale and has a small investment profile   \n" +
    "                            3.  Is used on a local or regional scale but has a medium investment profile   \n" +
    "                            4.  Is used on a local or regional scale and has a large investment profile \n" +
    "                            5.  Is used on a global scale and has a large investment profile\"><i class=\"fa fa-info\"></i></button></span></div></div><div class=form-group><label class=\"control-label col-sm-3\" for=\"\">Functional Condition:</label><div class=\"input-group custom-search-form\"><select class=form-control placeholder=\"Select Functional Condition\"><option value=\"\" selected disabled>Select Functional Condition</option><option>1: Process support is very limited in scope</option><option>2: Application provides support for process with heavy reliance on other applications or data</option><option>3: Application provides support for process with some reliance on other applications or data</option><option>4: Provides broad support for key business processes (e.g. provides functionality in one stop shop)</option></select><span class=input-group-btn><button class=\"btn btn-default\" type=button data-container=body data-toggle=popover data-placement=top title=\"Functional Condition\" data-content=\"1: Process support is very limited in scope\n" +
    "                                        2: Application provides support for process with heavy reliance on other applications or data\n" +
    "                                        3: Application provides support for process with some reliance on other applications or data\n" +
    "                                        4: Provides broad support for key business processes (e.g. provides functionality in one stop shop)\"><i class=\"fa fa-info\"></i></button></span></div></div><div class=form-group><label class=\"control-label col-sm-3\" for=\"\">Technical Condition:</label><div class=\"input-group custom-search-form\"><select class=form-control placeholder=\"Select Scalability\"><option value=\"\" selected disabled>Select Technical Condition</option><option>1: Poor (e.g. not scalable, not flexible, or unacceptable performance)</option><option>2: Limited (e.g. limited support for future requirements and growth, poor performance adequate for selected tasks)</option><option>3: Average (e.g. moderate support for future requirements and growth, average performance adequate for all tasks)</option><option>4: Good (e.g. will support future requirements and growth, performance is above average)</option></select><span class=input-group-btn><button class=\"btn btn-default\" type=button data-container=body data-toggle=popover data-placement=top title=\"Technical Condition\" data-content=\"1: Poor (e.g. not scalable, not flexible, or unacceptable performance)\n" +
    "                                              2: Limited (e.g. limited support for future requirements and growth, poor performance adequate for selected tasks)\n" +
    "                                              3: Average (e.g. moderate support for future requirements and growth, average performance adequate for all tasks)\n" +
    "                                              4: Good (e.g. will support future requirements and growth, performance is above average)\"><i class=\"fa fa-info\"></i></button></span></div></div></form></div></div>");
}]);

define("businessValue/businessValueTemplate", function(){});

angular.module('contact.template', ['/app/src/organization/application/contact/contactTemplate.html']);

angular.module("/app/src/organization/application/contact/contactTemplate.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("/app/src/organization/application/contact/contactTemplate.html",
    "<div class=row><div class=col-lg-6><form class=form-horizontal role=form><div class=form-group><label class=\"control-label col-sm-3\" for=businessOwner>Business Owner:</label><div class=\"input-group custom-search-form\"><input class=form-control id=businessOwner ng-model=businessOwner placeholder=\"\" uib-typeahead=\"state for state in getBusinessOwner($viewValue)\" typeahead-loading=loadingLocations typeahead-no-results=noResults> <span class=input-group-btn><button class=\"btn btn-default\" type=button data-container=body data-toggle=popover data-placement=top title=\"Business Owner\" data-content=\"Is the business sponsor of the application who has the financial ownership of the application and also signs off on the business requirements and attests to the proper functionality of the application system; input at least three letters of the individual’s first name and last name and use the “Look Up” button to obtain narrowed down names; using the “Look Up” button is mandatory to load the correct information\"><i class=\"fa fa-info\"></i></button></span></div><i ng-show=loadingLocations class=\"glyphicon glyphicon-refresh\"></i><div ng-show=noResults><i class=\"glyphicon glyphicon-remove\"></i> No Results Found</div></div><div class=form-group><label class=\"control-label col-sm-3\" for=itOwner>IT Owner:</label><div class=\"input-group custom-search-form\"><input class=form-control id=itOwner ng-model=itOwner placeholder=\"\" uib-typeahead=\"state for state in getITOwner($viewValue)\" typeahead-loading=loadingLocations typeahead-no-results=noResults> <span class=input-group-btn><button class=\"btn btn-default\" type=button data-container=body data-toggle=popover data-placement=top title=\"IT Owner\" data-content=\"Is the IT representative who is in charge of the development activities for the application; input at least three letters of the individual’s first name and last name and use the “Look Up” button to obtain narrowed down names; using the “Look Up” button is mandatory to load the correct information\"><i class=\"fa fa-info\"></i></button></span></div><i ng-show=loadingLocations class=\"glyphicon glyphicon-refresh\"></i><div ng-show=noResults><i class=\"glyphicon glyphicon-remove\"></i> No Results Found</div></div><div class=form-group><label class=\"control-label col-sm-3\" for=itSupportContact>IT Support Contact:</label><div class=\"input-group custom-search-form\"><input class=form-control id=itSupportContact ng-model=itSupportContact placeholder=\"\" uib-typeahead=\"state for state in getITSupportContact($viewValue)\" typeahead-loading=loadingLocations typeahead-no-results=noResults> <span class=input-group-btn><button class=\"btn btn-default\" type=button data-container=body data-toggle=popover data-placement=top title=\"IT Support Contact\" data-content=\"Is the IT representative who is in charge of the support activities for the application; input at least three letters of the individual’s first name and last name and use the “Look Up” button to obtain narrowed down names; using the “Look Up” button is mandatory to load the correct information\"><i class=\"fa fa-info\"></i></button></span></div><i ng-show=loadingLocations class=\"glyphicon glyphicon-refresh\"></i><div ng-show=noResults><i class=\"glyphicon glyphicon-remove\"></i> No Results Found</div></div><div class=form-group><label class=\"control-label col-sm-3\" for=appDevVendor>Application Development Vendor:</label><div class=\"input-group custom-search-form\"><input class=form-control id=appDevVendor> <span class=input-group-btn><button class=\"btn btn-default\" type=button data-container=body data-toggle=popover data-placement=top title=Description data-content=\"Vendor responsible for application development\"><i class=\"fa fa-info\"></i></button></span></div></div><div class=form-group><label class=\"control-label col-sm-3\" for=appSupport>Application Support Vendor:</label><div class=\"input-group custom-search-form\"><input class=form-control id=appSupport> <span class=input-group-btn><button class=\"btn btn-default\" type=button data-container=body data-toggle=popover data-placement=top title=Description data-content=\"Vendor responsible for application development\"><i class=\"fa fa-info\"></i></button></span></div></div><div class=form-group><label class=\"control-label col-sm-3\" for=appHostingVendor>Application Hosting Vendor:</label><div class=\"input-group custom-search-form\"><input class=form-control id=appHostingVendor> <span class=input-group-btn><button class=\"btn btn-default\" type=button data-container=body data-toggle=popover data-placement=top title=Description data-content=\"Vendor responsible for application support\"><i class=\"fa fa-info\"></i></button></span></div></div></form></div></div>");
}]);

define("contact/contactTemplate", function(){});

angular.module('cost.template', ['/app/src/organization/application/cost/costTemplate.html']);

angular.module("/app/src/organization/application/cost/costTemplate.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("/app/src/organization/application/cost/costTemplate.html",
    "<div class=row><div class=col-lg-6><form class=form-horizontal role=form><div class=form-group><label class=\"control-label col-sm-3\" for=\"\">Operational Sustainability:</label><div class=\"input-group custom-search-form\"><select class=form-control><option value=\"\" selected disabled>Select Operational Sustainability</option><option>1 - Operationally unstable</option><option>2 - Operational with single points of failure and limited fail-over</option><option>3 - On-site redundancy with fail over and recovery</option><option>4 - Complete and test fail-over and disaster recovery</option><option>5 - ASP with service level agreement (SLA)</option></select><span class=input-group-btn><button class=\"btn btn-default\" type=button data-container=body data-toggle=popover data-placement=top title=\"Operational Sustainability\" data-content=\"1: Operationally unstable\n" +
    "                                2: Operational with single points of failure and limited fail-over\n" +
    "                                3: On-site redundancy with failover and recovery\n" +
    "                                4: Complete and test fail-over and disaster recovery\n" +
    "                                5: ASP with service level agreement (SLA)\"><i class=\"fa fa-info\"></i></button></span></div></div><div class=form-group><label class=\"control-label col-sm-3\" for=\"\">Major Issues:</label><div class=\"input-group custom-search-form\"><input class=form-control> <span class=input-group-btn><button class=\"btn btn-default\" type=button data-container=body data-toggle=popover data-placement=top title=\"Major Issues\" data-content=\"What are the major issues with the application (current and/or anticipated), if any?\"><i class=\"fa fa-info\"></i></button></span></div></div><div class=form-group><label class=\"control-label col-sm-3\" for=\"\">Help Desk Incidents:</label><div class=\"input-group custom-search-form\"><input class=form-control> <span class=input-group-btn><button class=\"btn btn-default\" type=button data-container=body data-toggle=popover data-placement=top title=\"Help Desk Incidents\" data-content=\"Average number of incidents per year\"><i class=\"fa fa-info\"></i></button></span></div></div><div class=form-group><label class=\"control-label col-sm-3\" for=\"\">Opportunities:</label><div class=\"input-group custom-search-form\"><select class=form-control><option value=\"\" selected disabled>Select Opportunities</option><option>1 - Consolidation</option><option>2 - Retirement</option><option>3 - Upgrade</option><option>5 - Update</option></select><span class=input-group-btn><button class=\"btn btn-default\" type=button data-container=body data-toggle=popover data-placement=top title=Opportunities data-content=\"Are there known opportunities for \n" +
    "                            1. Consolidation \n" +
    "                            2. Retirement\n" +
    "                            3. Upgrade\n" +
    "                            4. Update\"><i class=\"fa fa-info\"></i></button></span></div></div><div class=form-group><label class=\"control-label col-sm-3\" for=\"\">Ease of Maintenance:</label><div class=\"input-group custom-search-form\"><select class=form-control><option value=\"\" selected disabled>Select Ease of Maintenance</option><option>1</option><option>2</option><option>3</option><option>5</option></select><span class=input-group-btn><button class=\"btn btn-default\" type=button data-container=body data-toggle=popover data-placement=top title=\"Ease of Maintenance\" data-content=\"Rate 1-4 (1-easiest to 4-very difficult) taking into account cost, complexity, disruption to business processes etc.\"><i class=\"fa fa-info\"></i></button></span></div></div><div class=form-group><label class=\"control-label col-sm-3\" for=\"\">Ease of Replacement:</label><div class=\"input-group custom-search-form\"><select class=form-control><option value=\"\" selected disabled>Select Ease of Replacement</option><option>1</option><option>2</option><option>3</option><option>5</option></select><span class=input-group-btn><button class=\"btn btn-default\" type=button data-container=body data-toggle=popover data-placement=top title=\"Ease of Replacement\" data-content=\"Rate 1-4 (1-easiest to 4-very difficult) taking into account cost, complexity, disruption to business processes etc.\"><i class=\"fa fa-info\"></i></button></span></div></div></form></div></div>");
}]);

define("cost/costTemplate", function(){});

angular.module('deployment.template', ['/app/src/organization/application/deployment/deploymentTemplate.html']);

angular.module("/app/src/organization/application/deployment/deploymentTemplate.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("/app/src/organization/application/deployment/deploymentTemplate.html",
    "<div class=row><div class=col-lg-6><form class=form-horizontal role=form><div class=form-group><label class=\"control-label col-sm-3\" for=\"\">Original Development:</label><div class=\"input-group custom-search-form\"><input class=form-control> <span class=input-group-btn><button class=\"btn btn-default\" type=button data-container=body data-toggle=popover data-placement=top title=\"Original Development\" data-content=\"This field identifies if this application was developed internally or externally by an IT vendor. Choose Externally for a packaged product\"><i class=\"fa fa-info\"></i></button></span></div></div><div class=form-group><label class=\"control-label col-sm-3\" for=\"\">Original Deployment Date:</label><div class=\"input-group custom-search-form\"><input class=form-control> <span class=input-group-btn><button class=\"btn btn-default\" type=button data-container=body data-toggle=popover data-placement=top title=\"Original Deployment Date\" data-content=\"Date the application is implemented in production\"><i class=\"fa fa-info\"></i></button></span></div></div><div class=form-group><label class=\"control-label col-sm-3\" for=\"\">Last Deployment Date:</label><div class=\"input-group custom-search-form\"><input class=form-control> <span class=input-group-btn><button class=\"btn btn-default\" type=button data-container=body data-toggle=popover data-placement=top title=\"Last Deployment Date\" data-content=\"Date the application was last updated in production\"><i class=\"fa fa-info\"></i></button></span></div></div><div class=form-group><label class=\"control-label col-sm-3\" for=\"\">Managed Type:</label><div class=\"input-group custom-search-form\"><input class=form-control> <span class=input-group-btn><button class=\"btn btn-default\" type=button data-container=body data-toggle=popover data-placement=top title=\"Managed Type\" data-content=\"This field identifies the deployment location of the application\"><i class=\"fa fa-info\"></i></button></span></div></div><div class=form-group><label class=\"control-label col-sm-3\" for=\"\"># of External Interfaces IN:</label><div class=\"input-group custom-search-form\"><input class=form-control> <span class=input-group-btn><button class=\"btn btn-default\" type=button data-container=body data-toggle=popover data-placement=top title=\"# of External Interfaces IN\" data-content=\"This field identifies the number of applications that feed data “IN” to this application\"><i class=\"fa fa-info\"></i></button></span></div></div><div class=form-group><label class=\"control-label col-sm-3\" for=\"\"># of External Interfaces OUT:</label><div class=\"input-group custom-search-form\"><input class=form-control> <span class=input-group-btn><button class=\"btn btn-default\" type=button data-container=body data-toggle=popover data-placement=top title=\"# of External Interfaces OUT\" data-content=\"This field identifi es the number of applications that feed data “OUT” of this application\"><i class=\"fa fa-info\"></i></button></span></div></div><div class=form-group><label class=\"control-label col-sm-3\" for=\"\">Software Platform Type:</label><div class=\"input-group custom-search-form\"><input class=form-control> <span class=input-group-btn><button class=\"btn btn-default\" type=button data-container=body data-toggle=popover data-placement=top title=\"Software Platform Type\" data-content=\"This field identifies if this application platform is an Opensource software or a Commercial Off the shelf (COTS) product\"><i class=\"fa fa-info\"></i></button></span></div></div><div class=form-group><label class=\"control-label col-sm-3\" for=\"\">Programming Language(s):</label><div class=\"input-group custom-search-form\"><input class=form-control> <span class=input-group-btn><button class=\"btn btn-default\" type=button data-container=body data-toggle=popover data-placement=top title=\"Programming Language(s)\" data-content=\"This field is meant to capture the programming language(s) using which this application is written; you may choose multiple programming languages\"><i class=\"fa fa-info\"></i></button></span></div></div><div class=form-group><label class=\"control-label col-sm-3\" for=\"\">Database Platform:</label><div class=\"input-group custom-search-form\"><input class=form-control> <span class=input-group-btn><button class=\"btn btn-default\" type=button data-container=body data-toggle=popover data-placement=top title=\"Hardware Platform\" data-content=\"This field is meant to capture the database platform this application uses\"><i class=\"fa fa-info\"></i></button></span></div></div><div class=form-group><label class=\"control-label col-sm-3\" for=\"\">Hardware Platform:</label><div class=\"input-group custom-search-form\"><input class=form-control> <span class=input-group-btn><button class=\"btn btn-default\" type=button data-container=body data-toggle=popover data-placement=top title=\"Hardware Platform\" data-content=\"This field is meant to capture the hardware platform this application uses\"><i class=\"fa fa-info\"></i></button></span></div></div><div class=form-group><label class=\"control-label col-sm-3\" for=\"\">Asset ID:</label><div class=\"input-group custom-search-form\"><input class=form-control> <span class=input-group-btn><button class=\"btn btn-default\" type=button data-container=body data-toggle=popover data-placement=top title=\"Asset ID\" data-content=\"The Asset ID number in the infrastructure database (CMDB) that uniquely identifies this application; (Asset has all the infrastructure assets in one database; this data also has linkages between different infrastructure components such as servers on which the application resides, related databases and their servers, related software, etc.); please obtain the Infrastructure ID for your application from the application infrastructure team;\"><i class=\"fa fa-info\"></i></button></span></div></div><div class=form-group><label class=\"control-label col-sm-3\" for=\"\">Recovery Point Objective (RPO):</label><div class=\"input-group custom-search-form\"><input class=form-control> <span class=input-group-btn><button class=\"btn btn-default\" type=button data-container=body data-toggle=popover data-placement=top title=\"Recovery Point Objective (RPO)\" data-content=\"This field is meant to capture the RPO of the application in case of a Disaster recovery event. Please provide maximum time in minutes.\"><i class=\"fa fa-info\"></i></button></span></div></div><div class=form-group><label class=\"control-label col-sm-3\" for=\"\">Recovery Time Objective (RTO):</label><div class=\"input-group custom-search-form\"><input class=form-control> <span class=input-group-btn><button class=\"btn btn-default\" type=button data-container=body data-toggle=popover data-placement=top title=\"Recovery Time Objective (RTO)\" data-content=\"This field is meant to capture the RTO of the application in case of a Disaster recovery event. Please provide maximum time in minutes.\"><i class=\"fa fa-info\"></i></button></span></div></div></form></div></div>");
}]);

define("deployment/deploymentTemplate", function(){});

angular.module('general.template', ['/app/src/organization/application/general/generalTemplate.html']);

angular.module("/app/src/organization/application/general/generalTemplate.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("/app/src/organization/application/general/generalTemplate.html",
    "<div class=row><div class=col-lg-6><form class=form-horizontal role=form><div class=form-group><label class=\"control-label col-sm-3\" for=name>Application Name:</label><div class=\"input-group custom-search-form\"><input class=form-control id=name> <span class=input-group-btn><button class=\"btn btn-default\" type=button data-container=body data-toggle=popover data-placement=top title=\"Application Name\" data-content=\"The full name of the application; some of the special characters are not allowed in this field (Note: You cannot add two applications with the same name; please check to see if an application with the same name exists before you add a new application)\"><i class=\"fa fa-info\"></i></button></span></div></div><div class=form-group><label class=\"control-label col-sm-3\" for=alias>Alias:</label><div class=\"input-group custom-search-form\"><input class=form-control id=alias> <span class=input-group-btn><button class=\"btn btn-default\" type=button data-container=body data-toggle=popover data-placement=top title=Alias data-content=\"The short name by which the application is commonly known\"><i class=\"fa fa-info\"></i></button></span></div></div><div class=form-group><label class=\"control-label col-sm-3\" for=description>Description:</label><div class=\"input-group custom-search-form\"><input class=form-control id=description> <span class=input-group-btn><button class=\"btn btn-default\" type=button data-container=body data-toggle=popover data-placement=top title=Description data-content=\"High-level description of the application and the functionality\"><i class=\"fa fa-info\"></i></button></span></div></div><div class=form-group><label class=\"control-label col-sm-3\" for=status>Status:</label><div class=\"input-group custom-search-form\"><input class=form-control id=status> <span class=input-group-btn><button class=\"btn btn-default\" type=button data-container=body data-toggle=popover data-placement=top title=Status data-content=\"The status of the application; emerging, standard, contained, sunset, retired\"><i class=\"fa fa-info\"></i></button></span></div></div><div class=form-group><label class=\"control-label col-sm-3\" for=currentVersion>Current Version:</label><div class=\"input-group custom-search-form\"><input class=form-control id=currentVersion> <span class=input-group-btn><button class=\"btn btn-default\" type=button data-container=body data-toggle=popover data-placement=top title=\"Current Version\" data-content=\"Current version of the application deployed\"><i class=\"fa fa-info\"></i></button></span></div></div><div class=form-group><label class=\"control-label col-sm-3\" for=accessLocation>Access Location:</label><div class=\"input-group custom-search-form\"><input class=form-control id=accessLocation> <span class=input-group-btn><button class=\"btn btn-default\" type=button data-container=body data-toggle=popover data-placement=top title=\"Access Location\" data-content=\"Please provide the information about accessing this application. In most cases it will be a URL to the application\"><i class=\"fa fa-info\"></i></button></span></div></div><div class=form-group><label class=\"control-label col-sm-3\" for=notes>Notes:</label><div class=\"input-group custom-search-form\"><input class=form-control id=notes> <span class=input-group-btn><button class=\"btn btn-default\" type=button data-container=body data-toggle=popover title=Notes data-placement=top data-content=\"Free-form text field to enter any additional information regarding the application\"><i class=\"fa fa-info\"></i></button></span></div></div></form></div></div>");
}]);

define("general/generalTemplate", function(){});

angular.module('health.template', ['/app/src/organization/application/health/healthTemplate.html']);

angular.module("/app/src/organization/application/health/healthTemplate.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("/app/src/organization/application/health/healthTemplate.html",
    "<div class=row><div class=col-lg-6><form class=form-horizontal role=form><div class=form-group><label class=\"control-label col-sm-3\" for=\"\">Operational Sustainability:</label><div class=\"input-group custom-search-form\"><select class=form-control placeholder=\"Select Operational Sustainability\"><option value=\"\" selected disabled>Select Technical Condition</option><option>1 - Operationally unstable</option><option>2 - Operational with single points of failure and limited fail-over</option><option>3 - On-site redundancy with failover and recovery</option><option>4 - Complete and test fail-over and disaster recovery</option><option>5 - ASP with service level agreement (SLA)</option></select><span class=input-group-btn><button class=\"btn btn-default\" type=button data-container=body data-toggle=popover data-placement=top title=\"Operational Sustainability\" data-content=\"1: Operationally unstable\n" +
    "                                              2: Operational with single points of failure and limited fail-over\n" +
    "                                              3: On-site redundancy with failover and recovery\n" +
    "                                              4: Complete and test fail-over and disaster recovery\n" +
    "                                              5: ASP with service level agreement (SLA)\"><i class=\"fa fa-info\"></i></button></span></div></div><div class=form-group><label class=\"control-label col-sm-3\" for=\"\">Major Issues:</label><div class=\"input-group custom-search-form\"><input class=form-control> <span class=input-group-btn><button class=\"btn btn-default\" type=button data-container=body data-toggle=popover data-placement=top title=\"Major Issues\" data-content=\"What are the major issues with the application (current and/or anticipated), if any?\"><i class=\"fa fa-info\"></i></button></span></div></div><div class=form-group><label class=\"control-label col-sm-3\" for=\"\">Help Desk Incidents:</label><div class=\"input-group custom-search-form\"><input class=form-control> <span class=input-group-btn><button class=\"btn btn-default\" type=button data-container=body data-toggle=popover data-placement=top title=\"Help Desk Incidents\" data-content=\"Average number of incidents per year\"><i class=\"fa fa-info\"></i></button></span></div></div><div class=form-group><label class=\"control-label col-sm-3\" for=\"\">Opportunities:</label><div class=\"input-group custom-search-form\"><select class=form-control placeholder=\"Select Opportunities\"><option value=\"\" selected disabled>Select Opportunities</option><option>1 - Consolidation</option><option>2 - Retirement</option><option>3 - Upgrade</option><option>4 - Update</option></select><span class=input-group-btn><button class=\"btn btn-default\" type=button data-container=body data-toggle=popover data-placement=top title=Opportunities data-content=\"Are there known opportunities for \n" +
    "                                              1. Consolidation \n" +
    "                                              2. Retirement\n" +
    "                                              3. Upgrade\n" +
    "                                              4. Update\"><i class=\"fa fa-info\"></i></button></span></div></div><div class=form-group><label class=\"control-label col-sm-3\" for=\"\">Ease of Maintenance:</label><div class=\"input-group custom-search-form\"><select class=form-control placeholder=\"Select Ease of Maintenance\"><option value=\"\" selected disabled>Select Ease of Maintenance</option><option>1</option><option>2</option><option>3</option><option>4</option></select><span class=input-group-btn><button class=\"btn btn-default\" type=button data-container=body data-toggle=popover data-placement=top title=\"Ease of Maintenanc\" data-content=\"Rate 1-4 (1-easiest to 4-very difficult) taking into account cost, complexity, disruption to business processes etc.\"><i class=\"fa fa-info\"></i></button></span></div></div><div class=form-group><label class=\"control-label col-sm-3\" for=\"\">Ease of Replacement:</label><div class=\"input-group custom-search-form\"><select class=form-control placeholder=\"Select Ease of Replacement\"><option value=\"\" selected disabled>Select Ease of Replacement</option><option>1</option><option>2</option><option>3</option><option>4</option></select><span class=input-group-btn><button class=\"btn btn-default\" type=button data-container=body data-toggle=popover data-placement=top title=Opportunities data-content=\"Rate 1-4 (1-easiest to 4-very difficult) taking into account cost, complexity, disruption to business processes etc.\"><i class=\"fa fa-info\"></i></button></span></div></div></form></div></div>");
}]);

define("health/healthTemplate", function(){});

angular.module('security.template', ['/app/src/organization/application/security/securityTemplate.html']);

angular.module("/app/src/organization/application/security/securityTemplate.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("/app/src/organization/application/security/securityTemplate.html",
    "<div class=row><div class=col-lg-6><form class=form-horizontal role=form><div class=form-group><label class=\"control-label col-sm-3\" for=\"\">Data Sensitivity:</label><div class=\"input-group custom-search-form\"><input class=form-control> <span class=input-group-btn><button class=\"btn btn-default\" type=button data-container=body data-toggle=popover data-placement=top title=\"Data Sensitivity\" data-content=\"The foundation for all information protection efforts is data classification, sensitivity, and handling. Data must be transmitted, stored, destroyed, and protected based on its classifi cation. The company has three classifications: public, proprietary, and private. The owner of the information must establish and communicate the level of sensitivity:    \n" +
    "                                1.  No or low sensitivity: Generally available to the public   \n" +
    "                                2.  Medium sensitivity: Internally communicated information available to most or all employees   \n" +
    "                                3.  High sensitivity: Business-related data that should not be available to competitors or outsiders   \n" +
    "                                4.  Very high sensitivity: Proprietary information that could cause substantial impact if inappropriately disclosed; private information that should not be disclosed   \n" +
    "                                5.  Top secret information: Defi ned by executive management\"><i class=\"fa fa-info\"></i></button></span></div></div><div class=form-group><label class=\"control-label col-sm-3\" for=\"\">Sarbanes-Oxley:</label><div class=\"input-group custom-search-form\"><input class=form-control> <span class=input-group-btn><button class=\"btn btn-default\" type=button data-container=body data-toggle=popover data-placement=top title=Sarbanes-Oxley data-content=\"If the “Sarbanes-Oxley” regulation (also referred to as SOX) is applicable for this application and the system is compliant, choose “Yes”; if the application is in scope of the regulation but is not compliant, then choose “No”; if the regulation does not apply to the application, choose “N/A” for Not Applicable\"><i class=\"fa fa-info\"></i></button></span></div></div><div class=form-group><label class=\"control-label col-sm-3\" for=\"\">Externally Accessed?:</label><div class=\"input-group custom-search-form\"><input class=form-control> <span class=input-group-btn><button class=\"btn btn-default\" type=button data-container=body data-toggle=popover data-placement=top title=\"Externally Accessed?\" data-content=\"Is the field that identifies if the application is accessible to external (including third-party) users; this is a field that helps the IT Security group weigh the security risk to the system\"><i class=\"fa fa-info\"></i></button></span></div></div><div class=form-group><label class=\"control-label col-sm-3\" for=\"\">Externally Managed or Posted?:</label><div class=\"input-group custom-search-form\"><input class=form-control> <span class=input-group-btn><button class=\"btn btn-default\" type=button data-container=body data-toggle=popover data-placement=top title=\"Externally Managed or Posted?\" data-content=\"Are the fields that identify if the application is externally managed or hosted; for example, if a third party is hosting the application—choose “Yes”; this is a field that helps the IT Security group weigh the security risk to the system\"><i class=\"fa fa-info\"></i></button></span></div></div></form></div></div>");
}]);

define("security/securityTemplate", function(){});

angular.module('usage.template', []);


define("usage/usageTemplate", function(){});

define('application/applicationController',[],function() {
    'use strict';

    var applicationController = function ($scope) {

    };

    applicationController.$inject = ['$scope'];

    return applicationController;
});
;
define("application/applicationService", function(){});

define('application/applicationDirective',[],function () {
    'use strict';
    var applicationDirective = function () {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: '/app/src/organization/application/applicationTemplate.html',
            controller: 'applicationController',
            link: function (scope, element, attrs) {
            }
        };
    };
    return applicationDirective;
});
define('businessValue/businessValueController',[],function () {
    'use strict';

    var businessValueController = function ($scope) {

    };

    businessValueController.$inject = ['$scope'];

    return businessValueController;
});
define('businessValue/businessValueService',[],function () {
    'user strict';
    var businessValueService = function () {
       
    };

    businessValueService.$inject = [];
    return businessValueService;
});
define('businessValue/businessValueDirective',[],function () {
    'use strict';
    var businessDirective = function () {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: '/app/src/organization/application/businessValue/businessValueTemplate.html',
            controller: 'businessValueController',
            link: function (scope, element, attrs) {
            }
        };
    };
    return businessDirective;
});
define('contact/contactController',[],function() {
    'use strict';

    var contactController = function ($scope, contactService) {

        $scope.promise = null;

        $scope.getBusinessOwner = function(val) {
            $scope.promise = contactService.getBusinessOwners(val);

            return $scope.promise.then(function(data) {
                return _.filter(data, function (filter) {
                    return filter.toLowerCase().indexOf(val.toLowerCase()) > -1;
                });
            }, function(error) {
                //--+--reject error
            });
        };

        $scope.getITOwner = function (val) {
            $scope.promise = contactService.getBusinessOwners(val);

            return $scope.promise.then(function (data) {
                return _.filter(data, function (filter) {
                    return filter.toLowerCase().indexOf(val.toLowerCase()) > -1;
                });
            }, function (error) {
                //--+--reject error
            });
        };

        $scope.getITSupportContact = function (val) {
            $scope.promise = contactService.getBusinessOwners(val);

            return $scope.promise.then(function (data) {
                return _.filter(data, function (filter) {
                    return filter.toLowerCase().indexOf(val.toLowerCase()) > -1;
                });
            }, function (error) {
                //--+--reject error
            });
        };

       
        var init = function () {
            
        };

        init();
    };

    contactController.$inject = ['$scope', 'contactService'];

    return contactController;
});
define('contact/contactService',[],function() {
    'user strict';
    var contactService = function($q, organizationApiProxy) {

        var self = this;

        self.getBusinessOwners = function(val) {
            var deferred = $q.defer();

            organizationApiProxy.getBusinessOwners(val)
                .then(function(data) {
                    if (!_.isEmpty(data)) {
                        deferred.resolve(data);
                    }
                }, function(error) {
                    deferred.reject(error);
                });
            return deferred.promise;
        };
    };

    contactService.$inject = ['$q', 'organizationApiProxy'];
    return contactService;
});
define('contact/contactDirective',[],function () {
    'use strict';
    var contactDirective = function () {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: '/app/src/organization/application/contact/contactTemplate.html',
            controller: 'contactController',
            link: function (scope, element, attrs) {
            }
        };
    };
    return contactDirective;
});
define('cost/costController',[],function () {
    'use strict';

    var costController = function ($scope) {

    };

    costController.$inject = ['$scope'];

    return costController;
});
define('cost/costDirective',[],function () {
    'use strict';
    var costDirective = function () {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: '/app/src/organization/application/cost/costTemplate.html',
            controller: 'businessValueController',
            link: function (scope, element, attrs) {
            }
        };
    };
    return costDirective;
});
define('deployment/deploymentController',[],function () {
    'use strict';

    var deploymentController = function ($scope) {

    };

    deploymentController.$inject = ['$scope'];

    return deploymentController;
});
define('deployment/deploymentService',[],function () {
    'user strict';
    var deploymentService = function () {
       
    };

    deploymentService.$inject = [];
    return deploymentService;
});
define('deployment/deploymentDirective',[],function () {
    'use strict';
    var deploymentDirective = function () {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: '/app/src/organization/application/deployment/deploymentTemplate.html',
            controller: 'businessValueController',
            link: function (scope, element, attrs) {
            }
        };
    };
    return deploymentDirective;
});
define('general/generalController',[],function () {
    'use strict';

    var generalController = function ($scope) {

    };

    generalController.$inject = ['$scope'];

    return generalController;
});
define('general/generalService',[],function () {
    'user strict';
    var generalService = function () {
       
    };

    generalService.$inject = [];
    return generalService;
});
define('general/generalDirective',[],function () {
    'use strict';
    var generalDirective = function () {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: '/app/src/organization/application/general/generalTemplate.html',
            controller: 'businessValueController',
            link: function (scope, element, attrs) {
            }
        };
    };
    return generalDirective;
});
define('health/healthController',[],function () {
    'use strict';

    var healthController = function ($scope) {

    };

    healthController.$inject = ['$scope'];

    return healthController;
});
define('health/healthService',[],function () {
    'user strict';
    var healthService = function () {
       
    };

    healthService.$inject = [];
    return healthService;
});
define('health/healthDirective',[],function () {
    'use strict';
    var healthsDirective = function () {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: '/app/src/organization/application/health/healthTemplate.html',
            controller: 'businessValueController',
            link: function (scope, element, attrs) {
            }
        };
    };
    return healthsDirective;
});
define('security/securityController',[],function () {
    'use strict';

    var securityController = function ($scope) {

    };

    securityController.$inject = ['$scope'];

    return securityController;
});
define('security/securityService',[],function () {
    'user strict';
    var securityService = function () {
       
    };

    securityService.$inject = [];
    return securityService;
});
define('security/securityDirective',[],function () {
    'use strict';
    var securityDirective = function () {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: '/app/src/organization/application/security/securityTemplate.html',
            controller: 'businessValueController',
            link: function (scope, element, attrs) {
            }
        };
    };
    return securityDirective;
});
define('usage/usageController',[],function () {
    'use strict';

    var usageController = function ($scope) {

    };

    usageController.$inject = ['$scope'];

    return usageController;
});
define('usage/usageService',[],function () {
    'user strict';
    var usageService = function () {
       
    };

    usageService.$inject = [];
    return usageService;
});
define('usage/usageDirective',[],function () {
    'use strict';
    var usageDirective = function () {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: '/app/src/organization/application/usage/usageTemplate.html',
            controller: 'businessValueController',
            link: function (scope, element, attrs) {
            }
        };
    };
    return usageDirective;
});
define('application/applicationModule',['require','application/applicationTemplate','businessValue/businessValueTemplate','contact/contactTemplate','cost/costTemplate','deployment/deploymentTemplate','general/generalTemplate','health/healthTemplate','security/securityTemplate','usage/usageTemplate','angular','application/applicationController','application/applicationService','application/applicationDirective','businessValue/businessValueController','businessValue/businessValueService','businessValue/businessValueDirective','contact/contactController','contact/contactService','contact/contactDirective','cost/costController','cost/costController','cost/costDirective','deployment/deploymentController','deployment/deploymentService','deployment/deploymentDirective','general/generalController','general/generalService','general/generalDirective','health/healthController','health/healthService','health/healthDirective','security/securityController','security/securityService','security/securityDirective','usage/usageController','usage/usageService','usage/usageDirective'],function(require) {
    'use strict';

    require('application/applicationTemplate');
    require('businessValue/businessValueTemplate');
    require('contact/contactTemplate');
    require('cost/costTemplate');
    require('deployment/deploymentTemplate');
    require('general/generalTemplate');
    require('health/healthTemplate');
    require('security/securityTemplate');
    require('usage/usageTemplate');

    var angular = require('angular');

    var applicationController = require('application/applicationController');
    var applicationService = require('application/applicationService');
    var applicationDirective = require('application/applicationDirective');

    var businessValueController = require('businessValue/businessValueController');
    var businessValueService = require('businessValue/businessValueService');
    var businessValueDirective = require('businessValue/businessValueDirective');

    var contactController = require('contact/contactController');
    var contactService = require('contact/contactService');
    var contactDirective = require('contact/contactDirective');

    var costController = require('cost/costController');
    var costService = require('cost/costController');
    var costDirective = require('cost/costDirective');

    var deploymentController = require('deployment/deploymentController');
    var deploymentService = require('deployment/deploymentService');
    var deploymentDirective = require('deployment/deploymentDirective');

    var generalController = require('general/generalController');
    var generalService = require('general/generalService');
    var generalDirective = require('general/generalDirective');

    var healthController = require('health/healthController');
    var healthService = require('health/healthService');
    var healthDirective = require('health/healthDirective');

    var securityController = require('security/securityController');
    var securityService = require('security/securityService');
    var securityDirective = require('security/securityDirective');

    var usageController = require('usage/usageController');
    var usageService = require('usage/usageService');
    var usageDirective = require('usage/usageDirective');

    var applicationModule = angular.module('my.applicationModule',
    [
        'application.template',
        'businessValue.template',
        'contact.template',
        'cost.template',
        'deployment.template',
        'general.template',
        'health.template',
        'security.template',
        'usage.template'
    ]);

    applicationModule
        .controller('applicationController', applicationController)
        .service('applicationService', applicationService)
        .directive('applicationDirective', applicationDirective)
        .controller('businessValueController',businessValueController)
        .service('businessValueService',businessValueService)
        .directive('businessValueDirective',businessValueDirective)
        .controller('contactController', contactController)
        .service('contactService', contactService)
        .directive('contactDirective', contactDirective)
        .controller('costController',costController)
        .service('costService',costService)
        .directive('costDirective',costDirective)
        .controller('deploymentController',deploymentController)
        .service('deploymentService',deploymentService)
        .directive('deploymentDirective',deploymentDirective)
        .controller('generalController',generalController)
        .service('generalService',generalService)
        .directive('generalDirective',generalDirective)
        .controller('healthController', healthController)
        .service('healthService',healthService)
        .directive('healthDirective',healthDirective)
        .controller('securityController',securityController)
        .service('securityService',securityService)
        .directive('securityDirective',securityDirective)
        .controller('usageController',usageController)
        .service('usageService',usageService)
        .directive('usageDirective',usageDirective);

    return applicationModule;

});
