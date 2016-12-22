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

  var lookUp = {
    metres: {
      kilometres: { method: '/', value: 1000 },
      feet: { method: '*', value: 3.28084 },
      miles: { method: '/', value: 1609.344 }
    },
    kilometres: {
      metres: { method: '*', value: 1000 },
      feet: { method: '*', value: 3280.84 },
      miles: { method: '*', value: 0.621371 }
    },
    feet: {
      metres: { method: '*', value: 0.3048 },
      kilometres: { method: '*', value: 0.0003048 },
      miles: { method: '*', value: 0.000189394 }
    },
    miles: {
      metres: { method: '*', value: 1609.34 },
      feet: { method: '*', value: 5280 },
      kilometres: { method: '*', value: 1.60934 }
    }
  };

  var aliases = {
    '<m>|<metres>|<metre>|<meters>|<meter>': {
      name: 'metres'
    },
    '<km>|<kilometres>|<kilometre>|<kilometers>|<kilometer>': {
      name: 'kilometres'
    },
    '<ft>|<feet>|<foot>|<feets>|<foots>': {
      name: 'feet'
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

  function conversions(value, fromUnit, toUnit) {
    var inputValue = parseFloat(value);
    var fromUnitName = checkAliases(fromUnit);
    var toUnitName = checkAliases(toUnit);
    var conversion = lookUp[fromUnitName][toUnitName];

    if (!inputValue || !conversion) return null;

    if (conversion.method === '/') {
      return inputValue / conversion.value;
    }
    return inputValue * conversion.value;
  }
  module.exports = exports['default'];
});