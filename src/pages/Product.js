import React from "react";
import {getById} from "../api/products";
import {addToCart} from "../store/actions/actions";
import {connect} from "react-redux";

class Product extends React.Component{

    state={
        loading: true,
        quantity: 0,
        product: {}
    };

    componentDidMount(){
        const id = this.props.match.params.id;

        getById(parseInt(id))
            .then(product => {
                this.setState({
                    product,
                    loading: false
                });
            })
    }

    handleQuantity = (event) => {
        const value = event.target.value;

        if(value < 0)
            return ;

        this.setState({
            quantity: value
        })
    }

    addToCart = (product) => {
        this.props.addToCart(product, this.state.quantity);
    }

    render(){
        if(this.state.loading)
            return 'Loading ..';

        const product = this.state.product;
        const quantity = this.state.quantity;
        const additional = this.props.additional;

        return (
            <div className="prodcart">
                <div className="container">
                <div className={'row'}>
                    <div className="col-6">
                        <img src={product.image} width={'100%'}/>
                    </div>
                    <div className="col-6">
                    <h1 className="proname">{product.name}</h1>

                        <p> <span>Price:</span> {product.price}$</p>

                        <p><span>{product.description}</span></p>

                        <p> <span>additional description :</span> {product.addtional}</p>


                        <input type="number" value={quantity} onChange={this.handleQuantity} />
                        
                        <br /><br />

                        <p><span>Total:</span> {quantity * product.price}</p>

                        <button className="btn btn-primary" onClick={() => this.addToCart(product)}>
                            Add to Cart
                        </button>

                    </div>
                </div>
                </div>
            </div>
        );
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (productsInfo, quantity) => dispatch(addToCart(productsInfo, quantity)),
    };
}

export default connect(null, mapDispatchToProps)(Product);
