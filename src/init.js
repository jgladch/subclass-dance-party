$(document).ready(function() {
  window.dancers = [];
  var taco;
  var mouse;
  var keys = {}; //Associative array for storing taco move keys

  $('.addDancerButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });

  $('.removeDancersButton').on('click', function() {
    $('.dancer').remove();
  });

  // $(document).keydown(function(e) {
  //   var x = 0;
  //   var y = 0;

  //   if (e.which === 37) { //left
  //     x = -50;
  //     y = 0;
  //   } else if (e.which === 38) { //up
  //     x = 0;
  //     y = -50;
  //   } else if (e.which === 39) { //right
  //     x = 50;
  //     y = 0;
  //   } else if (e.which === 40) { //down
  //     x = 0;
  //     y = 50;
  //   } else {
  //     return;
  //   }

  //   for (var i = 0; i < dancers.length; i++) {
  //     if (dancers[i].constructor === TacoDancer) {
  //       dancers[i].move(x, y);
  //     }
  //   }

  //   e.preventDefault(); // prevent the default action (scroll / move caret)
  // });

  setInterval(moveTaco, 20);

  $(document).keydown(function(e) {
    keys[e.keyCode] = true;
  });

  $(document).keyup(function(e) {
    delete keys[e.keyCode];
  });


  function moveTaco() {
    for (var direction in keys) {
      if (!keys.hasOwnProperty(direction)) continue;
      if (direction == 37) {
        window.taco.left -= 5;
        $('.taco').animate({left: '-=5'}, 0);
      }
      if (direction == 38) {
        window.taco.top -= 5;
        $('.taco').animate({top: '-=5'}, 0);
      }
      if (direction == 39) {
        window.taco.left += 5;
        $('.taco').animate({left: '+=5'}, 0);
      }
      if (direction == 40) {
        window.taco.left += 5;
        $('.taco').animate({top: '+=5'}, 0);
      }
    }
  };

  $(document).mousemove(function(event) {
    console.log(event);
    var left = event.pageX;
    var top = event.pageY;
    window.mouse.follow(top, left);
  });

});

