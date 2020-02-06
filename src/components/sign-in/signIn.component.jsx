import React from 'react';

import './signIn.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../firebase/firebase.utils';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class SignIn extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { email, password } = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            toast.success('You are successfully loggedIn !', { containerId: 'B' });
            this.setState({ email: '', password: '' })
        } catch (error) {
            toast.error('There is no user record corresponding to this identifier !', { containerId: 'B' });
        }
    };

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value })
    }

    // toNumberConvert = e => {
    //     var digits = e.target.value;
    //     console.log(digits.indexOf('.'));
    //     e.target.value = (digits.indexOf(".") >= 0) ? (digits.substr(0, digits.indexOf(".")) + digits.substr(digits.indexOf("."), 3)) : digits;
    // }


    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <ToastContainer enableMultiContainer containerId={'B'} position={toast.POSITION.TOP_RIGHT} />
                {/* <input type="text" onInput={this.toNumberConvert} onKeyPress={this.isNumber} /> */}
                <form onSubmit={this.handleSubmit}>

                    <FormInput type="email" name="email" labe="Email" value={this.state.email} required handleChange={this.handleChange} />

                    <FormInput type="password" name="password" labe="Password"
                        value={this.state.password}
                        handleChange={this.handleChange}
                        required />
                    <div className='button'>
                        <CustomButton type="submit">
                            Sign In
                    </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                            {''}
                            Sign In with Google
                        {''}
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;;