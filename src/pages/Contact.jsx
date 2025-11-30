import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
    return (
        <div className="container" style={{ paddingTop: '4rem', paddingBottom: '4rem', maxWidth: '800px' }}>
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ fontSize: '3rem', marginBottom: '3rem', textAlign: 'center', color: 'var(--text-color)' }}
            >
                Contact Us
            </motion.h1>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                style={{ background: 'var(--card-bg)', padding: '3rem', borderRadius: '12px', border: '1px solid rgba(16, 185, 129, 0.1)', textAlign: 'center' }}
            >
                <h2 style={{ fontSize: '2rem', color: 'var(--primary-color)', marginBottom: '2rem' }}>Dr. Yin Bao</h2>
                <p style={{ fontSize: '1.2rem', color: '#cbd5e1', marginBottom: '2rem' }}>
                    Assistant Professor of Digital Agriculture<br />
                    Department of Plant and Soil Sciences<br />
                    Department of Mechanical Engineering
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#94a3b8' }}>
                        <Mail size={24} color="var(--primary-color)" />
                        <a href="mailto:yinbao@udel.edu" style={{ color: 'inherit', fontSize: '1.1rem' }}>yinbao@udel.edu</a>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#94a3b8' }}>
                        <MapPin size={24} color="var(--primary-color)" />
                        <span style={{ fontSize: '1.1rem' }}>
                            531 South College Avenue<br />
                            152 Townsend Hall<br />
                            Newark, DE 19716
                        </span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#94a3b8' }}>
                        <Phone size={24} color="var(--primary-color)" />
                        <span style={{ fontSize: '1.1rem' }}>302-831-7136</span>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Contact;
