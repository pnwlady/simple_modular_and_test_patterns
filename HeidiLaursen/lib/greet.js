const greetObj = module.exports = greet () {
  function (name) {
    const greeting = "Hello";
    return greeting + " " + name;
  }
};

greetObj("Janice");
