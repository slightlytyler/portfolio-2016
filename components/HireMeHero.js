'use strict'

import React, { Component, PropTypes } from 'react';
import Radium from 'radium';

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

          <div style={styles.hireMe.container}
        >
            <span
              className="hire-me"
              style={styles.hireMe.button}
            >
              Hire Me
            </span>
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
    paddingTop: '4.5em',
    textAlign: 'center'
  },

  container: {
    maxWidth: '40em',
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

    button: {
      padding: '1em 5em',
      borderWidth: 'calc(.0625em + 1px)',
      borderStyle: 'solid',
      borderColor: '#19243e',
      borderRadius: '.25em',
      fontSize: '1em',
      fontWeight: '400',
      cursor: 'pointer',

      ':hover': {
        backgroundColor: '#19243e',
        color: 'white',
        transition: 'background-color .1s, color .1s'
      }
    }
  }
};