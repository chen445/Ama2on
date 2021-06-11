import React from "react";
import ProductIndexItem from "../home/product_index_item";
import { withRouter } from "react-router-dom";

class SearchResult extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    if (this.props.products.length === 0) {
      return <div>No results for </div>;
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
