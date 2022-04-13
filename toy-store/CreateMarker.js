AFRAME.registerComponent("create-markers", {
  async init() {
    const scene = document.querySelector("a-scene");
    const toys = await this.getData();
    console.log(toys);
    toys.forEach((toy) => {
      const marker = document.createElement("a-marker");
      marker.setAttribute("id", toy.id);
      marker.setAttribute("type", "pattern");
      marker.setAttribute("url", toy.marker_pattern_url);
      marker.setAttribute("cursor", "rayOrigin: mouse");
      marker.setAttribute("marker-handler", {});
      scene.appendChild(marker);

      const model = document.createElement("a-entity");
      model.setAttribute("gltf-model", `#crane-model`);
      model.setAttribute("id", `${toy.id}-model`);
      model.setAttribute("gesture-handler", {});
      model.setAttribute("animation-mixer", {});
      model.setAttribute("visible", false);
      marker.appendChild(model);

      const priceText = document.createElement("a-entity");
      priceText.setAttribute("id", `${toy.id}-price`);
      priceText.setAttribute("text", {
        value: `Rs. ${toy.price}`,
        width: 1,
      });
      marker.appendChild(priceText);
    });
  },

  async getData() {
    const data = await firebase.firestore().collection("toys").get();
    return data.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  },
});
