//Terrain Rotation
AFRAME.registerComponent("terrain-rotation-reader", {
  schema: {
    speedOfRoation: { type: "number", default: 0 },
  },
  init: function () {
    window.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") {
        if (this.data.speedOfRoation < 0.1) {
          this.data.speedOfRoation += 0.01;
        }
      }
      if (e.key === "ArrowLeft") {
        if (this.data.speedOfRoation > -0.1) {
          this.data.speedOfRoation -= 0.01;
        }
      }
    });
  },
  tick: function () {
    var mapRotation = this.el.getAttribute("rotation");

    mapRotation.y += this.data.speedOfRoation;

    this.el.setAttribute("rotation", {
      x: mapRotation.x,
      y: mapRotation.y,
      z: mapRotation.z,
    });
  },
});

//Plane rotation component
AFRAME.registerComponent("plane-rotation-reader", {
  schema: {
    speedOfRoation: { type: "number", default: 0 },
    speedOfAscent: { type: "number", default: 0 },
  },
  init: function () {
    window.addEventListener("keydown", (e) => {
      //get the data from the attributes
      this.data.speedOfRoation = this.el.getAttribute("rotation");
      this.data.speedOfAscent = this.el.getAttribute("position");

      var planeRotation = this.data.speedOfRoation;
      var planePosition = this.data.speedOfAscent;

      //control the attributes with the Arrow Keys
      if (e.key === "ArrowRight") {
        if (planeRotation.x < 10) {
          planeRotation.x += 0.5;
          this.el.setAttribute("rotation", planeRotation);
        }
      }
      if (e.key === "ArrowLeft") {
        if (planeRotation.x > -10) {
          planeRotation.x -= 0.5;
          this.el.setAttribute("rotation", planeRotation);
        }
      }
      if (e.key === "ArrowUp") {
        if (planeRotation.z < 20) {
          planeRotation.z += 0.5;
          this.el.setAttribute("rotation", planeRotation);
        }
        if (planePosition.y < 2) {
          planePosition.y += 0.01;
          this.el.setAttribute("position", planePosition);
        }
      }
      if (e.key === "ArrowDown") {
        if (planeRotation.z > -10) {
          planeRotation.z -= 0.5;
          this.el.setAttribute("rotation", planeRotation);
        }
        if (planePosition.y > -2) {
          planePosition.y -= 0.01;
          this.el.setAttribute("position", planePosition);
        }
      }
    });
  },
});