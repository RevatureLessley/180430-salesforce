"use strict";

class VoxelModel {

	constructor(voxel_arr) {
		this.model_matrix = mat4.create();
		this.u_model_matrix = gl.getUniformLocation(gl.program, 'u_model_mat');
		if (!this.u_model_matrix) {
			console.log('failed to get model matrix location');
			return;
		}
		this.VoxelArray = voxel_arr;
		this.num_points = this.VoxelArray.length;
		this.rot_vec = [0, 0, 0];
		this.scale_vec = vec3.fromValues(0.0, 0.0, 0.0);
		this.my_origin = vec3.fromValues(0.0, 0.0, 0.0);

		this.set_buffer_data();
	}

	rotate_x(rad_x) { this.rot_vec[0] += rad_x; }
	rotate_y(rad_y) { this.rot_vec[1] += rad_y; }
	rotate_z(rad_z) { this.rot_vec[2] += rad_z; }

	scale(value) { vec3.add(this.scale_vec, this.scale_vec, [value, value, value]); }

	set_uniforms() {
		var result = mat4.create();

		mat4.rotateX(result, result, this.rot_vec[0], [1, 0, 0]);
		mat4.rotateY(result, result, this.rot_vec[1], [0, 1, 0]);
		mat4.rotateZ(result, result, this.rot_vec[2], [0, 0, 1]);


		mat4.scale(result, this.model_matrix, this.scale_vec);
		mat4.translate(result, result, [-6.0, -8.0, -4.0] );
	

		gl.uniformMatrix4fv(this.u_model_matrix, false, result);
	}

	set_buffer_data() {
		let vertex_array = [];
		let color_array = [];
		for (var i = 0; i < this.num_points; i++) {
			var position = this.VoxelArray[i].position;
			var color = this.VoxelArray[i].color;
			vertex_array.push(position[0], position[1], position[2]);
			color_array.push(color[0], color[1], color[2]);
		}

		this.v_verts = new Float32Array(vertex_array);
		this.v_colors = new Float32Array(color_array);

		this.loadAttrBuffer(this.v_verts, 'a_position');
		this.loadAttrBuffer(this.v_colors, 'a_color');
	}

	loadAttrBuffer(data_arr, attribute) {
		var buffer = gl.createBuffer();
		if (!buffer) {
			console.log('Failed to create the buffer object');
			return false;
		}
		gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
		gl.bufferData(gl.ARRAY_BUFFER, data_arr, gl.STATIC_DRAW);

		var attr_location = gl.getAttribLocation(gl.program, attribute);
		if (attr_location < 0) {
			console.log('cannot find attribute location of ' + attribute);
			return false;
		}
		gl.vertexAttribPointer(attr_location, 3, gl.FLOAT, false, 0, 0);
		gl.enableVertexAttribArray(attr_location);

		gl.bindBuffer(gl.ARRAY_BUFFER, null);
	}

	draw() {
		this.set_uniforms();
		gl.drawArrays(gl.POINTS, 0, this.num_points);
	}

}
