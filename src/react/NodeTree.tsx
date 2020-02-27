import React from 'react'
import { Node } from './Node'
import { TestData } from './definitions'

export const NodeTree = ({ data }: { data: Array<TestData> }) => {
  let parentNodes = data.filter((item: TestData) => item.parent === null)
  return (
    <div className="node-tree">
      {parentNodes.map((item: TestData) => (
        <Node key={item.id} {...item} nodes={data} visible={true} />
      ))}
    </div>
  )
}
