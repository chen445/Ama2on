import React from 'react';

class productIndex extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchProducts()
    }

    render(){
        return(
            <div>
                <ul>
                     {this.props.products.map(
                         (product) => (
                         <li key={product.id}>
                              {/* <img src={product.mainPhoto}/> */}
                              {product.product_name}  
                              {/* {product.averageRating} */}
                              {product.price}

                         </li>))}
                </ul>
            </div>
        )
    }
}

export default productIndex;