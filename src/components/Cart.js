import React from 'react';
import LipstickContainer from './LipstickContainer';

const URL = 'http://localhost:3000/products'

class Cart extends React.Component {

 state = {
   products: [],
   selectedProducts:[],
   cart: [],
   cartView: false,
 }

 componentDidMount () {
   if(this.props.cartView) {
     localStorage.cartItems = localStorage.cartItems || JSON.stringify([]);
     let cartItems = JSON.parse(localStorage.cartItems);

     this.setState({
       cart: cartItems,
       products: cartItems,
       selectedProducts: cartItems.slice(0,20),
       cartView: this.props.cartView
     });
   } else {
   fetch(URL)
     .then(r => r.json())
     .then(products =>
       this.setState({
         products,
         selectedProducts: products.slice(0,20)
       }))
     }
 }

 handleCardClick = (card) => {
   if (this.props.cartView) {
     var filteredCards = this.state.cart.filter(cartCard => cartCard.id !== card.id);
     this.setState({
       cart: filteredCards,
       products: filteredCards,
       selectedProducts:filteredCards,
     });
     localStorage.cartItems = JSON.stringify(filteredCards);
   } else {
   this.setState({
     cart: [...this.state.cart, card]
   });
   localStorage.cartItems = JSON.stringify(this.state.cart);
  }
 }

 render() {
   return (
     <div className="Page">
       <LipstickContainer
         products={this.state.products}
         selectedProducts={this.state.selectedProducts}
         handleCard={this.handleCardClick}
         cartView={this.state.cartView}
       />
     </div>
   );
 }
}

export default Cart;
