export interface TestData {
  id: number
  name: string
  thumbnail: {
    description: string
    href: string
  }
  parent: number | null
}

export interface NodeProps extends TestData {
  nodes: Array<TestData>
  children?: any
  tabs?: number
  visible?: boolean
}
