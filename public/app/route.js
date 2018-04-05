(function(){
    'use strict';
    
	angular
		.module('gdgAdmin')
		.config(routeConfig)

	routeConfig.$inject = ['$stateProvider', '$urlRouterProvider']
	
	function routeConfig($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/home')

        $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'app/home/home.html',
            controller: 'homeController',
            controllerAs: 'vm',
            ncyBreadcrumb: {
                label: 'Homepage'
            }
		})
		// Eventos state
        .state('eventos', {
            url: '/eventos',
            templateUrl: 'app/eventos/eventos.html',
            controller: 'eventosController',
            controllerAs: 'vm',
            ncyBreadcrumb: {
                label: 'Home'
            }
        })
        .state('form-evento-create', {
            url: '/eventos/create',
            templateUrl: 'app/eventos/evento-form.html',
            controller: 'eventoController',
            controllerAs: 'vm',
            ncyBreadcrumb: {
                label: 'Home'
            }
        })
        .state('form-evento-edit', {
            url: "/eventos/update/:id",
            templateUrl: "app/eventos/evento-form.html",
            controller:"eventoController",
            controllerAs: "vm",
            ncyBreadcrumb: {
                label: 'Home'
            }
		})
		// Patrocinador State
		.state('patrocinador', {
			url: '/patrocinador', 
			templateUrl: 'app/patrocinadores/patrocinador.html', 
			controller: 'patrocinadorController',
			controllerAs: 'vm',
		})
		.state('patrocinador-form', {
			url: '/patrocinador-form', 
			templateUrl: 'app/patrocinador/patrocinador-form.html', 
			controller: 'patrocinadorFormController',
			controllerAs: 'vm',
		})
		.state('patrocinador-edit', {
			url: '/patrocinador-form/:id', 
			templateUrl: 'app/patrocinador/patrocinador-form.html', 
			controller: 'patrocinadorEditController',
			controllerAs: 'vm',
        })
        
     
		// usuarios state
        .state('usuarios', {
            url: '/usuarios',
            templateUrl: 'app/usuarios/usuarios.html',
            controller: 'usuariosController',
            controllerAs: 'vm',
            ncyBreadcrumb: {
                label: 'Home'
            }
        })
        .state('form-usuario-create', {
            url: '/usuarios/create',
            templateUrl: 'app/usuarios/usuario-form.html',
            controller: 'usuarioController',
            controllerAs: 'vm',
            ncyBreadcrumb: {
                label: 'Home'
            }
        })
        .state('form-usuario-edit', {
            url: "/usuarios/update/:id",
            templateUrl: "app/usuarios/usuario-form.html",
            controller:"usuarioController",
            controllerAs: "vm",
            ncyBreadcrumb: {
                label: 'Home'
            }
		})
	}
}())