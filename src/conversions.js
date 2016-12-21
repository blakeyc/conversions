/**
 * Copyright 2016 blakeyc
 * Author: Chris Blakey <chris.a.blakey@gmail.com>
 * MIT Licensed
 *
 * @module conversions.js
 */

const lookUp = {
  metres: {
    kilometres: { method: '/', value: 1000 },
    feet: { method: '*', value: 3.28084 },
  },
  kilometres: {
    metres: { method: '*', value: 1000 },
    feet: { method: '*', value: 3280.84 },
  },
  feet: {
    metres: { method: '*', value: 0.3048 },
    kilometres: { method: '*', value: 0.0003048 },
  },
};

const aliases = {
  '<m>|<metres>|<metre>|<meters>|<meter>': {
    name: 'metres',
  },
  '<km>|<kilometres>|<kilometre>|<kilometers>|<kilometer>': {
    name: 'kilometres',
  },
  '<ft>|<feet>|<foot>|<feets>|<foots>': {
    name: 'feet',
  },
};

function checkAliases(unitName) {
  let unitActualName;
  Object.keys(aliases).forEach((key) => {
    if (key.indexOf(`<${unitName}>`) >= 0) {
      unitActualName = aliases[key].name;
    }
  });
  return unitActualName;
}

export default function conversions(value, fromUnit, toUnit) {
  const inputValue = parseFloat(value);
  const fromUnitName = checkAliases(fromUnit);
  const toUnitName = checkAliases(toUnit);
  const conversion = lookUp[fromUnitName][toUnitName];

  if (!inputValue || !conversion) return null;

  if (conversion.method === '/') {
    return inputValue / conversion.value;
  }
  return inputValue * conversion.value;
}
