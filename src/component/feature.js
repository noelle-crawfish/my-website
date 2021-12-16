import React, { Component } from 'react'

import styles from '../resources/styles.css'
import BlogItem from './blog-item.js'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Feature extends Component {
  render() {
    return (
      <div className='feature'>
        <BlogItem />
      </div>
    )
  }
}
