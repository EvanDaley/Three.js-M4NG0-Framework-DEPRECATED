/* 
  AssetLoader
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

  // TODO: Right now, we flatten the list and load everything. It would be a little more performant to load just the
  // first scene's assets and then circle back for the other scenes later.
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