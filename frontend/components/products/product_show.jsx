
import React from 'react';

class ProductShow extends React.Component{
    constructor(props){
        super(props)
        this.state = {activeImg : 0};
    }

    componentDidMount(){
        this.props.fetchProduct(this.props.match.params.productId)
    }

    update(field){
        return e=>{
            this.setState({[field]: e.currentTarget.value})
        }
    }

    render(){
         if (!this.props.product) {
            return null;
        }
        return (
          <div className="detail-show">
            <div className="product-show">
              <div className="produnct-images-container">
                <div className="sub-slider">
                  {this.props.product.photosUrl.map((photo, i) => (
                    <img
                      onMouseEnter={() => {
                        this.setState({
                          activeImg: i
                        });
                      }}
                      className="sub-photos"
                      key={photo.photoUrl}
                      src={photo.photoUrl}
                      alt="product-detail-photo"
                    ></img>
                  ))}
                </div>
                <div className="slide-wrapper">
                  <img
                    className="main-photo"
                    src={
                      this.props.product.photosUrl[this.state.activeImg].photoUrl}
                  />
                </div>
              </div>
              <div className="product-description">
                <ul>
                  <h1>{this.props.product.product_name}</h1>
                  <p>By{this.props.product.seller_first_name}</p>
                  <span>{this.props.product.average_rating}</span>
                  <span>${this.props.product.price}</span>
                </ul>
              </div>
              <div className="product-checkout">
                <p>{this.props.product.price}</p>
                <h4>& FreeShipping</h4>
                <span>In Stock</span>
                <div className="dropdown-content">
                  <label className="dropdown">Qty</label>
                  <select
                    className="product-quanitity"
                    onClick={this.update("quanitity")}
                  >
                    <option value="1" defaultValue="1">
                      1
                    </option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        );
   } 
}

export default ProductShow