'use strict'

import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
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
    const isExternalLink = this.props.link.indexOf('http') !== -1;
    const wrapLink = (content) => {
      if (isExternalLink) {
        return (
          <a
            href={this.props.link}
            style={{
              ...styles.touch,
              ...styles[projectStyle].base
            }}
          >
            {content}
          </a>
        );
      } else {
        return (
          <Link
            to={link(this.props.link)}
            style={{
              ...styles.touch,
              ...styles[projectStyle].base
            }}
          >
            {content}
          </Link>
        );
      }
    };

    return (
      <li
        style={[
          styles.base,
          { backgroundImage: `url(${link(imageName)})` }
        ]}
      >
        {wrapLink(
          <div
            className="container"
            style={[
              styles.container,
              styles[projectStyle].container
            ]}
          >
            <img
              className="project-logo"
              src={ link(logoName) }
              style={[
                styles.logo,
                styles[projectStyle].logo,
                { marginTop: `${logoBaseline}em` }
              ]}
            />
            <span
              className="link"
              style={[
                styles.link,
                styles[projectStyle].link,
                { color: `${color || 'white'}` }
              ]}
            >
              <span>{linkText}</span>
              <span style={styles.link.arrow}>&rsaquo;</span>
            </span>
          </div>
        )}
      </li>
    );
  }
}

const styles = {
  base: {
    position: 'relative',
    flex: 1,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    cursor: 'pointer'
  },

  touch: {
    display: 'flex',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    textDecoration: 'none',
  },

  container: {
    position: 'relative',
    display: 'block',
    flex: 1,
  },

  link: {
    fontWeight: '300',
    whiteSpace: 'nowrap',

    arrow: {
      marginLeft: '.25em',
      fontSize: '200%',
      lineHeight: 0,
      verticalAlign: '-.125em',
    }
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