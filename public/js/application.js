function BusCtrl($scope) {
  $scope.buses = [
     {
        "destination": "Baja Fresh",
        "organizer": "Jared",
        "seatCount": 3,
        "passengers": [
            "Alberto",
            "Pascal",
            "Marina"
        ]            
      },
      {
        "destination": "Wendys",
        "organizer": "Tom",
        "seatCount": 4,
        "passengers": []
      }
  ];
  $scope.totalBuses = function() {
    var count = 0;
    angular.forEach($scope.buses, function(bus) {
        count += 1;
    });
    return count;
  };
}