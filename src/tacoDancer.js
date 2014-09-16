var TacoDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('taco');
  window.taco = this;
};
TacoDancer.prototype = Object.create(Dancer.prototype);
TacoDancer.prototype.constructor = TacoDancer;
TacoDancer.prototype.step = function(timeBetweenSteps) {
  Dancer.prototype.step.call(this, timeBetweenSteps);
  // make it do something unique
};
