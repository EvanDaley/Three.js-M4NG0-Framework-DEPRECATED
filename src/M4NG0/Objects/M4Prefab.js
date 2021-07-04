/* 
  M4NG0 Scene
  This is prefixed with "M4" to create a clear disctinction between this and the Three.js scene.
  Extend this class for your own custom scenes.
*/

import { Group } from 'three'

class M4Prefab extends Group {
  constructor() {
    super()
  }

  // Once the asset has loaded, grab the pieces we want from the data.
  processImportData(data) {
    const model = data.scene.children[0];
  
    return model;
  }

  importAssets() { return null }

  tick() {

  }

  start() {

  }
}

M4Prefab.prototype.isM4Prefab = true

export { M4Prefab }