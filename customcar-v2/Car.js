AFRAME.registerComponent("car", {
  schema: {
    counter: { type: "number", default: 0 },
  },
  init() {
    this.handleClickEvent();
  },
  handleClickEvent() {
    window.addEventListener("click", () => {
      this.data.counter += 1;
      this.el.setAttribute("rotation", `0 ${(this.data.counter % 4) * 90} 0`);
    });
  },
});
