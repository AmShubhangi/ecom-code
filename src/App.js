import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from './pages/homepage/home.component';
import ShopPage from './components/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page.component';
import { auth, createUserProfileDocument } from './components/firebase/firebase.utils';
import Footer from './components/footer/footer.component';
import { connect } from 'react-redux';
import setCurrentUser from './components/redux/user/user.actions';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './components/redux/user/user.selector';
import checkoutPage from './pages/checkout/checkout.component';

class App extends React.Component {
  unSubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path='/shop' component={ShopPage} />
            <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/' />) : <SignInAndSignUpPage />} />
            <Route exact path='/checkout' component={checkoutPage} />
          </Switch>
        </div>
        <Footer />
      </>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);