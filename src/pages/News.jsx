import { motion } from 'framer-motion';
import { Calendar, Award, Mic, ExternalLink } from 'lucide-react';

const newsItems = [
    {
        date: "November 2025",
        title: "Tri-Society CANVAS 2025",
        description: (
            <ul style={{ paddingLeft: '1.2rem', margin: 0 }}>
                <li>Precision Agriculture Systems Community (PhD Oral Presentation Competition) - <strong>2nd Position - Puranjit Singh</strong></li>
            </ul>
        ),
        icon: <Mic size={24} />
    },
    {
        date: "October 24, 2025",
        title: "Delaware Data Science Symposium 2025",
        description: (
            <ul style={{ paddingLeft: '1.2rem', margin: 0 }}>
                <li style={{ marginBottom: '0.5rem' }}>Statewide EPSCoR Best Poster Award - <strong>Puranjit Singh</strong></li>
                <li>Best Student Poster Award EPSCoR Phd Category - <strong>Ashish Reddy</strong></li>
            </ul>
        ),
        icon: <Award size={24} />
    },
    {
        date: "May 2025",
        title: "Farm Robotic Challenge 2025",
        description: (
            <div>
                <p style={{ marginBottom: '0.5rem' }}><strong>Judges Choice Impact Award</strong></p>
                <a
                    href="https://www.farmroboticschallenge.ai/2025results/v/universitydelaware"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', color: '#13542e', fontWeight: '600', textDecoration: 'underline' }}
                >
                    View FRC 2025 Results <ExternalLink size={14} />
                </a>
            </div>
        ),
        icon: <Award size={24} />
    }
];

const NewsItem = ({ date, title, description, icon, index }) => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        style={{
            display: 'flex',
            gap: '1.5rem',
            marginBottom: '2rem',
            background: 'rgba(255, 255, 255, 0.6)', // Semi-transparent white for contrast on Sage
            padding: '1.5rem',
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.4)'
        }}
    >
        <div style={{
            background: '#fff',
            color: '#13542e',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexShrink: 0
        }}>
            {icon}
        </div>
        <div>
            <span style={{ fontSize: '0.9rem', color: '#1e293b', fontWeight: '600', display: 'block', marginBottom: '0.5rem' }}>{date}</span>
            <h3 style={{ fontSize: '1.4rem', color: '#0f172a', marginBottom: '0.5rem' }}>{title}</h3>
            <div style={{ color: '#334155', lineHeight: '1.6' }}>{description}</div>
        </div>
    </motion.div>
);

const News = () => {
    return (
        <div className="container" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ fontSize: '3rem', marginBottom: '1rem', textAlign: 'center', color: '#0f172a' }}
            >
                Latest News
            </motion.h1>
            <p style={{ textAlign: 'center', color: '#1e293b', marginBottom: '4rem', maxWidth: '700px', margin: '0 auto 4rem auto' }}>
                Updates, achievements, and events from the Ag-CyPhER Lab.
            </p>

            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                {newsItems.map((item, index) => (
                    <NewsItem key={index} index={index} {...item} />
                ))}
            </div>
        </div>
    );
};

export default News;
