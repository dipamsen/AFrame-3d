AFRAME.registerComponent("move", {
  schema: {
    speed: {
      type: "number",
      default: 0.01,
    },
  },
  tick() {
    const speed = this.data.speed;
    const currPos = this.el.getAttribute("position");

    currPos.x += speed;

    this.el.setAttribute("position", Object.create(currPos));
  },
});
