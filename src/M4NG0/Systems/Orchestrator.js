/* 
  M4NG0 Orchestrator
  1. Create helper classes like AssetLoader, SceneListController, and BlueprintBuilder
  2. Build the list of scenes
  3. Loop through the scenes and load whatever prefabs we are going to need. Async the associated assets for each prefab.
  4. Store the prefabs in an array and make them accessible to the scenes
  5. Loop through the scenes and "build" each one based on the blueprint
  6. Each time we finish building a scene, log "scene x is ready"
*/

import { M4Renderer } from "../Objects/M4Renderer"
import { AssetLoader } from "./AssetLoader"
import { Loop } from "./Loop"
import { Resizer } from "./Resizer"
import { SceneListController } from "./SceneListController"

class Orchestrator {
  constructor(canvasContainer) {
    this.canvasContainer = canvasContainer

    this.assetLoader = new AssetLoader(this)
    this.sceneListController = new SceneListController(this)
    this.renderer = new M4Renderer()
    this.gameLoop = new Loop(this)
    this.resizer = new Resizer(this.canvasContainer, this.getActiveCamera(), this.renderer)

    this.canvasContainer.append(this.renderer.domElement);
    this.render()
  }

  async init() {
    await this.assetLoader.loadStaticAssets()
    await this.sceneListController.start()
  }

  render() {
    this.renderer.render(
      this.sceneListController.getCurrentScene(),
      this.getActiveCamera()
    )
  }

  start() {
    this.gameLoop.start();
  }

  stop() {
    this.gameLoop.stop();
  }

  getScenes() {
    return this.sceneListController.getScenes()
  }

  getCurrentScene() {
    return this.sceneListController.getCurrentScene()
  }

  getActiveCamera() {
    return this.getCurrentScene().camera
  }
}

export { Orchestrator }
