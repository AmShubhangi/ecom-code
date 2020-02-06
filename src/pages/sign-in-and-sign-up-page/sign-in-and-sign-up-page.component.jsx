import React from 'react';

import './sign-in-and-sign-up-page.styles.scss';
import SignIn from '../../components/sign-in/signIn.component';
import SignUp from '../../components/sign-up/signup.component';

const SignInAndSignUpPage = () => {
    return (
        <div className="sign-in-and-sign-up">
            <SignIn />
            <SignUp />
        </div>
    )
}
export default SignInAndSignUpPage;