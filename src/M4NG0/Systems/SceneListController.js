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

    this.importSceneList()
  }

  importSceneList() {
    this.scenes = []
    const keys = Object.keys(SceneList.default)
    for (const key of keys) {
      const sceneClass = SceneList.default[key]
      const actualScene = new sceneClass(this.orchestrator)

      this.scenes.push(actualScene)
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

  setCurrentSceneIndex(index) {
    this.currentSceneIndex = index
    this.fireActivateEvent()
  }

  // Notify all scenes that they have been created.
  async fireCreateEvent() {
    this.getScenes().forEach(scene => {
      scene.onCreate()
    })
  }

  // Notify the current scene that we switched to it.
  async fireActivateEvent() {
    this.getCurrentScene().onActivate()
  }
}

export { SceneListController }