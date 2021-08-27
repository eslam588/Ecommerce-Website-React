import React from "react";
import CartItem from "../Components/CartItem";
import ProductsApi from "../api/products";
import {connect} from "react-redux";
import {clearCart} from "../store/actions/actions";

class Cart extends React.Component{

    placeOrder = () => {
        // send the request to the server
        // clear cart
        this.props.clearCart();
        alert('We recieved your order, and we are working on it.');
    };
    checkTotal = () => {
        if((this.props.total) === 0){
            <p>no item added in cart</p>
        }
        else if ((this.props.total) > 0) {
            <p>Total : {this.props.total}$</p>
        }
    }

    render(){
        return (
            <div className="cart">
                <div className="container">
                <h1 className="carth my-3">Cart</h1>
                    <div className="box-contain row">
                        {this.props.cartItems.map((item, index) => 
                            <div className={'col-3'} key={index}>
                                <CartItem item={item} index={index} />
                            </div>
                        )}
                    </div>
                    <br />
                     <h2 className="my-3">Total : {this.props.total}$</h2>     
                    <button className="btn btn-primary btn-block" onClick={this.placeOrder}>Place order</button>

            </div>  
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        cartItems: state.cart,
        total: state.cart.reduce((total, item) => total + item.quantity * item.product.price, 0),
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        clearCart: () => dispatch(clearCart()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
