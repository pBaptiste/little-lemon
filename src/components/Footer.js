import Nav from './Nav';
import logo from '../assets/Logo.svg';

function Footer() {
    return (
        <footer>
             <div>
                <div>
                    <img src={logo} alt="logo" />
                </div>
                <Nav />
            </div>
        </footer>
    )
}

export default Footer;