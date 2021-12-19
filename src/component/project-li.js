import React, { Component } from 'react'

import styles from '../resources/styles.css'

export default class ProjectLi extends Component {
  constructor(props) {
    super(props);
  }

  render(props) {
    return (
      <div className='project-li'>
        <img src={this.props.projectImage} />
        <h3>{this.props.projectTitle}</h3>
        <p>{this.props.projectDescription}</p>
      </div>
    )
  }
}
