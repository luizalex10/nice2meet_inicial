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


app.controller('AppCriarUsuarioCtrl', function($scope, $ionicModal, $location) {

    $scope.contacts = [
        { name: 'Gordon Freeman' },
        { name: 'Barney Calhoun' },
        { name: 'Lamarr the Headcrab' },
    ];

    $ionicModal.fromTemplateUrl('templates/criarUsuario.html', {
        scope: $scope
    }).then(function(modal) {
        $scope.modal = modal;
    });

    $scope.createContact = function(u) {
        $scope.contacts.push({ name: u.firstName + ' ' + u.email });
        $scope.modal.hide();
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