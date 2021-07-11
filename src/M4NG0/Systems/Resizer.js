/* 
  M4NG0 Resizer
  Resize the canvas and update the projection matrix on the active camera.
*/

class Resizer {
  constructor(orchestrator, container, renderer) {
    this.orchestrator = orchestrator
    this.container = container
    this.renderer = renderer

    window.addEventListener('resize', () => {
      this.onResize()
    })

    this.onResize()
  }

  onResize() {
    const camera = this.orchestrator.getActiveCamera()

    camera.aspect = this.container.clientWidth / this.container.clientHeight
    camera.updateProjectionMatrix()

    this.renderer.setSize(this.container.clientWidth, this.container.clientHeight)
    this.renderer.setPixelRatio(window.devicePixelRatio)
  }
}

export { Resizer }
