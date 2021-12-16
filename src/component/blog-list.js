import React, { Component } from 'react'

import styles from '../resources/styles.css'
import blogData from '../resources/blogs.json'

import BlogItem from './blog-item.js'

export default class BlogList extends Component {
  render() {
    return (
      <div className='blog-list'>
        {blogData.map((post) => (
          // get html from file
          <BlogItem title={post.title} body={"temporary"}/>
        ))}
      </div>
    )
  }
}
