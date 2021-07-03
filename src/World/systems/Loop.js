import { Clock } from 'three';

const clock = new Clock();

class Loop {
  constructor(camera, scene, renderer) {
    this.camera = camera;
    this.scene = scene;
    this.renderer = renderer;
    this.updatables = [];

    this.mouseX = 0
    this.mouseY = 0

    this.prevMouseX = 0
    this.prevMouseY = 0

    this.mouseDeltaX = 0
    this.mouseDeltaY = 0

    this.createMouseListener()
  }

  createMouseListener() {
    document.addEventListener('mousemove', (event) => {
      this.updateMouseStats(event)
    })
  }

  updateMouseStats(event) {
    this.prevMouseX = this.mouseX
    this.prevMouseY = this.mouseY

    this.mouseX = event.clientX
    this.mouseY = event.clientY

    this.mouseDeltaX = this.mouseX - this.prevMouseX
    this.mouseDeltaY = this.mouseY - this.prevMouseY
  }

  start() {
    this.renderer.setAnimationLoop(() => {
      this.tick();

      this.renderer.render(this.scene, this.camera);
    });
  }

  stop() {
    this.renderer.setAnimationLoop(null);
  }

  tick() {
    const delta = clock.getDelta();


    for (const object of this.updatables) {
      object.tick(delta, this.mouseDeltaX, this.mouseDeltaY);
      this.mouseDeltaX = 0
      this.mouseDeltaX = 0
    }
  }
}

export { Loop };
