import lookUp from './lookUp';

export default function conversions(value, fromUnit, toUnit) {
  const inputValue = parseFloat(value);
  const conversion = lookUp[fromUnit][toUnit];

  if (!inputValue || !conversion) return null;

  if (conversion.method === '/') {
    return inputValue / conversion.value;
  }
  return inputValue * conversion.value;
}
