AFRAME.registerComponent("bullets", {
  init() {
    this.shootBullet();
  },
  shootBullet() {
    window.addEventListener("keydown", (e) => {
      if (e.key == "z") {
        const bullet = document.createElement("a-entity");
        bullet.setAttribute("geometry", { primitive: "sphere", radius: 0.1 });
        bullet.setAttribute("material", { color: "black" });
        const camera = document.querySelector("#camera");
        const pos = camera.getAttribute("position");
        bullet.setAttribute("position", { x: pos.x, y: pos.y, z: pos.z });
        // bullet.setAttribute("velocity", { x: 0, y: 0, z: -0.8 });

        const camObj = document.querySelector("#camera").object3D;
        const dir = new THREE.Vector3();

        camObj.getWorldDirection(dir);

        bullet.setAttribute("velocity", dir.multiplyScalar(-10));

        const scene = document.querySelector("#scene");
        scene.appendChild(bullet);
      }
    });
  },
});
