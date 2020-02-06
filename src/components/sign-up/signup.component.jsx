import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, createUserProfileDocument } from '../firebase/firebase.utils';
import './signup.styles.scss'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class SignUp extends React.Component {
    constructor() {
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }
    handleSubmit = async event => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;
        if (password !== confirmPassword) {
            alert("😱Password don't match😝")
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            createUserProfileDocument(user, { displayName });
            toast.success('You are successfully Registered !', { containerId: 'B' });
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })

        } catch (error) {
            toast.error('Something went wrong!!', { containerId: 'B' });
        }
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <div className="sign-up">
                <h2 className="title"> I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <ToastContainer enableMultiContainer containerId={'B'} position={toast.POSITION.TOP_RIGHT} />
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput type="text"
                        name="displayName"
                        value={displayName} onChange={this.handleChange}
                        label="Display Name"
                        required
                    />
                    <FormInput type="text"
                        name="email"
                        value={email} onChange={this.handleChange}
                        label="Email"
                        required
                    />
                    <FormInput type="password"
                        name="password"
                        value={password} onChange={this.handleChange}
                        label="Password"
                        required
                    />
                    <FormInput type="password"
                        name="confirmPassword"
                        value={confirmPassword} onChange={this.handleChange}
                        label="Confirm Password"
                        required
                    />
                    <CustomButton type="submit">SIGN UP</CustomButton>
                </form>
            </div>
        )
    };
}

export default SignUp;