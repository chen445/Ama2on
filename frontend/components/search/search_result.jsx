import React from "react";
import ProductIndexItem from "../home/product_index_item";
import { withRouter } from "react-router-dom";

class SearchResult extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}


  render() {
     const urlParams = new URLSearchParams(this.props.location.search);
     const query = urlParams.get("query");

    if (this.props.products.length === 0) {
      return (
        <div className="no-result">
          <h1>No results for "{query}"</h1>
          <h2>Try checking your spelling or use more general terms</h2>
        </div>
      );
    }
    return (
      <div>
        <div className="search-result">
          <div className="filter-result"></div>
          <ul className="search">
            {this.props.products.map((product) => (
              <ProductIndexItem
                displayRating={true}
                product={product}
                key={product.id}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default withRouter(SearchResult);
