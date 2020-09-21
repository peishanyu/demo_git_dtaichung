/**
 * @name parallax-banner
 * @function handle youtube video banner
 */

// initial parallax mouse movement
var scene1 = document.getElementById('scene1');
var scene2 = document.getElementById('scene2');
if (scene1) {
  var parallaxInstance1 = new Parallax(scene1);
}

if (scene2) {
  var parallaxInstance2 = new Parallax(scene2);
}

/******** END Parallax banner ********/