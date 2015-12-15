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
    textAlign: 'center',

    '@media (max-width: 30rem)': {
      height: '50%'
    },
  },

  container: {
    maxWidth: '45em',

    '@media (max-width: 70rem)': {
      fontSize: '150%'
    },

    '@media (max-width: 30rem)': {
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

    '@media (max-width: 30rem)': {
      fontSize: '150%',
    },
  },

  hireMe: {
    container: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '3em',

      '@media (max-width: 30rem)': {
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

      ':hover': {
        backgroundColor: '#6694FF',
        color: 'white'
      }
    }
  }
};