import React from "react";
import ProductIndexItem from "../home/product_index_item";
import { withRouter } from "react-router-dom";

class SearchResult extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    if (!this.props.products) {
      return null;
    }
    return (
      <div>
        <ul>
          {this.props.products.map((product) => (
            <ProductIndexItem
              displayRating={true}
              product={product}
              key={product.id}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default withRouter(SearchResult);
