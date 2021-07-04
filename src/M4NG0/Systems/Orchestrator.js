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

    this.assetLoader = new AssetLoader()
    this.sceneListController = new SceneListController()
    this.renderer = new M4Renderer()
    this.gameLoop = new Loop(this)

    this.resizer = new Resizer(
      this.canvasContainer,
      this.getActiveCamera(),
      this.renderer
    )

    this.canvasContainer.append(this.renderer.domElement);
    this.render()
  }

  getActiveCamera() {
    return this.sceneListController.currentScene().camera
  }

  async init() {
    this.resizer.onResize()

    await this.sceneListController.init()
    await this.assetLoader.init()
    await this.sceneListController.start()

    // Sometimes we need to call this a second time to fix the sizing.
    this.resizer.onResize()

    // I'm not sure why we need to do this. Like 1 out of 10 loads, it doesn't 
    // setTimeout(() => {
    //   this.resizer.onResize()
    // }, 500)
  }

  render() {
    this.renderer.render(
      this.sceneListController.currentScene(),
      this.getActiveCamera()
    )
  }

  start() {
    this.gameLoop.start();
  }

  stop() {
    this.gameLoop.stop();
  }
}

export { Orchestrator }
