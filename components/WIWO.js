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

  constructor(props) {
    super(props);

    this.state = {
      offset: 0
    };
  }

  componentDidMount() {
    this.setState({
      offset: this.getOffset()
    });
  }

  getOffset() {
    // Returns the offset for proper centering
    // based on the difference between the longest
    // text item in the last category and the
    // category width
    const { projects } = this.props;
    const categories = Object.keys(projects);
    const lastCategory = categories[categories.length - 1];
    const lastCategoryProjects = projects[lastCategory];

    const containerNode = this.refs.container;
    const categoryNode = this.refs[`wiwoCategory:${lastCategory}`];
    const headerNode = this.refs[`category:${lastCategory}-header`];
    const projectNodes = Object.keys(lastCategoryProjects).map(project =>
      this.refs[`category:${lastCategory}-project:${project}`]
    );

    const containerWidth = containerNode.offsetWidth;
    const categoryWidth = categoryNode.offsetWidth;
    const headerWidth = headerNode.offsetWidth;
    const projectWidth = projectNodes.reduce((a, b) =>
      a > b ? a : b
    ).offsetWidth;
    const interiorWidth = headerWidth > projectWidth ? headerWidth : projectWidth

    const difference = categoryWidth - interiorWidth;

    return `${(1 - (difference / containerWidth)) * difference}px`;
  }

  render() {
    const { projects } = this.props;
    const categories = Object.keys(projects);
    const { offset } = this.state;

    return (
      <section style={styles.wiwo}>
        <div style={styles.header.container}>
          <header style={styles.header.base}>What I'm working on</header>
        </div>

        <div
          ref="container"
          style={[
            styles.projectSet.container,
            { paddingLeft: offset }
          ]}
        >
          {categories.map(category => (
              <section
                ref={`wiwoCategory:${category}`}
                key={`wiwoCategory:${category}`}
                style={styles.projectSet.base}
              >
                <ul style={styles.projectSet.list}>
                  <header style={styles.projectSet.header}>
                    <span ref={`category:${category}-header`}>
                      {category}
                    </span>
                  </header>

                  {Object.keys(projects[category]).map(project => (
                      <li
                        style={styles.projectSet.item}
                        key={`wiwoProject:${category}-${project}`}
                      >
                        <span
                          ref={`category:${category}-project:${project}`}
                        >
                          {project}
                        </span>

                        {projects[category][project].comingSoon &&
                          <span style={styles.comingSoon}>
                            Coming Soon
                          </span>
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
    backgroundImage: 'linear-gradient(-180deg, #3D8A99 0%, #64FFDA 100%)',

    '@media (max-width: 70rem)': {
      fontSize: '120%'
    },
  },

  header: {
    base: {
      position: 'absolute',
      left: '50%',
      top: '40%',
      transform: 'translate(-50%, -50%)',
      color: 'white',
      fontSize: '4em',
      fontWeight: '100',
      whiteSpace: 'nowrap',

      '@media (max-width: 70rem)': {
        top: '60%',
      },
    },

    container: {
      position: 'relative',
      flex: 1,

      '@media (max-width: 70rem)': {
        flex: 2
      },

      '@media (max-width: 30rem)': {
        flex: 'none',
        height: '30em',
        fontSize: '120%'
      },
    },
  },

  projectSet: {
    base: {
      width: '25%',

      '@media (max-width: 30rem)': {
        width: '50%',
        marginBottom: '2em',
        fontSize: '200%'
      },
    },

    container: {
      display: 'flex',
      flex: 1,
      flexWrap: 'wrap',
      justifyContent: 'center',
      margin: '0 12.5%',

      '@media (max-width: 70rem)': {
        flex: 3,
        margin: '0 4em',
      },

      '@media (max-width: 30rem)': {
        flex: 'none',
        alignItems: 'flex-start',
        margin: '0 1em',
      },
    },

    header: {
      marginBottom: '1em',
      fontSize: '2em',
      fontWeight: '300',
      color: '#4A918A',
    },

    list: {
      listStyle: 'none',
      margin: 0
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