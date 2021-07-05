AFRAME.registerComponent("arrow-controls", {
  schema: {
    rotationSpeed: {
      type: "number",
      default: 0,
    },
  },
  init() {
    window.addEventListener("keydown", (e) => {
      const rotation = this.el.getAttribute("rotation");

      if (e.key === "ArrowRight") {
        if (rotation.x < 10) {

          rotation.x += 0.01;
          this.el.setAttribute("rotation", Object.create(rotation));
        }
      }
      if (e.key === "ArrowLeft") {
        if (rotation.x > -10) {
          rotation.x -= 0.01;
          this.el.setAttribute("rotation", Object.create(rotation));
        }
      }

      if (e.key === "ArrowUp") {
        if (rotation.z < 10) {
          rotation.z += 0.01;
          this.el.setAttribute("rotation", Object.create(rotation));
        }
      }
      if (e.key === "ArrowDown") {
        if (rotation.z > -10) {
          rotation.z -= 0.01;
          this.el.setAttribute("rotation", Object.create(rotation));
        }
      }
    });
  },
  tick() {
    const rotation = this.el.getAttribute("rotation");

    rotation.y += this.data.rotationSpeed;

    this.el.setAttribute("rotation", {
      x: rotation.x,
      y: rotation.y,
      z: rotation.z,
    });
  },
});
