(function() {
  var generateFireflies;

  generateFireflies = function(target) {
    var i, results;
    if (target == null) {
      target = '#fireFlies';
    }
    i = 0;
    results = [];
    while (i < 14) {
      $(target).append('<div class="firefly"></div>');
      results.push(i++);
    }
    return results;
  };

  generateFireflies();

}).call(this);
