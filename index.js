let Accessory, Service, Characteristic, UUIDGen;

module.exports = (homebridge) => {
  console.log(`homebridge API version: ${homebridge.version}`);

  Accessory = homebridge.hap.Accessory;
  Service = homebridge.hap.Service;
  Characteristic = homebridge.hap.Characteristic;
  UUIDGen = homebridge.hap.uuid;

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
  }

  getServices() {
    return [
      new Service.AirQualitySensor(),
      new Service.HeaterCooler(),
      new Service.Fanv2(),
    ];
  }
}
