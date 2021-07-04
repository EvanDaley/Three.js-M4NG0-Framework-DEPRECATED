/* 
  CustomScene1
  Copy this file to make your own scenes. 
  We declare which prefabs to import, and where to put them.
  Start will run when its time to display this scene.
*/

import { BoxBufferGeometry, Mesh, MeshBasicMaterial, Color } from "three"
import { M4Scene } from "../M4NG0/Objects/M4Scene"
import { Robot } from "../Prefabs/Robot"

class CustomScene1 extends M4Scene {
  // constructor() {
  //   super();
  // }

  setDefaults() {
    this.background = new Color('#21282a')
  }

  // Here we specify which prefabs we'll use.
  prefabs() {
    this.robot = new Robot()
    
    return [
      this.robot,
    ]
  }

  start() {
    this.add(this.robot)
    console.log('scene', this)
  }
}

export default new CustomScene1()