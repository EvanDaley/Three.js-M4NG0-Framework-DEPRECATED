# Three.js Multi-Scene Framework
This project gives you a starting ground for a `multi-scene` project with three.js.
- Clean reusable project structure
- Assets management is greatly simplified. Models and textures are loaded asynchronously and can be shared between scenes
- One renderer, and one full-screen canvas
- Helper methods make it easy to create scenes and swap between them
- Webpack configuration makes it easy to build for production

Optional advanced features:
- GSAP provides a simple API for extremely customizable animations
- Customizable loading screen
- Deploy to github pages with one npm command.

## Live Demo
See the live demo here: [TODO]

## Setup
Clone this project. To avoid issues, we recommend copying all the project files except `.git/` into your own seperate folder.

`cd` into that project.

Run this followed commands:

``` bash
# Install dependencies (only the first time)
npm install

# Run the local server at localhost:8080
npm run dev

# Build for production in the dist/ directory
npm run build
```

## Development

# Assets
If you have any models or textures to load, put them in 
- `./static/models`
- `./static/textures`

All assets in those folders will be loaded asynchronously after page load by the AssetLoader class.

# Prefabs
TODO: Document this.

# Scenes
TODO: Document this.

## Deployment
To build a deployable package:
```
# Generate packages to ./dist folder.
npm run build
```
You can deploy anywhere by moving the files from `./dist` to any static fileserver (s3, hostgator, whatever)

If you have a repo, but don't have a webserver, I recommend deploying straight to github pages, a free static fileserver hosted by github. 

Deploy to github pages with:
```
# Trigger a commit to the github pages branch
npm run deploy
```
Then, on github, go into your repo settings->pages and choose `gh-pages` as the branch (and save!).
