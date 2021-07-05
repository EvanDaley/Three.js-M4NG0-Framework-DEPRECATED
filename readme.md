# Project M4NG0 - A Three.js Framework
#### M4NG0 takes away the headache of starting a new three.js project by imposing order, and modularizing the core elements of a three.js project

![portal image](mango.jpg)
[Photo shameless taken from images.indianexpress.com]

# Live Demo
See the live demo here: https://evandaley.github.io/Three.js-M4NG0-Framework/

## Embrace the Mango:
- M4NG0 does the grunt work: asset loader, scene manager, full-screen canvas, renderer, camera, default lighting, and more.
- Prefabs are introduced as the primary building block. This helps greatly in organizing your code.
- Asset management is greatly simplified. Meshes are loaded automatically and can be shared between scenes.
- Scenes are smarter and have a simple event lifecycle.
- Webpack configuration makes it easy to build for production.

Optional advanced features:
- GSAP provides a simple API for extremely customizable animations
- Deploy to github pages with a single npm command.
- Customizable loading screen displays until assets finish loading (in development)

## How is this different from other frameworks?
M4NG0 is small and **opinionated**. It doesn't come with a lot of bells and whistles, but gives you a strong organized foundation and provides quality of life improvements like prefab support, better asset management, scene management, and a simple event lifecycle for objects. But if you're looking for a complete game engine, this isn't it! 

## Project Structure
Okay, lets dive in. I've got a detailed "first steps" section below - but I suggest skimming this section to get familiar with the basics first.

Heres what you need to know:

On page load, we create an instance of `Orchestrator`. Orchestrator sets up our renderer and all of the helpers like our asset loader and scene manager.

As soon as its ready, `Orchestrator` kicks off the process of loading up the static assets like 3d models and textures that are referenced by your scenes. This will ONLY pull assets that are referenced by Scenes/Prefabs. Every non-primitive object should be defined as a prefab and imported into a scene.

Once everything has finished loading in the background, `Orchestrator` will call the async function `start` on the first scene.

Scenes are defined by you! All scenes should extend the base class M4Scene. More on that later.

### Classes of Note
Orchestrator 
- Creates everything. Manages your scenes. Keeps track of events.

AssetLoader 
- Loads your assets asynchronously. Maintains them in an array, so you can reuse them in any scenes.

M4Scene 
- Acts as the basic building block for your custom scenes. Should be extended for your own scenes.
- An `M4Scene` is an instance of a `Three.Scene` with added behavior.

M4Prefab 
- This is the class you should extend to declare any kind of object that has behavior.
- To add animation to your prefabs, set isAnimatable to true in the constructor, and add a `tick(delta)` method (M4NG0's equivalent of `OnUpdate`). Tick passes a "delta" which tells you how much time passed between frames. We don't have a fixedUpdate equivalent.

### Assets
If you have any models or textures to load, put them in 
- `./static/models`
- `./static/textures`

Assets in those folders will be pulled in by the AssetLoader class. Note that we only load assets that are referened by prefabs!

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
TODO - Explain this better. Make an update to a scene. Swap out an object. Explore the prefabs folder.

TODO - Lets talk about creating new scenes.

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
