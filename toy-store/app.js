AFRAME.registerComponent("create-buttons", {
  init() {
    const smrBtn = document.createElement("button");
    smrBtn.innerText = "ORDER SUMMARY";
    smrBtn.setAttribute("id", "summary-btn");
    smrBtn.classList.add("btn", "btn-primary");

    const ordBtn = document.createElement("button");
    ordBtn.innerText = "ORDER NOW";
    ordBtn.setAttribute("id", "order-btn");
    ordBtn.classList.add("btn", "btn-primary");

    const buttonContainer = document.getElementById("buttons");
    buttonContainer.appendChild(smrBtn);
    buttonContainer.appendChild(ordBtn);
  },
});
