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
    return (
      <header
        className="site-header"
        style={styles.base}
      >
        <Link to={link('/')}>
          <img
            src={link("/assets/logo.svg")}
            style={styles.img}
          />
        </Link>
      </header>
    );
  }
}

const styles = {
  base: {
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    display: 'flex',
    alignItems: 'center',
    height: '4.5em',
    padding: '0 2em',
    backgroundImage: 'linear-gradient(-180deg, rgba(255,255,255,0.00) 0%, rgba(255,255,255,0.40) 24%, rgba(227,227,229,0.40) 97%)',
    boxShadow: '0px 1px 0px 0px rgba(0,0,0,0.08)',
  },

  img: {
    width: '8.75em',
    cursor: 'pointer',

    ':hover': {
      opacity: '0.85'
    }
  }
};