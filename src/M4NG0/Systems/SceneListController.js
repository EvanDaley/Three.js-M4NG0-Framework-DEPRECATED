/* 
  SceneListController
  Manage the list of scenes.
*/

import * as SceneList from '../../Scenes/SceneList.js'
import { M4Scene } from '../Objects/M4Scene.js'

class SceneListController {
  constructor() {
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

  currentScene() {
    if (this.scenes.length == 0) {
      return new M4Scene()
    }

    return this.scenes[this.currentSceneIndex]
  }

  async init() {

  }

  start() {
    this.currentScene().start()
  }
}

export { SceneListController };