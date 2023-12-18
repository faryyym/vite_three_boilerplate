import { PCFSoftShadowMap, WebGLRenderer } from 'three'

export function createRenderer() {
  const renderer = new WebGLRenderer({
    antialias: true,
  })

  // enable shadow
  renderer.shadowMap.enabled = true
  renderer.shadowMap.type = PCFSoftShadowMap

  return renderer
}

const setSize = (camera, renderer) => {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)

  renderer.setPixelRatio(window.devicePixelRatio)
}

export class Resizer {
  constructor(camera, renderer) {
    setSize(camera, renderer)

    window.addEventListener('resize', () => {
      setSize(camera, renderer)
    })
  }
}
