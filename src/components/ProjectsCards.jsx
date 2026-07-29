import { useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "motion/react";

export const ProjectCard = ({ project, index }) => {
    const cardRef = useRef(null);

    // Scroll-linked 3D transform (continu, pas juste au "reveal")
    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start end", "end start"],
    });

    const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [20, 0, -20]);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1, 0.85]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
    const y = useTransform(scrollYProgress, [0, 0.5, 1], [80, 0, -80]);

    // Tilt 3D au survol de la souris
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const rotateYHover = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), {
        stiffness: 150,
        damping: 20,
    });
    const rotateXHover = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), {
        stiffness: 150,
        damping: 20,
    });

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
        mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    return (
        <motion.div
            ref={cardRef}
            style={{ rotateX, scale, opacity, y, transformPerspective: 1200 }}
            className={`flex flex-col items-center gap-10 lg:flex-row ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
            }`}
        >
            {/* IMAGE avec tilt 3D au survol */}
            <motion.div
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    rotateY: rotateYHover,
                    rotateX: rotateXHover,
                    transformPerspective: 800,
                }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
                className="group relative overflow-hidden rounded-3xl border border-neutral-800 shadow-2xl shadow-purple-500/10"
            >
                <img
                    src={project.image}
                    alt={project.title}
                    className="h-[320px] w-[520px] object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </motion.div>

            {/* TEXTE */}
            <div className="max-w-xl">
                <motion.h2
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                    className="mb-5 text-3xl font-bold text-white"
                >
                    {project.title}
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    viewport={{ once: true }}
                    className="mb-6 leading-8 text-neutral-400"
                >
                    {project.description}
                </motion.p>

                <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech, i) => (
                        <motion.span
                            key={i}
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5 + i * 0.08 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.12 }}
                            className="rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-300 backdrop-blur-md"
                        >
                            {tech}
                        </motion.span>
                    ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                    <motion.a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.6 }}
                        whileHover={{ scale: 1.03 }}
                        className="rounded-full bg-purple-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-purple-400"
                    >
                        Voir la démo
                    </motion.a>
                    <motion.a
                        href={project.sourceUrl}
                        target="_blank"
                        rel="noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.7 }}
                        whileHover={{ scale: 1.03 }}
                        className="rounded-full border border-neutral-700 bg-neutral-900/70 px-6 py-3 text-sm font-semibold text-white transition hover:border-purple-500 hover:text-purple-300"
                    >
                        Code source
                    </motion.a>
                </div>
            </div>
        </motion.div>
    );
};