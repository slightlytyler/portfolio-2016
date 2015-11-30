'use strict'

import React, { Component } from 'react';
import Radium from 'radium';

@Radium
export default class WIWO extends Component {
  static propTypes = {
  };

  render() {
    return (
      <section style={styles.wiwo}>
        <div style={styles.headerContainer}>
          <header style={styles.header}>What I'm working on</header>
        </div>

        <div style={styles.projectSetContainer}>
          <section
            ref="web"
            style={styles.projectSet}
          >
            <ul style={styles.projectSetList}>
              <header style={styles.projectSetHeader}>Web</header>

              <li style={styles.projectSetItem}>Bluesky</li>

              <li style={styles.projectSetItem}>
                Frontnami
                <span style={styles.comingSoon}>Coming Soon</span>
              </li>

              <li style={styles.projectSetItem}>
                Moxie
                <span style={styles.comingSoon}>Coming Soon</span>
              </li>
            </ul>
          </section>

          <section
            ref="mobile"
            style={styles.projectSet}
          >
            <ul style={styles.projectSetList}>
              <header style={styles.projectSetHeader}>Mobile</header>

              <li style={styles.projectSetItem}>
                OnTrack
                <span style={styles.comingSoon}>Coming Soon</span>
              </li>
            </ul>
          </section>

          <section
            ref="mac"
            style={styles.projectSet}
          >
            <ul style={styles.projectSetList}>
              <header style={styles.projectSetHeader}>Mac</header>

              <li style={styles.projectSetItem}>Moxie</li>
            </ul>
          </section>

          <section
            ref="mac"
            style={styles.projectSet}
          >
            <ul style={styles.projectSetList}>
              <header style={styles.projectSetHeader}>Tools</header>

              <li style={styles.projectSetItem}>Bluprint</li>
            </ul>
          </section>
        </div>
      </section>
    );
  }
}

const styles = {
  wiwo: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    backgroundImage: 'linear-gradient(-180deg, #3D8A99 0%, #64FFDA 100%)'
  },
  header: {
    position: 'absolute',
    left: '50%',
    top: '40%',
    transform: 'translate(-50%, -50%)',
    color: 'white',
    fontSize: '4em',
    fontWeight: '100'
  },
  headerContainer: {
    position: 'relative',
    flex: 1
  },
  projectSet: {
    flex: 1
  },
  projectSetContainer: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    margin: '0 12.5%'
  },
  projectSetHeader: {
    marginBottom: '1em',
    fontSize: '2em',
    fontWeight: '300',
    color: '#4A918A',
  },
  projectSetList: {
    listStyle: 'none'
  },
  projectSetItem: {
    position: 'relative',
    marginBottom: '1em',
    fontSize: '1.2em',
    fontWeight: '300',
    color: 'rgba(255, 255, 255, 0.8)'
  },
  comingSoon: {
    padding: '.2em .5em .15em',
    marginLeft: '1em',
    verticalAlign: '.25em',
    fontSize: '.5em',
    textTransform: 'uppercase',
    whiteSpace: 'nowrap',
    borderWidth: 'calc(.0625em + 1px)',
    borderStyle: 'solid',
    borderColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: '.6em'
  }
};