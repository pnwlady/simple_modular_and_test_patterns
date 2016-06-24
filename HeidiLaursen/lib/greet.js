module.exports = var GreetObj = function() {
  GreetObj.prototype.response = function(name) {
    return 'Hello, ' + name + '!';
  };
};

var visitor = new GreetObj();
if (process.argv[2]) {
  process.stdout(visitor.response(process.argv[2]));
}
