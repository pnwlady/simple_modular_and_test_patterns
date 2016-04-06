const greet = module.exports = function (name) {
  const greeting = "Hello";
  return greeting + " " + name;
};

greet("Janice");
