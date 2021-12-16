import React, { Component } from 'react'

import styles from '../resources/styles.css'

export default class Banner extends Component {
  render() {
    return (
      <div className='banner'>
        {/* Images */}
        <div>
          <div className='sprite-logo'></div>
          <div className='sprite-logo'></div>
        </div>

        {/* Whoami blurb */}
        <div className='whoami'>
          <p>Hello, my name is <b>Noelle</b>. I'm an <b>ECE+Math</b> student <b>@<a href='https://ece.illinois.edu/' target='_blank' rel='noreferrer'>UIUC</a></b> interested in <b>computer architecture</b> and <b>cryptography</b>.</p>
        </div>
      </div>
    )
  }
}
