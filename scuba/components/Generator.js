// Generator component for creating multiple entities (fish/treasure/etc)
AFRAME.registerComponent("generator", {
  schema: {
    // Name of the entity (used in id)
    identifier: { type: "string", required: "true" },
    // Number of entities to generate
    count: { type: "number", default: 10 },
    // X min and max for random position
    xRange: { type: "vec2", default: { x: -50, y: 50 } },
    // Y min and max for random position
    yRange: { type: "vec2", default: { x: 5, y: 10 } },
    // Z min and max for random position
    zRange: { type: "vec2", default: { x: -50, y: 50 } },
    // Sample entity id for rotation/scale/animation
    sample: { type: "selector" },
  },
  init() {
    const { identifier } = this.data;

    for (let i = 1; i <= this.data.count; i++) {
      const id = `${identifier}${i}`;

      const position = {
        x: getRandomNumber(this.data.xRange.x, this.data.xRange.y),
        y: getRandomNumber(this.data.yRange.x, this.data.yRange.y),
        z: getRandomNumber(this.data.zRange.x, this.data.zRange.y),
      };

      const entity = this.createEntity(id, position);

      this.el.appendChild(entity);
    }
  },
  createEntity(id, position) {
    const { sample } = this.data;

    const entity = document.createElement("a-entity");

    entity.setAttribute("id", id);

    entity.setAttribute("position", position);
    entity.setAttribute("rotation", sample.getAttribute("rotation"));
    entity.setAttribute("scale", sample.getAttribute("scale"));

    entity.setAttribute("material", sample.getAttribute("material"));
    entity.setAttribute("geometry", sample.getAttribute("geometry"));
    entity.setAttribute("gltf-model", sample.getAttribute("gltf-model"));

    entity.setAttribute("animation", sample.getAttribute("animation"));
    entity.setAttribute("animation-mixer", {});

    return entity;
  },
});

// Generator Sample Component for defining a sample entity during myultiple generation.
// Sets visibility to false
AFRAME.registerComponent("generator-sample", {
  schema: { identifier: { type: "string", required: true } },
  init() {
    this.el.setAttribute("visible", false);
  },
});

/**
 * Returns a random integer value between min and max
 */
function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}
