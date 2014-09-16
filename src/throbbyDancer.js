var ThrobbyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('throbby');
  this.bigger = true;
};
ThrobbyDancer.prototype = Object.create(Dancer.prototype);
ThrobbyDancer.prototype.constructor = ThrobbyDancer;
ThrobbyDancer.prototype.step = function(timeBetweenSteps) {
  Dancer.prototype.step.call(this, timeBetweenSteps);
  //Make this throb
  if (this.bigger) {
    this.setColor('13px solid red');
    this.bigger = false;
  } else {
    this.setColor('10px solid red');
    this.bigger = true;
  }
};
