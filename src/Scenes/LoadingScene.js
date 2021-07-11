/* 
  LoadingScene
  Copy this file to make your own scenes. 
  The methods are explained in the parent class.
*/

import { Color } from "three"
import { M4Scene } from "../M4NG0/Objects/M4Scene"
import { createLights } from "../M4NG0/SimpleFactories/createLights"

class LoadingScene extends M4Scene {
  constructor(orchestrator) {
    super(orchestrator)
    this.hasFinishedLoading = false

    setTimeout(
      () => { this.enoughTimeHasElapsed = true; this.proceedWhenReady() },
      1000
    )
  }

  setDefaults() {
    this.background = new Color('#F5F5F5')
  }

  start() {
    this.hasFinishedLoading = true
    this.proceedWhenReady()
  }

  // Proceed after loading is finished or 1 second has passed (whichever comes last)
  proceedWhenReady() {
    if (this.hasFinishedLoading && this.enoughTimeHasElapsed) {
      this.orchestrator.switchToSceneUsingIndex(1)
    }
  }
}

export default LoadingScene