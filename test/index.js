let shimbol = require('../cjs');

console.assert(shimbol() !== shimbol());
console.assert(typeof shimbol() === 'symbol');

delete require.cache[require.resolve('../cjs')];
global.Symbol = null;
shimbol = require('../cjs');

console.assert(shimbol() !== shimbol());
console.assert(typeof shimbol() === 'string');
console.assert(/^__\d+\.\d+$/.test(shimbol()));
