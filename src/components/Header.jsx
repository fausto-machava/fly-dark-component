import logo from '../assets/imgs/logo.svg';

export function Header(){
    return (
        <div className='header container'>
            <div className='logo'>
                <img src={logo} alt='logo'/>
            </div>
            <div>
                <ul className='items'>
                    <li>Features</li>
                    <li>Team</li>
                    <li>Sign In</li>
                </ul>
            </div>
        </div>
    )
}