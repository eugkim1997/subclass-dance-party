var ColorfulDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
};

ColorfulDancer.prototype = Object.create(Dancer.prototype);

ColorfulDancer.prototype.constructor = ColorfulDancer;

ColorfulDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.toggle();
};