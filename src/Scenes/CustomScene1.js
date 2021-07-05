/* 
  CustomScene1
  Copy this file to make your own scenes. 
  We declare which prefabs to import, and where to put them.
  Start will run when its time to display this scene.
*/

import { Color } from "three"
import { M4Scene } from "../M4NG0/Objects/M4Scene"
import { createLights } from "../M4NG0/SimpleFactories/createLights"
import { ParticleEffect } from "../Prefabs/ParticleEffect"
import { Robot } from "../Prefabs/Robot"

class CustomScene1 extends M4Scene {
  setDefaults() {
    this.background = new Color('#21282a')
  }

  blueprint() {
    return {
      prefabs: [
        Robot,
        ParticleEffect
      ]
    }
  }

  start() {
    const { ambientLight, mainLight } = createLights()

    this.add(ambientLight)
    this.add(mainLight)

    console.log('scene', this)
  }
}

export default CustomScene1