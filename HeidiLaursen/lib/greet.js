var GreetObj = module.exports = function() {
  GreetObj.prototype.response = function(name) {
    return "Hello, " + name "!";
  };
};

var visitor = new Greet();
if (process.argv[2]) {
  process.stdout(visitor.response(process.argv[2]));
}
