/* 
  M4NG0 Orchestrator
  1. Create helper classes like AssetLoader, SceneListController, and BlueprintBuilder
  2. Build the list of scenes
  3. Loop through the scenes and load whatever prefabs we are going to need. Async the associated assets for each prefab.
  4. Store the prefabs in an array and make them accessible to the scenes
  5. Loop through the scenes and "build" each one based on the blueprint
  6. Each time we finish building a scene, log "scene x is ready"
*/

import { AssetLoader } from "./AssetLoader"
import { SceneListController } from "./SceneListController"

class Orchestrator {
  constructor(targetCanvas) {
    this.canvas = targetCanvas

    this.assetLoader = new AssetLoader()
    this.sceneListController = new SceneListController()
  }

  async init() {
    await this.sceneListController.init()
    await this.assetLoader.init()
  }

  
}

export { Orchestrator }
