# Ama2on

## Introduction
Ama2on is e-commerce website where buyers can search for products they like. They can see the price and select affordable one.

Live Site: [Ama2on](https://ama2on.herokuapp.com/#/)

<img src="https://github.com/chen445/Ama2on/blob/main/app/assets/images/am2on-home_page.gif" alt="demo" width="700" height="350"/>

## Technologies used:
* React
* Redux
* Javascript
* Ruby on Rails
* Postgres SQL
* AWS S3

# Features

## User Auth
* Create a new account
* Log into with account
* Login with demo account without signing up.

## Product search
<img src="https://github.com/chen445/Ama2on/blob/main/app/assets/images/am2on_search.gif" alt="demo" width="700" height="350"/>

* A search bar is displayed on the top.
* Search products with keywords. A list of products will be displayed to the user. 

Product Controller
```
def index
  if (params[:query] == nil) 
    @products = Product.all
      render "api/products/index"
  else
    @products = Product.findBySubstring(params[:query].strip)
      render "api/products/index"
  end
end
 ```

Search function 
```
search() { 
    if (this.state.input === undefined || this.state.input === "") {
      return null;
    }
    this.props.fetchProducts(this.state.input);
    this.props.history.push("/search?query=" + escape(this.state.input));
  }
```
## Product details
<img src="https://github.com/chen445/Ama2on/blob/main/app/assets/images/am2on_product_details.gif" alt="demo" width="700" height="350"/>
There is page where details of product are shown to the user.

* View details of the product, including price, description, pictures, ratings, and reviews.
* Add the product into the user's shopping cart with a quanitity.
* Filter reviews of a rating by clicking on the rating chart. 
* Add a review for the product by clicking the review link, which takes the user to review page to create the review. 

## Shopping cart
<img src="https://github.com/chen445/Ama2on/blob/main/app/assets/images/ama2on_shopping_cart.gif" alt="demo" width="700" height="350"/>

* View products that has been added by the users.
* Update quantities of a product in the cart.
* Removing a product in the cart.


```
  update(cartItemId) {
    const cartItem = this.props.cartItems[cartItemId];
    if (
      !this.state.updatedQty[cartItemId] ||
      this.state.updatedQty[cartItemId] === cartItem.quantity
    ) {
      return;
    }

    let updatedCartItem = {
      product_id: cartItem.product_id,
      quantity: this.state.updatedQty[cartItemId] - cartItem.quantity,
    };

    this.props.createCartItem(updatedCartItem).then(() => {
      let updatedQty = Object.assign({}, this.state.updatedQty);
      updatedQty[cartItemId] = undefined;
      this.setState({
        updatedQty,
      });
    });
  }
 ```

# Coming soon
* Search by categories.
* Sort the list of products by price.
