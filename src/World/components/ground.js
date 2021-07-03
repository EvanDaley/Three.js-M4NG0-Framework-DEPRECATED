import {
    Color,
    DataTexture,
    LinearFilter,
    Mesh,
    MeshBasicMaterial,
    Object3D,
    PlaneBufferGeometry,
    RGBFormat,
    Vector3
} from 'three';

function createGround() {
    const geometry = new PlaneBufferGeometry(5, 5, 10, 10);

    // Container
    const container = new Object3D()

    // Material
    const material = new MeshBasicMaterial({
        color: 'red'
    });
    const plane = new Mesh(geometry, material);

    plane.rotation.x = -Math.PI / 2
    plane.position.z = 2

    // Colors
    // const colors = {}
    // colors.topLeft = '#f5883c'
    // colors.topRight = '#ff9043'
    // colors.bottomRight = '#fccf92'
    // colors.bottomLeft = '#f5aa58'

    // const updateMaterial = () => {
    //     const topLeft = new Color(colors.topLeft)
    //     const topRight = new Color(colors.topRight)
    //     const bottomRight = new Color(colors.bottomRight)
    //     const bottomLeft = new Color(colors.bottomLeft)

    //     const data = new Uint8Array([
    //         Math.round(bottomLeft.r * 255), Math.round(bottomLeft.g * 255), Math.round(bottomLeft.b * 255),
    //         Math.round(bottomRight.r * 255), Math.round(bottomRight.g * 255), Math.round(bottomRight.b * 255),
    //         Math.round(topLeft.r * 255), Math.round(topLeft.g * 255), Math.round(topLeft.b * 255),
    //         Math.round(topRight.r * 255), Math.round(topRight.g * 255), Math.round(topRight.b * 255)
    //     ])

    //     const backgroundTexture = new DataTexture(data, 2, 2, RGBFormat)
    //     backgroundTexture.magFilter = LinearFilter
    //     backgroundTexture.needsUpdate = true

    //     // material.uniforms.tBackground.value = backgroundTexture
    // }

    plane.frustumCulled = false
    plane.matrixAutoUpdate = false
    plane.updateMatrix()
    container.add(plane)

    // updateMaterial()


    return container;
}

export { createGround };
