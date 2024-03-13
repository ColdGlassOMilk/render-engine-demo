import { rgbAngle } from 'react-canvas-animate'
import { RenderableEntity } from '../../engine/entities'

export class FillScreen extends RenderableEntity {
  private angle = 0
  private speed = Math.PI

  render() {
    const { context } = this
    const { canvas } = context
    const color = rgbAngle(this.transform.x - this.angle / 3)
    context.fillStyle = color
    context.shadowBlur = 25
    context.shadowColor = rgbAngle(this.transform.x + 90 - this.angle / 3) //color
    context.shadowOffsetX = 50
    context.shadowOffsetY = 200
    context.fillRect(
      this.transform.x * 5,
      Math.sin(this.transform.x / 20 + this.angle / 100) * 1000 +
        Math.cos(this.transform.x / 4 + this.angle / 100) * 200,
      2,
      canvas.height
    )
  }

  update() {
    this.angle += this.speed * (this.props.deltaTime / 10)
  }
}
