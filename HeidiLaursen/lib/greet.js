const greet = module.exports = function(name) {
  return 'Hello, ' + name;
};

if (process.argv[2]) {
  var visitor = process.argv[2];
  process.stdout.write(greet(visitor + '\n'));
}
