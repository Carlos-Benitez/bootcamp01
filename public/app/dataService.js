(function(){
	'use strict';
	
	angular
		.module('gdgAdmin')
		.service('dataService', dataService)

	dataService.$inject = ['$http', 'config']
	
	function dataService($http, config) {
		this.getEntityAll = getEntityAll
		this.getEntityById = getEntityById
		this.saveEntity = saveEntity
		this.updateEntity = updateEntity
		this.deleteEntity = deleteEntity

		function getEntityAll(table) {
			var endpoint = '';
			switch(table) {
				case 'eventos':
					endpoint = config.serviceUrl + table
					break;
				case 'patrocinadores':
					endpoint = config.serviceUrl + table
					break;
				case 'premios':
					endpoint = config.serviceUrl + table
					break;

				case 'usuarios':
					endpoint = config.serviceUrl + table
					break;

				default: ''
			}

			return $http.get(endpoint)
				.then(function(result) {
					return result.data
				})
				.catch(function (error) {
					console.log(error)
				});
		}

		function getEntityById(table, id) {
			var endpoint = '';
			switch(table) {
				case 'eventos':
					endpoint = config.serviceUrl + table;
					break;
				case 'patrocinadores':
					endpoint = config.serviceUrl + table;
					break;
				case 'premios':
					endpoint = config.serviceUrl + table;
					break;
				case 'usuarios':
					endpoint = config.serviceUrl + table
					break;

				default: ''
			}

			return $http.get(endpoint + '/' + id)
				.then(function(result) {
					return result.data
				})
				.catch(function (error) {
					console.log(error)
				});
		}

		function saveEntity(table, data) {
			return $http.post(config.serviceUrl + table, data)
		}

		function updateEntity(table, data) {
			return $http.put(config.serviceUrl + table + '/' + data.id, data)

		}

		function deleteEntity(table, id) {
			return $http.delete(config.serviceUrl + table + '/' + id)
		}
	}
})()