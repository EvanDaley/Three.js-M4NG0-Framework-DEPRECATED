/* 
  M4NG0 Scene
  This is prefixed with "M4" to create a clear disctinction between this and the Three.js scene.
  Extend this class for your own custom scenes.

  METHODS:
  setDefaults()
    This is called before the scene is rendered, so don't try to interact with the renderer.
    Can be used to set any default values for the scene like background color.
  
  blueprint()
    Right now this is only used for prefabs. List out the prefabs and they'll be imported automatically.
  
  start()
    This will run when its time to display this scene. Go crazy on this one. All the static assets are 
    ready so you can do whatever you want. Move things around, add behaviors, add controls, whatever.
*/

import { Color, Scene } from 'three';
import { createCamera } from './../SimpleFactories/perspectiveCamera.js';

class M4Scene extends Scene {
    constructor(orchestrator) {
        super()

        this.orchestrator = orchestrator
        this.camera = this.createCamera()
        this.setDefaults()
        this.prefabs = []
    }

    // Set any properties on the scene. https://threejs.org/docs/#api/en/scenes/Scene
    setDefaults() {
      this.background = new Color('#11181a')
    }

    // Use this to list out your prefabs. I'm planning on doing a bunch of cool stuff with this method later.
    blueprint() {
      return {
        prefabs: []
      }
    }

    // If you want different camera settings, override this method or modify "this.camera" directly (position, FOV, whatever).
    createCamera() {
      return createCamera()
    }

    // This is called once everything is loaded. You should override this.
    start() {}
}

M4Scene.prototype.isM4Scene = true

export { M4Scene }