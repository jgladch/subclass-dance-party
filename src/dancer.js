var Dancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');
  this.top = top;
  this.left = left;
  this.setPosition(this.top, this.left);
  this.step(timeBetweenSteps);
};

Dancer.prototype.step = function(timeBetweenSteps) {
  setTimeout(this.step.bind(this, timeBetweenSteps), timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left) {
  this.top = top;
  this.left = left;
  var styleSettings = {
    top: this.top,
    left: this.left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.setColor = function(border) {
  var styleSettings = {
    border: border
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.move = function(x, y, timeBetweenSteps) {
  var duration = timeBetweenSteps || 200;
  this.top = this.top + y;
  this.left = this.left + x;
  this.$node.animate({'left': this.left, 'top': this.top}, timeBetweenSteps);
}
