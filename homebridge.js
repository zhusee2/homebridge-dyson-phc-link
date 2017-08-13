class HomebridgeCache {
  constructor() {
    this.cacheHomebridge = this.cacheHomebridge.bind(this);
    return this;
  }

  cacheHomebridge(homebridge) {
    this.Accessory = homebridge.hap.Accessory;
    this.Service = homebridge.hap.Service;
    this.Characteristic = homebridge.hap.Characteristic;
    this.UUIDGen = homebridge.hap.uuid;
  }
}

module.exports = new HomebridgeCache();
