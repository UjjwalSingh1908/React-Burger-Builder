import React, { Component } from 'react';
import Aux from '../../../hoc/Auxilary/Auxilary';
import Button from '../../../components/UI/Button/Button';
class OrderSummary extends Component {

    render() {

        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(igKey=> {
        return (<li key={igKey}>
                    <span style={{textTransform: "capitalize"}}>{igKey}</span>: {this.props.ingredients[igKey]}
                </li>);
        });

        return(        
            
            <Aux>
              <h3>Your Order</h3>
              <p>A delicious Burger with following Ingredients:</p>
              <ul>
                 {ingredientSummary}
              </ul>
              <p><strong>Total Price: &#8377;{this.props.price.toFixed(2)}</strong></p>
              <p>Continue to Checkout?</p>
              <Button btnType= 'Danger' clicked={this.props.purchaseCancelled}>CANCEL</Button>
              <Button btnType= 'Success' clicked={this.props.purchaseContinue}>CONTINUE</Button>
                </Aux>
            

        );
    }
    
   
}

export default OrderSummary;