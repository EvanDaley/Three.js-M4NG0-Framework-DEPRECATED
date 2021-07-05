/* 
  CustomScene1
  Copy this file to make your own scenes. 
  The methods are explained in the parent class.
*/

import { Color } from "three"
import { M4Scene } from "../M4NG0/Objects/M4Scene"
import { createLights } from "../M4NG0/SimpleFactories/createLights"
import { createControls } from '../M4NG0/SimpleFactories/createControls'
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
    createControls(this.camera, this.orchestrator.getCanvas())

    const { ambientLight, mainLight } = createLights()
    this.add(ambientLight, mainLight)
  }
}

export default CustomScene1