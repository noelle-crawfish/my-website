import React, { Component } from 'react'

import styles from '../resources/styles.css'
import blogData from '../resources/blogs.json'

import BlogItem from './blog-item.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Feature extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ''
    };
  }

  async componentWillMount() {
    console.log('hi');
    this.setState({
       //await Promise.all(blogData.map((post) => fetch(post.contentUrl).then(response => response.text())))
      content: await fetch(blogData[0].contentUrl).then(response => response.text())
    });
  }

  render() {
    return (
      <div className='featured-posts'>
        <BlogItem title={ blogData[0].title } body={ this.state.content }/>
      </div>
    )
  }
}
