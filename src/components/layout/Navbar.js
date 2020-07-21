import React, { Component } from 'react';
import github from '../../brands/github-alt.svg';
import PropTypes from 'prop-types';

export class Navbar extends Component {
  static defaultProps = {
    title: 'Github Finder'
  };

  render() {
    return (
      <nav className='navbar bg-primary'>
        <h1>
          <img src={github} alt='' className='github-icon' /> Navbar
        </h1>
      </nav>
    );
  }
}

Navbar.propTypes = {
  title: PropTypes.string
};

export default Navbar;
