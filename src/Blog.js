import React, { Component } from 'react'

import Banner from './component/banner.js'
import Navbar from './component/navbar.js'
import BlogList from './component/blog-list.js'

export default class Blog extends Component {
  render() {
    return (
      <div className='master'>
        <Banner></Banner>
        <Navbar></Navbar>
        <div class='blog-content'>
          <BlogList />
        </div>
      </div>
    )
  }
}
