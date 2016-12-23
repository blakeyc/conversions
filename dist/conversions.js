(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', 'exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports);
    global.conversions = mod.exports;
  }
})(this, function (module, exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = conversions;
  /**
   * Copyright 2016 blakeyc
   * Author: Chris Blakey <chris.a.blakey@gmail.com>
   * MIT Licensed
   *
   * @module conversions.js
   */

  var aliases = {
    '<mm>|<milimetres>|<milimetre>|<milimeters>|<milimeter>': {
      name: 'millimetres'
    },
    '<cm>|<centimetres>|<centimetre>|<centimeters>|<centimeter>': {
      name: 'centimetres'
    },
    '<m>|<metres>|<metre>|<meters>|<meter>': {
      name: 'metres'
    },
    '<km>|<kilometres>|<kilometre>|<kilometers>|<kilometer>': {
      name: 'kilometres'
    },
    '<in>|<inch>|<inches>': {
      name: 'inches'
    },
    '<ft>|<feet>|<foot>|<feets>|<foots>': {
      name: 'feet'
    },
    '<yd>|<yard>|<yards>': {
      name: 'yards'
    },
    '<mi>|<mile>|<miles>': {
      name: 'miles'
    }
  };

  function checkAliases(unitName) {
    var unitActualName = void 0;
    Object.keys(aliases).forEach(function (key) {
      if (key.indexOf('<' + unitName + '>') >= 0) {
        unitActualName = aliases[key].name;
      }
    });
    return unitActualName;
  }

  function convertToMetres(value, unit) {
    switch (unit) {
      case 'millimetres':
        return value * 0.001;
      case 'centimetres':
        return value * 0.01;
      case 'kilometres':
        return value * 1000;
      case 'inches':
        return value * (1 / 39.370079);
      case 'feet':
        return value * (1 / 3.280840);
      case 'yards':
        return value * (1 / 1.093613);
      case 'miles':
        return value * (1 / 0.000621);
      default:
        return value; // metres
    }
  }

  function convertToUnit(value, unit) {
    switch (unit) {
      case 'millimetres':
        return value * 1000;
      case 'centimetres':
        return value * 100;
      case 'kilometres':
        return value / 1000;
      case 'inches':
        return value * 39.370079;
      case 'feet':
        return value * 3.280840;
      case 'yards':
        return value * 1.093613;
      case 'miles':
        return value * 0.000621;
      default:
        return value; // metres
    }
  }

  function round(value, decimals) {
    return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
  }

  function conversions(value, fromUnit, toUnit) {
    var inputValue = parseFloat(value);
    var from = checkAliases(fromUnit);
    var to = checkAliases(toUnit);

    if (!inputValue) throw new Error('Missing value to convert!');
    if (!from || !to) throw new Error('Unit/Alias not currently supported!');

    return round(convertToUnit(convertToMetres(value, from), to), 6);
  }
  module.exports = exports['default'];
});