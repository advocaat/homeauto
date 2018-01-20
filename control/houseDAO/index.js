
var mongoose = require('mongoose');
var fs = require('fs');
var path  = require('path');

var port = process.env.PORT || 3000;
if(port !== 3000) {
    mongoURI = 'mongodb://advocaat:macalebzie@ds263837.mlab.com:63837/homebase';
} else {
    mongoURI = 'mongodb://localhost/homeautos';
}
mongoose.connect(mongoURI);

var logging = require("./logging.js");
var system = require("./system");

fs.readdirSync(__dirname + "/./models").forEach(function(filename){
    if(~filename.indexOf('.js')) require(__dirname + "/./models/" + filename);
});

daoFunctions = {};

daoFunctions.retrieveWattage = logging.retrieveDeviceWattage;
daoFunctions.retreiveTimeArrayDifferences = logging.getDifferences;
daoFunctions.retrieveTotalEnergyArray = logging.getEnergyArray;
daoFunctions.pushDailyEnergyUseArray = logging.updateEnergyArray;
daoFunctions.retrieveArrayAndPushTime = logging.getArrayAndPushTime;
daoFunctions.refreshOnTimeOffTimeArrays = logging.stateDependantUpdate;
daoFunctions.insertLogArray = logging.selectorDependantUpdate;

daoFunctions.asyncToggleState = system.toggleButton;
daoFunctions.asyncGetState = system.asyncGetDeviceState
daoFunctions.turnDevicesOff = system.turnOffByRoom;
daoFunctions.getStates = system.retrieveStates;

module.exports = daoFunctions;
