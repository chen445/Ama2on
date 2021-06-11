
import React from 'react';
import { Link } from 'react-router-dom';

  function starClass(starIndex, rating){
    return starIndex > rating
      ? "product-show-star-unchecked"
      : "product-show-star-checked";
  }

  function renderStars(rating){
    const stars = ["★", "★", "★", "★", "★"];
    return (
      <div style={{ marginTop: "12px", marginBottom: "12px" }}>
        {stars.map((star, i) => (
          <span key={i} className={starClass(i + 1, rating)}>
            {" "}
            {star}
          </span>
        ))}
      </div>
    );
  }
 
const ProductIndexItem = (props) => (

  <li className="product-item">
    <Link to={`/products/${props.product.id}`} className="product-index-photo">
      <div
        style={{ backgroundImage: `url(${props.product.mainPhoto})` }}
        alt="product-main-photo"
        className="product-img"
      />
    </Link>
    {props.displayRating ? <div>{renderStars(props.product.average_rating)}</div> : ""}
    <div>{props.product.product_name}</div>
    <div>${props.product.price}</div>
  </li>
);

export default ProductIndexItem;



