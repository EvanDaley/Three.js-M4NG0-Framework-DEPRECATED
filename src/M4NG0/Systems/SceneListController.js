/* 
  SceneListController
  Manage the list of scenes.
*/

import * as SceneList from '../../Scenes/SceneList.js'

class SceneListController {
  constructor() {
    this.importSceneList()
  }

  importSceneList() {
    this.scenes = []

    const keys = Object.keys(SceneList.default)
    for (const key of keys) {
      const actualScene = SceneList.default[key]
      this.scenes.push(actualScene)
    }
  }

  async init() {

  }
}

export { SceneListController };