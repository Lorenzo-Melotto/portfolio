import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Lorenzo Melotto</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/contacts">Contacts</Link>
            </div>
        </nav>
    );
}

export default Navbar;