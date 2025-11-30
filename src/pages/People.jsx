import { motion } from 'framer-motion';
import { Linkedin, Github, BookOpen, Mail, Globe } from 'lucide-react';

const PersonCard = ({ name, role, bio, image, links }) => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ display: 'flex', flexDirection: 'row', gap: '2rem', background: 'var(--card-bg)', padding: '2rem', borderRadius: '12px', marginBottom: '2rem', alignItems: 'center', border: '1px solid rgba(16, 185, 129, 0.1)' }}
        className="person-card"
    >
        <div style={{ flexShrink: 0, width: '200px', height: '200px', borderRadius: '50%', overflow: 'hidden', border: '3px solid var(--primary-color)' }}>
            <img src={image || "https://via.placeholder.com/200"} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div style={{ flex: 1 }}>
            <h3 style={{ fontSize: '1.8rem', color: 'var(--primary-color)', marginBottom: '0.5rem' }}>{name}</h3>
            <h4 style={{ fontSize: '1.2rem', color: 'var(--accent-color)', marginBottom: '1rem' }}>{role}</h4>
            <p style={{ color: '#cbd5e1', marginBottom: '1.5rem', lineHeight: '1.6' }}>{bio}</p>
            <div style={{ display: 'flex', gap: '1rem' }}>
                {links.linkedin && <a href={links.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: '#94a3b8' }}><Linkedin size={24} /></a>}
                {links.github && <a href={links.github} target="_blank" rel="noopener noreferrer" style={{ color: '#94a3b8' }}><Github size={24} /></a>}
                {links.scholar && <a href={links.scholar} target="_blank" rel="noopener noreferrer" style={{ color: '#94a3b8' }}><BookOpen size={24} /></a>}
                {links.email && <a href={`mailto:${links.email}`} style={{ color: '#94a3b8' }}><Mail size={24} /></a>}
                {links.website && <a href={links.website} target="_blank" rel="noopener noreferrer" style={{ color: '#94a3b8' }}><Globe size={24} /></a>}
            </div>
        </div>
    </motion.div>
);

const People = () => {
    const advisor = {
        name: "Yin Bao",
        role: "Assistant Professor of Digital Agriculture",
        bio: "Dr. Yin Bao is currently an Assistant Professor in both Plant and Soil Sciences and Mechanical Engineering.",
        image: "/images/head_shots/dr_bao_advisor_headshot.jpeg",
        links: { linkedin: "https://www.linkedin.com/in/yin-bao-220a1658", scholar: "https://scholar.google.com/citations?user=lZnlIDQAAAAJ&hl=en", email: "yinbao@udel.edu" }
    };

    const currentStudents = [
        {
            name: "Puranjit Singh",
            role: "PhD Candidate - Third Year",
            bio: "Plant and Soil Sciences",
            image: "/images/head_shots/puran_headshot.jpeg",
            links: { linkedin: "https://www.linkedin.com/in/puranjit-singh-94303813a", scholar: "https://scholar.google.com/citations?user=_wA1fKcAAAAJ&hl=en", github: "https://github.com/Puranjit", email: "puran@udel.edu" }
        },
        {
            name: "Ashish Reddy M",
            role: "PhD Student - First Year",
            bio: "Plant and Soil Sciences",
            image: "/images/head_shots/ashish_headshot.jpeg",
            links: { linkedin: "https://www.linkedin.com/in/ashishreddy26", scholar: "https://scholar.google.com/citations?user=JXjCuBUAAAAJ&hl=en", github: "https://github.com/ashish-reddy26", email: "ashishr@udel.edu" }
        },
    ];

    const researchAssistants = [
        {
            name: "Annamalai Muthupalaniappan",
            role: "Masters in Robotics (2023-2025)",
            bio: "Research Assistant",
            image: "/images/head_shots/annamalai_headshot.png",
            links: { linkedin: "https://www.linkedin.com/in/anna2malai-m/", github: "https://github.com/Anna02malai", website: "https://anna02malai.github.io/" }
        }
    ];

    const alumni = [];

    return (
        <div className="container" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ fontSize: '3rem', marginBottom: '3rem', textAlign: 'center', color: 'var(--text-color)' }}
            >
                Our Team
            </motion.h1>

            <section style={{ marginBottom: '4rem' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '2rem', borderBottom: '2px solid var(--secondary-color)', paddingBottom: '0.5rem', display: 'inline-block' }}>Principal Investigator</h2>
                <PersonCard {...advisor} />
            </section>

            <section style={{ marginBottom: '4rem' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '2rem', borderBottom: '2px solid var(--secondary-color)', paddingBottom: '0.5rem', display: 'inline-block' }}>Current Students</h2>
                {currentStudents.map((student, index) => (
                    <PersonCard key={index} {...student} />
                ))}
            </section>

            <section style={{ marginBottom: '4rem' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '2rem', borderBottom: '2px solid var(--secondary-color)', paddingBottom: '0.5rem', display: 'inline-block' }}>Research Assistants</h2>
                {researchAssistants.map((ra, index) => (
                    <PersonCard key={index} {...ra} />
                ))}
            </section>

            <section>
                <h2 style={{ fontSize: '2rem', marginBottom: '2rem', borderBottom: '2px solid var(--secondary-color)', paddingBottom: '0.5rem', display: 'inline-block' }}>Alumni</h2>
                {alumni.length > 0 ? (
                    alumni.map((alum, index) => (
                        <PersonCard key={index} {...alum} />
                    ))
                ) : (
                    <p style={{ color: '#94a3b8' }}>Coming soon...</p>
                )}
            </section>
        </div>
    );
};

export default People;
