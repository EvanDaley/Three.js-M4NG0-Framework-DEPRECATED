/* 
  SceneListController
  Manage the list of scenes.
*/

import * as SceneList from '../../Scenes/SceneList.js'
import { M4Scene } from '../Objects/M4Scene.js'

class SceneListController {
  constructor(orchestrator) {
    this.orchestrator = orchestrator
    this.currentSceneIndex = 0

    this.createScenes()
  }

  // Instantiate all scenes listed in SceneList.js
  createScenes() {
    this.scenes = []
    const keys = Object.keys(SceneList.default)
    for (const key of keys) {
      // const sceneClass = SceneList.default[key]
      // const actualScene = new sceneClass(this.orchestrator)
      const actualScene = SceneList.default[key]
      this.scenes.push(actualScene)

      console.log('as', actualScene)
    }
  }

  getScenes() {
    return this.scenes
  }

  getCurrentScene() {
    if (this.scenes.length == 0) {
      return new M4Scene()
    }

    return this.scenes[this.currentSceneIndex]
  }

  async start() {
    this.getCurrentScene().start()
  }
}

export { SceneListController }