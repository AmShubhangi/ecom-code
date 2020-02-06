import React from 'react';
import './footer.styles.scss';
import shubhImage from '../../assets/images/download.png'

class Footer extends React.Component {
    render() {
        return (
            <div className="main-content-footer">
                <div className="inner-content">
                    <div className="left">
                        <img alt="owner" src={shubhImage} height={50} width={50} className="image" />
                        {/* <p className="name">Shubhangi Ambade ❤️</ p> */}
                    </div>
                    <div className="right">
                        <div className="social-icon">
                            <div className="social-footer-icons"><ul className="menu simple">
                                <li className="fb"><a href="https://www.facebook.com/shubhangi.ambade.5" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook" aria-hidden="true"></i><span className="none">j</span></a></li>

                                <li className="insta"><a href="https://www.instagram.com/_shubhiii_6897/" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram" aria-hidden="true"></i><span className="none">j</span></a></li>

                                <li className="gmail"><a href="https://mail.google.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-google" aria-hidden="true"></i><span className="none">j</span></a></li>

                                <li className="twit"><a href="https://twitter.com/shubh_ambade_06" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter" aria-hidden="true"></i><span className="none">j</span></a></li></ul></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;