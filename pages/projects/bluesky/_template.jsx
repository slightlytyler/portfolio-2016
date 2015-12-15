'use strict'

import React, { Component } from 'react';
import Radium from 'radium';
import { RouteHandler } from 'react-router';

import { link } from 'gatsby-helpers';

import ImageLoader from '../../../components/ImageLoader';

@Radium
export default class ProjectTemplate extends Component {
  static defaultProps = {
    project: {
      name: 'Bluesky',
      shortDescription: 'Application Suite',
        longDescription:
          `Bluesky is the public face of Greeting Card Collection, the industry\
          leader in business to client greeting cards and e cards. I worked with a\
          small team to rebuild their monolithic Rails 3 application into a suite of\
          modular apps focused on maintainability.`,
      owner: 'Greeting Card Collection',
      agency: 'Deep Space Robots',
      image: link('/assets/projects/bluesky/sub-projects/commerce/home.jpg')
    },

    subProjects: {
      Commerce: {
        shortDescription: 'Flagship ordering site.',
        longDescription:
            `Bluesky (project name 'Commerce') is the flagship ordering site and public facing product for GCC.\
            Serving primarily US customers, Bluesky saw marked improvement in sales over past years where the\
            the site failed to gain traction.

            To compete with industry leaders we completely overhauled the personalization process. Previously\
            the process was hindered by the limitations of server rendered applications, but using Ember we were\
            able to implement a process that was feature rich, inutitive, and fast.

            I designed the spec for the personalization process as well as devloped the components used.\
            In addition I scaffolded the application and built much of the boilerplate used across the Ember apps.`,
          stack: ['Ember', 'Semantic UI'],
        contribution: ['24,019', '10,771'],
        role: 'Scaffolded application and implemented personalization process',
        link: 'https://www.blueskycards.com',
        screenshots:[
          'home',
          'category',
          'product-info',
          'personalize',
          'verse-select',
          'extras',
          'cart'
        ]
      },

      Minisites: {
        shortDescription: 'White labeled ordering site for business to client greetings.',
        longDescription:
            `Minisites is GCC's primary product, offering a variety of custom printed and e greetings.\
             Developed to be white labelable by business clients, each site has it's own subdomain and\
             branding. In addition to visual customization each client has a unique set of offerings\
             and personalization options.

            I designed the spec for the personalization process for both printed and e greetings as well as devloped the components used.\
            In addition I scaffolded the application and built much of the boilerplate used across the Ember apps.`,
        stack: ['Ember', 'Semantic UI'],
        contribution: ['41,048', '28,477'],
        role: 'Scaffolded application, implemented personalization process and contact handling',
        link: 'https://demo1.greetingcardcollection.com',
        screenshots: [
          'printed-home',
          'card-detail',
          'printed-personalization',
          'approve-artwork',
          'shipping',
          'cart',
          'ecard-home',
          'ecard-personalization',
          'ecard-send'
        ]
      },

      Admin: {
        shortDescription: 'CMS and product builder.',
        longDescription:
            `Admin is the CMS and product builder application used by the content creators and administration\
            of GCC. Admin core features allows users to build printed and e greetings from their raw assets,\
            control available product and track inventory, generate and customize minisites, and oversee orders.

            Admin was the largest front end application we built, only smaller than the Rails API. I contributed heavily\
            to nearly every facet of the app in addition to being the primary contributor the product builder flows.`,
        stack: ['Ember', 'Semantic UI'],
        contribution: ['111,561', '56,062'],
        role: 'Scaffolded application and was primary contributor to product builder flow',
        screenshots: [
          'card-list',
          'card-index',
          'size',
          'surface',
          'verses',
          'company-index',
          'company-cards',
          'stats'
        ]
      },

      API: {
        shortDescription: 'Rails API, backend for all applications.',
        longDescription:
            `The API was built using Rails 4 and documented using Swagger. For PDF generation we used Prince XML.

            I contributed to the API initially through input on the spec of various portions (primarily product\
            construction and personalization). In addition I built the views and styles for PDF generation and mailers.`,
        stack: ['Rails', 'Prince XML', 'Swagger', 'PostgreSQL', 'Redis'],
        contribution: ['351', '248'],
        role: 'Built views / styles for PDF generation and mailers'
      },

      EcardViewer: {
        dirName: 'ecard-viewer',
        name: 'Ecard Viewer',
        shortDescription: 'E greeting server and tracker.',
        longDescription:
            `Ecard Viewer handled the delivery of animated e greetings. We used Wistia for video hosting and controlled playback of\
            the cards using their Javascript API.

            I handled integration with Wistia as well as built views and styles for the card layout system.`,
        stack: ['Sinatra', 'Wistia API'],
        contribution: ['1,676', '921'],
        role: 'Built video player and card layout system',
        link: 'https://gcc4-ecard-viewer-production.herokuapp.com/previews/gy4Bezn/animated',
        linkText: 'Demo card',
        screenshots: [
          'video'
        ]
      },

      Analytics: {
        shortDescription: 'Client facing analytics on a per order and per company basis.',
        longDescription:
            `Analytcis handled e greeting stat tracking on a per order basis and company wide. In addition Analytics acts as a small admin area\
            allowing customers to resend undeliverable, failed, or blocked emails.

            In addition to providing the basic structure for this app I implemented a 'soft authentication' system where customers could login\
            only using the order # and email address associated with the order.`,
        stack: ['Ember', 'Semantic UI'],
        contribution: ['1,901', '2,431'],
        role: 'Built soft authentication and provided base components / styles',
        screenshots: []
      },

      Portfolio: {
        shortDescription: 'Marketing site for white labeled minisites.',
        longDescription:
            `GCC's Portfolio site is used as a marketing tool for prospective Minisites customers. Users can explore printed and e greeting\
            collections as well as examples of current custom ordering sites.

            We built the site using Jekyll and it made the dev process extremely simple (look ma no database!). smoothState.js allowed us to\
            avoid hard reloads using pushState and Skrollr added visual flair with parallax scrolling.`,
        stack: ['Jekyll', 'jekyll-assets', 'Skrollr', 'smoothState.js'],
        contribution: ['5,314', '1,410'],
        role: 'Scaffolded project, built layouts / styles, implemented parallax scrolling using Skrollr, and integrated Wordpress blog via RSS.',
        link: 'http://www.gccportfolio.com',
        screenshots: [
          'home-splash',
          'about-us',
          'printed-cards',
          'custom-sites',
          'blog'
        ]
      },

      ProductViewer: {
        dirName: 'product-viewer',
        name: 'Product Viewer',
        shortDescription: `Product preview portion of the portfolio.`,
        longDescription:
          `Product Viewer is a sub project of the portfolio. Rather than try to consume an API using Jekyll we opted to strip down Bluesky and build\
          a small app purely for exploring current products. In addition to viewing products it also displays a selection of verses and music options\
          for e greetings.`,
        stack: ['Ember', 'Semantic UI', 'Soundcloud API'],
        contribution: ['1,843', '869'],
        role: 'Provided base components / styles and integrated Soundcloud API',
        link: 'http://products.gccportfolio.com',
        screenshots: [
          'home',
          'product-list',
          'product-details',
          'verses',
          'playlists',
          'songs'
        ]
      }
    }
  };

