const httpOptions = { timeOut: 2000, cache: {age: 20}};

const { cache } = httpOptions;
console.log(cache);
console.log(cache.age);
