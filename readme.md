# Three.js Multi-Scene Framework
This project gives you a starting ground for a `multi-scene` project with three.js.

- Clean reusable project structure. Easily adaptable for websites, portfolio projects, or games
- Assets management is greatly simplified. Models and textures are loaded asynchronously and can be shared between scenes
- One renderer, and one full-screen canvas
- Helper methods make it easy to create scenes and swap between them
- Webpack configuration makes it easy to build for production

Optional advanced features:
- Deploy to github pages with one npm command
- Use GSAP to animate complex HTML overlays
- Customize the loading screen

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
Put all your assets in 

## Deployment
To build a deployable package:
```
# Generate packages to ./dist folder.
npm run build
```
You can deploy anywhere by moving the files from `./dist` to any static fileserver (s3, hostgator, whatever)

If you have a repo, but don't have a webserver, I recommend deploying straight to github pages,a free static fileserver hosted by github/microsoft. 

To deploy a new version of your site to github pages:
```
# Trigger a commit to the github pages branch
npm run deploy
```
Then, on github, go into your repo settings->pages and choose `gh-pages` as the branch (and save!).
