AFRAME.registerComponent("load-models", {
  async init() {
    const models = await this.fetchModels();
    for (const model of models) {
      this.createModel(model);
    }
    this.createFullDesign(models);
  },
  async fetchModels() {
    const url = "models.json";
    const res = await fetch(url);
    return await res.json();
  },
  createModel(model) {
    const scene = document.querySelector("#main-scene");
    const marker = document.createElement("a-marker");

    marker.setAttribute("id", `marker-${model.barcodeValue}`);
    marker.setAttribute("type", "barcode");
    marker.setAttribute("model_name", model.name);
    marker.setAttribute("value", model.barcodeValue);
    marker.setAttribute("marker-handler", {});

    scene.appendChild(marker);

    const modelEl = document.createElement("a-entity");
    modelEl.setAttribute("id", `model-${model.barcodeValue}`);
    modelEl.setAttribute("city-design-model", {});
    modelEl.setAttribute("gltf-model", model.modelUrl);
    modelEl.setAttribute("scale", {
      x: model.scale,
      y: model.scale,
      z: model.scale,
    });
    // modelEl.setAttribute("position", "-6 0 0");
    modelEl.setAttribute("rotation", {
      x: -90,
      y: 0,
      z: 0,
    });
    // modelEl.setAttribute("visible", false);
    marker.appendChild(modelEl);
  },
  createFullDesign(models) {
    const fullDesign = document.createElement("a-entity");
    fullDesign.setAttribute("id", "full-design");
    fullDesign.setAttribute("position", {
      x: 0,
      y: 0,
      z: -5,
    });
    fullDesign.setAttribute("rotation", {
      x: 0,
      y: 90,
      z: 90,
    });
    models.forEach((mdl) => {
      const et = document.createElement("a-entity");
      et.setAttribute("id", `model-full-${mdl.barcodeValue}`);
      et.setAttribute("gltf-model", mdl.modelUrl);
      et.setAttribute("scale", {
        x: mdl.scale,
        y: mdl.scale,
        z: mdl.scale,
      });
      const carPos = { x: 0, y: 0, z: 0 };
      const carRot = { x: 0, y: 90, z: 0 };
      const b1Pos = { x: 0, y: 0, z: -0.7 };
      const b2Pos = { x: 0.4, y: 0, z: 0.7 };
      et.setAttribute(
        "position",
        mdl.name === "car" ? carPos : mdl.name === "apartment_1" ? b1Pos : b2Pos
      );
      et.setAttribute(
        "rotation",
        mdl.name === "car"
          ? carRot
          : {
              x: 0,
              y: 0,
              z: 0,
            }
      );
      fullDesign.append(et);
    });
    fullDesign.setAttribute("visible", false);
    const scene = document.querySelector("a-scene");
    scene.append(fullDesign);
    // document.querySelector("#marker-1").append(fullDesign);
  },
});

// AFRAME.registerComponent("city-design-model", {
//   init() {},
// });
