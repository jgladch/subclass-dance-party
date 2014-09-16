var SlideDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.counter = 0;
};
SlideDancer.prototype = Object.create(Dancer.prototype);
SlideDancer.prototype.constructor = SlideDancer;
SlideDancer.prototype.step = function(timeBetweenSteps){
  Dancer.prototype.step.call(this, timeBetweenSteps);
  if (this.counter % 2 === 0){
    this.$node.slideUp(200);
    this.counter++;
  } else {
    this.$node.slideDown(200);
    this.counter++;
  }
};

var makeNewSlideDancer = function(top, left, timeBetweenSteps) {
  debugger;
  return new SlideDancer(top, left, timeBetweenSteps);
};
