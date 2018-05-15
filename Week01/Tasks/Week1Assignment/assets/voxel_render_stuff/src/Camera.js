
class Camera {

	constructor() {
		this.view_matrix = mat4.create(); // ortho(-100, -100, 100, -100, 100, 100);
		this.u_view_matrix = gl.getUniformLocation(gl.program, 'u_view_mat');

		if (!this.u_view_matrix) {
			console.log('failed to get view matrix location');
			return;
		}
		this.rot_vec = [0, 0, 0];
	}

	rotate_x(rad_x) { this.rot_vec[0] = Math.max(Math.min(this.rot_vec[0] + rad_x, 90.0), -90.0); }
	rotate_y(rad_y) { this.rot_vec[1] += rad_y; }
	rotate_z(rad_z) { this.rot_vec[2] += rad_z; }

	set_uniforms() {
		var result = mat4.create();

		mat4.rotateX(result, this.view_matrix, this.rot_vec[0]);
		mat4.rotateY(result, result, this.rot_vec[1]); 
		mat4.rotateZ(result, result, this.rot_vec[2]); 

		// console.log("CAMERA: " + this.rot_vec[0] + ' ' + this.rot_vec[1] + ' ' + this.rot_vec[2]);

		gl.uniformMatrix4fv(this.u_view_matrix, false, result);
	}
}