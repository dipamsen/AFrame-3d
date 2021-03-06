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
        let pos = camera.getAttribute("position");
        const cam = document.querySelector("#camera-rig");
        pos = cam.getAttribute("position");

        bullet.setAttribute("position", {
          x: pos.x,
          y: pos.y + 1,
          z: pos.z - 0.5,
        });
        bullet.setAttribute("dynamic-body", { shape: "sphere", mass: 0 });

        const camObj = document.querySelector("#camera").object3D;
        const dir = new THREE.Vector3();

        camObj.getWorldDirection(dir);

        bullet.setAttribute("velocity", dir.multiplyScalar(-10));

        bullet.addEventListener("collide", (e) => this.collideHandler(e));

        const scene = document.querySelector("#scene");
        scene.appendChild(bullet);
      }
    });
  },
  collideHandler(e) {
    const bullet = e.detail.target.el; // el
    const box = e.detail.body.el; // elHit

    if (box.id.includes("box")) {
      this.shootSound();
      //      box.setAttribute("material", { opacity: 0.6, transparent: true });
      bullet.removeEventListener("collide", this.shootBullet);

      const scene = document.querySelector("#scene");
      scene.removeChild(bullet);

      const impulse = new CANNON.Vec3(-2, 2, 1);
      const worldPoint = new CANNON.Vec3().copy(box.getAttribute("position"));

      box.body.applyImpulse(impulse, worldPoint);
    }
  },
  shootSound() {
    const en = document.querySelector("#sound2");
    en.components.sound.playSound();
  },
});
