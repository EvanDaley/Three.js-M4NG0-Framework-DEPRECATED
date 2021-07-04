/* 
  M4NG0 Scene
  This is prefixed with "M4" to create a clear disctinction between this and the Three.js scene.
  Extend this class for your own custom scenes.
*/

import { Object3D } from 'three';

class M4Prefab extends Object3D {
    constructor() {
        super();
    }

    tick() {
      
    }

    start() {
      
    }
}

M4Prefab.prototype.isM4Prefab = true;

export { M4Prefab };