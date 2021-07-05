/* 
  Robot.js
  Our first prefab! Here we declare the assets to import, and the tick() behavior for our model.
*/

import { M4Prefab } from "../M4NG0/Objects/M4Prefab"
import { MathUtils } from 'three'

class Robot extends M4Prefab {
  constructor() {
    super()
    this.isAnimatable = true
    this.radiansPerSecond = MathUtils.degToRad(-3)
  }

  requiredAssets() {
    return [{
      type: 'model',
      filePath: 'models/Robot.glb',
    }]
  }

  tick(delta) {
    this.rotation.x += this.radiansPerSecond * delta
    this.rotation.y += this.radiansPerSecond * delta
  }

  start() {
    this.position.y = -1
  }
}

export { Robot }