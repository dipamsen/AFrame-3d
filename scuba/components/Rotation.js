// Component for Diver (Keydown Event Listener)
AFRAME.registerComponent("diver-rotation-reader", {
  init() {
    window.addEventListener("keydown", (e) => {
      // Get current rotation and position
      const diverPosition = this.el.getAttribute("position");
      const diverRotation = this.el.getAttribute("rotation");
      switch (e.key) {
        case "ArrowRight":
          if (diverRotation.z > -10) diverRotation.z -= 0.5;
          break;
        case "ArrowLeft":
          if (diverRotation.z < 10) diverRotation.z += 0.5;
          break;
        case "ArrowUp":
          if (diverRotation.x > -10) diverRotation.x -= 0.5;
          if (diverPosition.z > 4) diverPosition.z -= 0.1;
          break;
        case "ArrowDown":
          if (diverRotation.x < 10) diverRotation.x += 0.5;
          if (diverPosition.z < 10) diverPosition.z += 0.1;
          break;
        default:
          break;
      }
      // Set new rotation and position
      this.el.setAttribute("position", diverPosition);
      this.el.setAttribute("rotation", diverRotation);
    });
  },
});
