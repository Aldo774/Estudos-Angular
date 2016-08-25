angular.module("listaTelefonica").directive("alertaDeErro", function(){
	return{
		templateUrl: "view/alert.html",
		replace: true,
		restrict: "E",
		scope: {
			topic: "@title"
		},
		transclude: true
	};
});