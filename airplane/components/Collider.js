AFRAME.registerComponent("gameplay", {
  schema: {
    elementId: {
      type: "string",
      default: "#ring1",
    },
  },
  update() {
    this.isCollided(this.data.elementId);
  },
  isCollided(eltId) {
    const elt = document.querySelector(eltId);

    elt.addEventListener("collide", (e) => {
      if (eltId.includes("#ring")) {
        console.log(eltId, "collided");
      } else if (eltId.includes("#hurdle")) {
        console.log(eltId, "collided");
      }
    });
  },
});
