import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  }

  handleChange = (event)=>{
    const {name, value} = event.target;
    this.setState({[name]: value});

  }

  render() {
    return (
      <div className="sign-in">
        <h1>I already have an account</h1>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
        {/** We've created our own custom components for input and button */}
          <FormInput name="email" type="email" value={this.state.email} handleChange={this.handleChange} label="Email" required />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="Password"
            required
          />
          <div className='buttons'>
          <CustomButton type="submit"> Sign In </CustomButton>
          <CustomButton onClick = {signInWithGoogle} isGoogleSignIn >{' '}Sign In With Google{' '}</CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;