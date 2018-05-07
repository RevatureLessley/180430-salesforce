"use strict";

var VERTEX_SOURCE =`
		attribute vec4 a_position;
		attribute vec3 a_color;
		
		uniform mat4 u_view_mat;
		uniform mat4 u_model_mat;
		
		varying vec3 f_color;
		
		void main() {
				vec4 position = u_view_mat * u_model_mat  * a_position * 40.0;
				gl_Position.x = (fract(position.x) < 0.5)? floor(position.x)/40.0 : ceil(position.x)/40.0;
				gl_Position.y = (fract(position.y) < 0.5)? floor(position.y)/40.0 : ceil(position.y)/40.0;
				gl_Position.z = (fract(position.z) < 0.5)? floor(position.z)/40.0 : ceil(position.z)/40.0;
				gl_Position.w = 1.0;
				gl_PointSize = 10.0;
				f_color = a_color;
}
`;

var FRAGMENT_SOURCE =`
  precision mediump float;
		
  varying vec3 f_color;
		
		void main() {
				gl_FragColor = vec4(f_color, 1.0);
		}
`;