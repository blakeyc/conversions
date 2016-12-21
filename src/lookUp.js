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

export default lookUp;
