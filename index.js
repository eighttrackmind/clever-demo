// Generated by CoffeeScript 1.6.3
var cleverStatistics;

cleverStatistics = require('./cleverStatistics');

(cleverStatistics('median', 'mean', 'mode')).then(function(stats) {
  return console.log(stats);
}, function(err) {
  return console.error(err);
});
