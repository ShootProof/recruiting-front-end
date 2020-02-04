import React, { Component } from "react";

export interface ThumbnailProps {
  description: string,
  href: string
}

export class Thumbnail extends Component<ThumbnailProps, {}> {
  render() {
    return <img src={this.props.href} alt={this.props.description} title={this.props.description} />
  }
}

export default Thumbnail;