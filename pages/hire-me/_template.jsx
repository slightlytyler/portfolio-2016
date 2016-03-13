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
            src={link("/assets/profile.jpg")}
            style={styles.pic}
            containerStyle={styles.picContainer}
            previewStyle={styles.picPreview}
          />

          <div style={styles.buttonsContainer}>
            <a
              ref="resumeButton"
              className="resume-button"
              href="https://docs.google.com/viewer?url=https://raw.githubusercontent.com/slightlytyler/slightlytyler.github.io/source/pages/assets/resume.pdf"
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
          </div>
        </section>

        <section
          className="content"
          style={styles.content}
        >
          <header style={styles.header.base}>
            <h2 style={styles.header.text}>Hello I’m Tyler Martinez&nbsp;</h2>
            <h2 style={styles.header.text}>and I build JavaScript applications.</h2>
          </header>

          <p style={styles.paragraph}>
            I build feature rich JavaScript applications for a variety of platforms.
            If you have an existing project or are breaking ground on a new one I can
            help with development / architecture for React, React Native, and Electron.
            <br />
            Currently looking for a part time (~20hrs / week) project working remote.
          </p>

          <p style={styles.contact}>
            slightlytyler@gmail.com
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

    '@media (max-width: 1024px)': {
      maxWidth: '75vw',
      fontSize: '150%'
    },

    '@media (max-width: 500px)': {
      flexDirection: 'column',
      maxWidth: 'none',
      paddingTop: '2em',
      margin: '0 5rem',
      fontSize: '250%'
    }
  },

  profile: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    marginRight: '2em',

    '@media (max-width: 500px)': {
      flexDirection: 'row',
      marginRight: 0,
      marginBottom: '4em'
    }
  },

  pic: {
    display: 'block',
    marginBottom: '.75em',
    borderRadius: '6px',

    '@media (max-width: 500px)': {
      flex: 1,
      marginBottom: 0
    }
  },

  picContainer: {
    flex: 'none',

    '@media (max-width: 500px)': {
      flex: 1
    }
  },

  picPreview: {
    marginBottom: '.75em',
    borderRadius: '6px',
  },

  buttonsContainer: {
    '@media (max-width: 500px)': {
      flex: 2,
      alignSelf: 'flex-end',
      paddingLeft: '5rem'
    }
  },

  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '.25em 0',
    fontSize: '.75em',
    fontWeight: 400,
    textDecoration: 'none',
    borderWidth: 'calc(.0625em + 1px)',
    borderStyle: 'solid',
    borderRadius: '.25em',
    cursor: 'pointer',
    transition: 'background-color .1s, color .1s',

    '@media (max-width: 500px)': {
      fontSize: '120%'
    },

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
      fontSize: '1.8em',
      fontFamily: 'GC, serif',
      fontStyle: 'italic',
      lineheight: 1,
      color: '#19243E',
    }
  },

  paragraph: {
    marginBottom: '2em',
    fontFamily: 'GC, serif',
    fontSize: '1em',
    fontWeight: 300,
    lineHeight: 1.5,

    '@media (max-width: 500px)': {
      fontSize: '140%'
    }
  },

  contact: {
    fontWeight: 300,
    fontSize: '1.2em',
    color: '#19243E',
  }
}