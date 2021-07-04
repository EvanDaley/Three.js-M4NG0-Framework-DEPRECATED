/* 
  ParticleEffect.js
  Our second prefab! This one demonstrates using Three.js primitives and no static assets.
*/

import { M4Prefab } from "../M4NG0/Objects/M4Prefab"
import {
  BufferAttribute,
  BufferGeometry,
  Points,
  PointsMaterial
} from 'three';

class ParticleEffect extends M4Prefab {
  constructor() {
    super()

    this.isAnimatable = true
    this.createBackgroundParticles()
  }

  tick(delta) {
    this.rotation.y += delta * -.005
  }

  createBackgroundParticles() {
    const material = new PointsMaterial({
      size: 0.03
    })
    const particlesGeometry = new BufferGeometry
    const particlesCount = 5000
    const positionArray = new Float32Array(particlesCount * 3)

    for (let i = 0; i < particlesCount * 3; i++) {
      positionArray[i] = (Math.random() - .5) * 25
    }

    particlesGeometry.setAttribute('position', new BufferAttribute(positionArray, 3))
    const particlesMesh = new Points(particlesGeometry, material)

    this.add(particlesMesh)
  }
}

export { ParticleEffect }