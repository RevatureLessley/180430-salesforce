class Voxel {
    constructor(position = [0.0, 0.0, 0.0], color = [1.0, 1.0, 1.0]) {
        this.my_color = vec4.fromValues(color[0], color[1], color[2]);
        this.my_position = vec3.fromValues(position[0], position[1], position[2]);

        this.x_vector = vec3.fromValues(1.0, 0.0, 0.0);
        this.y_vector = vec3.fromValues(0.0, 1.0, 0.0);
        this.z_vector = vec3.fromValues(0.0, 0.0, 1.0);
    }

    get position() {
        return this.my_position;
    }

    get color() {
        return this.my_color;
    }
}