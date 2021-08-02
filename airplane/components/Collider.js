// Registering component in Collider.js
AFRAME.registerComponent("flying-birds", {
  init: function () {
    for (var i = 1; i <= 20; i++) {
      //id
      var id = `hurdle${i}`;

      //position variables
      var posX = Math.random() * 3000 + -1000;
      var posY = Math.random() * 2 + -1;
      var posZ = Math.random() * 3000 + -1000;

      var position = { x: posX, y: posY, z: posZ };

      //call the function
      this.flyingBirds(id, position);
    }
  },
  flyingBirds: (id, position) => {
    //Get the terrain element
    var terrainEl = document.querySelector("#terrain");

    //creating the bird model entity
    var birdEl = document.createElement("a-entity");

    //Setting multiple attributes
    birdEl.setAttribute("id", id);

    birdEl.setAttribute("position", position);
    birdEl.setAttribute("scale", { x: 500, y: 500, z: 500 });

    //set the gLTF model attribute
    birdEl.setAttribute("gltf-model", "./assets/models/flying_bird/scene.gltf");

    //set animation mixer of models with animation
    birdEl.setAttribute("animation-mixer", {});

    //set the static body of the physic system
    birdEl.setAttribute("static-body", {
      shape: "sphere",
      sphereRadius: 3.2,
    });

    //set the game play attribute
    birdEl.setAttribute("game-play", {
      elementId: `#${id}`,
    });

    //append the bird entity as the child of the terrain entity
    terrainEl.appendChild(birdEl);
  },
});