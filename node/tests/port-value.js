var tessel = require('tessel');
var port = process.argv.length === 3 ? process.argv[2] : "A";

function displayPortValue(error, portValue) {
  for (var i = 0; i < 8; i++) {
    console.log("Pin %d: %d", i, (portValue >> (i & 0x07)) & 0x01);
  }
}

setInterval(function() {
  tessel.port[port]._simple_cmd([CMD.GPIO_PORT_STATE], displayPortValue);
}, 500);
