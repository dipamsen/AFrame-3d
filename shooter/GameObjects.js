AFRAME.registerComponent("wire-fence", {
  init() {
    let x = -20;
    let z = 85;
    for (let i = 0; i < 10; i++) {
      const fence1 = document.createElement("a-entity");
      const fence2 = document.createElement("a-entity");
      const fence3 = document.createElement("a-entity");
      const fence4 = document.createElement("a-entity");
      x += 5;
      const y = 2.5;
      z -= 10;
      const scl = { x: 2, y: 2, z: 2 };
      fence1.setAttribute("id", "fence1-" + i);
      fence2.setAttribute("id", "fence2-" + i);
      fence3.setAttribute("id", "fence3-" + i);
      fence4.setAttribute("id", "fence4-" + i);

      fence1.setAttribute("position", { x: x, y: y, z: -35 });
      fence2.setAttribute("position", { x: x, y: y, z: 85 });
      fence3.setAttribute("position", { x: -30, y: y, z: z });
      fence4.setAttribute("position", { x: 50, y: y, z: z });

      fence3.setAttribute("rotation", { x: 0, y: 90, z: 0 });
      fence4.setAttribute("rotation", { x: 0, y: 90, z: 0 });

      fence1.setAttribute("scale", scl);
      fence2.setAttribute("scale", scl);
      fence3.setAttribute("scale", scl);
      fence4.setAttribute("scale", scl);

      fence1.setAttribute("gltf-model", "#fence");
      fence2.setAttribute("gltf-model", "#fence");
      fence3.setAttribute("gltf-model", "#fence");
      fence4.setAttribute("gltf-model", "#fence");

      fence1.setAttribute("static-body", {});
      fence2.setAttribute("static-body", {});
      fence3.setAttribute("static-body", {});
      fence4.setAttribute("static-body", {});

      const scene = document.querySelector("#scene");
      scene.appendChild(fence1);
      scene.appendChild(fence2);
      scene.appendChild(fence3);
      scene.appendChild(fence4);
    }
  },
});

AFRAME.registerComponent("boxes", {
  schema: {
    height: {
      type: "number",
      default: 3,
    },
    width: {
      type: "number",
      default: 3,
    },
    depth: {
      type: "number",
      default: 3,
    },
  },
  init() {
    for (let i = 0; i < 20; i++) {
      const box = document.createElement("a-entity");
      box.setAttribute("id", "box" + i);
      const x = Math.random() * 100 - 50;
      const y = 2.5;
      const z = Math.random() * 100 - 50;
      const pos = { x, y, z };
      box.setAttribute("position", pos);

      box.setAttribute("geometry", {
        primitive: "box",
        height: this.data.height,
        width: this.data.width,
        depth: this.data.depth,
      });

      box.setAttribute("material", {
        src: "./images/boxtexture1.jpg",
        repeat: "1 1 1",
      });

      box.setAttribute("static-body", {});

      const scene = document.querySelector("#scene");

      scene.appendChild(box);
    }
  },
});

