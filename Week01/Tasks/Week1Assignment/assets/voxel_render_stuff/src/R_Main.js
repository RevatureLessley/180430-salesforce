"use strict";

var ZA_MOON;

function InitializeGame() {
		var canvas = document.getElementById('webgl');
		var gl = getWebGLContext(canvas);
		if (!gl) {
				console.log('Failed to get the rendering context for WebGL');
				return;
		}
		if (!initShaders(gl, VERTEX_SOURCE, FRAGMENT_SOURCE)) {
    console.log('Failed to intialize shaders.');
    return;
  }
		gl.clearColor(0.0, 0.0, 0.0, 1.0);
  gl.enable(gl.DEPTH_TEST);
  gl.depthFunc(gl.LEQUAL);
		
		var JI_EARTH = new VoxelModel(gl, super_mario);
		ZA_MOON = new Camera(gl);
		JI_EARTH.scale((1.0/20.0));
		
		ZA_MOON.set_matrix();
		JI_EARTH.set_matrix();
  initEventHandlers(canvas);
  var tick = function() {   // Start drawing
    draw(gl, [JI_EARTH]);
    requestAnimationFrame(tick, canvas);
  };
  tick();
}

function initEventHandlers(canvas) {
  var dragging = false;         // Dragging or not
  var lastX = -1, lastY = -1;   // Last position of the mouse

  canvas.onmousedown = function(ev) {   // Mouse is pressed
    var x = ev.clientX, y = ev.clientY;
    // Start dragging if a moue is in <canvas>
    var rect = ev.target.getBoundingClientRect();
    if (rect.left <= x && x < rect.right && rect.top <= y && y < rect.bottom) {
      lastX = x; lastY = y;
      dragging = true;
    }
  };

  canvas.onmouseup = function(ev) { dragging = false;}; // Mouse is released

  canvas.onmousemove = function(ev) { // Mouse is moved
    var x = ev.clientX, y = ev.clientY;
    if (dragging) {
      var factor = 100/canvas.height; // The rotation ratio
      var dx = factor * (x - lastX);
      var dy = factor * (y - lastY);
      // Limit x-axis rotation angle to -90 to 90 degrees
      ZA_MOON.rotate_x(dy);
      ZA_MOON.rotate_y(dx);
						ZA_MOON.set_matrix();
    }
    lastX = x, lastY = y;
  };
}

function draw(gl, objects) {
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
		for (var i = 0; i < objects.length; i++) {
				objects[i].draw();
		}
}

InitializeGame();