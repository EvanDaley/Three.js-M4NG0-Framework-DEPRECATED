/* 
  LoadingScene
  Proceed after assets have loaded or MIN_DURATION has passed, whichever comes last
*/

import { Color } from "three"
import { M4Scene } from "../M4NG0/Objects/M4Scene"

const MIN_DURATION = 3.7

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
      MIN_DURATION * 1000
    )
  }

  onActivate() {
    this.hasFinishedLoading = true
    this.proceedWhenReady()
  }

  proceedWhenReady() {
    if (this.hasFinishedLoading && this.enoughTimeHasElapsed) {
      this.orchestrator.switchToSceneUsingIndex(1)
    }
  }
}

export default LoadingScene