/* 
  M4NG0 Scene
  This is prefixed with "M4" to create a clear disctinction between this and the Three.js scene.
  Extend this class for your own custom scenes.
*/

import { Scene } from 'three';

class M4Scene extends Scene {
    constructor() {
        super();
    }

    /*
      Override this with the definition 
    */
    blueprint() {
      console.log("blueprint should be overriden by your custom scene")

      // E.g.
      // return {
      //   prefabs: [
      //     {
      //       name: 'Bot',
      //       x: 0, 
      //       y: 0
      //     }
      //   ]
      // }
    }

    start() {
      
    }
}

M4Scene.prototype.isM4Scene = true;

export { M4Scene };