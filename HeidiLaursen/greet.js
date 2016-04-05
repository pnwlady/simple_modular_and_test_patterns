const greet = module.export = function (name) {
    const greeting = "Hello";
    return greeting + name;
};

greet(Janice);
