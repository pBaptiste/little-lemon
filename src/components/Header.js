import Nav from './Nav';
import logo from '../assets/Logo.svg';

function Header() {
    return (
        <header>
            <div>
                <div>
                    <img src={logo} alt="logo" />
                </div>
                <Nav />
            </div>
        </header>
    )
}

export default Header;