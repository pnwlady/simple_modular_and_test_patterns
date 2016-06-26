const hi = require(__dirname + '/lib/greet');

process.stdout.write(hi.greet('Heidi' + '\n'));
