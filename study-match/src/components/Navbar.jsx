import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Navbar = () => {
    const navElements = [
        { label: 'Home', path: '/home' },
        { label: 'Profile', path: '/profile' },
        { label: 'Settings', path: '/settings' },
    ];
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleLogout = () => {
        auth.signOut();
        navigate('/login');
}

return (
    <nav className="navbar">
        <div className="navbar-brand">StudyMatch</div>
        {navElements.map((element, index) => (
            <Link key={index} to={element.path}>{element.label}</Link>
        ))}
        <button onClick={handleLogout}>Logout</button>
    </nav>
)
}

export default Navbar;