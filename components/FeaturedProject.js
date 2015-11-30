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
      projectStyle,
    } = this.props;
    const imageName = name + '-project-image.jpg';
    const logoName = name + '-project-logo.svg';

    return (
      <li
        style={[
          styles.base,
          styles['baseStyle' + upperCaseFirst(projectStyle)],
          { backgroundImage: `url(${link('/' + imageName)})` }
        ]}>
        <div
          className="container"
          style={[
            styles.container,
            styles['containerStyle' + upperCaseFirst(projectStyle)]
          ]}>
          <img
            className="project-logo"
            src={ link('/' + logoName) }
            style={[
              styles.logo,
              styles['logoStyle' + upperCaseFirst(projectStyle)],
              { marginTop: `${logoBaseline}em` }
            ]} />
          <a
            className="link"
            style={[
              styles.link,
              styles['linkStyle' + upperCaseFirst(projectStyle)],
              { color: `${color || 'white'}` }
            ]}>
            { linkText }
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
  },
  baseStyleOne: {
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  baseStyleTwo: {
    flexDirection: 'row',
  },
  container: {
    position: 'relative',
    flex: 1,
  },
  containerStyleOne: {
    width: '40%',
    marginTop: '4.5em',
  },
  containerStyleTwo: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    height: '5em',
    margin: '4.5em 8% 0'
  },
  logo: {
  },
  logoStyleOne: {
    position: 'absolute',
    left: '50%',
    top: 0,
    transform: 'translateX(-50%)',
    width: '80%'
  },
  logoStyleTwo: {
    width: '32%',
  },
  link: {
    fontWeight: '300',
    whiteSpace: 'nowrap'
  },
  linkStyleOne: {
    position: 'absolute',
    left: '50%',
    top: '45%',
    transform: 'translate(-50%, -50%)',
  },
  linkStyleTwo: {
  }
};