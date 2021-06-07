
import React from 'react';
import { Link } from 'react-router-dom';


const ProductIndexItem = (props) => (
    <li className="product-item">
        <Link to={`/products/${props.product.id}`} className="product-index-photo">
            <div  style={{backgroundImage: `url(${props.product.mainPhoto})`}} alt="product-main-photo" className="product-img"/>
        </Link>
        {props.hasRatings? <div>{props.product.avergeRating}</div> : ""}
        <div>{props.product.product_name}</div>
        <div>${props.product.price}</div>
     </li>
)

export default ProductIndexItem;

