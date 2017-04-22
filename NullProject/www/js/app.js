// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var appMain = angular.module('starter', ['ionic', 'starter.controllers', 'starter.directives'])

appMain.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        if (window.cordova && window.cordova.plugins.Keyboard) {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

            // Don't remove this line unless you know what you are doing. It stops the viewport
            // from snapping when text inputs are focused. Ionic handles this internally for
            // a much nicer keyboard experience.
            cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
});


var app = angular.module('ionicApp', ['ionic', 'starter.controllers', 'starter.directives']);

app.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
})


app.controller('AppCriarUsuarioCtrl', function($scope, $ionicModal, $location, $http) {

    $scope.contacts = [];

    $ionicModal.fromTemplateUrl('templates/criarUsuario.html', {
        scope: $scope
    }).then(function(modal) {
        $scope.modal = modal;
    });

    $scope.createContact = function(u) {
        if (u.senha == u.confirmaSenha){
            $scope.error = ""
            $scope.contacts.push({ name: u.nome, email : u.email, senha : u.senha });
            //console.log($scope.contacts);
            var res = $http.post('http://projeto-nice2meet-barbaromatrix.c9users.io/cadastroTeste', $scope.contacts);
            res.success(function(data, status, headers, config) {
                console.log(data);
            });
        } else {
            $scope.error = "As senhas não conferem"
        }    
    };

});


app.controller('AppLoginModalCtrl', function($scope, $ionicModal) {

    $scope.contacts = [
        { name: 'Gordon Freeman' },
        { name: 'Barney Calhoun' },
        { name: 'Lamarr the Headcrab' },
    ];

    $ionicModal.fromTemplateUrl('templates/logarUsuario.html', {
        scope: $scope
    }).then(function(modal) {
        $scope.modal = modal;
    });

});


app.controller('AppGoRoute', function($scope, $ionicModal) {


    $ionicModal.fromTemplateUrl('templates/homeApp.html', {
        scope: $scope
    }).then(function(modal) {
        $scope.modal = modal;
    });

});


app.controller('AppGoMap', function($scope, $ionicModal) {


    $ionicModal.fromTemplateUrl('templates/mapaPage.html', {
        scope: $scope
    }).then(function(modal) {
        $scope.modal = modal;
    });

});

/*app.service('random', function($http){
    this.retorna = function(){
        return $http.get('http://projeto-nice2meet-barbaromatrix.c9users.io/teste');
    };
});

app.controller('AppTeste', function($scope, random){
    $scope.retornaDado = function(){
        $scope.dados = random.retorna().then(function(res){
            $scope.dados = res.data;
        });
    };
});
*/
