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

  // Here we specify which prefabs we'll use.
  prefabs() {
    this.robot = new Robot()
    this.particleEffect = new ParticleEffect()

    return [
      this.robot,
      this.particleEffect
    ]
  }

  start() {
    const { ambientLight, mainLight } = createLights()

    this.add(ambientLight)
    this.add(mainLight)

    this.add(this.robot)
    this.add(this.particleEffect)

    console.log('scene', this)
  }
}

export default new CustomScene1()