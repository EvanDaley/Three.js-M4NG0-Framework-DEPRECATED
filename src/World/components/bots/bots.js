import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

import { setupModel } from './setupModel.js';

async function loadBots() {
  const loader = new GLTFLoader();

  const [chadData] = await Promise.all([
    loader.loadAsync('models/Bot.glb'),
  ]);

  console.log('Squaaawk!', chadData)

  const chad = setupModel(chadData)

  chad.position.set(0, 0, 2.5)

  return {
    chad,
  };
}

export { loadBots }