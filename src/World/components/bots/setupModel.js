import { AnimationMixer, Group, MathUtils } from 'three';

function setupModel(data) {
    const group = new Group()
    const updatables = []

    for (let i = 0; i < data.scene.children.length; i++) {
        const model = data.scene.children[0]

        const clip = data.animations[0]

        model.tick = (delta) => { }

        if (clip) {
            const mixer = new AnimationMixer(model)
            const action = mixer.clipAction(clip)
            action.play()

            model.tick = (delta) => mixer.update(delta)
        }

        group.add(model)
        updatables.push(model)
    }

    const radiansPerSecond = MathUtils.degToRad(-3)

    group.tick = (delta) => {
        for (const object of updatables) {
            object.tick(delta)
        }

        group.rotation.x += radiansPerSecond * delta
        group.rotation.y += radiansPerSecond * delta
    };

    console.log(group)

    return group;
}

export { setupModel }