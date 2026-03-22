let property = 'name';
function getProperty(obj, key) {
    return obj[key];
}
const pony = {
    name: 'Victorine',
    color: 'blue',
    speed: 40,
};
const nameValue = getProperty(pony, 'name');
console.log(nameValue);
export {};
//# sourceMappingURL=keyof.js.map