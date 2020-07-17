//CONTROLLERS


//homeController

weatherApp.controller('homeController', ['$scope', 'cityService', function($scope, cityService){

    $scope.city = cityService.city;

    $scope.$watch('city', function(){

        cityService.city = $scope.city;

    })

}]);



//forecastController

weatherApp.controller('forecastController', ['$scope','$resource', 'cityService', function($scope, $resource, cityService){

    $scope.city = cityService.city;

    //below api key has been taken through http://api.openweathermap.org, signed-in user is 'SAGAR G'

    $scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/weather?APPID=e9f18985a2ad01883a439c92b66a31dd", {callback: "JSON_CALLBACK" },
    { get: { method: "JSONP" }});

    $scope.weatherResult = $scope.weatherAPI.get( { q: $scope.city });

    // console.log($scope.weatherResult);

        $scope.convertToCelcius = function(degK) {
        
        return Math.round(degK - 273.15);
        
    }

        $scope.convertToDate = function(dt) { 
      
        return new Date(dt * 1000);
        
    };


}]);