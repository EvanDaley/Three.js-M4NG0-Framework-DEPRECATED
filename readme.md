# Project M4NG0 - A Three.js Framework
#### This project gives you a starting ground for a `multi-scene` project with three.js, webpack and GSAP.

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

## How is this different from other frameworks?
M4NG0 is small and opinionated. It doesn't come with a lot of bells and whistles, but gives you the basics to build multi-scene three.js sites with animated html overlays (like the demo! ^). If you need to add physics, import ammo-physics with npm. If you're looking for a full game engine, this isn't it!

### Project Structure
[ TODO: Turn this into "Lifecyle" and move it down below everything else ]
Okay, lets dive in. I've got a detailed "first steps" section below - but I suggest studying this section first to understand the basics of the project.

Heres what you need to know:

On page load, we create an instance of `Orchestrator`. Orchestrator keeps track of events, and helps us transition between our scenes. 

As soon as its ready, Orchestrator calls the async function `AssetLoader.init()` to begin pulling the static assets like 3d models and textures. This will ONLY pull assets that are referenced by Prefabs. Prefabs are the glue that connects art with code. Every asset must be defined as a prefab to exist in a scene.

Once everything has finished loading in the background, `Orchestrator` will call the async function `start` on the first scene.

Scenes are defined by you! All scenes must extend the base class M4Scene. More on that later.

### Classes of note
Orchestrator - Creates everything. Manages your scenes. Keeps track of events.

AssetLoader - Loads all your assets asynchronously. Maintains them in an array, so you can reuse them in any scenes.

M4Scene - Acts as the basic building block for your custom scenes. Should be extended for your own scenes.

### Assets
If you have any models or textures to load, put them in 
- `./static/models`
- `./static/textures`

Assets in those folders will be loaded asynchronously on page load by the AssetLoader class. Note that we only load assets that are referened by prefabs!

### Prefabs
Prefabs are custom classes that define the form and function of an object. They specify which assets to pull and how those assets should behave in the scene. Everything is a prefab. 

Now that we've covered the basics, lets work toward making some modifications.

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
TODO - Make an update to a scene. Swap out an object.

TODO - Talk about building scenes.

TODO - Make a new scene.

Alright - now we've made some changes. Let's build a deployable package and push it to a server.

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