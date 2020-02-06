import React from 'react';

import { Link } from 'react-router-dom';
import './header.styles.scss';
import Logo from '../../assets/images/d.png';
import { auth } from '../firebase/firebase.utils';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../redux/cart/cart.selectors';
import { selectCurrentUser } from '../redux/user/user.selector';

const Header = ({ currentUser, hidden }) => {
    return (
        <div className="header">
            <Link to='/' className="logo-container">
                <img alt="logo" src={Logo} />
            </Link>
            <div className="options">
                <Link to='/shop' className="option">SHOP</Link>
                {/* <Link to='/shop' className="option">CONTACT</Link> */}

                {currentUser ?
                    (<div className="flex">
                        <div className='option' onClick={() => auth.signOut()}>
                            SIGN OUT
                    </div>

                        <div className="myLoggedIn">
                            <div style={{ marginTop: 10 }}>
                                <span style={{
                                    textTransform: 'capitalize',
                                    color: '#4d0951',
                                    fontWeight: 600
                                }}>{'Hi! ' + currentUser.displayName}</span>
                            </div>
                        </div></div>) :
                    <Link className="option" to='/signin'>SIGN IN</Link>
                }
                <CartIcon />
            </div>

            {hidden ? null : <CartDropDown />}
        </div >
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header)