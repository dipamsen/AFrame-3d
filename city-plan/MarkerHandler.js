const visibleBarcodes = [];

AFRAME.registerComponent("marker-handler", {
  init() {
    this.el.addEventListener("markerFound", (e) => this.handleMarkerFound(e));
    this.el.addEventListener("markerLost", (e) => this.handleMarkerLost(e));
  },
  handleMarkerFound(e) {
    const val = e.target.getAttribute("value");
    visibleBarcodes.push(val);

    if (visibleBarcodes.length === 3) {
      this.hideModels();
      this.showFullDesign();
    } else {
      this.showModels();
      this.hideFullDesign();
    }
  },
  hideModels() {
    const models = document.querySelectorAll("[city-design-model]");
    // alert(modelsp[0]);
    models.forEach((elt) => elt.setAttribute("visible", false));
  },
  showModels() {
    document
      .querySelectorAll("[city-design-model]")
      .forEach((elt) => elt.setAttribute("visible", true));
  },
  hideFullDesign() {
    document.querySelector("#full-design").setAttribute("visible", false);
  },
  showFullDesign() {
    document.querySelector("#full-design").setAttribute("visible", true);
  },
  handleMarkerLost(e) {
    const val = e.target.getAttribute("value");
    removeElement(visibleBarcodes, val);
  },
});

/** removes an element from an array
 * @param {number[]} arr
 * @param {number} elt
 */
function removeElement(arr, elt) {
  const idx = arr.indexOf(elt);
  arr.splice(idx, 1);
}
