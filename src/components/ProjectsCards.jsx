import { useRef, useState } from "react";
import {
    motion,
    AnimatePresence,
    useScroll,
    useTransform,
    useMotionValue,
    useSpring,
    useVelocity,
} from "motion/react";

export const ProjectCard = ({ project, index }) => {
    const cardRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start end", "end start"],
    });

    // --- Transform lié à la POSITION du scroll ---
    const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [20, 0, -20]);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1, 0.85]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
    const y = useTransform(scrollYProgress, [0, 0.5, 1], [80, 0, -80]);

    // --- Transform lié à la VITESSE du scroll (effet vague) ---
    const scrollVelocity = useVelocity(scrollYProgress);
    const smoothVelocity = useSpring(scrollVelocity, { stiffness: 300, damping: 40 });
    const phase = index % 2 === 0 ? 1 : -1;
    const velocitySkew = useTransform(smoothVelocity, [-2, 0, 2], [-6 * phase, 0, 6 * phase]);
    const velocityZ = useTransform(smoothVelocity, [-2, 2], [-40, -40]);

    // --- Tilt 3D au survol de la souris (appliqué uniquement sur l'image) ---
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const rotateYHover = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), {
        stiffness: 150,
        damping: 20,
    });
    const rotateXHover = useSpring(useTransform(mouseY, [-0.5, 0.5], [12, -12]), {
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
        setIsHovered(false);
    };

    return (
        <motion.div
            ref={cardRef}
            style={{
                rotateX,
                scale,
                opacity,
                y,
                skewY: velocitySkew,
                z: velocityZ,
                transformPerspective: 1200,
            }}
            className={`flex flex-col items-center gap-10 lg:flex-row ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
            }`}
        >
            {/* --- Bloc image façon "plane" --- */}
            <motion.div
                onMouseEnter={() => setIsHovered(true)}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    rotateX: rotateXHover,
                    rotateY: rotateYHover,
                    transformPerspective: 1000,
                }}
                className="group relative w-full max-w-xl overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/60 shadow-2xl shadow-black/40 lg:w-1/2"
            >
                <div className="relative aspect-video w-full overflow-hidden">
                    <img
                        src={project.image}
                        alt={project.title}
                        draggable={false}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Overlay + label qui apparaît au survol */}
                    <AnimatePresence>
                        {isHovered && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="absolute inset-0 flex items-end bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6"
                            >
                                <motion.span
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: 20, opacity: 0 }}
                                    transition={{ duration: 0.3, delay: 0.05 }}
                                    className="text-lg font-semibold tracking-wide text-white"
                                >
                                    {project.title}
                                </motion.span>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Index numéroté façon "plane-index" */}
                <div className="absolute right-4 top-4 rounded-full border border-neutral-700 bg-black/50 px-3 py-1 text-xs font-mono text-purple-400 backdrop-blur-sm">
                    {String(index + 1).padStart(2, "0")}
                </div>
            </motion.div>

            {/* --- Bloc contenu texte --- */}
            <div className="flex w-full flex-col gap-4 lg:w-1/2">
                <h3 className="text-2xl font-bold text-white md:text-3xl">
                    {project.title}
                </h3>

                <p className="text-sm leading-relaxed text-neutral-400 md:text-base">
                    {project.description}
                </p>

                {project.technologies?.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-1">
                        {project.technologies.map((tech, i) => (
                            <span
                                key={i}
                                className="rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-300"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                )}

                <div className="flex items-center gap-4 pt-2">
                    {project.demoUrl && (
                        <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-full bg-purple-500 px-5 py-2 text-sm font-semibold text-white transition hover:bg-purple-600"
                        >
                            Voir le projet
                        </a>
                    )}
                    {project.sourceUrl && (
                        <a
                            href={project.sourceUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-medium text-neutral-400 underline underline-offset-4 transition hover:text-white"
                        >
                            Code source
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
};