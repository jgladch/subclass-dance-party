var Dancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');
  this.top = top;
  this.left = left;
  this.step(timeBetweenSteps);
  this.setPosition(top, left);
};

Dancer.prototype.step = function(timeBetweenSteps){
  setTimeout(this.step.bind(this, timeBetweenSteps), timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left){
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.setColor = function(border){
  var styleSettings = {
    border: border
  };
  this.$node.css(styleSettings);
};
