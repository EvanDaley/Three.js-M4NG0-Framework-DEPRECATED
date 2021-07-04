/* 
  Robot.js
  Our first prefab! Here we declare the assets to import, and the tick() behavior for our model.
*/

import { M4Prefab } from "../M4NG0/Objects/M4Prefab"
import { AnimationMixer, MathUtils } from 'three'

class Robot extends M4Prefab {
  constructor() {
    super()
  }

  requiredAssets() {
    return [
      {
        type: 'model',
        filePath: 'models/Robot.glb',
        processor: this.processRobotData,
      }
    ]
  }

  // Once the asset has loaded, we let the prefab decide what to do with its own data.
  processRobotData(data) {
    const updatables = []

    for (let i = 0; i < data.scene.children.length; i++) {
      const model = data.scene.children[0]

      const clip = data.animations[0]

      model.tick = (delta) => { }

      if (clip) {
        const mixer = new AnimationMixer(model)
        const action = mixer.clipAction(clip)
        action.play()

        model.tick = (delta) => mixer.update(delta)
      }

      this.prefab.add(model)
      updatables.push(model)
    }

    const radiansPerSecond = MathUtils.degToRad(-3)

    this.tick = (delta) => {
      for (const object of updatables) {
        object.tick(delta)
      }

      this.rotation.x += radiansPerSecond * delta
      this.rotation.y += radiansPerSecond * delta
    }

    return this
  }

  start() {
    console.log("Robot Start")
  }

  tick() {
    console.log("Robot Tick")
  }
}

export { Robot }