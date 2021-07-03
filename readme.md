# Project M4NG0 - A Three.js Framework
### This project gives you a starting ground for a `multi-scene` project with three.js, webpack and GSAP.

![portal image](mango.jpg)
[Photo shameless taken from images.indianexpress.com]

Embrace the Mango:
- M4NG0'S clean and reusable structure makes starting new 3d projects a breeze
- Asset management is greatly simplified. Models and textures are loaded asynchronously and can be shared between scenes
- One reusable renderer, and one full-screen canvas
- Helper methods make it easy to create scenes and swap between them
- Webpack configuration makes it easy to build for production

Optional advanced features:
- GSAP provides a simple API for extremely customizable animations
- Customizable loading screen
- Deploy to github pages with one npm command.

## Live Demo
See the live demo here: [TODO]

## But there are other Three.js project templates! Why use this one?
M4NG0 is relatively small and unopinionated. It doesn't come with a lot of bells and whistles, but gives you the basics to build multi-scene three.js sites with animated html overlays (like the demo! ^). If you want to add physics, just import another npm package (I suggest ammo-physics). If you're looking for a full game engine, this isn't it!

### Project Structure
Okay, lets dive in. I've got a detailed "first steps" section below - but I suggest studying this section first to understand the basics of the project.

Heres what you need to know:

On page load, we create an instance of `Orchestrator`. Orchestrator keeps track of scroll events, and helps us transition between our scenes. It also initializes the `World` class, the `AssetLoader`, and all of your custom scenes.

Then it calls the async `init` function on `AssetLoader` to begin pulling the static assets like 3d models and textures. 

Once everything has finished loading in the background, `Orchestrator` will call the async function `init` on the first scene. 

### Classes of note
Orchestrator - Creates everything. Manages your scenes.
AssetLoader - Loads all your assets asynchronously. Maintains them in an array, so you can reuse them in any scenes.


### Assets
If you have any models or textures to load, put them in 
- `./static/models`
- `./static/textures`

All assets in those folders will be loaded asynchronously on page load by the AssetLoader class.

### Prefabs
TODO: Document this.

### Scenes
TODO: Document this.

## First Steps - Setup
Clone this project.

`cd` into that folder.

Run following commands:

``` bash
# Install dependencies (only the first time)
npm install

# Run the local server at localhost:8080
npm run dev
```
At this point, a lite-server should be serving the project locally on port 8080.

While the server is running, code will immediately be reflected in the browser.

## First Steps - Development
TODO - Fill this out.

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

## FAQ
#### How do I add M4NG0 to an existing project?
This is doable, but a bit of work.
- Bring over the whole src folder, static folder, and webpack config.
- Then add a canvas to your html with the id: `m4ng0-canvas`.