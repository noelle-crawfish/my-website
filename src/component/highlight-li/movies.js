import React, { Component } from 'react'

import styles from '../../resources/styles.css'

export default class Movies extends Component {
  render() {
    return (
      <div className='highlight-li'>
        <h4>Watch List</h4>
        <ol>
          <li>Deadpool</li>
          <li>The Prestige</li>
          <li>The Usual Suspects</li>
          <li>Memento</li>
          <li>The Princess Bride</li>
        </ol>
      </div>
    )
  }
}
