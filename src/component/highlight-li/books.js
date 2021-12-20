import React, { Component } from 'react'

import styles from '../../resources/styles.css'

export default class Books extends Component {
  render() {
    return (
      <div className='highlight-li'>
        <h4>Reading List</h4>
        <ol>
          <li>Hitchiker's Guide to the Galaxy</li>
          <li>Neuromancer</li>
          <li>Snow Crash</li>
          <li>American Kingpin</li>
          <li>The Continuous Wave: <em>Technology and the American Radio</em></li>
        </ol>
      </div>
    )
  }
}
