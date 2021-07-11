/* 
  LoadingScene
*/

import { Color } from "three"
import { M4Scene } from "../M4NG0/Objects/M4Scene"

const MIN_DURATION_MILLIS = 1000 * 2

class LoadingScene extends M4Scene {
  setDefaults() {
    this.background = new Color('#F5F5F5')
    this.hasFinishedLoading = false
    this.enoughTimeHasElapsed = false
  }

  onCreate() {
    setTimeout(
      () => {
        this.enoughTimeHasElapsed = true
        this.proceedWhenReady()
      },
      MIN_DURATION_MILLIS
    )
  }

  onActivate() {
    this.hasFinishedLoading = true
    this.proceedWhenReady()
  }

  // Proceed after assets have loaded or MIN_DURATION_MILLIS has passed, whichever comes last
  proceedWhenReady() {
    if (this.hasFinishedLoading && this.enoughTimeHasElapsed) {
      this.orchestrator.switchToSceneUsingIndex(1)
    }
  }
}

export default LoadingScene