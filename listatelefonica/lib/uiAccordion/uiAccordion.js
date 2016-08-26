angular.module("uiAccordion", []);

angular.module("uiAccordion").run(function($templateCache){
	$templateCache.put("view/accordion.html", '<div class="accordion-title" ng-click="open()">{{title}}</div><div class="accordion-content" ng-transclude ng-show="isOpened"></div>')
});

angular.module("uiAccordion").directive("uiAccordions", function(){
	return {
		controller: function($scope, $element, $attrs){
			var accordions = [];
			this.registerAccordions = function(accordion){
				accordions.push(accordion);
			};
			this.closeAll = function(){
				accordions.forEach(function(accordion){
					accordion.isOpened = false;
				});
			};
		}
	};
});

angular.module("uiAccordion").directive("uiAccordion", function(){
	return{
		templateUrl: "view/accordion.html",
		transclude: true,
		scope: {
			title: "@title"
		},
		require: "^uiAccordions",
		link: function(scope, element, attrs, ctrl){
			ctrl.registerAccordions(scope);
			scope.open = function(){
				ctrl.closeAll();
				scope.isOpened=true;
			};
		}
	}
});