const { Service, Characteristic } = require('./homebridge');

class AirQualitySensor extends Service.AirQualitySensor {
  constructor(...args) {
    super(...args);

    this.addCharacteristic(Characteristic.FilterLifeLevel)
      .setProps({
        minValue: 0,
        maxValue: 4300,
      })

    // FILTER_OK = 0; CHANGE_FILTER = 1;
    this.addCharacteristic(Characteristic.FilterChangeIndication);
  }
}

class HeaterCooler extends Service.HeaterCooler {
  constructor(...args) {
    super(...args);

    this.getCharacteristic(Characteristic.CurrentHeaterCoolerState)
      .setProps({
        validValues: [
          Characteristic.CurrentHeaterCoolerState.INACTIVE,
          Characteristic.CurrentHeaterCoolerState.IDLE,
          Characteristic.CurrentHeaterCoolerState.HEATING,
        ]
      });

    this.getCharacteristic(Characteristic.TargetHeaterCoolerState)
      .setProps({
        validValues: [
          Characteristic.TargetHeaterCoolerState.AUTO,
          Characteristic.TargetHeaterCoolerState.HEAT,
        ]
      });

    this.getCharacteristic(Characteristic.HeatingThresholdTemperature)
      .setProps({
        minValue: 10,
        maxValue: 30,
        minStep: 1,
      });

    return this;
  }
}

class Fan extends Service.Fanv2 {
  constructor(...args) {
    super(...args);

    this.addCharacteristic(Characteristic.CurrentFanState);
    this.addCharacteristic(Characteristic.TargetFanState);
    this.addCharacteristic(Characteristic.SwingMode);

    this.getCharacteristic(Characteristic.RotationSpeed)
      .setProps({
        minValue: 1,
        maxValue: 10,
        minStep: 1,
      });
  }
}

module.exports = {
  AirQualitySensor,
  HeaterCooler,
  Fan,
};
