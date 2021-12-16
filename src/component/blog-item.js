import React, { Component } from 'react'

import styles from '../resources/styles.css'
import blogData from '../resources/blogs.json'

export default class BlogItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'Hello World',
      body: <div>
        <p>This is a really super cool blog post</p>
        <p>Yay</p>
      </div>
    };
  }

  componentDidMount() {
    console.log(blogData[0])
  }

  render() {
    return (
      <div className='blog'>
        <h1>{this.props.title}</h1>
        {this.props.body}
      </div>
    )
  }
}
