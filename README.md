# find-keys-for-value

Find all the keys that have the given value - node module

## Usage

```javascript

  const findSingleValueInObject = require('find-keys-for-value').findSingleValueInObject
  findSingleValueInObject({a: 'b', b: 'c'}, 'c', (a, b) => a === b, x => console.log(x))
  { loc: 'b', val: 'c' }

  const findValuesInObject = require('find-keys-for-value').findValuesInObject
  findValuesInObject({ a: 'b', b: 'c' }, ['b', 'c'], (a, b) => a === b, x => console.log(x))
  { loc: 'a', val: 'b' }
  { loc: 'b', val: 'c' }

```

## License

MIT &copy; 2018
