AFRAME.registerComponent("flying-birds", {
  init() {
    for (let i = 0; i < 20; i++) {
      const id = `hurdle${i}`;
      const pos = {
        x: Math.random() * 3000 + -1000, // (-1000 to 2000)
        y: -20, // (-1 to 1)
        z: Math.random() * 3000 + -1000, // (-1000 to 2000)
      };
      this.flyingBirds(id, pos);
    }
  },
  flyingBirds(id, pos) {
    const terrainEl = document.querySelector("#terrain");
    const birdEl = document.createElement("a-entity");
    birdEl.setAttribute("id", id);
    birdEl.setAttribute("gltf-model", "#bird");
    birdEl.setAttribute("position", pos);
    birdEl.setAttribute("scale", { x: 500, y: 500, z: 500 });
    // birdEl.setAttribute("animation-mixer", {});
    birdEl.setAttribute("static-body", { shape: "sphere", sphereRadius: 1 });
    birdEl.setAttribute("gameplay", { elementId: `#${id}` });
    terrainEl.appendChild(birdEl);
  },
});
