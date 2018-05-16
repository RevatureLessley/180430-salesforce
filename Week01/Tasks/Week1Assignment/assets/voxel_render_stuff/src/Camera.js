var pers = true;

class Camera {

	static get projmat ()
	{
		let proj = mat4.create();

		if (pers)
		{
			mat4.ortho(proj, -1, 1, -1, 1, -1, 1);
		}
		else {
			mat4.perspective( proj, 0.8, 1, -1.0, 1.0);
		}

		return proj;
	}

	constructor() {
		this.view_matrix = mat4.create();
		mat4.lookAt(this.view_matrix, [0, 0, 0], [0, 0, -1], [0, 1, 0]);
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

		mat4.mul(result , Camera.projmat, result);

		gl.uniformMatrix4fv(this.u_view_matrix, false, result);
	}

	static change_proj ()
	{
		pers = !pers;
		Camera.changed = true;
	}

}