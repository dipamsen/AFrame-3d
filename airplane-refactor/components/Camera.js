/**
 * Moves Camera to third person view of the plane.
 */
function moveCamera() {
  const plane = document.querySelector("#plane");
  const planePos = plane.getAttribute("position");
  const cam = document.querySelector("#camera");
  cam.setAttribute("position", {
    x: planePos.x,
    y: planePos.y + 2,
    z: planePos.z + 5,
  });
}
