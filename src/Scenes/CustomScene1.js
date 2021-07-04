/* 
  CustomScene1
  Copy this file to make your own scenes. 
  We declare which prefabs to import, and where to put them.
  Start will run when its time to display this scene.
*/

import { M4Scene } from "../M4NG0/Objects/M4Scene"
import { Robot } from "../Prefabs/Robot"

class CustomScene1 extends M4Scene {
  // constructor() {
  //   super();
  // }

  // Here we specify which prefabs we'll use.
  prefabs() {
    const robot = new Robot()

    return {
    }
  }

  start() {
    // For now, lets hardcode a bunch of stuff in here to get this going.
    // We'll pull everything out and put it in the correct locations later.



  }
}

export default new CustomScene1()