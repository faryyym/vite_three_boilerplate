import { World } from './src/World'
import './style.css'

function main() {
  const container = document.getElementById('app')

  const world = new World(container)

  world.start()
}

main()
