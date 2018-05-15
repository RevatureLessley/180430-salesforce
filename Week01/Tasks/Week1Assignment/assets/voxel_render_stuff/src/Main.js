"use strict";
/*
 * GLOBAL VARIABLES
 */
var MainCamera;
var MarioModel;
var gl;

function InitializeGame()
{
  var canvas = document.getElementById('webgl');
  gl = getWebGLContext(canvas);

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

  MarioModel = new VoxelModel(super_mario);
  MainCamera = new Camera();
  MarioModel.scale((1.0 / 20.0));
  MainCamera.set_uniforms();

  initDragEvents(canvas);

  // Start drawing
  var tick = function ()
  {
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    MarioModel.draw();

    requestAnimationFrame(tick, canvas);
  };
  tick();
}

function initDragEvents(canvas)
{
  var dragging = false;         // Dragging or not
  var lastX = -1, lastY = -1;   // Last position of the mouse

  canvas.onmousedown = function (ev) {   // Mouse is pressed
    var x = ev.clientX, y = ev.clientY;
    // Start dragging if a moue is in <canvas>
    var rect = ev.target.getBoundingClientRect();
    if (rect.left <= x && x < rect.right && rect.top <= y && y < rect.bottom) {
      lastX = x; lastY = y;
      dragging = true;
    }
  };

  canvas.onmouseup = function (ev) { dragging = false; }; // Mouse is released

  canvas.onmousemove = function (ev) { // Mouse is moved
    var x = ev.clientX, y = ev.clientY;
    if (dragging) {
      var factor = 100 / canvas.height; // The rotation ratio
      var dx = factor * (x - lastX);
      var dy = factor * (y - lastY);
      // Limit x-axis rotation angle to -90 to 90 degrees
      MainCamera.rotate_x(dy);
      MainCamera.rotate_y(dx);
      MainCamera.set_uniforms();
    }
    lastX = x, lastY = y;
  };
}

window.onload = function ()
{
  InitializeGame();
}