var SlideDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('slide');
};
SlideDancer.prototype = Object.create(Dancer.prototype);
SlideDancer.prototype.constructor = SlideDancer;
SlideDancer.prototype.step = function(timeBetweenSteps) {
  Dancer.prototype.step.call(this, timeBetweenSteps);
  this.left += 10;
  this.setPosition(this.top, this.left);
};

var makeNewSlideDancer = function(top, left, timeBetweenSteps) {
  return new SlideDancer(top, left, timeBetweenSteps);
};
