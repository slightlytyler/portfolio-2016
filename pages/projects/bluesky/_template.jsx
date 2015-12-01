'use strict'

import React, { Component } from 'react';
import Radium from 'radium';
import { RouteHandler } from 'react-router';

import { link } from 'gatsby-helpers';

@Radium
export default class ProjectTemplate extends Component {
  static defaultProps = {
    subProjects: {
      Commerce: {
        description: 'Flagship ordering site.'
      },

      Minisites: {
        description: 'White labeled ordering site for business oriented greetings.'
      },

      Admin: {
        description: 'CMS and product builder.'
      },

      API: {
        description: 'Rails API, backend for all applications.'
      },

      EcardViewer: {
        name: 'Ecard Viewer',
        description: 'E greeting server and tracker.'
      },

      Analytics: {
        description: 'Client facing analytics on a per order and per company basis.'
      },

      Portfolio: {
        description: 'Marketing site for white labeled minisites.'
      },

      ProductViewer: {
        name: 'Product Viewer',
        description: `Product preview portion of the portfolio.`
      }
    }
  };
  render() {
    const { subProjects } = this.props;

    return (
      <div
        className="project"
        style={styles.base}
      >
        <section
          className="project-info"
          style={[
            styles.projectInfo.base,
            styles.infoBase
          ]}
        >
          <header style={styles.projectInfo.header.base}>
            <h2 style={[
              styles.projectInfo.header.title,
              styles.projectInfo.header.title.active
            ]}
          >
              Bluesky
            </h2>
            <span style={styles.projectInfo.header.description}>
              Application Suite
            </span>
          </header>

          <div
            className="project-image"
            style={styles.projectInfo.image.container}
          >
            <img
              src={link('/assets/projects/bluesky/screenshots/home.png')}
              style={styles.projectInfo.image.base}
            />
          </div>

          <div
            className="description"
            style={styles.projectInfo.description}
          >
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by injected
              humour, or randomised words which don't look even slightly believable.
            </p>
          </div>

          <ul
            className="sub-projects"
            style={styles.projectInfo.subProjects.base}
          >
            {Object.keys(subProjects).map(subProjectKey => {
              let project = subProjects[subProjectKey];

              return (
                <li
                  style={[
                    styles.projectInfo.subProjects.item,
                    styles.projectInfo.subProjects.item.active
                  ]}
                >
                  <div
                    className="title"
                    style={[
                      styles.projectInfo.subProjects.item.title,
                      styles.projectInfo.subProjects.item.title.active,
                      styles.projectInfo.subProjects.item.active
                    ]}
                  >
                    <span style={styles.projectInfo.subProjects.item.title.text}>
                      {project.name || subProjectKey}
                    </span>
                  </div>

                  <div
                    className="description"
                    style={styles.projectInfo.subProjects.item.description}
                  >
                    <span>
                      {project.description}
                    </span>
                  </div>
                </li>
              );
            })}
          </ul>
        </section>

        <section
          className="sub-project-info"
          style={[
            styles.subProjectInfo.base,
            styles.infoBase
          ]}
        >
          <header
            style={styles.subProjectInfo.header.base}
          >
            <h3
              style={styles.subProjectInfo.header.title}
            >
              Commerce
            </h3>

            <section className="pagination">
              <span
                style={[
                  styles.subProjectInfo.header.pagination.item,
                  styles.subProjectInfo.header.pagination.item.first
                ]}
              >
                <span
                  style={{
                    marginRight: '0.25em',
                    fontSize: '150%',
                    lineHeight: 0,
                    verticalAlign: '-.05em'
                  }}
                >
                  &lsaquo;
                </span>
                &nbsp;Prev
              </span>

              <span
                style={styles.subProjectInfo.header.pagination.item}
              >
                Next&nbsp;
                <span
                  style={{
                    marginLeft: '0.25em',
                    fontSize: '150%',
                    lineHeight: 0,
                    verticalAlign: '-.05em'
                  }}
                >
                  &rsaquo;
                </span>
              </span>
            </section>
          </header>

          <div
            className="main"
            style={styles.subProjectInfo.main}
          >
            <section
              className="body"
              style={styles.subProjectInfo.body}
            >
              <ul
                className="details"
                style={styles.subProjectInfo.details}
              >
                <li style={styles.subProjectInfo.details.item}>
                  <img
                    src={link('/assets/stack-icon.svg')}
                    style={styles.subProjectInfo.details.icon}
                  />
                  <section style={styles.subProjectInfo.details.text}>
                    <span>Stack:</span> <span>Ember, Semanitc UI</span>
                  </section>
                </li>

                <li style={styles.subProjectInfo.details.item}>
                  <img
                    src={link('/assets/github-icon.svg')}
                    style={styles.subProjectInfo.details.icon}
                  />
                  <section style={styles.subProjectInfo.details.text}>
                    <span>Net Contributions:</span> <span style={{ color: '#42BD41'}}>+45,198</span> <span>/</span> <span style={{ color: '#E62A10'}}>-12,390</span>
                  </section>
                </li>

                <li style={styles.subProjectInfo.details.item}>
                  <img
                    src={link('/assets/collaborator-icon.svg')}
                    style={styles.subProjectInfo.details.icon}
                  />
                  <section style={styles.subProjectInfo.details.text}>
                    <span>Key Role:</span> <span>Architechted application and implemented personalization process</span>
                  </section>
                </li>
              </ul>

              <section
                className="description"
                style={styles.subProjectInfo.description}
              >
                <p>
                  Quisque mattis ante ante, sed pellentesque orci consectetur a. Donec ut suscipit eros.
                  Pellentesque at elit elementum, pellentesque nulla eu, porttitor ipsum. Proin sollicitudin
                  velit vel odio cursus pulvinar. Vestibulum et eros ex. Nam sit amet purus at tellus
                  ullamcorper mattis non quis enim. Aenean eu convallis quam.
                  <br /><br />
                  Pellentesque ac mauris sit amet neque porta eleifend. Pellentesque non magna lorem. Nulla
                  facilisi. Nunc sit amet facilisis sem, a dignissim lacus. Duis volutpat, odio eu posuere venenatis,
                  diam sapien auctor neque, eu ullamcorper lacus lacus ac elit. In mollis dolor non pharetra volutpat.
                  Sed nec ornare sem. Integer posuere dui vel aliquam viverra. Donec id tempus nisi.
                  <br /><br />
                  Praesent non pharetra sem, et blandit ex. Duis ultrices mattis justo, in feugiat neque venenatis quis.
                  Nullam libero orci, eleifend quis ipsum sit amet, feugiat mattis eros. Donec bibendum hendrerit dolor
                  in luctus. Maecenas efficitur, eros id tincidunt ultrices, elit urna molestie leo, nec dictum risus nisl
                  in risus. Cras ligula sem, egestas quis egestas vel, iaculis et metus.
                  <br /><br />
                  Vestibulum dui tellus, convallis ac convallis ornare, luctus et tortor. Aenean non magna consectetur
                  libero aliquet pulvinar. Fusce sed nisl erat. Sed vitae augue leo.
                </p>
              </section>
            </section>

            <section
              className="screenshots"
              style={styles.subProjectInfo.screenshots}
            >
              Screenshots
            </section>
          </div>
        </section>
      </div>
    );
  }
}

