import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import HeroList from './HeroList';

class Hero extends Component {
  constructor(props) {
    super(props)
  }
  render() {
      return (
        <div className='recipes'>
          <h2 className='list_of_selected'>Selected Hero:</h2>
          <HeroList character = {this.props.hero} />
        </div>
      )
  }
}
const mapStateToProps = state => {
  return {
    hero: state.hero.hero
  };
};


const ConnectedHero = connect(mapStateToProps, null)(Hero);

export default withRouter(ConnectedHero);