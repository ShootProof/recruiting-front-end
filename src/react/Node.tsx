import React, { useState, useEffect } from 'react'
import { TestData, NodeProps } from './definitions'

function debounce(cb: Function, wait: number = 20) {
  let h: any = 0
  let callable = (...args: any) => {
    clearTimeout(h)
    h = setTimeout(() => cb(...args), wait)
  }
  return callable
}

export const Node = (props: NodeProps) => {
  const [expanded, setExpanded] = useState(false)
  const [hover, setHover] = useState(false)
  const { thumbnail } = props
  const tabs = props.tabs || 0

  const setHoverDbnc = debounce(setHover, 200)

  const children = props.nodes.filter(
    (item: TestData) => item.parent === props.id
  )

  return (
    <div
      className={`node node-${props.id} tabs-${tabs}`}
      hidden={!props.visible}
      onClick={e => {
        e.stopPropagation()
        setExpanded(!expanded)
      }}
      style={{ cursor: children.length ? 'pointer' : 'auto' }}
    >
      <div
        className="node-wrap"
        style={{
          marginLeft: tabs ? `${tabs * 3}em` : '0',
        }}
      >
        <div className="thumbnail">
          <img
            src={thumbnail.href}
            alt={thumbnail.description}
            onMouseOver={() => setHoverDbnc(true)}
            onMouseLeave={() => setHoverDbnc(false)}
          />
          <span hidden={!hover} className="alt-label">
            {thumbnail.description}
          </span>
        </div>
        <div className="name"> {props.name} </div>
        {children.length > 0 && (
          <div className="expander">
            <svg
              transform={`rotate(${expanded ? 90 : 0})`}
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="8"
              viewBox="0 0 24 24"
            >
              <path d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z" />
            </svg>
          </div>
        )}
      </div>
      {children.map((item: TestData) => (
        <Node
          key={item.id}
          {...item}
          nodes={props.nodes}
          tabs={tabs + 1}
          visible={expanded}
        />
      ))}
    </div>
  )
}
