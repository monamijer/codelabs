const arr = [2, 41, 33];
arr.foo = 'hello';
for(const i in arr) console.log(i);
for(const i of arr) console.log(i);
const obj = {foo: 1, bar: 2};
for(const [key, val] of Object.entries(obj)) console.log(key, val);
