AFRAME.registerComponent("diver-rotation-reader", {
  init() {
    window.addEventListener("keydown", (e) => {
      const diverRotation = this.el.getAttribute("rotation");
      const diverPosition = this.el.getAttribute("position");
      switch (e.key) {
        case "ArrowLeft":
          if (diverRotation.z < 10) diverRotation.z += 0.5;
          break;
        case "ArrowRight":
          if (diverRotation.z > -10) diverRotation.z -= 0.5;
          break;
        case "ArrowUp":
          if (diverRotation.x > -10) diverRotation.x -= 0.5;
          if (diverPosition.z > 4) diverPosition.z -= 0.1;
          break;
        case "ArrowDown":
          if (diverRotation.x < 20) diverRotation.x += 0.5;
          if (diverPosition.z < 10) diverPosition.z += 0.1;
          break;
        default:
          break;
      }
      this.el.setAttribute("position", diverPosition);
      this.el.setAttribute("rotation", diverRotation);
    });
  },
});
