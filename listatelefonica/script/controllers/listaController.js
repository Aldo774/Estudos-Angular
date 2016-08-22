angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function($scope, $http){
	$scope.app = "Lista Telefonica";
	$scope.contatos = [];
	$scope.operadoras = [];

	var carregarContatos = function(){
		$http.get("json/contatos.json").success(function(data){
			$scope.contatos = data;
		}).error(function(data,status){
			$scope.message = "Aconteceu um problema: " + data;
		});
	};

	var carregarOperadoras = function(){
		$http.get("json/operadoras.json").success(function(data){
			$scope.operadoras = data;
		});
	};

	$scope.selecionado = "selecionado";

	$scope.adicionarContato = function(contato){
		//$scope.contatos.push(angular.copy(contato));
		$http.post("json/contatos.json", contato).success(function(data){
			$scope.contatoForm.$setPristine();
			delete $scope.contato;
			$scope.contatoForm.$setPristine();
			console.log(data)
			$scope.contatos.push(angular.copy(contato));
		});
	};

	$scope.apagarContato = function(contatos){
		$scope.contatos = contatos.filter(function(contato){
			if(!contato.selecionado) return contato;
		});
	};

	$scope.isContatoSelecionado = function(contatos){
		return contatos.some(function(contato){
			return contato.selecionado;
		});
	};

	$scope.ordenarPor = function(campo){
		$scope.criterioDeOrdenacao = campo;
		$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
	};

	carregarContatos();	
	carregarOperadoras();

});