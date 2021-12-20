import React, { Component } from 'react'

import styles from '../../resources/styles.css'

export default class Internet extends Component {
  render() {
    return (
      <div className='highlight-li'>
        <h4>Fun Places on the Interweb</h4>
        <ol>
          <li><a href='https://wiki.osdev.org/Expanded_Main_Page' target='_blank'>OSDev</a></li>
          <li><a href='https://www.reddit.com/r/cardistry/' target='_blank'>r/Cardistry</a></li>
          <li><a href='https://cryptohack.org/' target='_blank'>Crypohack</a></li>
          <li><a href='https://www.reddit.com/r/unixporn/' target='_blank'>Unixporn</a></li>
          <li><a href='https://bejofo.net/ttt' target='_blank'>Ultimate Tic Tac Toe</a></li>
        </ol>
      </div>
    )
  }
}
