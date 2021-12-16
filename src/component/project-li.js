import React, { Component } from 'react'

import styles from '../resources/styles.css'

export default class ProjectLi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectImage: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
      projectDescription: 'An implementation of the classic arcade game done in SystemVerilog to run on an FPGA with VGA output and keyboard input.',
    };
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
