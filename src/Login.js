import React from 'react';
import classes from './Login.module.css';





const Login = (props) => {

   
    return (
        
            <div className={classes.Login}>
                <button onClick={props.validate}
                className={classes.Button}
                >LOGIN
              
                </button>
           </div>
       
    )
}
export default Login;