import Canvas, { CanvasProps } from 'react-canvas-animate'

interface RendererProps extends CanvasProps {}

const Renderer = ({ ...props }: RendererProps) => {
  return <Canvas {...props} />
}

export default Renderer
