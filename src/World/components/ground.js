import {
  Mesh,
  MeshBasicMaterial,
  Object3D,
  PlaneBufferGeometry,
} from 'three';

function createGround() {
  const geometry = new PlaneBufferGeometry(5, 5, 10, 10);

  // Container
  const container = new Object3D()

  // Material
  const material = new MeshBasicMaterial({
    color: 'red'
  });
  const plane = new Mesh(geometry, material);

  plane.rotation.x = -Math.PI / 2
  plane.position.z = 2
  plane.frustumCulled = false
  plane.matrixAutoUpdate = false
  plane.updateMatrix()
  container.add(plane)

  return container;
}

export { createGround };
