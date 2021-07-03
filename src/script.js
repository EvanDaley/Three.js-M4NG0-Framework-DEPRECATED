import './style.css'
import { World } from './World/World.js';
import { gsap, ScrollTrigger, CSSRulePlugin } from "gsap/all";
import { Orchestrator } from './M4NG0/Orchestrator';

async function main() {
  // const orchestrator = new Orchestrator()

  await initThreeJSWorld()
  await initContentAnimations()
}

async function initThreeJSWorld() {
  const container = document.querySelector('#m4ng0-canvas-container');
  const canvas = document.querySelector('#m4ng0-canvas');
  const world = new World(container);

  // call any async functions
  await world.init()

  // start the three.js animation loop
  world.start();
}

async function initContentAnimations() {
  gsap.registerPlugin(ScrollTrigger, CSSRulePlugin);

  const content = CSSRulePlugin.getRule('.scene-one-content:before')
  const h1 = document.querySelector('h1')
  const subheading = document.querySelector('.subheading')
  const tl = gsap.timeline()

  tl.from(content, { delay: .5, duration: 4, cssRule: { scaleX: 0 } })
  tl.to(h1, { duration: 2, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)', y: '30px' }, "-=3")
  tl.to(subheading, { duration: 2, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)', y: '30px' }, "-=2")
}

// Run main and display any async errors from the world.init() function.
main().catch(err => {
  console.error(err)
});
