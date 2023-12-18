import { BoxGeometry, Mesh, MeshStandardMaterial } from 'three'
import { createCamera } from './components/camera'
import { createLights } from './components/lights'
import { createScene } from './components/scene'
import { Animate } from './systems/animate'
import { createControls } from './systems/controls'
import { Resizer, createRenderer } from './systems/renderer'

export class World {
  constructor(container) {
    this.camera = createCamera()
    this.scene = createScene()
    this.renderer = createRenderer()

    // append to dom
    container.append(this.renderer.domElement)

    // init loop
    this.animate = new Animate(this.camera, this.scene, this.renderer)

    // OBJECTS
    this.createCube()

    // lights
    const { light, lightHelper, ambient } = createLights()
    this.scene.add(light)
    this.scene.add(ambient)
    this.scene.add(lightHelper)

    // resizer
    new Resizer(this.camera, this.renderer)

    // controls
    new createControls(this.camera, container)
  }

  createCube() {
    this.scene.add(
      new Mesh(new BoxGeometry(), new MeshStandardMaterial({ color: 'white' }))
    )
  }

  start() {
    this.animate.start()
  }

  stop() {
    this.animate.stop()
  }
}
