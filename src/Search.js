import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadHero } from './actions/LoadAction';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    }

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSearch = this.handleOnSearch.bind(this);
  }

  handleOnChange(event) {
    this.setState({value : event.target.value})
  }

  handleOnSearch (event) {
    event.preventDefault();
    if (this.state.value !== '') {
      this.props.loadHero(this.state.value, () => {
        this.props.history.push("/search")
      });
      this.setState({value: ''})
    }
  }

  render() {
    return (
      <div className="search-form-container">
        <form className="search-form" onSubmit={this.handleOnSearch}>
        <div className="form-row">
          <label>Search</label>
          <input type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleOnChange}/>
        </div>
        <div className="form-search">
            <button className="form-submit" type="submit">Submit</button>
          </div>
        </form>
      </div>
      )
  }
}


const mapDispatchToProps = dispatch => {
  return {
    loadHero: (name, redirectCallback) => {
      dispatch(loadHero(name, redirectCallback))
    }
  }
}
export default connect(null, mapDispatchToProps)(Search);
