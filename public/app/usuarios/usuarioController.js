(function(){
    'use strict';

    angular
        .module('gdgAdmin')
        .controller('usuarioController', usuarioController);

    usuarioController.$inject = ['$scope', '$state', '$stateParams', 'dataService'];

    function usuarioController($scope, $state, $stateParams, dataService) {
        var vm = this;
        vm.usuario = {};
        vm.table_name = 'usuarios';
        activate();
        
        vm.submitusuario = function () {
            if ($state.current.name == 'form-usuario-create') {
                return dataService.saveEntity(vm.table_name, vm.usuario)
                    .then(function (result) {
                        $state.go('usuarios');
                    });
            } else {
                return dataService.updateEntity(vm.table_name, vm.usuario)
                    .then(function (result) {
                        $state.go('usuarios');
                    });
            } 
        }

        function getUsuarioById () {
            return dataService.getEntityById(vm.table_name, $stateParams.id)
            .then(function (usuario) {
                return usuario;
            });
        }

        vm.deleteUsuario = function(id) {
            return dataService.deleteEntity(vm.table_name, id)
                .then(function (result) {
                    $state.go('usuarios');
                });
        }

        vm.cancelar = function() {
            $state.go('usuarios');
        }

        function activate() {
            if ($state.current.name == 'form-usuario-edit') {
                getUsuarioById()
                .then(function(usuario) {
                    vm.usuario = usuario;
                });
            } else {
                vm.usuario = {
                    nombre:'',
                    email:'',
                    clave:'',
                    nivel:'',
                    imagen:''
                };
            }
        }  
    }
})();