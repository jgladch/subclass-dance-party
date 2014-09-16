var BlinkyDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
};
BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;
BlinkyDancer.prototype.step = function(timeBetweenSteps){
  //set a timeout to call Dancer.prototype.step with 'this' as a BlinkyDancer Instance
  Dancer.prototype.step.call(this, timeBetweenSteps);
  //toggle
  this.$node.toggle();
};

var makeNewBlinkyDancer = function(top, left, timeBetweenSteps){
  return new BlinkyDancer(top, left, timeBetweenSteps);
};
