/**
 * @typedef {{x: number, y: number, z: number}} Vec3
 */

/**
 * Returns the result of addition of two `Vec3`s
 * @param {Vec3} v1
 * @param {Vec3} v2
 */
function vecAdd(v1, v2) {
  const x = new THREE.Vector3(v1.x, v1.y, v1.z);
  const y = new THREE.Vector3(v2.x, v2.y, v2.z);
  return x.add(y);
}

/**
 * Returns the scaled version of a `Vec3`
 * @param {Vec3} v
 * @param {number} s
 */
function vecScale(v, s) {
  const x = new THREE.Vector3(v.x, v.y, v.z);
  return x.multiplyScalar(s);
}
