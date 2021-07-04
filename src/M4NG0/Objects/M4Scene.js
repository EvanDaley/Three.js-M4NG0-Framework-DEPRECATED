/* 
  M4NG0 Scene
  This is prefixed with "M4" to create a clear disctinction between this and the Three.js scene.
  Extend this class for your own custom scenes.
*/

import { Color, Scene } from 'three';
import { createCamera } from './../SimpleFactories/perspectiveCamera.js';

class M4Scene extends Scene {
    constructor() {
        super()

        this.camera = this.createCamera()
        this.setDefaults()
    }

    // You can override this
    setDefaults() {
      this.background = new Color('#11181a')
    }

    // You can override this
    blueprint() {
      return {}
    }

    // If you want different camera settings, override this or modify this.camera directly.
    createCamera() {
      return createCamera()
    }

    start() {
      
    }
}

M4Scene.prototype.isM4Scene = true

export { M4Scene }