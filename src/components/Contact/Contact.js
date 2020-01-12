/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './Contact.scss';
import twitterIcon from '../../assets/icons/twitter.svg';
import githubIcon from '../../assets/icons/github.svg';

export default () => (
  <div className="Contact" id="Contact">
    <h2 className="Contact-email">darvz.gtz@gmail.com</h2>
    <div className="Contact-icons">
      <a href="https://twitter.com/diegoarvz4" target="_blank"  rel="noopener noreferrer">
        <img src={twitterIcon} />
        @diegoarvz4
      </a>
      <a href="https://github.com/diegoarvz4" target="_blank"  rel="noopener noreferrer">
        <img src={githubIcon} />
        diegoarvz4
      </a>
    </div>
  </div>
)