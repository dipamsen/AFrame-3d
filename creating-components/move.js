AFRAME.registerComponent("move", {
  schema: {
    speed: {
      type: "number",
      default: 0.01,
    },
    angularSpeed: {
      type: "number",
      default: 1,
    },
  },
  tick() {
    const speed = this.data.speed;
    const currPos = this.el.getAttribute("position");

    currPos.x += speed;

    this.el.setAttribute("position", Object.create(currPos));

    const rotationSpeed = this.data.angularSpeed;
    const rotation = this.el.getAttribute("rotation");

    rotation.x += rotationSpeed;
    this.el.setAttribute("rotation", rotation);
  },
});
