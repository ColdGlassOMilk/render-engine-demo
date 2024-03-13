import { CanvasObject, Context2D } from 'react-canvas-animate'

import { FillScreen } from '../../demo/entities'

export class RenderableEntityManager extends CanvasObject.Manager<
  Context2D,
  any,
  any,
  FillScreen
> {
  render() {
    const { context } = this
    this.objects.forEach((entity) => {
      const { color } = entity.color
      const { transform } = entity
      const { x, y } = transform
      context.save()
      // context.globalAlpha = 0.6
      context.fillStyle = color
      context.translate(x, y)
      context.scale(transform.scaleX, transform.scaleY)
      entity.render()
      context.restore()
    })
  }
}
