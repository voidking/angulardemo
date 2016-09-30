var myApp=angular.module("myApp",["ui.router","oc.lazyLoad"]);
myApp.config(function ($stateProvider,$urlRouterProvider) {
    $urlRouterProvider.when("","/home");

    $stateProvider.state('home',{
        url:"/home",
        templateUrl: 'views/homepage.html',
        controller: 'homeController',
        resolve:{
            loadMyCtrl:['$ocLazyLoad',function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    name:"homeApp",
                    files:["public/js/homepage.js"]
                })
            }]
         }
    });

    $stateProvider.state('page2',{
        url:"/page2",
        templateUrl:'views/page2.html',
        resolve:{
            loadMyCtrl:function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    name:'page2App',
                    files:["public/js/page2.js"]
                })
            }
        }
    })
    $stateProvider.state('page3',{
        url:"/page3",
        templateUrl:'views/page3.html',
        resolve:{
            loadMyCtrl:function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    name:'page3App',
                    files:["public/js/page3.js","public/js/page3-ext.js"]
                })
            }
        }
    })
    
});
