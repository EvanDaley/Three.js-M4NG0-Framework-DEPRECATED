/* 
  AssetLoader
  
  In this class we:
  - Fetch the list of scenes -> prefabs -> required assets
  - Load all those required assets in parallel with Promise.all
  - Call any relevant prefab "processor" functions so that the prefab can specify what to use from the loaded assets.

  Design considerations:
  1. Right now, this feels a little too involved. I think I need to go back to the drawing board on 
     resource collection.
  2. If we decide to stick with this approach, we can improve it by sorting the assets by scene priority. 
     Load all of the first scene's assets, let that scene do its thing, then circle back and load everything else in the background.
*/

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

class AssetLoader {
  constructor(orchestrator) {
    this.orchestrator = orchestrator
    this.loader = new GLTFLoader()
  }

  getPrefabList() {
    const prefabs = []
    this.orchestrator.getScenes().forEach(scene => {
      const scenePrefabs = scene.prefabs()
      if (scenePrefabs) {
        scenePrefabs.forEach(element => {
          prefabs.push(element)
        })
      }
    })

    return prefabs
  }

  getRequiredAssetDefinitions() {
    const prefabList = this.getPrefabList()
    const requiredAssetDefinitions = []

    if (prefabList) {
      prefabList.forEach(prefab => {
        const definitions = prefab.requiredAssets()
        if (definitions) {
          definitions.forEach(definition => {
            definition.prefab = prefab
            requiredAssetDefinitions.push(definition)
          })
        }
      })
    }
    return requiredAssetDefinitions
  }

  async loadAndProcessAsset(requiredAssetDefinition) {
    console.log("Loading asset", requiredAssetDefinition)
    const data = await this.loader.loadAsync(requiredAssetDefinition.filePath)

    // TODO: Refactor. I hate this. Find a better way to let prefabs interpret/process their own imported model data.
    if (requiredAssetDefinition.processor) {
      requiredAssetDefinition.processor(data)
    } else {
      requiredAssetDefinition.prefab.processImportData(data)
    }

    console.log("Finished loading asset", requiredAssetDefinition)
  }

  async loadStaticAssets() {
    const requirements = this.getRequiredAssetDefinitions()
    const promiseArray = []

    requirements.forEach(requirement => {
      const promise = this.loadAndProcessAsset(requirement)
      promiseArray.push(promise)
    })

    await Promise.all(promiseArray)
  }
}

export { AssetLoader }