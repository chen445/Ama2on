import React from 'react';
import ProductIndexItem from './product_index_item';

class productIndex extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchProducts()
    }

    render(){
        if (!this.props.products) {
            return null;
        }
        let topproduct = this.props.products.slice(0, 8);
        let restproducts = this.props.products.slice(8,17);
        return(
            <div class="home">
                <img className="banner" src="https://previews.123rf.com/images/avgust01/avgust011803/avgust01180300027/96971769-hello-summer-banner-template-top-view-on-summer-composition-with-realistic-objects-and-tropical-frui.jpg"/>
                <ul className="products">
                     {topproduct.map((product) => (
                        <ProductIndexItem
                            displayRating={true}
                            product = {product}
                            key={product.id}
                        />
                        ))
                     }
                </ul>
                <ul>
                    <li>{restproducts.map((product)=>(
                        <img key={product.mainPhoto} src={product.mainPhoto} alt="product-main-photo"/>
                    ))}</li>
                </ul>
            </div>
        )
    }

}

export default productIndex;