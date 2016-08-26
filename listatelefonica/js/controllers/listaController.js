angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function($scope, contatos, operadoras, serialGenerator){
	$scope.app = "Lista Telefonica";
	$scope.contatos = contatos.data;
	$scope.operadoras = operadoras.data;
	$scope.selecionado = "selecionado";

	var generateSerial = function(contatos) {
		contatos.forEach(function(item){
			item.serial = serialGenerator.generate();
		});
	};

	$scope.adicionarContato = function(contato){
		//$scope.contatos.push(angular.copy(contato));
		contato.serial = serialGenerator.generate();
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

});