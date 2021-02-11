import React from 'react';
import BurgerBuilder from '../../Containers/BurgerBuilder/BurgerBuilder';
import classes from '../Burger/BurgerIngredient/Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
const Burger = (props) => {

    let TransformedIngredients = Object.keys(props.ingredients).map(igKey => {
        return [...Array(props.ingredients[igKey])].map(( _,i) => {
            return <BurgerIngredient key= {igKey + i} type ={igKey} />
        })
    })
    .reduce((arr,el) => {
        return arr.concat(el);
    }, []);
    if (TransformedIngredients.length === 0) {
        TransformedIngredients = <p>Please start adding ingredients!!</p>
    }
    
    console.log(TransformedIngredients);
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {TransformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    )
}

export default Burger;