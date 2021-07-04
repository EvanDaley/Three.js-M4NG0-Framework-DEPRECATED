/* 
  M4NG0 Orchestrator
  This class tracks scroll events on the canvas and helps us flip through our scenes.
*/

import { AssetLoader } from "./AssetLoader"
import * as SceneList from '../../Scenes/SceneList.js'

class Orchestrator {
  constructor(targetCanvas) {
    this.canvas = targetCanvas

    this.assetLoader = new AssetLoader()
    this.scenes = this.generateScenes()
  }

  generateScenes() {
    console.log(SceneList)
  }

  init() {

  }
}

export { Orchestrator }
