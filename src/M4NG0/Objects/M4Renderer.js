/* 
  M4NG0 Renderer
  This is prefixed with "M4" to create a clear disctinction between this and the Three.js scene.
  Extend this class for your own custom scenes.
*/

import { WebGLRenderer } from 'three'

class M4Renderer extends WebGLRenderer {
  constructor() {
    super()
    this.setDefaults()
  }

  setDefaults() {
    this.antialias = true
    this.physicallyCorrectLights = true
  }
}

M4Renderer.prototype.isM4Renderer = true

export { M4Renderer }