AFRAME.registerComponent("key-movement", {
  schema: {
    velocity: {
      type: "vec3",
      default: { x: 0, y: 0, z: -0.1 },
    },
  },
  // On init
  init() {
    // Check for Keypresses
    window.addEventListener("keydown", (e) => {
      const MoverMap = {
        ArrowRight: { x: 0.1, y: 0, z: 0 },
        ArrowLeft: { x: -0.1, y: 0, z: 0 },
      };
      if (e.code in MoverMap) {
        const adder = MoverMap[e.code];
        this.data.velocity = vecAdd(this.data.velocity, adder).clamp(
          new THREE.Vector3(-2, -2, -2),
          new THREE.Vector3(2, 2, 2)
        );
        this.el.setAttribute(
          "rotation",
          vecAdd(vecScale(this.data.velocity, 8), { x: 0, y: 90, z: 0 })
        );
      }
    });
  },
  // On every frame
  tick() {
    // Add Velocity to planes position
    this.el.setAttribute(
      "position",
      vecAdd(this.el.getAttribute("position"), this.data.velocity)
    );
    moveCamera();
  },
});
