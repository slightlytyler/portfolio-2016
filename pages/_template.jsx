'use strict'

import React, { Component } from 'react';
import { RouteHandler, Link, State } from 'react-router';
import Radium from 'radium';

import { link } from 'gatsby-helpers';

import Header from '../components/Header';
import HireMeHero from '../components/HireMeHero';
import FeaturedProject from '../components/FeaturedProject';
import WIWO from '../components/WIWO';

import '../css/styles.css'

const Page = React.createClass({
  mixins: [State],

  render: function() {
    const featuredProjects = {
      'bernies-tax-plan': {
        color: "#017DDA",
        logoBaseline: -1.8,
        link: 'http://bernies-tax.dataviz.work/',
        linkText: 'Explore the Plan',
        projectStyle: 'two'
      },

      mocksy: {
        logoBaseline: -.7,
        link: 'https://slightlytyler.github.io/mocksy',
        linkText: 'Download the App',
        projectStyle: 'two'
      },

      'todo': {
        logoBaseline: -.45,
        link: 'https://github.com/slightlytyler/react-native-redux-todo',
        linkText: 'View the Repo',
        projectStyle: 'one'
      },

      'open-source': {
        logoBaseline: -.26,
        link: 'https://github.com/slightlytyler/react-svgcon',
        linkText: 'Checkout a project',
        projectStyle: 'two'
      }
    };
    const routes = this.getRoutes().map(function(route) {
      return route.name;
    });

    const isHomePage = routes.indexOf('/') !== -1;
    const isHireMePage = routes.indexOf('/hire-me/') !== -1;

    return (
      <div
        className="page"
        style={styles.page}
      >
        <Header
          isHomePage={isHomePage}
          isHireMePage={isHireMePage}
        />

        {!isHomePage ? <RouteHandler {...this.props}/> : (
          <div
            ref="home"
          >
            <div style={styles.main}>
              <HireMeHero />

              <ul
                key="featuredProjectsList"
                className="featured-projects"
                style={styles.featuredProjectsList}
              >
                {Object.keys(featuredProjects).map(projectKey => {
                  let project = featuredProjects[projectKey];
                  let {
                    color,
                    logoBaseline,
                    link,
                    linkText,
                    projectStyle
                  } = project;

                  return (
                    <FeaturedProject
                      key={`featuredProject:${projectKey}`}
                      name={projectKey}
                      color={color}
                      logoBaseline={logoBaseline}
                      link={link}
                      linkText={linkText}
                      projectStyle={projectStyle}
                    />
                  )
                })}
              </ul>
            </div>

             <WIWO />
          </div>
        )}
      </div>
    );
  }
});

export default Radium(Page);

const styles = {
  page: {
    paddingTop: '4.5rem',

    '@media (max-width: 1024px)': {
      paddingTop: '6.75rem'
    },

    '@media (max-width: 500px)': {
      paddingTop: '10rem'
    }
  },

  main: {
    height: 'calc(98vh - 4.5rem)',

    '@media (max-width: 1024px)': {
      height: 'auto'
    }
  },

  featuredProjectsList: {
    display: 'flex',
    flexWrap: 'wrap',
    height: '36%',
    listStyle: 'none',
    margin: 0,

    '@media (max-width: 1024px)': {
      height: 'auto'
    },
  }
}
