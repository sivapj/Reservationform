import logo from './logo.svg';
import React from 'react';
import './App.css';
import classes from 'react';
import {BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Username from './Username';
import Password from './Password';
import Login from './Login';
import Content from './Content';
import Error from './Error';
// import Navi from './Navi';s
// import history from './Utils';
// import Reservationform from './Reservationform';
import { Component } from 'react';
import Reservationform from './Reservationform';




class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.myRef= React.createRef();
  //   this.passRef = React.createRef();
  // }
  // componentDidMount(){
  //   this.myRef.current.focus();
  // }

  // state = {
  //   username: "",
  //   password: "", 
  //   errorMessage:"", 
  //   stateDetails:false,
  //   redirect: null,
  // }
  // changeName = (event) => {
  //   let newState = {...this.state};
  //   newState["username"] = event.target.value;
  //   newState["stateDetails"] = false;
  //   this.setState((this.state = newState));

  // }
  // changePassword = (event) => {
  //   let newState = {...this.state};
  //   newState["password"] = event.target.value;
  //   newState["stateDetails"] = false;
  //   this.setState((this.state = newState));
  // }
  // validation = () => {
  //   let newState ={...this.state};
  //   if(
  //     newState["username"] === "johndoe" && 
  //     newState["password"] === "JohnDoe@1"
  //   )  
  //    {
  //     alert("Login Successfully");
  //    } else {
  //     let newStateDetails ={...this.state};
  //     newStateDetails["stateDetails"] = true;
  //     if (newState["username"] !== "johndoe") {
  //       newStateDetails["errorMessage"] = "username";
  //       this.myRef.current.focus();
  //     }  else {
  //       newStateDetails["errorMessage"] = "'password";
  //       this.passRef.current.focus();
  //     }
  //     this.setState((this.state = newStateDetails));

  //     if (this.state.redirect) {
  //       return <Redirect to={this.state.redirect} />
  //     }
  //     this.setState({redirect: '/siva'});
  //     }
    

  // }

  // clickToggler = () => {
  //   let newState = {...this.state};
  //   newState["'stateDetails"] = false;
  //   this.setState((this.state = newState));
  // }
 

  render (props){
    
   
    return (
      <Router>
        <div className="App">
          <Reservationform/>          
       </div>
      </Router>
      // <Router>
      //   <React.Fragment>
      //      <div className = "App">
      //         <Username 
      //          reference ={this.myRef}
      //          changeName ={this.changeName}
      //          clicked={this.clickToggler}
      //          name={this.state.Username} />
      //         <Password 
      //          reference = {this.passRef}
      //          changePassword= {this.changePassword}
      //          clicked={this.clickToggler}
      //          pass={this.state.Password} />
      //         <Login validate = {this.validation} />
              
      //         <Content />

      //           {this.state.stateDetails ? (
      //           <Error message = {this.state.errorMessage} />
      //         ) : null}
      //           {/* <Route exact path="/" render = { () => (
      //               Login ? (
      //                   <Redirect to = "/Login" />
      //               ) : (
      //                   <Username/>
      //               )
      //           )} />             */}
      //           {/* <Navi/>  */}
      //       </div>
          

      //   </React.Fragment>
      // </Router>
    )
  }
}

export default App;
