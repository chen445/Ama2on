
import React from 'react';
import { Link } from 'react-router-dom';


const ProductIndexItem = (props) => (
    <li className="product-item">
        <Link to={`/products/${props.product.id}`}>
            <img class="product-index-photo" src={props.product.mainPhoto} alt="product-main-photo"/>
        </Link>
        {props.hasRatings? <div>{props.product.avergeRating}</div> : ""}
        {props.product.product_name}
        {props.product.price}
     </li>
)

export default ProductIndexItem;

