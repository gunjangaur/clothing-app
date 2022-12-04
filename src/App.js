import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
// import {Route, Routes} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth } from './firebase/firebase.utils';
import { Component } from 'react';

class App extends Component {

  constructor(){
    super();
    this.state={currentUser:null};
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user)=>{
        this.setState({currentUser: user});
        console.log(user);
    })
  }

  componentWillUnmount(){
    console.log("component will unmount")
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
      <Header currentUser = {this.state.currentUser}/>
        {/** Earlier switch was used in place of Routes. 
        In v5 Route element could be used in isolation, 
        but from v6 we nee to wrap it inside Routes */}
        <Routes>
          {/**exact prop is not required anymore, it will be exact by default. 
      component is replaced in favor of element and we have to pass the element tag as the value */}
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/shop" element={<ShopPage />}></Route>
          <Route path="/signin" element={<SignInAndSignUpPage />}></Route>
        </Routes>
      </div>
    );
  }
}

export default App;

/* for styling we are using scss which is the updated version of the css */
