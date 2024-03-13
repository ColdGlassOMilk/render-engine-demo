import Component from './base/Component'

export class ColorComponent extends Component {
  constructor(public color: string = '#000') {
    super()
  }
}