const styles = {
  base: {
    display: 'flex',
    height: '100vh'
  },

  infoBase: {
    overflow: 'scroll',
    height: 'calc(100% - 4.5em - 1px)',
    paddingLeft: '2em',
    paddingRight: '2em',
    paddingTop: '3em',
    marginTop: 'calc(4.5em + 1px)',
  },

  projectInfo: {
    base: {
      flex: 1,
      borderRight: '2px solid #eeeff1'
    },

    header: {
      base: {
        marginBottom: '2em',
      },

      title: {
        margin: 0,
        marginBottom: '.25em',
        fontSize: '2em',
        fontWeight: 700,
        lineHeight: 1,
      },

      description: {
        fontWeight: 300,
        color: '#6e768a'
      }
    },

    image: {
      base: {
        position: 'absolute',
        left: '-6em',
        top: 0,
        width: 'calc(100% + 6em)',
        maxWidth: 'none',
        boxShadow: '0px 12px 24px 0px rgba(0,0,0,0.24)',
        border: '1px solid rgba(0,0,0,0.24)'
      },

      container: {
        position: 'relative',
        width: '100%',
        paddingBottom: 'calc(55.8% + (.558 * 6em))',
        marginBottom: '2em',
      }
    },

    description: {
      fontSize: '1em',
      fontWeight: 300
    },

    subProjects: {
      base: {
        listStyle: 'none',
        margin: 0
      },

      item: {
        display: 'flex',
        minHeight: '3.428em',
        marginBottom: '1em',
        border: '2px solid #ecf0f1',
        borderRadius: '6px',
        cursor: 'pointer',

        active: {
          borderColor: '#6e768a',
        },

        title: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flex: 2,
          borderRight: '2px solid #ecf0f1',
          borderTopLeftRadius: '6px',
          borderBottomLeftRadius: '6px',

          text: {
            textAlign: 'center',
            fontWeight: 400,
            color: '#6e768a',
          },

          active: {
            backgroundColor: '#ecf0f1'
          }
        },

        description: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          flex: 5,
          padding: '.5em 1em',
          fontSize: '.8em',
          lineHeight: 1,
          fontStyle: 'italic'
        }
      }
    }
  },

  subProjectInfo: {
    base: {
      flex: 3
    },

    header: {
      base: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        paddingTop: '1em',
        paddingBottom: '1em',
        marginBottom: '2em',
        borderBottom: '2px solid #eeeff1'
      },

      title: {
        margin: 0,
        fontSize: '1em',
        fontWeight: 700,
        lineHeight: 1,
      },

      pagination: {
        item: {
          color: '#6E768A',
          fontSize: '.9em',
          fontWeight: 300,
          cursor: 'pointer',

          first: {
            marginRight: '2em'
          }
        }
      }
    },

    main: {
      display: 'flex'
    },

    body: {
      flex: 1,
      marginRight: '2em'
    },

    details: {
      listStyle: 'none',
      maxWidth: '80%',
      margin: 0,
      marginBottom: '4em',

      item: {
        display: 'flex',
        alignItems: 'baseline',
        marginBottom: '.5em',
        color: '#6e768a',
        fontSize: '.9em',
        fontWeight: 300,
        lineHeight: 1,
      },

      icon: {
        width: '1em',
        marginRight: '.5em'
      }
    },

    description: {
      fontWeight: 300,
      color: '#6e768a',
      whiteSpace: 'pre-line'
    },

    screenshots: {
      flex: 1
    }
  }
};
