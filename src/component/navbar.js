import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import styles from '../resources/styles.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubAlt, faTwitter, faLinkedinIn} from "@fortawesome/free-brands-svg-icons"

export default class Navbar extends Component {
  render() {
    return (
      <div className='navbar'>
          <Link to='/'><button>HOME</button></Link>
          <Link to='/blog'><button>BLOG</button></Link>
          <Link to='/projects'><button>PROJECTS</button></Link>
          <Link to='/resources/CrawfordNoelle.pdf' target='_blank'><button>RESUME</button></Link>

        <div className='socials'>
          <a href='https://github.com/noelle-crawfish' target='_blank'><FontAwesomeIcon icon={faGithubAlt} /></a>
          <a href='https://twitter.com/crawfish413' target='_blank'><FontAwesomeIcon icon={faTwitter} /></a>
          <a href='https://www.linkedin.com/in/noelle-crawford-63308318a' target='_blank'><FontAwesomeIcon icon={faLinkedinIn} /></a>
        </div>
      </div>
    )
  }
}
