# shimbol()

A simple Symbol-like function to create one-off unique keys.

It uses native `Symbol()` if available, it fallbacks with a unique ID as string in older browsers.

```js
import shimbol from 'shimbol';
// or const shimbol = require('shimbol');

const uniqueKey = shimbol();
object[uniqueKey] = value;
```