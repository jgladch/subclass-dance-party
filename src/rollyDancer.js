var RollyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('rolly');
};

RollyDancer.prototype = Object.create(Dancer.prototype);
RollyDancer.prototype.constructor = RollyDancer;
RollyDancer.prototype.step = function(timeBetweenSteps) {
  Dancer.prototype.step.call(this, 4000);
  //approach the taco
  debugger;
  if (window.taco !== undefined) {
    var x = (window.taco.left - this.left) * .25;
    var y = (window.taco.top - this.top) * .25;
    this.move(x, y, 4000);
  }
};
