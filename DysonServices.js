const { Service, Characteristic } = require('./homebridge');

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

module.exports = {
  HeaterCooler,
};
