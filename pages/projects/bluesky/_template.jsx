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
      image: link('/assets/projects/bluesky/sub-projects/commerce/home.png')
    },

    subProjects: {
      Commerce: {
        shortDescription: 'Flagship ordering site.',
        longDescription:
            `Bluesky (project name 'Commerce') is the flagship ordering site and public facing product for GCC.\
            Serving primarily US customers Bluesky saw marked improvement in sales over past years where the\
            the public facing site failed to gain traction.

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
            `Minisites is GCC's primary product offering a variety of custom printed and e greetings.\
             Developed to be white labelable by business clients, each site has it's own subdomain and\
             branding. In addition to visual customization each client has a unique set of offerings\
             and personalization options.

            I designed the spec for the personalization process as well as devloped the components used.\
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
            control available products and track inventory, generate and customize minisites, and oversee orders.

            Admin was the largest front end application we built, only smaller than the API. I contributed heavily\
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
          a small app purely for exploring current products. In addition to viewing products it also display a selection of verses and music options\
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
    const { body, screenshots } = this.refs;
    body.scrollTop = 0;
    screenshots.scrollTop = 0;

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
              containerStyle={{
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
                  <span>Project Owner:</span>&nbsp;&nbsp;
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
                    <span>Agency:</span>&nbsp;&nbsp;
                    <span>Deep Space Robots</span>
                  </section>
                </li>
              )}
            </ul>
          </div>

          <div
            className="description"
            style={styles.projectInfo.description}
          >
            <p>
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
            <h3
              style={styles.subProjectInfo.header.title}
            >
              {activeSubProject.name || activeSubProjectKey}
            </h3>

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
                    <span>Stack:</span>&nbsp;&nbsp;
                    <span>{activeSubProject.stack.join(', ')}</span>
                  </section>
                </li>

                <li style={styles.details.item}>
                  <img
                    src={link('/assets/github-icon.svg')}
                    style={styles.details.icon}
                  />
                  <section style={styles.details.text}>
                    <span>Net Contributions:</span>&nbsp;&nbsp;
                    <span style={{ color: '#42BD41'}}>{activeSubProject.contribution[0]} ++</span> <span>/</span> <span style={{ color: '#E62A10'}}>{activeSubProject.contribution[1]} --</span>
                  </section>
                </li>

                <li style={styles.details.item}>
                  <img
                    src={link('/assets/collaborator-icon.svg')}
                    style={styles.details.icon}
                  />
                  <section style={styles.details.text}>
                    <span>Key Role:</span>&nbsp;&nbsp;
                    <span>{activeSubProject.role}</span>
                  </section>
                </li>

                <li style={styles.details.item}>
                  <img
                    src={link('/assets/domain-icon.svg')}
                    style={styles.details.icon}
                  />
                  <section style={styles.details.text}>
                    <span>Live Site:</span>&nbsp;&nbsp;
                    <span>
                      {activeSubProject.link ?
                        <a href={activeSubProject.link}>{activeSubProject.linkText || activeSubProject.link}</a> :
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
                          src={link(`/assets/projects/${project.name.toLowerCase()}/sub-projects/${activeSubProject.dirName || activeSubProjectKey.toLowerCase()}/${screenshot}.png`)}
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
    marginTop: '-4.5em'
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
      color: '#6e768a',
      fontSize: '.9em',
      fontWeight: 300,
      lineHeight: 1
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

    details: {
      list: {
        marginBottom: '2em'
      }
    },

    description: {
      fontSize: '1em',
      fontWeight: 300,
      color: '#19243E'
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
      overflow: 'scroll'
    },

    header: {
      base: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        paddingTop: '1em',
        paddingBottom: '1em',
        borderBottom: '2px solid #eeeff1'
      },

      title: {
        margin: 0,
        fontSize: '1em',
        fontWeight: 700,
        lineHeight: 1,
        color: '#19243E'
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
    },

    body: {
      position: 'relative',
      flex: 1,
      overflow: 'scroll',
      height: '100%',
      paddingRight: '2em',
      paddingTop: '2em',
      marginRight: '2em',
      borderRight: '1px solid #eeeff1'
    },

    details: {
      list: {
        maxWidth: '80%',
        marginBottom: '4em',
      }
    },

    description: {
      fontWeight: 300,
      color: '#6e768a',
      whiteSpace: 'pre-line',

      text: {
        marginBottom: '1em'
      }
    },

    screenshots: {
      position: 'relative',
      flex: 1,
      overflow: 'scroll',
      paddingTop: '2em',
      paddingBottom: '1em',

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
        color: '#6e768a'
      }
    }
  }
};
