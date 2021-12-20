import React, { Component } from 'react'

import styles from '../resources/styles.css'

import Books from './highlight-li/books.js'
import Internet from './highlight-li/internet.js'
import Papers from './highlight-li/papers.js'
import Movies from './highlight-li/movies.js'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Highlights extends Component {
  render() {
    return (
      <div className='highlights'>
        <Books />
        <Internet />
        <Movies />
      </div>
    )
  }
}
