AFRAME.registerComponent("car", {
  schema: {
    counter: { type: "number", default: 0 }
  },
  init() {
    this.handleClickEvent()
  },
  handleClickEvent() {
    window.addEventListener("click", () => {
      console.log("CLICKED")
      this.data.counter += 1
    })
  },
  tick() {
    console.log(this.data.counter)
    const xOff = 30
    // const { x, y, z } = this.el.getAttribute("position")
    // this.el.setAttribute("position", { x: x + xOff, y, z })
  }
});
