'use strict'

import React, { Component } from 'react';
import Radium from 'radium';

@Radium
export default class WIWO extends Component {
  static propTypes = {
  };

  static defaultProps = {
    projects: {
      Web: {
        Bluesky: {
          link: ''
        },

        Frontnami: {
          link: '',
          comingSoon: true
        },

        Moxie: {
          link: '',
          comingSoon: true
        }
      },

      Mobile: {
        OnTrack: {
          link: '',
          comingSoon: true
        }
      },

      Mac: {
        Moxie: {
          link: ''
        }
      },

      Tools: {
        bluprint: {
          link: ''
        }
      }
    }
  };

  render() {
    const { projects } = this.props;
    const categories = Object.keys(projects);

    return (
      <section style={styles.wiwo}>
        <div style={styles.header.container}>
          <header style={styles.header.base}>What I'm working on</header>
        </div>

        <div style={styles.projectSet.container}>
          {categories.map(category => (
              <section
                key={`wiwoCategory:${category}`}
                style={styles.projectSet.base}
              >
                <ul style={styles.projectSet.list}>
                  <header style={styles.projectSet.header}>{category}</header>

                  {Object.keys(projects[category]).map(project => (
                      <li
                        style={styles.projectSet.item}
                        key={`wiwoProject:${category}-${project}`}
                      >
                        {project}

                        {projects[category][project].comingSoon &&
                          <span style={styles.comingSoon}>Coming Soon</span>
                        }
                      </li>
                    )
                  )}
                </ul>
              </section>
            )
          )}
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
    base: {
      position: 'absolute',
      left: '50%',
      top: '40%',
      transform: 'translate(-50%, -50%)',
      color: 'white',
      fontSize: '4em',
      fontWeight: '100'
    },

    container: {
      position: 'relative',
      flex: 1
    },
  },

  projectSet: {
    base: {
      flex: 1
    },

    container: {
      display: 'flex',
      flex: 1,
      justifyContent: 'center',
      margin: '0 12.5%'
    },

    header: {
      marginBottom: '1em',
      fontSize: '2em',
      fontWeight: '300',
      color: '#4A918A',
    },

    list: {
      listStyle: 'none'
    },

    item: {
      position: 'relative',
      marginBottom: '1em',
      fontSize: '1.2em',
      fontWeight: '300',
      color: 'rgba(255, 255, 255, 0.8)'
    },
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