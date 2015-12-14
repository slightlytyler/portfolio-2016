'use strict'

import React, { Component } from 'react';
import { RouteHandler, Link, State } from 'react-router';
import Radium from 'radium';

import { link } from 'gatsby-helpers';

import Header from '../components/Header';
import HireMeHero from '../components/HireMeHero';
import FeaturedProject from '../components/FeaturedProject';
import WIWO from '../components/WIWO';


const Page = React.createClass({
  mixins: [State],

  render: function() {
    const featuredProjects = {
      bluesky: {
        color: "#0d5685",
        logoBaseline: -1.8,
        link: '/projects/bluesky/',
        linkText: 'Explore Project',
        projectStyle: 'one'
      },

      mocksy: {
        logoBaseline: -.7,
        link: 'https://slightlytyler.github.io/mocksy',
        linkText: 'Download App',
        projectStyle: 'two'
      },

      'todo': {
        logoBaseline: -.45,
        link: 'https://github.com/slightlytyler/react-native-redux-todo',
        linkText: 'View Repo',
        projectStyle: 'one'
      },

      'bluprint': {
        logoBaseline: -.26,
        link: 'https://www.npmjs.com/package/bluprint',
        linkText: 'Download from NPM',
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
        style={{
          paddingTop: '4.5em',
        }}
      >
        <Header
          isHomePage={isHomePage}
          isHireMePage={isHireMePage}
        />

        {!isHomePage ? <RouteHandler {...this.props}/> : (
          <div
            ref="home"
            style={{ height: 'calc(98vh - 4.5em)' }}
          >
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

            <WIWO />
          </div>
        )}
      </div>
    );
  }
});

export default Radium(Page);

const styles = {
  featuredProjectsList: {
    display: 'flex',
    flexWrap: 'wrap',
    height: '36%',
    listStyle: 'none',
    margin: 0,

    '@media (max-width: 70rem)': {
      height: '100%',
    },

    '@media (max-width: 30rem)': {
      height: '150%',
    },
  }
}
