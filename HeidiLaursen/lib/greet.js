const visitor = module.exports = exports = {};

visitor.greet = function(name) {
  return 'Hello, ' + name;
};

if (process.argv[2]) {
  process.stdout('Hello, ' + process.argv[2]);
}
