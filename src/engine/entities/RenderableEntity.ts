import { CanvasObject, Context2D } from 'react-canvas-animate'

import Entity from './base/Entity'
import { ColorComponent, TransformComponent } from '../components'

interface RenderableEntityState extends CanvasObject.State {
  color: string
  x: number
  y: number
}

interface RenderableEntityProps extends CanvasObject.Props {
  deltaTime: number
}

export class RenderableEntity extends Entity<
  RenderableEntityState,
  RenderableEntityProps
> {
  color: ColorComponent
  transform: TransformComponent

  constructor(context: Context2D, state: RenderableEntityState) {
    super(context)
    this.color = new ColorComponent(state.color)
    this.transform = new TransformComponent(state.x, state.y)
  }
}
