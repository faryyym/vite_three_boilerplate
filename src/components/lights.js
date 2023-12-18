import { AmbientLight, DirectionalLight, DirectionalLightHelper } from 'three'

export function createLights(color = 'white') {
  const light = new DirectionalLight(color, 3)
  const ambient = new AmbientLight(color, 1)

  // position
  light.position.set(5, 5, 5)
  light.castShadow = true

  const lightHelper = new DirectionalLightHelper(light, 1)

  return { light, lightHelper, ambient }
}
