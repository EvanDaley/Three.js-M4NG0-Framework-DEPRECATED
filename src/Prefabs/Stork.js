import { M4Prefab } from "../M4NG0/Objects/M4Prefab"

class Stork extends M4Prefab {
  requiredAssets() {
    return [{
      type: 'model',
      filePath: 'models/Stork.glb',
    }]
  }

  start() {
    this.position.x = -3
  }
}

export { Stork }