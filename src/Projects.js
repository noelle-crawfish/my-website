import React, { Component } from 'react'

import Banner from './component/banner.js'
import Navbar from './component/navbar.js'
import ProjectLi from './component/project-li.js'

import projectData from './resources/projects.json'

export default class Projects extends Component {
  render() {
    return (
      <div className='master'>
        <Banner></Banner>
        <Navbar></Navbar>
        <div class='projects-content'>
          <ProjectLi projectTitle={projectData[0]["projectTitle"]} projectImage={projectData[0]["projectImage"]} projectDescription={projectData[0]["projectDescription"]} />
          <ProjectLi projectTitle={projectData[1]["projectTitle"]} projectImage={projectData[1]["projectImage"]} projectDescription={projectData[1]["projectDescription"]} />
        </div>
      </div>
    )
  }
}
