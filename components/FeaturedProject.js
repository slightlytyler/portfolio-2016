'use strict'

import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Radium from 'radium';

import { link } from 'gatsby-helpers';
import { upperCaseFirst } from 'change-case';

import ImageLoader from './ImageLoader';

@Radium
export default class FeaturedProject extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    linkText: PropTypes.string.isRequired,
    color: PropTypes.string,
    style: PropTypes.string,
  };

  constructor(props) {
    super(props);

    this.state = {
      hasLoaded: false
    };
  }

  onLoad() {
    this.setState({ hasLoaded: true });
  }

  render() {
    const {
      name,
      logoBaseline,
      linkText,
      color,
    } = this.props;
    const { hasLoaded } = this.state;
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
        key={`featuredProject:${name}`}
        style={[
          styles.base
        ]}
      >
        <ImageLoader
          className="background-image"
          src={link(imageName)}
          aspectRatio={1.246}
          isAbsolute="true"
          callback={() => this.onLoad() }
          style={styles.backgroundImage}
        />

        {wrapLink(
          <div
            className="container"
            style={[
              styles.container,
              styles[projectStyle].container,
              hasLoaded && styles.container.show
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
    width: '25%',
    cursor: 'pointer',
    overflow: 'hidden',

    '@media (max-width: 70rem)': {
      width: '50%',
    },

    '@media (max-width: 30rem)': {
      width: '100%'
    },
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
    marginTop: '4.5em',
    opacity: 0,
    transition: 'opacity 1s',

    '@media (max-width: 70rem)': {
      marginTop: '7em',
    },

    '@media (max-width: 30rem)': {
      marginTop: '12em',
    },

    show: {
      opacity: 1
    }
  },

  backgroundImage: {
    objectFit: 'cover',
    objectPosition: 'center',
    position: 'absolute',
    left: 0,
    top: 0,
    maxWidth: 'none',
    width: '100%',
    height: '100%'
  },

  link: {
    fontWeight: '300',
    whiteSpace: 'nowrap',

    '@media (max-width: 70rem)': {
      fontSize: '150%'
    },

    '@media (max-width: 30rem)': {
      fontSize: '300%'
    },

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
      width: '40%'
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

      '@media (max-width: 70rem)': {
        top: '50%',
      },

      '@media (max-width: 70rem)': {
        top: '60%',
      },
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
      marginLeft: '8%',
      marginRight: '8%',

      '@media (max-width: 70rem)': {
        alignItems: 'center'
      },
    },

    logo: {
      width: '32%',
    },

    link: {
    }
  }
};