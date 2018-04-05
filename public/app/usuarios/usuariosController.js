(function(){
    'use strict';

    angular
        .module('gdgAdmin')
        .controller('usuariosController', usuariosController);

    usuariosController.$inject = ['$scope', 'dataService'];

    function usuariosController($scope, dataService) {
        var vm = this;
        vm.usuarios = [];
        vm.table_name = 'usuarios';
        activate();

        function getUsuarios() {
            return dataService.getEntityAll(vm.table_name)
            .then(function (result) {
                return result;
            });
        }

        vm.deleteUsuario = function (id) {
            return dataService.deleteEntity(vm.table_name, id)
            .then(function (result) {
                activate();
            });
        }

        function activate() {
            getUsuarios()
            .then(function (result) {
                vm.usuarios = result;
            });
        }
    }
})();