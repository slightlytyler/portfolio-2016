import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';

import { TypographyStyle } from 'utils/typography'


export default class HTML extends React.Component {
  static defaultProps = {
    body: ''
  };

  render() {
    var title;
    title = DocumentTitle.rewind();
    if (this.props.title) {
      title = this.props.title;
    }

    return (
      <html
        lang="en"
        style={{ fontSize: '1.11vw' }}
      >
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name='viewport' content='width=device-width, initial-scale=1.0 maximum-scale=1.0' />
          <title>{title}</title>
          <link rel="shortcut icon" href={this.props.favicon} />
          <link href='https://fonts.googleapis.com/css?family=Roboto:100,300,400,700' rel='stylesheet' type='text/css' />
          <TypographyStyle />
          <style dangerouslySetInnerHTML={{__html:
            `
              *,
              h1, h2, h3, h4, h5, h6 {
                line-height: 1.5;
              }
              img { margin: 0; }
            `
          }} />
        </head>
        <body>
          <div id="react-mount" dangerouslySetInnerHTML={{__html: this.props.body}} />
          <script src="/bundle.js" />
        </body>
      </html>
    );
  }
}