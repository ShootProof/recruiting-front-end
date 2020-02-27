import { Node } from './Node'

export const NodeTree = {
  props: {
    testdata: {
      default: () => [],
    },
  },
  render() {
    const data = this.testdata
    let parentNodes = data.filter(item => item.parent === null)

    return (
      <div class="node-tree">
        {parentNodes.map(item => (
          <Node key={item.id} item={item} nodes={data} visible={true} />
        ))}
      </div>
    )
  },
}
