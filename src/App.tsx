import { useRef } from 'react'
import { Context2D } from 'react-canvas-animate'
import Renderer from './components/Renderer'
import { RenderableEntityManager } from './engine/managers'
import { FillScreen } from './demo/entities'

function App() {
  const renderManager = useRef<RenderableEntityManager>()

  const init = (context: Context2D) => {
    const objects = (renderManager.current = new RenderableEntityManager(
      context
    ))

    // objects.create(FillScreen, { color: '#111' })

    for (let x = 0; x < 2000; x++) {
      objects.create(FillScreen, { x: x })
    }
  }

  const render = (context: Context2D) => {
    context.clearRect(0, 0, context.canvas.width, context.canvas.height)
    renderManager.current?.render()
  }

  const update = (ctx: Context2D, deltaTime: number) => {
    renderManager.current?.update({ deltaTime })
  }

  return (
    <Renderer init={init} render={render} update={update} nogrid fullscreen />
  )
}

export default App
