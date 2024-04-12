[Javascript Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)

Hold key-value pairs and remember the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.

```javascript
const map1 = new Map();
map1.set('bar', 'foo');
map1.set(1, 'foobar');
map1.set('foo', 'bar');

console.log(map1.get('bar')); // foo
console.log(map1.get(1)); // foobar
console.log(map1.get('foo')); // bar
```
