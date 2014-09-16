var RollyDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('rolly');
};

RollyDancer.prototype = Object.create(Dancer.prototype);
RollyDancer.prototype.constructor = RollyDancer;
RollyDancer.prototype.step = function(timeBetweenSteps){
  Dancer.prototype.step.call(this, timeBetweenSteps);
  //make it do something unique
};

var makeNewRollyDancer = function(top, left, timeBetweenSteps){
  return new RollyDancer(top, left, timeBetweenSteps);
};
