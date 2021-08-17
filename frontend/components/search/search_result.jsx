import React from "react";
import ProductIndexItem from "../home/product_index_item";
import { withRouter } from "react-router-dom";

class SearchResult extends React.Component {
  constructor(props) {
    super(props);
    this.state = { orderOption: "Featured" };
    this.selectOrder=this.selectOrder.bind(this)
  }

  componentDidMount() {}
  selectOrder(e){
    this.setState({orderOption: e.target.value});
  }

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
    debugger
    let products = undefined
    if (this.state.orderOption == "Featured"){
      products = this.props.products;
    }else if(this.state.orderOption =="Low"){
      products = this.props.products.sort(function (a, b) {
        return a.price - b.price;
      });
    }else if (this.state.orderOption=="High"){
      products = this.props.products.sort(function (a, b) {
        return b.price - a.price;
      });
    }else{
      products = this.props.products.sort(function (a, b) {
        return b.average_rating - a.average_rating;
      });
    }

    return (
      <div>
        <div className="search-result">
          <div className="sorted">
            <span>
              <b>{products.length}</b> results
            </span>
            <select onChange={this.selectOrder}>
              <option value="Featured">Featured</option>
              <option value="Low">Price: Low to High</option>
              <option value="High">Price: High to Low</option>
              <option value="Review">Avg. Customer Review</option>
            </select>
          </div>
          {/* <div className="filter-result"></div> */}
          <ul className="search">
            {products.map((product) => (
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
