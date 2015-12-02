'use strict'

import React, { Component, PropTypes } from 'react';
import Radium from 'radium';

import Spinner from './Spinner';

@Radium
export default class ImageLoader extends Component {
  static propTypes = {
  };

  static defaultProps = {
    aspectRatio: 1
  };

  constructor(props) {
    super(props);

    this.state = {
      hasLoaded: false
    };
  }

  componentDidMount() {
    this.loadImage();
  }

  loadImage() {
    const { image } = this.refs;

    image.onload = () =>
        this.setState({ hasLoaded: true });
  }

  render() {
    const { aspectRatio } = this.props;
    const propStyles = this.props.style;
    const { hasLoaded } = this.state;

    return (
      <div style={{ position: 'relative' }}>
      <div
        style={[
          styles.container,
          { paddingBottom:  `${100 * (1 / aspectRatio)}%` },
          hasLoaded && styles.container.loaded
        ]}
      >
        <img
          ref="image"
          src={this.props.src}
          style={[
            styles.image,
            propStyles,
            hasLoaded && styles.image.loaded
          ]}
        />

        {!hasLoaded && <Spinner />}
      </div>
      </div>
    );
  }
}

const styles = {
  container: {
    position: 'relative',
    height: 0,
    backgroundColor: '#eeeff1',
    transition: 'background-color .3s',

    loaded: {
      height: 'auto',
      paddingBottom: 0,
      backgroundColor: 'transparent'
    }
  },

  image: {
    display: 'block',
    opacity: 0,
    transition: 'opacity .3s',

    loaded: {
      opacity: 1
    }
  }
};