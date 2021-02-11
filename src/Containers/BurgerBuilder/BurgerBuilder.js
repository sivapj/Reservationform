import React, { Component } from 'react';
import Auxi from '../../hoc/Auxi';
import Burger from '../../Components/Burger/Burger';
import BuildControls from '../../Components/Burger/BuildControls/BuildControls';

const INGREDIENTS_PRICE = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

class BurgerBuilder extends Component {
    state = {
        ingredients : {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalprice: 4
    }
    addIngredient = (type) => {
        const oldcount = this.state.ingredients[type];
        if (oldcount <= 0) {
            return;
        }
        const updatedcount = oldcount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedcount;
        const priceAddition = INGREDIENTS_PRICE[type];
        const oldPrice = this.state.totalprice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalprice: newPrice, ingredients: updatedIngredients})
    }
    removeIngredient =(type) => {
        const oldcount = this.state.ingredients[type];
        const updatedcount = oldcount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedcount;
        const priceDeduction = INGREDIENTS_PRICE[type];
        const oldPrice = this.state.totalprice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({totalprice: newPrice, ingredients: updatedIngredients})
    }

    render (){
        const Disabledinfo = {
            ...this.state.ingredients
        };
        for ( let key in Disabledinfo) {
            Disabledinfo[key] = Disabledinfo[key] <= 0
        }
        return(
            <Auxi>             
                <Burger ingredients = {this.state.ingredients}/>              
                <BuildControls 
                price = {this.state.totalprice}
                Ingredientadded = {this.addIngredient} 
                removeIngredient = {this.removeIngredient}
                disabled = {Disabledinfo}
                />
            </Auxi>
        )
    }
}

export default BurgerBuilder;