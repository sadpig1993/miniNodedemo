var linker = angular.module('linker',['ui.router','ngAnimate','pascalprecht.translate','ngCookies']);
linker.run(['$rootScope', '$state', '$stateParams',
    function ($rootScope, $state, $stateParams) {
       $rootScope.$state = $state;
       $rootScope.$stateParams = $stateParams;
    }])
.run(['$rootScope', '$translate',
  function($rootScope, $translate) {
    $rootScope.$translate = $translate;
  }
]);

  linker.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise("/main");
  $stateProvider
    .state("main",{
      url:"/main",
    })
    .state("AboutUs", {
          url: "/about",
          templateUrl: "templates/about.html"
        })
        .state("Recruitment", {
          url: "/recruitment",
          templateUrl: "templates/recruitment.html",
        })
        .state("Cooperation", {
          url: "/cooperation",
          templateUrl: "templates/cooperation.html",
        })
        .state("LinkerCommunity", {
          url: "/linker_community",
          templateUrl: "templates/community.html",
        })
        .state("Linkermarket", {
          url: "/linker_market",
          templateUrl: "templates/market.html",
        })
        .state("cloud",{
          url:'/cloud',
          templateUrl:'templates/cloud.html',
        })
        .state("Mobility",{
      url:"/mobility",
      templateUrl:'templates/mobility.html',
    })
}]);
linker.config(['$translateProvider',
  function($translateProvider) {
    var lang = "zh";
    $translateProvider.useStaticFilesLoader({
      prefix: '/locales/',
      suffix: '.json'
    });
    $translateProvider.useLocalStorage();
    $translateProvider.useSanitizeValueStrategy('escape');
    $translateProvider.preferredLanguage(lang);
  }
]);