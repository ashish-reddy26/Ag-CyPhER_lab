import { motion } from 'framer-motion';

const projects = [
    {
        title: "Blueberry Yield Prediction Using Machine Learning and Vision-Based Deep Learning Methods",
        description: "Developing a multi-model strategy integrating Deep Learning (YOLO11, DINOv3) and Machine Learning to accurately predict blueberry yield and maturity. Our approach combines phenotypic traits and structural analysis to achieve high accuracy in genotype classification and yield estimation.",
        image: "/images/research_data/Research1_images/Picture1.png",
        tags: ["Machine Learning", "Vision Foundational Models", "DINOv3", "Yield Prediction"],
        color: "#e7f0f8ff", // Light Slate 100
        borderColor: "#e7f0f8ff" // Slate 200
    },
    {
        title: "In-Field Pod Counting Using 3D Gaussian Splatting (3DGS) and SAM Towards Lima Bean Yield Prediction",
        description: "Utilizing robotic multi-view imaging to develop a 3D pod counting system for Lima beans. This research evaluates 2D vs 3D counting approaches and assesses the correlation between 3D pod counts and final yield.",
        image: "/images/research_data/Research2_images/gif_3dgs.gif",
        tags: ["3D Reconstruction", "Gaussian Splatting", "SAM", "Yield Assessment"],
        color: "#fffef0ff", 
        borderColor: "#fffef0ff"
    },
    {
        title: "Autonomous Navigation",
        description: "Developed an autonomous SLAM navigation pipeline for GPS-denied environments like greenhouses. Integrated Livox MID360 LiDAR on the Amiga Robot with ROS 2 Nav2 stack and STVL for robust obstacle detection and collision avoidance.",
        image: "/images/equipment/images/amiga1.jpeg",
        tags: ["SLAM", "LiDAR", "Autonomous Navigation"],
        color: "#fef2f2", // Light Red 50
        borderColor: "#fef2f2" // Red 100
    },
];

const ProjectCard = ({ title, description, image, tags, color, borderColor, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        style={{
            display: 'flex',
            flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
            gap: '4rem',
            marginBottom: '4rem',
            alignItems: 'center',
            background: color,
            border: `1px solid ${borderColor}`,
            padding: '2rem',
            borderRadius: '16px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.05)' // Subtle shadow for light theme
        }}
        className="project-card"
    >
        <div style={{ flex: 1, height: '300px', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(0, 0, 0, 0.05)' }}>
            <img src={image} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div style={{ flex: 1 }}>
            <h2 style={{ fontSize: '1.8rem', color: '#0f172a', marginBottom: '1rem', lineHeight: '1.3' }}>{title}</h2>
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
                {tags.map(tag => (
                    <span key={tag} style={{ background: '#fff', color: '#334155', padding: '0.25rem 0.75rem', borderRadius: '20px', fontSize: '0.85rem', border: '1px solid #e2e8f0' }}>
                        {tag}
                    </span>
                ))}
            </div>
            <p style={{ color: '#475569', lineHeight: '1.8', fontSize: '1.1rem' }}>{description}</p>
        </div>
    </motion.div>
);

const Research = () => {
    return (
        <div className="container" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ fontSize: '3rem', marginBottom: '1rem', textAlign: 'center', color: '#1e293b' }}
            >
                Research Projects
            </motion.h1>
            <p style={{ textAlign: 'center', color: '#64748b', marginBottom: '4rem', maxWidth: '700px', margin: '0 auto 4rem auto' }}>
                Exploring the intersection of robotics, AI, and agriculture to solve real-world challenges.
            </p>

            <div>
                {projects.map((project, index) => (
                    <ProjectCard key={index} index={index} {...project} />
                ))}
            </div>
        </div>
    );
};

export default Research;
