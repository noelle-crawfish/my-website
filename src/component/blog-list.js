import React, { Component } from 'react'

import styles from '../resources/styles.css'
import blogData from '../resources/blogs.json'

import BlogItem from './blog-item.js'

export default class BlogList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogContent: []
    };
  }

  async componentWillMount() {
    this.setState({
      blogContent: await Promise.all(blogData.map((post) => fetch(post.contentUrl).then(response => response.text())))
    });

    //let ex = await fetch('resources/blogs/hello-world').then(response => response.text());
    //console.log("ex " + ex);

  }

  render() {
    return (
      <div className='blog-list'>
        {blogData.map((post, index) => (
          <BlogItem title={post.title} date={post.date} body={this.state.blogContent[index]} />
        ))}
      </div>
    )
  }
}
