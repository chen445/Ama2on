
import React from 'react';

class ProductShow extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchProduct(this.props.match.params.productId)
    }

    render(){
         if (!this.props.product) {
            return null;
        }

        return(
            <div>
                {this.props.product.photosUrl.map(photo=>(
                    <img key={photo.photoUrl} src={photo.photoUrl} alt="product-detail-photo">
                    </img>
                ))
                }
            </div>
        )
    }
}

export default ProductShow