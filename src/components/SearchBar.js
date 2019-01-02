import React from "react";

class SearchBar extends React.Component {
  state = { term: '' };

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  onChange = e => {
    this.setState({term:e.target.value});
  }
  
  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onSubmit}>
          <div className="field">
            <label>Video Search</label>
            <input type="text" value={this.state.term} onChange={this.onChange}/>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
