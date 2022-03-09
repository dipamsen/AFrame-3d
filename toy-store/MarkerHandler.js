AFRAME.registerComponent("marker-handler", {
  init() {
    window.addEventListener("markerFound", this.handleMarkerFound);
    window.addEventListener("markerLost", this.handleMarkerLost);
  },
  handleMarkerFound() {
    document.querySelector("#buttons").style.display = "flex";

    const orderBtn = document.querySelector("#order-btn");
    const summaryBtn = document.querySelector("#summary-btn");
    console.log("Hi");

    orderBtn.addEventListener("click", function (e) {
      swal({
        title: "Thanks for Ordering!",
        timer: 2000,
        buttons: false,
      });
    });
    summaryBtn.addEventListener("click", function (e) {
      swal({
        icon: "warning",
        title: "Order Summary",
        text: "Work in Progress",
      });
    });
  },
  handleMarkerLost() {
    document.querySelector("#buttons").style.display = "none";
  },
});
