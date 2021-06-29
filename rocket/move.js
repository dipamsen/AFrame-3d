AFRAME.registerComponent("move", {
  schema: {
    moveY: {
      type: "number",
      default: 0.001,
    },
  },
  tick() {
    this.data.moveY += 0.001;
    const pos = this.el.getAttribute("position");
    pos.y += this.data.moveY;
    this.el.setAttribute("position", Object.create(pos));
  },
});

AFRAME.registerComponent("camera-zoom-out", {
  schema: {
    moveZ: {
      type: "number",
      default: 0.01,
    },
  },
  tick() {
    this.data.moveZ += 0.002;
    const pos = this.el.getAttribute("position");
    pos.z += this.data.moveZ;
    this.el.setAttribute("position", Object.create(pos));
  },
});

AFRAME.registerComponent("fall-off", {
  schema: {
    moveY: {
      type: "number",
      default: 0,
    },
  },
  tick() {
    window.addEventListener("click", () => {
      this.data.moveY -= 0.005;
    });

    const pos = this.el.getAttribute("position");
    pos.y += this.data.moveY;
    this.el.setAttribute("position", Object.create(pos));
  },
});
