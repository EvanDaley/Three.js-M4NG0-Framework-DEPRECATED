const setSize = (container, camera, renderer) => {
  camera.aspect = container.clientWidth / container.clientHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
};

class Resizer {
  constructor(container, camera, renderer) {
    this.container = container
    this.camera = camera
    this.renderer = renderer

    setSize(container, camera, renderer);

    window.addEventListener('resize', () => {
      setSize(container, camera, renderer);
      this.onResize();
    });

    setSize(container, camera, renderer);
  }

  onResize() {
    setSize(this.container, this.camera, this.renderer)
  }
}

export { Resizer };
