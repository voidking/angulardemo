var myApp=angular.module("myApp",["ui.router","oc.lazyLoad"]);
myApp.config(function ($stateProvider,$urlRouterProvider) {
    $urlRouterProvider.when("","/home");

    $stateProvider.state('home',{
        url:"/home",
        templateUrl: 'homepage.html',
        resolve:{
            loadMyCtrl:['$ocLazyLoad',function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    name:"homeApp",
                    files:["homepage.js"]
                })
            }]
         }
    });

    $stateProvider.state('page2',{
        url:"/page2",
        templateUrl:'page2.html',
        resolve:{
            loadMyCtrl:function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    name:'page2App',
                    files:["page2.js"]
                })
            }
        }
    })
    $stateProvider.state('page3',{
        url:"/page3",
        templateUrl:'page3.html',
        resolve:{
            loadMyCtrl:function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    name:'page3App',
                    files:["page3.js","page3-ext.js"]
                })
            }
        }
    })
    
});

myApp.controller("myController",function ($state,$scope,$location) {
    $scope.turnPage=function () {
        // $state.go('home');
        $location.path('/home')
    }
});