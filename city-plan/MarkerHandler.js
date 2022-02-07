AFRAME.registerComponent("marker-handler", {
  init() {
    this.el.addEventListener("markerFound", (e) => this.handleMarkerFound(e));
  },
  handleMarkerFound(e) {
    const val = e.target.getAttribute("value");
    console.log("found", val);
    // document.querySelector(`#model-${val}`).setAttribute("visible", true);
  },
});
