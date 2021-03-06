const cacheHomebridge = require('./homebridge').cacheHomebridge;
let Accessory, Service, Characteristic, UUIDGen;
let DysonServices;

module.exports = (homebridge) => {
  console.log(`homebridge API version: ${homebridge.version}`);
  cacheHomebridge(homebridge);

  Accessory = homebridge.hap.Accessory;
  Service = homebridge.hap.Service;
  Characteristic = homebridge.hap.Characteristic;
  UUIDGen = homebridge.hap.uuid;

  DysonServices = require('./DysonServices');

  homebridge.registerAccessory(
    'homebridge-dyson-phc-link',
    'DysonPHCLink',
    DysonPHCLink
  );
}

class DysonPHCLink {
  constructor(logger, config) {
    this.log = logger;
    this.config = config;

    this.services = {
      heater: new DysonServices.HeaterCooler(),
      fan: new DysonServices.Fan(),
      airSensor: new DysonServices.AirQualitySensor(),
      nightModeSwitch: new Service.Switch('Night Mode', 'night_mode'),
      focusedModeSwitch: new Service.Switch('Focused Mode', 'focused_mode'),
    };
  }

  getServices() {
    return Object.values(this.services);
  }
}
