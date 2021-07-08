import React from 'react';
import { BsSearch } from 'react-icons/bs'
import { withRouter, Link } from "react-router-dom";


class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "", focus: false };
    this.search = this.search.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  componentDidMount() {
    const urlParams = new URLSearchParams(this.props.location.search);
    const query = urlParams.get("query");
    if (query) {
      this.props.fetchProducts(query);
      this.setState({
        input: query
      })
    }
  }

  handleKeyUp(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      this.search();
    }
  }

  search() { 
    if (this.state.input === undefined || this.state.input === "") {
      return null;
    }
    this.props.fetchProducts(this.state.input);
    this.props.history.push("/search?query=" + escape(this.state.input));
  }

  render() {
    let outline = "search-box " + this.props.className;
    if (this.state.focus) {
      outline = outline + " search-bar-outline";
    }
    return (
      <div className={outline}>
        <Link to="/page-not-found">
          <button className="allIcon">All ▾</button>
        </Link>
        <input
          className="search-bar"
          type="text"
          value={this.state.input}
          onFocus={(e) => this.setState({ focus: true })}
          onBlur={(e) => this.setState({ focus: false })}
          onChange={(e) => this.setState({ input: e.currentTarget.value })}
          onKeyUp={this.handleKeyUp}
          placeholder="M&M"
        />
        <button type="submit" className="searchIcon" onClick={this.search}>
          <BsSearch />
        </button>
      </div>
    );
  }
}

export default withRouter(SearchBar);