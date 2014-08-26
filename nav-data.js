var arDrone = require('ar-drone');
var client = arDrone.createClient();

client.takeoff();

client.after(5000, function() {
  this.land();
});

client.on('navdata', function(navData) {
  try {
    var meters = navData.demo.altitudeMeters;

    console.log(meters);

    if (meters >= 0.5) {
      this.land();
    }
  } catch (e) {
    console.error(e);
  }
});
