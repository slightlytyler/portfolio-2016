'use strict'

import React, { Component } from 'react';
import Radium from 'radium';

import { link } from 'gatsby-helpers';

import ImageLoader from '../../components/ImageLoader';

@Radium
export default class ProjectsTemplate extends Component {
  render() {
    const { body } = this.props.page.data
    return (
      <div
        className="hire-me"
        style={styles.base}
      >
        <section
          className="profile"
          style={styles.profile}
        >
          <ImageLoader
            className="pic"
            src={link("/assets/profile@2x.jpg")}
            style={styles.pic}
            containerStyle={{
              marginBottom: '.75em',
              borderRadius: '6px',
            }}
          />

          <a
            ref="resumeButton"
            className="resume-button"
            href="https://github.com/slightlytyler"
            target="_blank"
            style={[
              styles.button,
              styles.resumeButton
            ]}
          >
            <img
              src={link("/assets/resume-icon.svg")}
              style={styles.button.icon}
            />
            View my résumé
          </a>

          <a
            ref="githubButton"
            className="github-button"
            href="https://github.com/slightlytyler"
            target="_blank"
            style={[
              styles.button,
              styles.githubButton
            ]}
          >
            <img
              src={link("/assets/github-icon.svg")}
              style={styles.button.icon}
            />
            View my Github
          </a>
        </section>

        <section
          className="content"
          style={styles.content}
        >
          <header style={styles.header.base}>
            <h2 style={styles.header.text}>Hello I’m Tyler Martinez&nbsp;</h2>
            <h2 style={styles.header.text}>and I build Javascript applications.</h2>
          </header>

          <p style={styles.paragraph}>
            I’m looking for new oppurtunites starting in 2016 on site in Dallas or remote.
            If you have an existing project that needs help with front end development, Ember,
            React, React Native, Electron, or are breaking ground on a new one I’d be interested
            to talk with you.
            <br /><br />
            slightlytyler@gmail.com
            <br />
            972 439 0587
          </p>
        </section>
      </div>
    );
  }
};

const styles = {
  base: {
    display: 'flex',
    maxWidth: '50vw',
    paddingTop: '6em',
    margin: '0 auto',

    '@media (max-width: 70rem)': {
      maxWidth: '75vw',
      fontSize: '150%'
    },
  },

  profile: {
    position: 'relative',
    flex: 1,
    marginRight: '2em',
  },

  pic: {
    display: 'block',
    width: '100%',
    marginBottom: '.75em',
    borderRadius: '6px',
  },

  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '.25em 0',
    fontSize: '.75em',
    fontWeight: 400,
    textDecoration: 'none',
    borderWidth: '2px',
    borderStyle: 'solid',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'background-color .1s, color .1s',

    icon: {
      width: '.8em',
      marginRight: '.5em',
    }
  },

  resumeButton: {
    marginBottom: '1em',

    borderColor: '#6694FF',
    color: '#6694FF',

    ':hover': {
      color: 'white',
      backgroundColor: '#6694FF'
    },
  },

  githubButton: {
    borderColor: '#d8d8d8',
    color: '#333333',

    ':hover': {
      backgroundColor: '#F5F5F5'
    },
  },

  content: {
    flex: 3,
    color: '#6E768A'
  },

  header: {
    base: {
      marginBottom: '1.5em',
    },

    text: {
      marginTop: '-.25em',
      marginBottom: 0,
      fontSize: '2em',
      lineheight: 1,
      color: '#6E768A'
    }
  },

  paragraph: {
    fontSize: '1.1em',
    fontWeight: 300
  }
}