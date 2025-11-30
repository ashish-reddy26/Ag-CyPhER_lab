import { motion } from 'framer-motion';
import { FileText, ExternalLink } from 'lucide-react';

const PublicationItem = ({ title, authors, journal, year, link, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        style={{ background: 'var(--card-bg)', padding: '1.5rem', borderRadius: '8px', marginBottom: '1.5rem', border: '1px solid rgba(16, 185, 129, 0.1)', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}
    >
        <div style={{ color: 'var(--primary-color)', marginTop: '4px' }}><FileText size={24} /></div>
        <div style={{ flex: 1 }}>
            <h3 style={{ fontSize: '1.2rem', color: '#e2e8f0', marginBottom: '0.5rem', lineHeight: '1.4' }}>
                <a href={link} style={{ textDecoration: 'none', color: 'inherit', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }} className="hover:text-primary-color">
                    {title} <ExternalLink size={16} style={{ opacity: 0.7 }} />
                </a>
            </h3>
            <p style={{ color: '#94a3b8', marginBottom: '0.25rem' }}>{authors}</p>
            <p style={{ color: 'var(--accent-color)', fontSize: '0.9rem' }}>{journal}, {year}</p>
        </div>
    </motion.div>
);

const Publications = () => {
    return (
        <div className="container" style={{ paddingTop: '4rem', paddingBottom: '4rem', maxWidth: '900px' }}>
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ fontSize: '3rem', marginBottom: '3rem', textAlign: 'center', color: 'var(--text-color)' }}
            >
                Publications
            </motion.h1>

            <div>
                {publications.map((pub, index) => (
                    <PublicationItem key={index} index={index} {...pub} />
                ))}
            </div>
        </div>
    );
};

export default Publications;
