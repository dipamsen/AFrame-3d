AFRAME.registerComponent("car", {
  schema: {
    pos: { type: "vec3", default: { x: 0, y: 0, z: 0 } },
  },
  init() {
    const { x, y, z } = this.data.pos;
    this.el.setAttribute("position", { x: 6 + x, y: 2 + y, z: -10 + z });
  },
});
