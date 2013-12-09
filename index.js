// Generated by CoffeeScript 1.6.3
var Clever, average, clever, config, stream;

Clever = require('clever');

config = {
  key: 'DEMO_KEY'
};

clever = new Clever(config.key);

stream = clever.Sections.find().stream();

average = 0;

stream.on('data', function(section) {
  return console.log(section);
});

stream.on('end', function() {
  return console.log('loaded!');
});
