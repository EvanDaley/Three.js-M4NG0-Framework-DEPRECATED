/* 
  SceneListController
  Manage the list of scenes.
*/

import * as SceneList from '../../Scenes/SceneList.js'
import { M4Scene } from '../Objects/M4Scene.js'

class SceneListController {
  constructor(orchestrator) {
    this.orchestrator = orchestrator
    this.importSceneList()
    this.currentSceneIndex = 0
  }

  importSceneList() {
    this.scenes = []

    const keys = Object.keys(SceneList.default)
    for (const key of keys) {
      const actualScene = SceneList.default[key]
      this.scenes.push(actualScene)
    }
  }

  getPrefabList() {
    const prefabs = []
    this.scenes.forEach(scene => {
      prefabs.push(scene.prefabList())
    })

    return prefabs
  }

  currentScene() {
    if (this.scenes.length == 0) {
      return new M4Scene()
    }

    return this.scenes[this.currentSceneIndex]
  }

  async start() {
    this.currentScene().start()
  }
}

export { SceneListController }