AFRAME.registerComponent("load-models", {
  init() {
    this.fetchModels();
  },
  async fetchModels() {
    const url = "models.json";
    const res = await fetch(url);
    const models = await res.json();
    for (const model of models) {
      this.createModel(model);
    }
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
});
