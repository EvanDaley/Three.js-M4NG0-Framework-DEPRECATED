import throttle from "lodash.throttle"

import { createCamera } from '../M4NG0/SimpleFactories/perspectiveCamera.js';
import { createLights } from '../M4NG0/SimpleFactories/simpleLighting.js';
import { createScene } from '../M4NG0/SimpleFactories/simpleScene.js';
import { loadBots } from './components/bots/bots.js';
import { createGround } from '../M4NG0/SimpleFactories/ground.js'
import { createBackgroundParticles } from '../M4NG0/SimpleFactories/particleEffect';

import { createControls } from '../M4NG0/SimpleFactories/controls.js';
import { createRenderer } from '../M4NG0/SimpleFactories/renderer.js';
import { Resizer } from '../M4NG0/Systems/Resizer.js';
import { Loop } from '../M4NG0/Systems/Loop.js';
import { Color } from 'three';

let camera
let renderer
let scene
let loop
let controls
let ground
let container
let resizer

let scenes = []
let currentSceneIndex = 0
let world

let scrollProgress = 0
let progressBar

class World {
  constructor(targetElement) {
    container = targetElement
    world = this

    this.createResponsiveScene()
    this.createLights()
    this.createGameSystems()
    this.createSceneObjects()
    this.createParticleSystems()
  }

  createResponsiveScene() {
    const scene2 = createScene()
    scene2.background = new Color('black');

    scene = createScene();
    renderer = createRenderer();
    camera = createCamera();
    container.append(renderer.domElement);
    resizer = new Resizer(container, camera, renderer);


    progressBar = document.querySelector('.progress-bar');
    let scene1Html = document.querySelector('.scene-one-content')

    const trackScroll = (event) => {
      scrollProgress += 10
      console.log(scrollProgress)
      progressBar.style = `width: ${scrollProgress}%`

      if (scrollProgress > 100) {
        scrollProgress = 0
        currentSceneIndex += 1
        scene1Html.style = "display:none"
      }
    }
    renderer.domElement.addEventListener("wheel", throttle(trackScroll, 100));

    scenes.push(scene, scene2)
  }

  createLights() {
    const { ambientLight, mainLight } = createLights();
    scene.add(ambientLight, mainLight)
  }

  createGameSystems() {
    loop = new Loop(world, renderer);
    controls = createControls(camera, renderer.domElement);

    loop.updatables.push(
      controls
    );
  }

  createSceneObjects() {
    ground = createGround()

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

    controls.target.copy(chad.position)

    loop.updatables.push(chad)

    scene.add(chad)

    resizer.onResize()
  }

  render() {
    renderer.render(scenes[currentSceneIndex], camera);
  }

  start() {
    loop.start();
  }

  stop() {
    loop.stop();
  }
}

export { World };
