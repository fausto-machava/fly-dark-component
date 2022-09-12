import logo from '../assets/imgs/logo.svg';

export function Header(){
    return (
        <div className='header container'>
            <span className='logo'>
                <img src={logo} />
            </span>
            <span>
                <ul className='items'>
                    <li>Features</li>
                    <li>Team</li>
                    <li>Sign In</li>
                </ul>
            </span>
        </div>
    )
}