angular.module("listaTelefonica").factory("contatosAPI", function($http, config){
	
	/*A utilização de arquivos json, se da apenas por improviso,
	o ideal seria conecta-los a uma rotina dinâmica(url) do 
	server-side(back-end)*/	
	var _getContatos = function(){
		return $http.get(config.baseUrl + "/contatos.json");
	};

	var _getContato = function(id){
		return $http.get(config.baseUrl + "/contatos.json" + id);
	};

	var _saveContato = function(contato){
		return $http.post(config.baseUrl + "/contatos.json", contato);
	};
	return{
		getContatos: _getContatos,
		getContato: _getContato,
		saveContato: _saveContato
	};
});