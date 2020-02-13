import React from 'react';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component'
import './sign-in-and-sign-up.styles.scss';

const SignInAndSignUpPage = () => (
    <div className="sign-in-and-sign-up">
    <h1>Sign In</h1>
    <SignIn />
    <h1>Sign Up</h1>
    <SignUp />
    </div>
);

export default SignInAndSignUpPage; 