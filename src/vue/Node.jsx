function debounce(cb, wait = 20) {
  let h = 0
  let callable = (...args) => {
    clearTimeout(h)
    h = setTimeout(() => cb(...args), wait)
  }
  return callable
}

export const Node = {
  props: {
    item: {},
    nodes: {},
    tabs: {},
    visible: {},
  },
  data: () => ({
    expanded: false,
    hover: false,
  }),
  render() {
    const setHoverDbnc = debounce(hover => (this.hover = hover), 200)
    const { expanded, nodes } = this
    const tabs = this.tabs || 0
    const children = nodes.filter(item => item.parent === this.item.id)

    return (
      <div
        class={`node node-${this.item.id} tabs-${tabs}`}
        hidden={!this.visible}
        onclick={e => {
          e.stopPropagation()
          this.expanded = !expanded
        }}
        style={{ cursor: children.length ? 'pointer' : 'auto' }}
      >
        <div
          class="node-wrap"
          style={{
            marginLeft: tabs ? `${tabs * 3}em` : '0',
          }}
        >
          <div class="thumbnail">
            <img
              src={this.item.thumbnail.href}
              alt={this.item.thumbnail.description}
              onmouseover={() => setHoverDbnc(true)}
              onmouseleave={() => setHoverDbnc(false)}
            />
            <span hidden={!this.hover} class="alt-label">
              {this.item.thumbnail.description}
            </span>
          </div>
          <div class="name"> {this.item.name} </div>
          {children.length > 0 && (
            <div class="expander">
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
        {children.map(item => (
          <Node
            key={item.id}
            item={item}
            nodes={nodes}
            tabs={tabs + 1}
            visible={expanded}
          />
        ))}
      </div>
    )
  },
}
