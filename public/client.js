angular.module('olympianApp', ['ngRoute']);

angular.module('olympianApp').config(function($routeProvider, $locationProvider){
  $routeProvider
    .when('/synchronizedSwimming', {
      templateUrl:'views/synchronizedSwimming.html',
      controller:'SynchronizedSwimmingController'
    })
    .when('/tableTennis', {
      templateUrl:'views/tableTennis.html',
      controller: 'TableTennisController'
    })
    .when('/badminton', {
      templateUrl:'views/badminton.html',
      controller: 'BadmintonController'
    })
    .when('/wrestling', {
      templateUrl:'views/wrestling.html',
      controller: 'WrestlingController'
    })
    .when('/gymnastics', {
      templateUrl:'views/gymnastics.html',
      controller: 'GymnasticsController'
    })

  $locationProvider.html5Mode(true);
})

angular.module('olympianApp').factory('DataService', function($http){
  var data = {};

  //sync swimming
  var configSynchronizedSwimming = {
    method: 'GET',
    url: '/olympics/synchronizedSwimming'
  };
  function handleSynchronizedSwimmingSuccess(response) {
    data.synchronizedSwimming = response.data;
    console.log('Success:', response.data);
  };
  getSynchronizedSwimming = function() {
    console.log('click: synchronized swimming');
    $http(configSynchronizedSwimming).then(handleSynchronizedSwimmingSuccess, handleFailure);
  };
  getSynchronizedSwimming();

  //table tennis
  var configTableTennis = {
    method: 'GET',
    url: '/olympics/tableTennis'
  };
  function handleTableTennisSuccess(response) {
    data.tableTennis = response.data;
    console.log('Success:', response.data);
  };
  getTableTennis = function() {
    console.log('click: table tennis');
    $http(configTableTennis).then(handleTableTennisSuccess, handleFailure);
  };
  getTableTennis();

  //wrestling
  var configWrestling = {
    method: 'GET',
    url: '/olympics/wrestling'
  };
  function handleWrestlingSuccess(response) {
    data.wrestling = response.data;
    console.log('Success:', response.data);
  };
  getWrestling = function() {
    console.log('click: wrestling');
    $http(configWrestling).then(handleWrestlingSuccess, handleFailure);
  };
  getWrestling();

  //badminton
  var configBadminton = {
    method: 'GET',
    url: '/olympics/badminton'
  };
  function handleBadmintonSuccess(response) {
    data.badminton = response.data;
    console.log('Success:', response.data);
  };
  getBadminton = function() {
    console.log('click: badminton');
    $http(configBadminton).then(handleBadmintonSuccess, handleFailure);
  };
  getBadminton();

  //Gymnastics
  var configGymnastics = {
    method: 'GET',
    url: '/olympics/gymnastics'
  };
  function handleGymnasticsSuccess(response) {
    data.gymnastics = response.data;
    console.log('Success:', response.data);
  };
  getGymnastics = function() {
    console.log('click: gymnastics');
    $http(configGymnastics).then(handleGymnasticsSuccess, handleFailure);
  };
  getGymnastics();

  return {
    data: data,
    callSwim: getSynchronizedSwimming,
    callWrestle: getWrestling,
    callBadminton: getBadminton,
    callTableTennis: getTableTennis,
    callGym: getGymnastics
  }

  function handleFailure(response) {
    console.log('Failure in client.js, DataService', response);
  };

})

angular.module('olympianApp').controller('MainController', function($scope, DataService){
  //loading data
})

angular.module('olympianApp').controller('SynchronizedSwimmingController', function($scope, DataService){
  $scope.data = DataService.data.synchronizedSwimming;
  });

angular.module('olympianApp').controller('TableTennisController', function($scope, DataService){
  $scope.data = DataService.data.tableTennis;
  });

angular.module('olympianApp').controller('BadmintonController', function($scope, DataService){
  $scope.data = DataService.data.badminton;
});

angular.module('olympianApp').controller('WrestlingController', function($scope, DataService){
  $scope.data = DataService.data.wrestling;
});

angular.module('olympianApp').controller('GymnasticsController', function($scope, DataService){
  $scope.data = DataService.data.gymnastics;
});
