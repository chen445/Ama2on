import React from 'react';
import { BsSearch } from 'react-icons/bs'
import { withRouter, Link } from "react-router-dom";


class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "", focus: false, selectCategoryId: "0" };
    this.search = this.search.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.selectCategory = this.selectCategory.bind(this);
    this.categoryWidth = this.categoryWidth.bind(this);
  }

  componentDidMount() {
    const urlParams = new URLSearchParams(this.props.location.search);
    const query = urlParams.get("query");
    if (query) {
      this.props.fetchProducts(query);
      this.setState({
        input: query,
      });
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
      if (this.state.selectCategoryId == "0") {
        this.props.history.push("/");
      } else {
         this.props.fetchCategory(this.state.selectCategoryId);
         this.props.history.push("/search");
      }
      return null;
    }
    this.props.fetchProducts(this.state.input, this.state.selectCategoryId);
    this.props.history.push(
      "/search?query=" +
        escape(this.state.input) +
        "&catergory=" +
        escape(this.state.selectCategoryId)
    );
  }

  selectCategory(event) {
    this.setState({ selectCategoryId: event.target.value });
  }

  categoryWidth(categoryId) {
    for (let i = 0; i < this.props.categories.length; i++) {
      if (this.props.categories[i].id == categoryId) {
        return this.props.categories[i].category_name.length;
      }
    }
    return 3;
  }

  render() {
    let outline = "search-box " + this.props.className;
    if (this.state.focus) {
      outline = outline + " search-bar-outline";
    }
    return (
      <div className={outline}>
        <select
          className="allIcon"
          style={{
            width: `${
              8 * this.categoryWidth(this.state.selectCategoryId) + 20
            }px`,
          }}
          onKeyUp={this.handleKeyUp}
          onChange={this.selectCategory}
        >
          <option value="0">All</option>
          {this.props.categories.map((category) => {
            return (
              <option value={category.id}>{category.category_name}</option>
            );
          })}
        </select>

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