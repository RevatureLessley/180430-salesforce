"use strict";

class Voxel {
		constructor (position = [0.0, 0.0, 0.0], color = [1.0, 1.0, 1.0]) {
				this.my_color = vec4.fromValues(color[0], color[1], color[2]);
				this.my_position = vec3.fromValues(position[0], position[1], position[2]);
				
				this.x_vector = vec3.fromValues(1.0, 0.0, 0.0);
				this.y_vector = vec3.fromValues(0.0, 1.0, 0.0);
				this.z_vector = vec3.fromValues(0.0, 0.0, 1.0);
		}
		
		get position () {
				return this.my_position;
		}
		
		get color () {
				return this.my_color;
		}
}

class VoxelModel {
		constructor (gl, voxel_arr) {
				this.model_matrix = mat4.create();
				this.u_model_matrix = gl.getUniformLocation(gl.program, 'u_model_mat');
				if (!this.u_model_matrix) { 
						console.log('failed to get model matrix location');
						return;
				}
				this.VoxelArray = voxel_arr;
				this.num = this.VoxelArray.length;
				this.gl = gl;
				
				this.rot_x = 0;
				this.rot_y = 0;
				this.rot_z = 0;
				
				this.scale_vec = vec3.fromValues(0.0, 0.0, 0.0);
				this.my_origin = vec3.fromValues(0.0, 0.0, 0.0);
				this.set_matrix();
		}
		
		rotate_x (rad_x) { this.rot_x += rad_x; }
		rotate_y (rad_y) { this.rot_y += rad_y; }
		rotate_z (rad_z) { this.rot_z += rad_z; }
		
		scale (value) {vec3.add(this.scale_vec, this.scale_vec, [value, value, value]);}
		
		set_matrix () {
				var trans = vec3.create();
				var result = mat4.create();

				mat4.rotateX(result, result, this.rot_x, [1, 0, 0]);
				mat4.rotateY(result, result, this.rot_y, [0, 1, 0]);
				mat4.rotateZ(result, result, this.rot_z, [0, 0, 1]);
				
				mat4.scale(result, this.model_matrix, this.scale_vec);
				
				this.gl.uniformMatrix4fv(this.u_model_matrix, false, result);
		}
		
		get voxel_verts() {
				if (!this.v_verts) {
						let vertex_array = [];
						for (var i = 0; i < this.num; i++) {
								var position = this.VoxelArray[i].position;
								vertex_array.push(position[0], position[1], position[2]);
						}
						this.v_verts = new Float32Array(vertex_array);
				}
				return this.v_verts;
		}
		
		get voxel_colors() {
				if (!this.v_colors) {
						let color_array = [];
						for (var i = 0; i < this.num; i++) {
								var color = this.VoxelArray[i].color;
								color_array.push(color[0], color[1], color[2]);
						}
						this.v_colors = new Float32Array(color_array);
				}
				return this.v_colors;
		}
		
		loadAttrBuffer(data_arr, attribute) {
				var buffer = this.gl.createBuffer();
				if (!buffer) {
						console.log('Failed to create the buffer object');
						return false;
				}
				this.gl.bindBuffer(this.gl.ARRAY_BUFFER, buffer);
				this.gl.bufferData(this.gl.ARRAY_BUFFER, data_arr, this.gl.STATIC_DRAW);

				var attr_location = this.gl.getAttribLocation(this.gl.program, attribute);
				if (attr_location < 0) {
						console.log('cannot find attribute location of ' + attribute);
						return false;
				}
				this.gl.vertexAttribPointer(attr_location, 3, this.gl.FLOAT, false, 0, 0);
				this.gl.enableVertexAttribArray(attr_location);
				return true;
  }
		
		draw () {
				this.loadAttrBuffer(this.voxel_verts, 'a_position');
				this.loadAttrBuffer(this.voxel_colors, 'a_color');
				
				this.gl.drawArrays(this.gl.POINTS, 0, this.num);
		}
}

class Camera {
		constructor (gl) {
				this.gl = gl;
				this.view_matrix = mat4.create(); // ortho(-100, -100, 100, -100, 100, 100);
				this.u_view_matrix = gl.getUniformLocation(gl.program, 'u_view_mat');
				if (!this.u_view_matrix) { 
						console.log('failed to get view matrix location');
						return;
				}
				
				this.rot_x = 0;
				this.rot_y = 0;
				this.rot_z = 0;
		}
		
		rotate_x (rad_x) {
				this.rot_x = Math.max(Math.min(this.rot_x + rad_x, 90.0), -90.0);
		}
		
		rotate_y (rad_y) {
				this.rot_y += rad_y;
		}
		
		rotate_z (rad_z) {
				this.rot_z += rad_z;
		}
		//ZA_MOON.rotateX();
		set_matrix () {
				var result = mat4.create();
				mat4.rotateX(result, this.view_matrix, this.rot_x, [1, 0, 0]);
				mat4.rotateY(result, result, this.rot_y, [0, 1, 0]);
				mat4.rotateZ(result, result, this.rot_z, [0, 0, 1]);
				
				console.log("CAMERA: " + this.rot_x + ' ' + this.rot_y + ' ' + this.rot_z);
				
				this.gl.uniformMatrix4fv(this.u_view_matrix, false, result);
		}
}