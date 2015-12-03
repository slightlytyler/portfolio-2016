'use strict'

import React, { Component } from 'react';
import { RouteHandler, Link, State } from 'react-router';
import { Container, Grid, Breakpoint, Span } from 'react-responsive-grid';
import { link } from 'gatsby-helpers';

import Header from '../components/Header';
import HireMeHero from '../components/HireMeHero';
import FeaturedProject from '../components/FeaturedProject';
import WIWO from '../components/WIWO';

export default React.createClass({
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

      moxie: {
        logoBaseline: -.5,
        link: 'https://google.com',
        linkText: 'Download App',
        projectStyle: 'two'
      },

      'on-track': {
        logoBaseline: -.2,
        link: 'https://google.com',
        linkText: 'View Repo',
        projectStyle: 'one'
      },

      'bluprint': {
        logoBaseline: -.26,
        link: 'https://google.com',
        linkText: 'Download from NPM',
        projectStyle: 'two'
      }
    };
    const routes = this.getRoutes().map(function(route) {
      return route.name;
    });
    const isHomePage = routes.indexOf('/') !== -1;

    return (
      <div
        className="page"
        style={{
          fontSize: '1.11vw'
        }}
      >
        <Header isHomePage={isHomePage} />

        {!isHomePage ? <RouteHandler {...this.props}/> : (
          <div
            ref="home"
            style={{ height: '98vh' }}
          >
            <HireMeHero />

            <ul
              className="featured-projects"
              style={{
                display: 'flex',
                height: '36%',
                backgroundColor: 'light-grey',
                listStyle: 'none',
                margin: 0
              }}
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


