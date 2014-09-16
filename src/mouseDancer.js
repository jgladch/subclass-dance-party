var MouseDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('mouse');
  window.mouse = this;
};

MouseDancer.prototype = Object.create(Dancer.prototype);
MouseDancer.prototype.constructor = MouseDancer;
MouseDancer.prototype.step = function(timeBetweenSteps){
  Dancer.prototype.step.call(this, timeBetweenSteps);
  //Unique code
};
MouseDancer.prototype.follow = function(top, left){
  this.setPosition(top, left);
};