  constructor(props) {
    super(props);

    this.state = {
      activeSubProjectKey: Object.keys(props.subProjects)[0]
    }
  }

  setActiveProject(key) {
    // Scroll top
    const { body, screenshots, main } = this.refs;
    body.scrollTop = 0;
    screenshots.scrollTop = 0;
    main.scrollTop = 0;

    // Set state5
    this.setState({
      activeSubProjectKey: key
    });
  }

  nextSubProject() {
    const { subProjects } = this.props;
    const keys = Object.keys(subProjects);
    const { activeSubProjectKey } = this.state;
    const currentIndex = keys.indexOf(activeSubProjectKey);
    const next = keys[currentIndex + 1];

    return next;
  }

  prevSubProject() {
    const { subProjects } = this.props;
    const keys = Object.keys(subProjects);
    const { activeSubProjectKey } = this.state;
    const currentIndex = keys.indexOf(activeSubProjectKey);
    const prev = keys[currentIndex - 1];

    return prev;
  }

  render() {
    const { project, subProjects } = this.props;
    const { activeSubProjectKey } = this.state;
    const activeSubProject = subProjects[activeSubProjectKey];

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
              {project.name}
            </h2>
            <span style={styles.projectInfo.header.description}>
              {project.shortDescription}
            </span>
          </header>

          <div
            className="project-image"
            style={styles.projectInfo.image.container}
          >
            <ImageLoader
              src={project.image}
              aspectRatio={1.4}
              style={styles.projectInfo.image.base}
              previewStyle={{
                position: 'absolute',
                left: '-6em',
                top: 0,
                width: 'calc(100% + 6em)',
                boxShadow: '0px 12px 24px 0px rgba(0,0,0,0.24)',
              }}
            />
          </div>

          <div className="details">
            <ul style={[
              styles.details.list,
              styles.projectInfo.details.list
            ]}>
              <li style={styles.details.item}>
                <img
                  src={link('/assets/project-owner-icon.svg')}
                  style={styles.details.icon}
                />
                <section style={styles.details.text}>
                  <span>Project&nbsp;Owner:</span>&ensp;
                  <span>{project.owner}</span>
                </section>
              </li>

              {project.agency && (
                <li style={styles.details.item}>
                  <img
                    src={link('/assets/agency-icon.svg')}
                    style={styles.details.icon}
                  />
                  <section style={styles.details.text}>
                    <span>Agency:</span>&ensp;
                    <span>{project.agency}</span>
                  </section>
                </li>
              )}
            </ul>
          </div>

          <div
            className="description"
          >
            <p style={styles.projectInfo.description}>
              {project.longDescription}
            </p>
          </div>

          <ul
            className="sub-projects"
            style={styles.projectInfo.subProjects.base}
          >
            {Object.keys(subProjects).map(subProjectKey => {
              let project = subProjects[subProjectKey];
              let isActive = subProjectKey === activeSubProjectKey;

              return (
                <li
                  key={subProjectKey}
                  style={[
                    styles.projectInfo.subProjects.item,
                    isActive && styles.projectInfo.subProjects.item.active
                  ]}
                  onClick={() => this.setActiveProject(subProjectKey)}
                >
                  <div
                    className="title"
                    style={[
                      styles.projectInfo.subProjects.item.title,
                      isActive && styles.projectInfo.subProjects.item.title.active,
                      isActive && styles.projectInfo.subProjects.item.active
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
                      {project.shortDescription}
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
            <div>
              <div
                style={styles.subProjectInfo.header.projectTitle.container}
              >
                <h2
                  style={styles.subProjectInfo.header.projectTitle.title}
                >
                  {project.name}:
                </h2>
                <span
                  style={styles.subProjectInfo.header.projectTitle.description}
                >
                  {project.shortDescription}
                </span>
              </div>
              <h3
                style={styles.subProjectInfo.header.title}
              >
                {activeSubProject.name || activeSubProjectKey}
              </h3>
            </div>

            <section className="pagination">
              <span
                key="prev"
                onClick={() =>
                  this.prevSubProject() && this.setActiveProject(this.prevSubProject())
                }
                style={[
                  styles.subProjectInfo.header.pagination.item,
                  styles.subProjectInfo.header.pagination.item.first,
                  !this.prevSubProject() && styles.subProjectInfo.header.pagination.item.disabled
                ]}
              >
                <span
                  style={{
                    marginRight: '0.25em',
                    ...styles.subProjectInfo.header.pagination.item.caret
                  }}
                >
                  &lsaquo;
                </span>
                &nbsp;Prev
              </span>

              <span
                key="next"
                onClick={() =>
                  this.nextSubProject() && this.setActiveProject(this.nextSubProject())
                }
                style={[
                  styles.subProjectInfo.header.pagination.item,
                  !this.nextSubProject() && styles.subProjectInfo.header.pagination.item.disabled
                ]}
              >
                Next&nbsp;
                <span
                  style={{
                    marginLeft: '0.25em',
                    ...styles.subProjectInfo.header.pagination.item.caret
                  }}
                >
                  &rsaquo;
                </span>
              </span>
            </section>
          </header>

          <div
            ref="main"
            className="main"
            style={styles.subProjectInfo.main}
          >
            <section
              ref="body"
              className="body"
              style={styles.subProjectInfo.body}
            >
              <ul
                className="details"
                style={[
                  styles.details.list,
                  styles.subProjectInfo.details.list,
                ]}
              >
                <li style={styles.details.item}>
                  <img
                    src={link('/assets/stack-icon.svg')}
                    style={styles.details.icon}
                  />
                  <section style={styles.details.text}>
                    <span>Stack:</span>&ensp;
                    <span>{activeSubProject.stack.join(', ')}</span>
                  </section>
                </li>

                <li style={styles.details.item}>
                  <img
                    src={link('/assets/github-icon.svg')}
                    style={styles.details.icon}
                  />
                  <section style={styles.details.text}>
                    <span>Net&nbsp;Contributions:</span>&ensp;
                    <span style={{ color: '#42BD41'}}>{activeSubProject.contribution[0]} ++</span> <span>/</span> <span style={{ color: '#E62A10'}}>{activeSubProject.contribution[1]} --</span>
                  </section>
                </li>

                <li style={styles.details.item}>
                  <img
                    src={link('/assets/collaborator-icon.svg')}
                    style={styles.details.icon}
                  />
                  <section style={styles.details.text}>
                    <span>Key&nbsp;Role:</span>&ensp;
                    <span>{activeSubProject.role}</span>
                  </section>
                </li>

                <li style={styles.details.item}>
                  <img
                    src={link('/assets/domain-icon.svg')}
                    style={styles.details.icon}
                  />
                  <section style={styles.details.text}>
                    <span>Live&nbsp;Site:</span>&ensp;
                    <span>
                      {activeSubProject.link ?
                        <a
                          href={activeSubProject.link}
                          target="_blank"
                          style={styles.details.link}
                        >
                            {activeSubProject.linkText || activeSubProject.link}
                          </a> :
                        'Not available'
                      }
                    </span>
                  </section>
                </li>
              </ul>

              <section
                className="description"
                style={styles.subProjectInfo.description}
              >
                <p style={styles.subProjectInfo.description.text}>
                  {activeSubProject.longDescription}
                </p>
              </section>
            </section>

            <section
              ref="screenshots"
              className="screenshots"
              style={styles.subProjectInfo.screenshots}
            >
              {activeSubProject.screenshots && activeSubProject.screenshots.length !== 0 ?
                <ul style={styles.subProjectInfo.screenshots.list}>
                  {activeSubProject.screenshots.map((screenshot, index) => {
                    return (
                      <li
                        key={`screenshot:${activeSubProjectKey}-${screenshot}`}
                        style={styles.subProjectInfo.screenshots.item}
                      >
                        <ImageLoader
                          src={link(`/assets/projects/${project.name.toLowerCase()}/sub-projects/${activeSubProject.dirName || activeSubProjectKey.toLowerCase()}/${screenshot}.jpg`)}
                          aspectRatio={1.79}
                          style={styles.subProjectInfo.screenshots.image}
                        />
                      </li>
                    );
                  })}
                </ul> :
                <span style={styles.subProjectInfo.screenshots.empty}>
                  No screenshots available.
                </span>
              }
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
    height: '100vh',
    marginTop: '-4.5em',

    '@media (max-width: 30rem)': {
      flexDirection: 'column',
      height: 'auto',
    }
  },

  infoBase: {
    height: 'calc(100% - 4.5em - 1px)',
    paddingLeft: '2em',
    paddingRight: '2em',
    paddingTop: '3em',
    marginTop: 'calc(4.5em + 1px)',
  },

  details: {
    list: {
      listStyle: 'none',
      marginLeft: 0,
    },

    item: {
      display: 'flex',
      alignItems: 'baseline',
      marginBottom: '.5em',
      color: '#19243E',
      fontSize: '.8em',
      fontWeight: 300,
      lineHeight: 1
    },

    link: {
      color: '#6694FF',
      textDecoration: 'none',
      borderBottom: '1px solid #6694FF'
    },

    icon: {
      width: '1em',
      marginRight: '.5em'
    }
  },

  projectInfo: {
    base: {
      flex: 1,
      borderRight: '2px solid #eeeff1',
      overflow: 'scroll',

      '@media (max-width: 30rem)': {
        display: 'none',
        flex: 'none',
        height: 'auto',
        overflow: 'visible',
      }
    },

    header: {
      base: {
        marginBottom: '2em',
      },

      title: {
        marginBottom: '.2em',
        fontSize: '2em',
        fontWeight: 700,
        lineHeight: 1,
        color: '#19243E'
      },

      description: {
        fontFamily: 'GC, serif',
        fontStyle: 'italic',
        color: '#6e768a',
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

    details: {
      list: {
        marginBottom: '2em'
      }
    },

    description: {
      fontSize: '.8em',
      lineHeight: 2,
      fontFamily: 'GC, serif',
      fontStyle: 'italic',
      color: '#6e768a',
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
        borderWidth: '2px',
        borderStyle: 'solid',
        borderColor: '#ecf0f1',
        borderRadius: '6px',
        cursor: 'pointer',

        active: {
          borderColor: '#6e768a',
        },

        title: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flex: 4,
          borderWidth: 0,
          borderRightWidth: '2px',
          borderStyle: 'solid',
          borderColor: '#ecf0f1',
          borderTopLeftRadius: '6px',
          borderBottomLeftRadius: '6px',

          text: {
            textAlign: 'center',
            fontWeight: 400,
            color: '#6e768a',
            lineHeight: 1,
          },

          active: {
            backgroundColor: '#ecf0f1'
          }
        },

        description: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          flex: 9,
          padding: '.5em 1em',
          fontSize: '.8em',
          fontWeight: 300,
          lineHeight: 1,
          fontStyle: 'italic',
          color: '#6e768a',
        }
      }
    }
  },

  subProjectInfo: {
    base: {
      flex: 3,
      overflow: 'scroll',

      '@media (max-width: 30rem)': {
        overflow: 'visible',
        paddingTop: 0,
        marginTop: 0
      }
    },

    header: {
      base: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        paddingTop: '1em',
        paddingBottom: '1em',
        borderBottom: '2px solid #eeeff1',

        '@media (max-width: 30rem)': {
          position: 'fixed',
          left: 0,
          top: '3.8em',
          width: '100%',
          paddingLeft: '5rem',
          paddingRight: '5rem',
          fontSize: '300%',
          backgroundColor: 'white',
          zIndex: '100'
        }
      },

      title: {
        margin: 0,
        fontSize: '1em',
        fontWeight: 700,
        lineHeight: 1,
        color: '#19243E'
      },

      projectTitle: {
        container: {
          display: 'flex',
          alignItems: 'baseline',
          justifyContent: 'flex-start',
          marginBottom: '.5em',
          borderBottom: '1px solid #eeeff1',

          '@media (min-width: 30rem)': {
            display: 'none'
          }
        },

        title: {
          marginRight: '.25em',
          marginBottom: 0,
          fontSize: '1.5em',
          fontWeight: 300,
          color: '#19243E'
        },

        description: {
          color: '#6e768a',
          fontWeight: 300
        }
      },


      pagination: {
        item: {
          color: '#6E768A',
          fontSize: '.9em',
          fontWeight: 300,
          cursor: 'pointer',
          userSelect: 'none',
          opacity: 1,

          first: {
            marginRight: '2em'
          },

          disabled: {
            color: '#eeeff1',
            pointerEvents: 'none',
            cursor: 'default',
          },

          caret: {
            fontSize: '150%',
            lineHeight: 0,
            verticalAlign: '-.05em',
          }
        }
      }
    },

    main: {
      display: 'flex',
      height: 'calc(100% - 3.5em - 1px)',

      '@media (max-width: 30rem)': {
        flexDirection: 'column',
        height: '100vh',
        paddingTop: '12em',
        fontSize: '300%',
        overflow: 'scroll'
      }
    },

    body: {
      position: 'relative',
      flex: 1,
      overflow: 'scroll',
      height: '100%',
      paddingRight: '2em',
      paddingTop: '2em',
      marginRight: '2em',
      borderRight: '1px solid #eeeff1',

      '@media (max-width: 30rem)': {
        flex: 'none',
        height: 'auto',
        paddingLeft: '5rem',
        paddingRight: '5rem',
        paddingTop: 0,
        marginRight: 0,
        borderRight: 'none',
        overflow: 'visible'
      }
    },

    details: {
      list: {
        maxWidth: '80%',
        marginBottom: '4em',

        '@media (max-width: 30rem)': {
          marginBottom: '3em',
        }
      }
    },

    description: {
      fontFamily: 'GC, serif',
      fontSize: '.81em',
      color: '#6e768a',
      whiteSpace: 'pre-line',

      text: {
        marginBottom: '1em',
        lineHeight: 2
      }
    },

    screenshots: {
      position: 'relative',
      flex: 1,
      overflow: 'scroll',
      paddingTop: '2em',
      paddingBottom: '1em',

      '@media (max-width: 30rem)': {
        overflow: 'visible',
      },

      list: {
        listStyle: 'none',
        width: '100%',
        margin: 0,
      },

      item: {
        marginBottom: '1em'
      },

      image: {
        width: '100%',
        border: '1px solid rgba(0,0,0,0.2)',
      },

      empty: {
        position: 'absolute',
        left: '50%',
        top: '30%',
        transform: 'translate(-50%, -50%)',
        fontWeight: 300,
        color: '#6e768a',
        borderBottom: '2px solid #eeeff1'
      }
    }
  }
};
