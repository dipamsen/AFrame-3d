AFRAME.registerComponent("player-movement", {
  init() {
    this.walk();
  },
  walk() {
    window.addEventListener("keydown", (e) => {
      console.log(e.key);
      if (
        e.key === "ArrowUp" ||
        e.key === "ArrowDown" ||
        e.key === "ArrowLeft" ||
        e.key === "ArrowRight"
      ) {
        const sound = document.querySelector("#sound1");
        sound.components.sound.playSound();
      }
    });
  },
});
