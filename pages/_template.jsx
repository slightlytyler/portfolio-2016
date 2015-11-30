'use strict'

import React, { Component } from 'react';
import { RouteHandler, Link, State } from 'react-router';
import { Container, Grid, Breakpoint, Span } from 'react-responsive-grid';
import { link } from 'gatsby-helpers';

import Header from '../components/Header';
import HireMeHero from '../components/HireMeHero';
import FeaturedProject from '../components/FeaturedProject';
import WIWO from '../components/WIWO';

export default class PageTemplate extends Component {
  render() {
    return (
      <div
        className="page"
        style={{
          fontSize: '1.11vw'
        }}
      >
        <Header />

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
            }}>
            <FeaturedProject
              name="bluesky"
              color="#0d5685"
              logoBaseline={-1.8}
              linkText="Explore Project"
              projectStyle="one"
            />
            <FeaturedProject
              name="moxie"
              logoBaseline={-.5}
              linkText="Download App"
              projectStyle="two"
            />
            <FeaturedProject
              name="on-track"
              logoBaseline={-.2}
              linkText="View Repo"
              projectStyle="one"
            />
            <FeaturedProject
              name="bluprint"
              logoBaseline={-.26}
              linkText="Download from NPM"
              projectStyle="two"
            />
          </ul>

          <WIWO />
        </div>
      </div>
    );
  }
};
