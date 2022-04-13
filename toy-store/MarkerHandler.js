AFRAME.registerComponent("marker-handler", {
  init() {
    window.addEventListener("markerFound", this.handleMarkerFound.bind(this));
    window.addEventListener("markerLost", this.handleMarkerLost.bind(this));

    this.getUserId();
  },
  async getUserId() {
    const userId = await swal({
      title: "Welcome to Toy Store!",
      content: {
        element: "input",
        attributes: {
          placeholder: "Please enter your User ID",
        },
      },
    });
    this.userId = userId;
  },
  async handleMarkerFound() {
    document.querySelector("#buttons").style.display = "flex";
    const id = this.el.id;
    const doc = await firebase.firestore().collection("toys").doc(id).get();
    const toy = { ...doc.data(), id: doc.id };

    if (!toy.in_stock) {
      return swal({
        icon: "danger",
        title: "Out of Stock",
        text: `${toy.name} is currently Out of Stock. Please try again later.`,
      });
    }

    document.getElementById(toy.id).setAttribute("visible", true);

    const orderBtn = document.querySelector("#order-btn");
    const summaryBtn = document.querySelector("#summary-btn");

    orderBtn.addEventListener("click", (e) => {
      swal({
        title: "Thanks for Ordering!",
        timer: 2000,
        buttons: false,
      });
      this.handleOrder(toy);
    });
    summaryBtn.addEventListener("click", (e) => {
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
  async handleOrder(toy) {
    const user = await firebase
      .firestore()
      .collection("users")
      .doc(this.userId)
      .get();
    const details = user.data();
    if (details.current_orders[toy.id]) {
      const toyOrder = details.current_orders[toy.id];
      toyOrder.quantity++;
      toyOrder.subtotal = toy.price * toyOrder.quantity;
    } else {
      details.current_orders[toy.id] = {
        quantity: 1,
        subtotal: toy.price,
      };
    }
    firebase.firestore().collection("users").doc(user.id).update(details);
  },
});
