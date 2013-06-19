function BusCtrl($scope) {
  $scope.buses = [
     {
        "destination": "Baja Fresh",
        "organizer": "Patrick",
        "seatCount": 3,
        "passengers": [
            "Alberto",
            "Marina"
        ]            
      },
      {
        "destination": "Wendys",
        "organizer": "Tom",
        "seatCount": 4,
        "passengers": [
        "Jessup",
        "JOM"]
      }
  ];

  $scope.user = {
    "name": "Jared",
    "onBus": false
  }

  $scope.seatsAvailable = function(bus) {
    return bus.seatCount - bus.passengers.length;
  };

  $scope.hopOn = function(bus) {
    bus.passengers.push("Jared");
    $scope.user.onAnyBus = true;
  };

  $scope.hopOff = function(bus) {
    bus.passengers = _.reject(bus.passengers, function(name) { return name == $scope.user.name });
    $scope.user.onAnyBus = false;
  };

  $scope.userOnBus = function(bus) {
    return _.contains(bus.passengers, $scope.user.name);
  };

  $scope.totalBuses = function() {
    var count = 0;
    angular.forEach($scope.buses, function(bus) {
        count += 1;
    });
    return count;
  };
}