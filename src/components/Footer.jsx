import logo from '../assets/imgs/logo.svg';
import iconLocation from '../assets/imgs/icon-location.svg';
import iconEmail from '../assets/imgs/icon-email.svg';
import iconPhone from '../assets/imgs/icon-phone.svg';

export function Footer() {
    return (
        <div className="footer container">
            <div>
                <img src={logo} alt="logo" />
            </div>
            <div className='footer-info'>
                <div className='location'>
                    <img src={iconLocation} alt="" width={12} height={16} />
                    <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua</p>
                </div>
                <div className='gap'>
                    <p> <img className='mr' src={iconPhone} /> +1-543-123-4567</p>
                    <p> <img className='mr' src={iconEmail} /> example@fylo.com</p>
                </div>
                <div className='center'>
                    <ul className='gap'>
                        <li>About Us</li>
                        <li>Jobs</li>
                        <li>Press</li>
                        <li>Blog</li>
                    </ul>
                </div>
                <div className='center'>
                    <ul className='gap'>
                        <li>Contact Us</li>
                        <li>Terms</li>
                        <li>Privacy</li>
                    </ul>
                </div>
                <div className='center'>
                    <span className='social-icons'>
                        <span className='social-icon-container'>
                            <img src={iconEmail} alt="" />
                        </span>
                        <span className='social-icon-container'>
                            <img src={iconPhone} alt="" />
                        </span>
                        <span className='social-icon-container'>
                            <img src={iconLocation} alt="" />
                        </span>
                    </span>
                </div>
            </div>
        </div>
    )
}