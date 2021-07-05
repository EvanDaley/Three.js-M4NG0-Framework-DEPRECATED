/* 
  AssetLoader
  
  In this class we:
  - Fetch the list of scenes -> prefabs -> required assets
  - Load all those required assets in parallel with Promise.all
  - Call any relevant prefab "processor" functions so that the prefab can specify what to use from the loaded assets.

  Design considerations:
  1. Right now, this feels a little too involved. I think I need to go back to the drawing board on 
     asset collection.
  2. If we decide to stick with this approach, we can improve it by sorting the assets by scene priority. 
     Load all of the first scene's assets, let that scene do its thing, then circle back and load everything else in the background.
*/

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

class AssetLoader {
  constructor(orchestrator) {
    this.orchestrator = orchestrator
    this.loader = new GLTFLoader()
    this.instantiatedObjects = []
  }

  // Create an array of static asset requirements (as promises), and handle them all in parallel.
  async loadStaticAssets() {
    const requirements = this.getRequiredAssetDefinitions()
    const promiseArray = []

    requirements.forEach(requirement => {
      const promise = this.loadAndProcessAsset(requirement)
      promiseArray.push(promise)
    })

    await Promise.all(promiseArray)
  }

  // This is a promise to import and process one asset. Add it to the scene that imported it and save a reference.
  async loadAndProcessAsset(requiredAssetDefinition) {
    console.log("Loading asset", requiredAssetDefinition)
    const data = await this.loader.loadAsync(requiredAssetDefinition.filePath)

    // Let the prefab decide how to process the data. We define a processor function on the base class, but any prefab can override it.
    requiredAssetDefinition.prefab.processImportData(data)

    // Now that its finished loading, lets add it to the scene.
    this.addReadyPrefabToScene(requiredAssetDefinition.scene, requiredAssetDefinition.prefab)

    this.instantiatedObjects.push(requiredAssetDefinition.prefab)
    console.log("Finished loading asset", requiredAssetDefinition)
  }

  // List all of the static assets that are used by prefabs from getPrefabList
  getRequiredAssetDefinitions() {
    const prefabList = this.getPrefabList()
    const requiredAssetDefinitions = []

    if (prefabList) {
      prefabList.forEach(prefab => {
        const definitions = prefab.requiredAssets()
        if (definitions) {
          definitions.forEach(definition => {
            definition.prefab = prefab
            definition.scene = prefab.scene
            requiredAssetDefinitions.push(definition)
          })
        } else {
          // If a prefab does not have any static assets to load, let's add it to the scene immediately.
          // The other prefabs will be added later on after their promises execute.
          this.addReadyPrefabToScene(prefab.scene, prefab)
        }
      })
    }
    return requiredAssetDefinitions
  }

  // List all the prefabs used by all the scenes
  getPrefabList() {
    const prefabs = []
    this.orchestrator.getScenes().forEach(scene => {
      const scenePrefabClasses = scene.blueprint().prefabs
      if (scenePrefabClasses) {
        scenePrefabClasses.forEach(prefabClass => {
          const instantiatedObject = new prefabClass()
          instantiatedObject.scene = scene
          prefabs.push(instantiatedObject)
        })
      }
    })

    return prefabs
  }

  addReadyPrefabToScene(scene, prefab) {
    scene.add(prefab)
    prefab.start()
  }
}

export { AssetLoader }