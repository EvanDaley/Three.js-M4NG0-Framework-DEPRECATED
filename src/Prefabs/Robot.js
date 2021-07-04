/* 
  Robot.js
  Our first prefab! Here we declare the assets to import, and the tick() behavior for our model.
*/

import { M4Prefab } from "../M4NG0/Objects/M4Prefab"
import { AnimationMixer, MathUtils } from 'three'

class Robot extends M4Prefab {
  requiredAssets() {
    return [
      {
        type: 'model',
        filePath: 'models/Robot.glb',
      }
    ]
  }
  
  constructor() {
    super()

    this.radiansPerSecond = MathUtils.degToRad(-3)
    this.isAnimatable = true
  }

  tick(delta) {
    this.rotation.x += this.radiansPerSecond * delta
    this.rotation.y += this.radiansPerSecond * delta
  }
}

export { Robot }