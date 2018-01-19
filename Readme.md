AngularJS extends HTML attributes with Directives, and binds data to HTML with Expressions.

The ng-app directive defines the root element of an AngularJS application.

The ng-app directive will auto-bootstrap (automatically initialize) the application when a web page is loaded.


The ng-model Directive
With the ng-model directive you can bind the value of an input field to a variable created in AngularJS.
<hr><br><br><br>
AngularJS Scope
The scope is the binding part between the HTML (view) and the JavaScript (controller).

The scope is an object with the available properties and methods.

The scope is available for both the view and the controller.

<div ng-app="myApp" ng-controller="myCtrl">

<h1>{{carname}}</h1>

</div>

<script>
var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope) {
    $scope.carname = "Volvo";
});
</script>
<hr>
Understanding the Scope
If we consider an AngularJS application to consist of:

View, which is the HTML.
Model, which is the data available for the current view.
Controller, which is the JavaScript function that makes/changes/removes/controls the data.
Then the scope is the Model.

The scope is a JavaScript object with properties and methods, which are available for both the view and the controller.




currency Format a number to a currency format.
date Format a date to a specified format.
filter Select a subset of items from an array.
json Format an object to a JSON string.
limitTo Limits an array/string, into a specified number of elements/characters.
lowercase Format a string to lower case.
number Format a number to a string.
orderBy Orders an array by an expression.
uppercase Format a string to upper case.


<hr><br>
AngularJS Filters

Filters can be added in AngularJS to format data.

<div ng-app="myApp" ng-controller="personCtrl">

<p>The name is {{ lastName | uppercase }}</p>

</div>
