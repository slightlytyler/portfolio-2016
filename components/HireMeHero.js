'use strict'

import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Radium from 'radium';

import { link } from 'gatsby-helpers';

@Radium
export default class HireMeHero extends Component {
  static propTypes = {
  };

  render() {
    return (
      <section
        className="hero"
        style={styles.base}
      >
        <div
          className="container"
          style={styles.container}
        >
          <div
            className="cta"
            style={styles.body}
          >
            Have a project? Let's ship it together.
          </div>

          <div
            className="description"
            style={styles.description}
          >
            I’m a designer / developer specializing in client side applications
            written in Javascript.
          </div>

          <div style={styles.hireMe.container}>
            <Link
              to={link('/hire-me/')}
              style={styles.hireMe.link}
            >
              <span
                ref="hireMeHeroButton"
                style={styles.hireMe.button}
              >
                Hire Me
              </span>
            </Link>
          </div>
        </div>
      </section>
    );
  }
}

const styles = {
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '64%',
    textAlign: 'center'
  },

  container: {
    maxWidth: '40em',

    '@media (max-width: 70rem)': {
      fontSize: '150%'
    },
  },

  body: {
    marginBottom: '.25em',
    fontSize: '2.125em',
    fontWeight: '300',
    color: '#19243e',
  },

  description: {
    fontSize: '1.3125em',
    fontWeight: '300',
    color: '#19243e',
  },

  hireMe: {
    container: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '2em',
    },

    link: {
      textDecoration: 'none'
    },

    button: {
      padding: '1em 5em',
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
        color: 'white'
      }
    }
  }
};