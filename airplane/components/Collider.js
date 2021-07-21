AFRAME.registerComponent("gameplay", {
  schema: {
    elementId: {
      type: "string",
      default: "#ring1",
    },
  },
  init() {
    const dur = 120;

    const timerEl = document.querySelector("#timer");
    this.startTimer(dur, timerEl);
  },
  startTimer(duration, timerElt) {
    setInterval(() => {
      duration -= 1;

      if (duration == 0) {
        this.gameOver();
      }

      let min = Math.floor(duration / 60).toString();
      let sec = (duration % 60).toString();

      min = min.padStart(2, 0);
      sec = sec.padStart(2, 0);

      if (duration <= 0) {
        min = "00";
        sec = "00";
      }

      timerElt.setAttribute("text", { value: min + ":" + sec });
    }, 1000);
  },
  updateTargets() {
    const targetElt = document.querySelector("#targets");
    const count = targetElt.getAttribute("text").value;
    let currTargets = parseInt(count);
    currTargets -= 1;
    targetElt.setAttribute("text", { value: currTargets });
  },
  updateScore() {
    const scoreElt = document.querySelector("#score");
    const count = scoreElt.getAttribute("text").value;
    let currScore = parseInt(count);
    currScore += 10;
    scoreElt.setAttribute("text", { value: currScore });
  },
  update() {
    this.isCollided(this.data.elementId);
  },
  isCollided(eltId) {
    const elt = document.querySelector(eltId);

    elt.addEventListener("collide", (e) => {
      if (eltId.includes("#ring")) {
        document.querySelector(eltId).setAttribute("visible", false);

        this.updateTargets();
        this.updateScore();
      } else if (eltId.includes("#hurdle")) {
        document.querySelector(eltId).setAttribute("visible", false);
        this.gameOver();
      }
    });
  },
  gameOver() {
    console.log("Game Over");

    const planeElt = document.querySelector("#plane_model");
    const gameOverElt = document.querySelector("#gameover");

    gameOverElt.setAttribute("visible", true);
    planeElt.setAttribute("dynamic-body", { mass: 1 });
  },
});
