angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function($scope, contatosAPI, operadorasAPI, serialGenerator){
	$scope.app = "Lista Telefonica";
	$scope.contatos = [];
	$scope.operadoras = [];

	var carregarContatos = function(){
		contatosAPI.getContatos().success(function(data){
			$scope.contatos = data;
		}).error(function(data,status){
			$scope.message = "Aconteceu um problema: " + data;
		});
	};

	var carregarOperadoras = function(){
		operadorasAPI.getOperadoras().success(function(data){
			$scope.operadoras = data;
		});
	};

	$scope.selecionado = "selecionado";

	$scope.adicionarContato = function(contato){
		//$scope.contatos.push(angular.copy(contato));
		contato.serial = serialGenerator.generate();
		contato.data = new Date();
		contatosAPI.saveContato(contato).success(function(data){
			$scope.contatoForm.$setPristine();
			delete $scope.contato;
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