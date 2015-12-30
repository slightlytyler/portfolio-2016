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
            I’m a developer <span>&</span> designer specializing in client side applications
            written in JavaScript.
          </div>

          <div style={styles.hireMe.container}>
            <Link
              to={link('/hire-me/')}
              style={styles.hireMe.link}
            >
              <section
                ref="hireMeHeroButton"
                style={styles.hireMe.button}
              >
                Hire Me
              </section>
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
    textAlign: 'center',

    '@media (max-width: 1024px)': {
      height: 'auto',
      paddingTop: '9em',
      paddingBottom: '9em'
    },

    '@media (max-width: 1024px) and (min-width: 501px) and (orientation: portrait)': {
      paddingTop: '15em',
      paddingBottom: '15em',
      fontSize: '125%'
    },

    '@media (max-width: 500px)': {
      paddingTop: '20em',
      paddingBottom: '20em',
    },
  },

  container: {
    maxWidth: '45em',

    '@media (max-width: 1024px)': {
      fontSize: '150%'
    },

    '@media (max-width: 500px)': {
      fontSize: '200%'
    },
  },

  body: {
    marginBottom: '.25em',
    fontSize: '2.125em',
    fontWeight: '300',
    color: '#19243e',
  },

  description: {
    fontFamily: 'GC, serif',
    fontSize: '1.4em',
    fontStyle: 'italic',
    fontWeight: '200',
    color: '#6E768A',

    '@media (max-width: 500px)': {
      padding: '0 1em',
      fontSize: '175%',
    },
  },

  hireMe: {
    container: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '3em',

      '@media (max-width: 500px)': {
        fontSize: '150%',
        marginTop: '3em',
      },
    },

    link: {
      textDecoration: 'none'
    },

    button: {
      padding: '1em 5em',
      borderWidth: 'calc(.0625em + 1px)',
      borderStyle: 'solid',
      borderColor: '#6694FF',
      borderRadius: '.25em',
      fontSize: '1em',
      fontWeight: '400',
      color: '#6694FF',
      cursor: 'pointer',
      transition: 'background-color .1s, color .1s',
      userSelect: 'none',

      ':hover': {
        backgroundColor: '#6694FF',
        color: 'white'
      },

      ':active': {
        backgroundColor: '#6694FF',
        color: 'white'
      }
    }
  }
};