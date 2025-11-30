import { motion } from 'framer-motion';

const equipmentList = [
    { name: "Amiga Robot", image: "/images/equipment/images/amiga1.jpeg", description: "Agricultural robot for autonomous tasks." },
    { name: "DJI Drone", image: "/images/equipment/images/dji_drone.png", description: "Aerial surveillance and data collection." },
    { name: "DJI Drone V2", image: "/images/equipment/images/dji_drone2.png", description: "Advanced aerial imaging platform." },
    { name: "Hyperspectral Camera", image: "/images/equipment/images/hyperspectral_camera.png", description: "Imaging for plant health analysis." },
    { name: "LiDAR Sensor", image: "/images/equipment/images/lidar.jpg", description: "3D mapping and obstacle detection." },
    { name: "ZED X Mini Stereo Camera", image: "/images/equipment/images/zed_x_mini_stereo_camera.jpg", description: "Depth perception for robotics." },
];

const EquipmentCard = ({ name, image, description }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        style={{
            background: 'var(--card-bg)',
            borderRadius: '12px',
            overflow: 'hidden',
            border: '1px solid rgba(16, 185, 129, 0.1)',
            position: 'relative',
            height: '300px',
            cursor: 'pointer'
        }}
        className="equipment-card"
    >
        {/* Image Container with Vignette */}
        <div style={{ width: '100%', height: '100%', position: 'relative', padding: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#000' }}>
            <motion.img
                src={image}
                alt={name}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
                style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', zIndex: 1 }}
            />
            {/* Vignette Overlay */}
            <div style={{
                position: 'absolute',
                inset: 0,
                background: 'radial-gradient(circle, transparent 40%, rgba(0,0,0,0.8) 100%)',
                zIndex: 2,
                pointerEvents: 'none'
            }} />
        </div>

        {/* Text Reveal Overlay */}
        <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            style={{
                position: 'absolute',
                inset: 0,
                background: 'rgba(0, 0, 0, 0.7)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 10,
                padding: '1rem',
                textAlign: 'center'
            }}
        >
            <h3 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '0.5rem', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>{name}</h3>
            <p style={{ color: '#cbd5e1', fontSize: '1rem' }}>{description}</p>
        </motion.div>
    </motion.div>
);

const LabEquipment = () => {
    return (
        <div className="container" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ fontSize: '3rem', marginBottom: '1rem', textAlign: 'center', color: 'var(--text-color)' }}
            >
                Lab Equipment
            </motion.h1>
            <p style={{ textAlign: 'center', color: '#94a3b8', marginBottom: '4rem', maxWidth: '600px', margin: '0 auto 4rem auto' }}>
                Our research is powered by state-of-the-art robotics and sensing technology.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
                {equipmentList.map((item, index) => (
                    <EquipmentCard key={index} {...item} />
                ))}
            </div>
        </div>
    );
};

export default LabEquipment;
