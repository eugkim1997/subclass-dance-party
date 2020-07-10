var SlideDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('slideDancer');
};

SlideDancer.prototype = Object.create(Dancer.prototype);

SlideDancer.prototype.constructor = SlideDancer;

SlideDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.css({
    left:(Math.random()*$(window).width()-20),
    top:(Math.random()*$(window).height()-20),
  });
};