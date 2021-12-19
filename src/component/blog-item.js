import React, { Component } from 'react'

import styles from '../resources/styles.css'
import blogData from '../resources/blogs.json'

export default class BlogItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='blog-item'>
        <h2>{this.props.title}</h2>
        <p className='date'><em>{this.props.date}</em></p>
        <div dangerouslySetInnerHTML={ {__html: this.props.body} } />
      </div>
    )
  }
}
