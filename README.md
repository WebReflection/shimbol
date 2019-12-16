# shimbol()

[![Build Status](https://travis-ci.com/WebReflection/shimbol.svg?branch=master)](https://travis-ci.com/WebReflection/shimbol) [![Coverage Status](https://coveralls.io/repos/github/WebReflection/shimbol/badge.svg?branch=master)](https://coveralls.io/github/WebReflection/shimbol?branch=master)

A simple Symbol-like function to create one-off unique keys.

It uses native `Symbol()` if available, it fallbacks with a unique ID as string in older browsers.

```js
import shimbol from 'shimbol';
// or const shimbol = require('shimbol');

const uniqueKey = shimbol();
object[uniqueKey] = value;
```