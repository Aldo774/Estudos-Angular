angular.module("listaTelefonica").controller("novoContatoCtrl", function($scope, contatosAPI, operadoras, serialGenerator, $location){

	$scope.operadoras = operadoras.data;

	$scope.adicionarContato = function(contato){
		//$scope.contatos.push(angular.copy(contato));
		contato.serial = serialGenerator.generate();
		contatosAPI.saveContato(contato).success(function(data){
			$scope.contatoForm.$setPristine();
			delete $scope.contato;
			$location.path("/contatos")
		});
	};
});