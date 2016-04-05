const greet = module.export = function (name) {
    return 'Hello' + name;
};

console.log(greet(Bob));
