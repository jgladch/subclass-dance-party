var ThrobbyDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
};
ThrobbyDancer.prototype = Object.create(Dancer.prototype);
ThrobbyDancer.prototype.constructor = ThrobbyDancer;
ThrobbyDancer.prototype.step = function(timeBetweenSteps){
  Dancer.prototype.step.call(this, timeBetweenSteps);
  //Make this throb
};


var makeNewThrobbyDancer = function(top, left, timeBetweenSteps){
  return new ThrobbyDancer(top, left, timeBetweenSteps);
};
