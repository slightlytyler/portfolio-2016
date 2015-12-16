'use strict'

import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Radium from 'radium';

import { link } from 'gatsby-helpers';

@Radium
export default class Header extends Component {
  static propTypes = {
  };

  render() {
    const { isHomePage, isHireMePage } = this.props;
    return (
      <header
        className="site-header"
        style={[
          styles.base,
          !isHomePage && { backgroundColor: '#ECF0F1' }
        ]}
      >
        <Link to={link('/')}>
          <img
            src={link("/assets/logo.svg")}
            style={styles.img}
          />
        </Link>

        <Link
          to={link('/hire-me/')}
          style={{
            ...styles.hireMe.link,
            opacity: (isHomePage || isHireMePage) ? 0 : 1
          }}
        >
          <span
            ref="hire-me-header-button"
            style={styles.hireMe}
          >
            Hire Me
          </span>
        </Link>

      </header>
    );
  }
}

const styles = {
  base: {
    position: 'fixed',
    zIndex: 1000,
    top: '0',
    left: '0',
    right: '0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '4.5em',
    padding: '0 2rem',
    backgroundImage: 'linear-gradient(-180deg, rgba(255,255,255,0.30) 0%, rgba(255,255,255,0.40) 24%, rgba(227,227,229,0.40) 97%)',
    boxShadow: '0px 1px 0px 0px rgba(0,0,0,0.08)',
    transition: 'background-color .5s, background-image .5s',

    '@media (max-width: 500px)': {
      padding: '0 5rem',
      fontSize: '250%'
    },
  },

  img: {
    display: 'block',
    width: '8.75em',
    cursor: 'pointer',

    ':hover': {
      opacity: '0.85'
    }
  },

  hireMe: {
    padding: '.6em 1.5em',
    borderWidth: 'calc(.0625em + 1px)',
    borderStyle: 'solid',
    borderColor: '#19243e',
    borderRadius: '.25em',
    fontSize: '1em',
    fontWeight: '400',
    color: '#19243e',
    cursor: 'pointer',
    transition: 'background-color .1s, color .1s',

    ':hover': {
      backgroundColor: '#19243e',
      color: 'white',
      transition: 'background-color .1s, color .1s'
    },

    link: {
      textDecoration: 'none',
      transition: 'opacity .1s'
    }
  }
};