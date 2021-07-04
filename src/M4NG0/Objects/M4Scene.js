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

    // Override this to put your camera in a different spot.
    createCamera() {
      return createCamera()
    }

    start() {
      
    }
}

M4Scene.prototype.isM4Scene = true

export { M4Scene }