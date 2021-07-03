## Live Demo
See the live demo here: https://evandaley.github.io/Three.js-robot-animation/

## Setup
Download [Node.js](https://nodejs.org/en/download/).
Run this followed commands:

``` bash
# Install dependencies (only the first time)
npm install

# Run the local server at localhost:8080
npm run dev

# Build for production in the dist/ directory
npm run build
```

## Deployment
This uses the gh-pages npm package to manage deployment.

To deploy a new version:
```
# Update the build
npm run build

# Trigger a commit to the github pages branch
npm run deploy
```

For more information on deployment, see: https://www.npmjs.com/package/gh-pages
