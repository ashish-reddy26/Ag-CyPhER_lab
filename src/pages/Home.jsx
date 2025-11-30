import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Research from './Research';
import People from './People';
import LabEquipment from './LabEquipment';
import News from './News';
import Contact from './Contact';
import { BookOpen } from 'lucide-react';

const Home = () => {
    return (
        <div className="home">
            {/* Hero Section */}
            <section style={{
                height: '90vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                backgroundImage: 'linear-gradient(rgba(5, 26, 26, 0.6), rgba(5, 26, 26, 0.7)), url("/Ag-CyPhER_lab/images/group_images/group_img1.jpeg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                padding: '0 1rem',
                marginBottom: '0'
            }}>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', marginBottom: '1rem', background: 'linear-gradient(to right, #34d399, #10b981)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: '800' }}
                >
                    Ag-CyPhER Lab
                </motion.h1>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{ fontSize: 'clamp(1.2rem, 3vw, 2rem)', color: '#fefeff', marginBottom: '1.5rem', fontWeight: '600' }}
                >
                    Agriculture and Cyber Physical Engineering Robotics
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    style={{ fontSize: '1.1rem', color: 'hsla(0, 0%, 100%, 1.00)', maxWidth: '700px', marginBottom: '2.5rem', lineHeight: '1.8' }}
                >
                    {/* Pioneering the future of sustainable agriculture through advanced robotics, automation, and cyber-physical systems. */}
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    style={{ display: 'flex', gap: '1rem' }}
                >
                    <Link to="/research">
                        <button className="btn">
                            Explore Research
                        </button>
                    </Link>
                    <Link to="/people">
                        <button className="btn" style={{ background: 'transparent', border: '1px solid var(--primary-color)', color: 'var(--primary-color)' }}>
                            Meet the Team
                        </button>
                    </Link>
                </motion.div>
            </section>

            {/* Sections with Final User Defined Color Palette */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>

                {/* Research - #fdfdfe (White) - Text needs to be dark */}
                <section id="research" style={{ padding: '2rem 0', background: '#fdfdfe', color: '#1e293b' }}>
                    <Research />
                </section>

                {/* People - Default (Dark) - Text remains white */}
                <section id="people" style={{ padding: '0rem 0', background: 'var(--bg-color)', color: 'var(--text-color)' }}>
                    <People />
                </section>

                {/* Equipment - #42733f (Green) - Text remains white */}
                <section id="equipment" style={{ padding: '0rem 0', background: '#42733f', color: '#fff' }}>
                    <LabEquipment />
                </section>

                {/* News - #a4b695 (Sage) - Text needs to be dark */}
                <section id="news" style={{ padding: '2rem 0', background: '#a4b695', color: '#1e293b' }}>
                    <News />
                </section>

                {/* Publications - White - Text needs to be dark */}
                <section id="publications" style={{ padding: '4rem 0', textAlign: 'center', background: '#fff', color: '#1e293b' }}>
                    <div className="container">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            style={{ fontSize: '3rem', marginBottom: '3rem', color: '#1e293b' }}
                        >
                            Publications
                        </motion.h1>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                        >
                            <a
                                href="https://scholar.google.com/citations?user=lZnlIDQAAAAJ&hl=en"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn"
                                style={{ display: 'inline-flex', alignItems: 'center', gap: '1rem', textDecoration: 'none', background: '#4184f1ff', color: '#fffffffd' }}
                            >
                                <BookOpen size={35} />
                                Visit Google Scholar
                            </a>
                        </motion.div>
                    </div>
                </section>

                {/* Contact - #0c2418 (Dark Green) - Text remains white */}
                <section id="contact" style={{ padding: '0rem 0', background: '#0c2418', color: 'rgba(255, 255, 255, 1)' }}>
                    <Contact />
                </section>
            </div>
        </div>
    );
};

export default Home;
