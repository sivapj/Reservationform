import React from 'react';
import classes from '../../../Components/Burger/BuildControls/BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';


const BuildControls = (props) => {
    const controls = [
        {label:'Salad', type:'salad'},
        {label:'Bacon', type:'bacon'},
        {label:'Cheese', type:'cheese'},
        {label:'Meat', type:'meat'}
    ];
    return (
        <div className ={classes.BuildControls}>
            <p>Current Price: {props.price}</p>
            {controls.map(ctrl => {
               <BuildControl
                key={ctrl.label}
                label={ctrl.label}
                added ={()=> props.Ingredientadded(ctrl.type)}
                remove = {() => props.removeIngredient(ctrl.type)}
                disabled = {props.disabled[ctrl.type]} />
            })}
           
        </div>
    )
}
export default BuildControls;