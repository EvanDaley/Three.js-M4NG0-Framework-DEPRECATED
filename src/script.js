import './style.css'
import { Orchestrator } from './M4NG0/Systems/Orchestrator'

async function main() {
  const canvasContainer = document.querySelector('#m4ng0-canvas-container')
  const orchestrator = new Orchestrator(canvasContainer)
  await orchestrator.init()
  orchestrator.start()
}

// Run main and display any async errors from the world.init() function.
window.onload = () => {
  main().catch(err => {
    console.error(err)
  })
}