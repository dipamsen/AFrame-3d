AFRAME.registerComponent("target-ring", {
  init: function () {
    for (let i = 1; i <= 20; i++) {
      const uniqueId = `ring${i}`;
      const posX = Math.random() * 3000 + -1000;
      const posY = Math.random() * 2 + -1;
      const posZ = Math.random() * 3000 + -1000;
      const position = { x: posX, y: posY, z: posZ };
      this.createRings(uniqueId, position);
    }
  },
  createRings: function (id, position) {
    const terrainEl = document.querySelector("#terrain");
    const ringEl = document.createElement("a-entity");
    ringEl.setAttribute("id", id);
    ringEl.setAttribute("position", position);
    ringEl.setAttribute("material", "color", "orange");
    ringEl.setAttribute("geometry", { primitive: "torus", radius: 8 });
    ringEl.setAttribute("static-body", { shape: "sphere", sphereRadius: 1 });
    ringEl.setAttribute("gameplay", { elementId: `#${id}` });
    terrainEl.appendChild(ringEl);
  },
});
