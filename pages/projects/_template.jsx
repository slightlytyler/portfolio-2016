'use strict'

import React, { Component } from 'react';
import { RouteHandler } from 'react-router';

export default class ProjectsTemplate extends Component {
  render() {
    return <RouteHandler {...this.props} />;
  }
};
