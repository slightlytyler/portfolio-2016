'use strict'

import React, { Component, PropTypes } from 'react';
import Radium from 'radium';

import { link } from 'gatsby-helpers';
import { upperCaseFirst } from 'change-case';

@Radium
export default class FeaturedProject extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    linkText: PropTypes.string.isRequired,
    color: PropTypes.string,
    style: PropTypes.string,
  };

  render() {
    const {
      name,
      logoBaseline,
      linkText,
      color,
    } = this.props;
    const projectStyle = `style${upperCaseFirst(this.props.projectStyle)}`;
    const imageName = `/assets/projects/${name}/project-image.jpg`;
    const logoName = `/assets/projects/${name}/project-logo.svg`;

    return (
      <li
        style={[
          styles.base,
          styles[projectStyle].base,
          { backgroundImage: `url(${link(imageName)})` }
        ]}>
        <div
          className="container"
          style={[
            styles.container,
            styles[projectStyle].container
          ]}>
          <img
            className="project-logo"
            src={ link(logoName) }
            style={[
              styles.logo,
              styles[projectStyle].logo,
              { marginTop: `${logoBaseline}em` }
            ]} />
          <a
            className="link"
            style={[
              styles.link,
              styles[projectStyle].link,
              { color: `${color || 'white'}` }
            ]}>
            {linkText}
          </a>
        </div>
      </li>
    );
  }
}

const styles = {
  base: {
    display: 'flex',
    flex: 1,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    cursor: 'pointer'
  },

  container: {
    position: 'relative',
    flex: 1,
  },

  link: {
    fontWeight: '300',
    whiteSpace: 'nowrap'
  },

  styleOne: {
    base: {
      flexDirection: 'column',
      alignItems: 'flex-end',
    },

    container: {
      width: '40%',
      marginTop: '4.5em',
    },

    logo: {
      position: 'absolute',
      left: '50%',
      top: 0,
      transform: 'translateX(-50%)',
      width: '80%'
    },

    link: {
      position: 'absolute',
      left: '50%',
      top: '45%',
      transform: 'translate(-50%, -50%)',
    }
  },

  styleTwo: {
    base: {
      flexDirection: 'row',
    },

    container: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      height: '5em',
      margin: '4.5em 8% 0'
    },

    logo: {
      width: '32%',
    },

    link: {

    }
  }
};