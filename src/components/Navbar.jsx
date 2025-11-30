import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Github } from 'lucide-react';
import { useState, useEffect } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const location = useLocation();

    const links = [
        { name: 'Home', path: '/', id: 'home' },
        { name: 'Research', path: '/research', id: 'research' },
        { name: 'People', path: '/people', id: 'people' },
        { name: 'Equipment', path: '/equipment', id: 'equipment' },
        { name: 'News', path: '/news', id: 'news' },
        { name: 'Publications', path: '/publications', id: 'publications' }, // Changed path to internal for scroll spy consistency, handled in click
        { name: 'Contact', path: '/contact', id: 'contact' },
    ];

    // Scroll Spy Logic
    useEffect(() => {
        if (location.pathname !== '/') {
            setActiveSection('');
            return;
        }

        const handleScroll = () => {
            // If at the very top, set to home
            if (window.scrollY < 100) {
                setActiveSection('home');
                return;
            }

            const sections = links.filter(link => link.id !== 'home').map(link => document.getElementById(link.id)).filter(Boolean);
            let current = '';

            // Check sections
            for (const section of sections) {
                const sectionTop = section.offsetTop;
                // Offset for the fixed header (approx 80px) + some buffer
                if (window.scrollY >= sectionTop - 100) {
                    current = section.id;
                }
            }

            if (current) {
                setActiveSection(current);
            } else if (window.scrollY < 100) {
                setActiveSection('home');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [location.pathname]);

    const handleNavClick = (e, link) => {
        if (location.pathname === '/') {
            e.preventDefault();
            if (link.id === 'home') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setActiveSection('home');
            } else {
                const element = document.getElementById(link.id);
                if (element) {
                    // Offset calculation for smooth scroll
                    const headerOffset = 45;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                    });
                    setActiveSection(link.id);
                }
            }
        }
        setIsOpen(false);
    };

    return (
        <nav className="navbar" style={{ padding: '1.5rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(5, 26, 26, 0.9)', backdropFilter: 'blur(10px)', position: 'sticky', top: 0, zIndex: 1000, borderBottom: '1px solid rgba(16, 185, 129, 0.1)' }}>
            <div className="logo">
                <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--primary-color)' }}>
                    Ag-CyPhER<span style={{ color: 'var(--text-color)' }}> Lab</span>
                </Link>
            </div>

            {/* Desktop Menu */}
            <ul style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="desktop-menu">
                {links.map((link) => {
                    let isActive = false;
                    if (location.pathname === '/' && link.path === '/') {
                        isActive = activeSection === 'home';
                    } else if (location.pathname === '/') {
                        isActive = activeSection === link.id;
                    } else {
                        isActive = location.pathname === link.path;
                    }

                    return (
                        <li key={link.name} style={{ position: 'relative' }}>
                            <Link
                                to={link.path}
                                onClick={(e) => handleNavClick(e, link)}
                                style={{ fontSize: '1rem', fontWeight: '500', color: isActive ? 'var(--primary-color)' : 'var(--text-color)', transition: 'color 0.3s ease' }}
                            >
                                {link.name}
                                {isActive && (
                                    <motion.div
                                        layoutId="activeTab"
                                        style={{ position: 'absolute', bottom: '-4px', left: 0, right: 0, height: '2px', background: 'var(--primary-color)' }}
                                    />
                                )}
                            </Link>
                        </li>
                    );
                })}
                <li>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-color)', display: 'flex', alignItems: 'center' }}>
                        <Github size={24} />
                    </a>
                </li>
            </ul>

            {/* Mobile Menu Icon */}
            <div className="mobile-menu-icon" onClick={() => setIsOpen(!isOpen)} style={{ display: 'none', cursor: 'pointer', color: 'var(--text-color)' }}>
                {isOpen ? <X size={28} /> : <Menu size={28} />}
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ position: 'absolute', top: '100%', left: 0, right: 0, background: 'var(--bg-color)', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center', borderBottom: '1px solid rgba(16, 185, 129, 0.1)' }}
                >
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            onClick={(e) => handleNavClick(e, link)}
                            style={{ color: (location.pathname === link.path || (location.pathname === '/' && activeSection === link.id)) ? 'var(--primary-color)' : 'var(--text-color)' }}
                        >
                            {link.name}
                        </Link>
                    ))}
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;
