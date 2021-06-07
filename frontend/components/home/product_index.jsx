import React from "react";
import ProductIndexItem from "./product_index_item";
import { Link } from "react-router-dom";

class productIndex extends React.Component {
  constructor(props) {
    super(props);
    this.slider = React.createRef();
  }

  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    const backgroundcolor =
      "linear-gradient(180deg, rgba(243,243,246,0) 0%, rgba(240,240,244,0) 80%, rgba(234,239,240,1) 100%)";
    if (!this.props.products) {
      return null;
    }
    let topproduct = this.props.products.slice(0, 8);
    let restproducts = this.props.products.slice(8, 17);
    return (
      <div className="home">
        <div
          className="banner"
          style={{
            backgroundImage: `${backgroundcolor},url(${encodeURI(
              window.banner1
            )})`,
          }}
        />
        <div className="home-content">
          <ul className="products">
            {topproduct.map((product) => (
              <ProductIndexItem
                displayRating={true}
                product={product}
                key={product.id}
              />
            ))}
          </ul>
          <div className="slider">
            <button
              onClick={(e) =>
                this.slider.current.scrollTo({
                  left: this.slider.current.scrollLeft - 140,
                  behavior: "smooth",
                })
              }
              className="button-slider button-forward"
            >
              {"<"}
            </button>
            <ul className="display-show" ref={this.slider}>
              {restproducts.map((product) => (
                <li
                  key={product.mainPhoto}
                  style={{ backgroundImage: `url(${product.mainPhoto}` }}
                  alt="product-main-photo"
                >
                  <Link
                    to={`/products/${product.id}`}
                    className="link-picture"
                  />
                </li>
              ))}
            </ul>
            <button
              onClick={(e) =>
                this.slider.current.scrollTo({
                  left: this.slider.current.scrollLeft + 140,
                  behavior: "smooth",
                })
              }
              className="button-slider button-backward"
            >
              {">"}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default productIndex;
