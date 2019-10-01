import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {signWithGoogle} from '../../firebase/firebase.util';

import './sign-in.style.scss';

class SignIn extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      email : '',
      password: ''
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({email : '', password : ''})
  }

  handleChange = event => {
    const {value, name} = event.target;
    this.setState({[name] : value});
  }

  render(){
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        
        <form onSubmit={this.handleSubmit}>
          <FormInput 
                 name='email'
                 label='email'
                 type='email'
                 value={this.state.email}
                 handleChange={this.handleChange}
                 required />
          <FormInput 
                 name='password'
                 label='password'
                 type='password'
                 value={this.state.password}
                 handleChange={this.handleChange}
                 required />
          <div className='buttons'>
            <CustomButton type='submit' value='Submit'>
              Sign In
            </CustomButton>
            <CustomButton onClick={signWithGoogle} isGoogleSignIn >
              Sign In with Google
            </CustomButton>          
          </div>
        </form>
      </div>)
  }
} 

export default SignIn;