import { createCamera } from './components/camera.js';
import { createLights } from './components/lights.js';
import { createScene } from './components/scene.js';
import { loadBots } from './components/bots/bots.js';
import { createGround } from './components/ground.js'
import { createBackgroundParticles } from './components/particles';

import { createControls } from './systems/controls.js';
import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Resizer.js';
import { Loop } from './systems/Loop.js';

let camera
let renderer
let scene
let loop
let controls
let container
let resizer 

class World {
  constructor(targetElement) {
    container = targetElement

    this.createResponsiveScene()
    this.createLights()
    this.createGameSystems()
    this.createSceneObjects()
    this.createParticleSystems()
  }

  createResponsiveScene() {
    scene = createScene();
    renderer = createRenderer();
    camera = createCamera();
    container.append(renderer.domElement);
    resizer = new Resizer(container, camera, renderer);
  }

  createLights() {
    const { ambientLight, mainLight } = createLights();
    scene.add(ambientLight, mainLight)
  }

  createGameSystems() {
    loop = new Loop(camera, scene, renderer);
    controls = createControls(camera, renderer.domElement);

    loop.updatables.push(
      controls
    );
  }

  // TODO: Make this a child method on the Act
  createSceneObjects() {
    // ground = createGround()

    // scene.add(
    //   ground
    // );
  }

  createParticleSystems() {
    const backgroundParticles = createBackgroundParticles()
    scene.add(backgroundParticles)
    loop.updatables.push(backgroundParticles)
  }

  async init() {
    const { chad } = await loadBots()

    // const camTarget = chad.position + (new Vector3(0,-1,0))


    controls.target.copy(chad.position)

    loop.updatables.push(chad)

    scene.add(chad)

    resizer.onResize()
  }

  render() {
    renderer.render(scene, camera);
  }

  start() {
    loop.start();
  }

  stop() {
    loop.stop();
  }
}

export { World };
