var ColorfulDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  //this.$node = $('<span class="colorfulDancer"></span>');
};

ColorfulDancer.prototype = Object.create(Dancer.prototype);

ColorfulDancer.prototype.constructor = ColorfulDancer;

ColorfulDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  //this.$node.toggle();
  var r = Math.floor(Math.random() * 255);
  var g = Math.floor(Math.random() * 255);
  var b = Math.floor(Math.random() * 255);
  this.$node.css("border-color", "rgb("+ r + "," + g + "," + b + ")");
};