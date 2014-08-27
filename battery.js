var arDrone = require('ar-drone');
var client = arDrone.createClient();

client.on('navdata', function(navData) {
  if (!navData.demo) {
    return;
  }

  console.log(navData.demo.batteryPercentage);
});
