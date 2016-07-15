//set up angular, pass in ngRoute for ng-view. npm install angular-route
//FILE: olympianApp.module.js
angular.module('olympianApp', ['ngRoute']);
//angular-router - this will set what controller and url to use in the ng-view on index.html
//assume servername is localhost:3000 for this case. But, if on a website, can also be www.website.com
//EXAMPLE: if server gets request for 'localhost:3000/synchronizedSwimming', in the ng-view on index.html,
//        place the views/synchronizedSwimming.html in that spot. Then activate the SynchronizedSwimmingController
//FILE: olympianApp.config.js
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
//When factory is called (passed into a controller that is activated), the factory below named 'DataService'
//will make a call to the server and store it in the data object, declared in the first line of the factory.
//FILE: DataService.js
angular.module('olympianApp').factory('DataService', function($http){
  var data = { }; // this is DataService.data

  //sync swimming
  var configSynchronizedSwimming = {
    method: 'GET',
    url: '/olympics/synchronizedSwimming' // equivalent to localhost:3000/olympics/synchronizedSwimming
  };
  function handleSynchronizedSwimmingSuccess(response) {
    //this function is run in when getSynchronizedSwimming is called below.
    //save the response that came back to the data object declared above.
    data.synchronizedSwimming = response.data;
    // console.log('Success:', response.data);
  };
  getSynchronizedSwimming = function() {
    // console.log('click: synchronized swimming');
    //call the server, using the config for synchronizedSwimming above.
    //server will receive a request for localhost:3000/olympics/synchronizedSwimming.
    //Server will see that directs to a router (olympics.js). olympics.js will then
    //see a request for '/synchronizedSwimming' (olympics.js assumes the address is already
    //'localhost:3000/olympics/'), and send the randomSynchronizedSwimming athlete.
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
    // console.log('Success:', response.data);
  };
  getTableTennis = function() {
    // console.log('click: table tennis');
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
    // console.log('Success:', response.data);
  };
  getWrestling = function() {
    // console.log('click: wrestling');
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
    // console.log('Success:', response.data);
  };
  getBadminton = function() {
    // console.log('click: badminton');
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
    // console.log('Success:', response.data);
  };
  getGymnastics = function() {
    // console.log('click: gymnastics');
    $http(configGymnastics).then(handleGymnasticsSuccess, handleFailure);
  };
  getGymnastics();


  //when DataService is called, it returns the data in the data object.
  //Each sport will be stored 'data.synchronizedSwimming', 'data.gymnastics', etc.
  //this info is now DataService.data, available to the controllers.
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
//when SynchronizedSwimmingController is activated, it initializes the factory (DataService is called as the second
//parameter of the function). Now SynchronizedSwimmingController local $scope.data becomes only the
//synchronizedSwimming key from the DataService object.
//FILE: SynchronizedSwimmingController.js
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
