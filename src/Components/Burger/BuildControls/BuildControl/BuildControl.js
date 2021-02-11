import React from 'react';
import Auxi from '../../../../hoc/Auxi';
import classes from '../../../../Components/Burger/BuildControls/BuildControl/BuildControl.module.css';
const BuildControl = (props) => {
   
    return (
        <Auxi className={classes.BuildControl}>     
           <div className={classes.Label}>{props.label}</div>
           <button className={classes.Less} 
           onClick={props.remove} 
            disabled = {props.disabled}>Less</button>
           <button className={classes.More} onClick={props.added}>More</button>
        </Auxi>
    )
}  
export default BuildControl;