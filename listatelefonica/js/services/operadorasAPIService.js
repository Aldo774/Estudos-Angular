angular.module("listaTelefonica").service("operadorasAPI", function($http, config){
	
	/*A utilização de arquivos json, se da apenas por improviso,
	o ideal seria conecta-los a uma rotina dinâmica(url) do 
	server-side(back-end)*/	

	this.getOperadoras = function() {
		return $http.get(config.baseUrl + "/operadoras.json")
	};
});