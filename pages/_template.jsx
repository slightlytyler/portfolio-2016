import React, { Component } from 'react';
import { RouteHandler, Link, State } from 'react-router';
import { Container, Grid, Breakpoint, Span } from 'react-responsive-grid';
import { link } from 'gatsby-helpers';

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
        <header
          className="site-header"
          style={{
            position: 'fixed',
            top: '0',
            left: '0',
            right: '0',
            display: 'flex',
            alignItems: 'center',
            height: '4.5em',
            padding: '0 2em',
            backgroundImage: 'linear-gradient(-180deg, rgba(255,255,255,0.00) 0%, rgba(255,255,255,0.40) 24%, rgba(227,227,229,0.40) 97%)',
            boxShadow: '0px 1px 0px 0px rgba(0,0,0,0.08)',
          }}
        >
          <img
            src={link("/logo.svg")}
            style={{
              width: '8.75em'
            }}
          />
        </header>

        <div
          ref="home"
          style={{ height: '98vh' }}
        >
          <section
            className="hero"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '64%',
              paddingTop: '4.5em',
              textAlign: 'center'
            }}>
            <div
              className="container"
              style={{
                maxWidth: '40em',
              }}>
              <div
                className="cta"
                style={{
                  marginBottom: '.25em',
                  fontSize: '2.125em',
                  fontWeight: '300',
                  color: '#19243e',
                }}>
                Have a project? Let's ship it together.
              </div>

              <div
                className="description"
                style={{
                  fontSize: '1.3125em',
                  fontWeight: '300',
                  color: '#19243e',
                }}>
                I’m a designer / developer specializing in client side applications
                written in Javascript.
              </div>

              <div style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '2em'
              }}>
                <span
                  className="hire-me"
                  style={{
                    padding: '1em 5em',
                    borderWidth: 'calc(.0625em + 1px)',
                    borderStyle: 'solid',
                    borderColor: '#19243e',
                    borderRadius: '.25em',
                    fontSize: '1em',
                    fontWeight: '400'
                  }}>
                  Hire Me
                </span>
              </div>
            </div>
          </section>

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
