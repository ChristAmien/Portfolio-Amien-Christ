import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay }
    }
})

const stats = [
    { label: "Années d’expérience", value: 2, suffix: "+" },
    { label: "Projets livrés", value: 5, suffix: "+" },
    { label: "Technologies", value: 6, suffix: "+" },
    { label: "Satisfaction client", value: 100, suffix: "%" }
]

export const About = ({ lang }) => {
    const stats = lang.about.stats
    const [counts, setCounts] = useState(() => stats.map(() => 0))
    const sectionRef = useRef(null)
    const animationStarted = useRef(false)

    useEffect(() => {
        if (!sectionRef.current) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !animationStarted.current) {
                    animationStarted.current = true
                    const duration = 2000
                    const startTime = performance.now()

                    const animate = (time) => {
                        const elapsed = Math.min(duration, time - startTime)
                        const progress = elapsed / duration
                        const easedProgress = 1 - Math.pow(1 - progress, 2)

                        setCounts(stats.map((stat) => Math.round(stat.value * easedProgress)))

                        if (elapsed < duration) {
                            requestAnimationFrame(animate)
                        } else {
                            setCounts(stats.map((stat) => stat.value))
                        }
                    }

                    requestAnimationFrame(animate)
                    observer.disconnect()
                }
            },
            { threshold: 0.25 }
        )

        observer.observe(sectionRef.current)
        return () => observer.disconnect()
    }, [])

    return (
        <div id="apropos" ref={sectionRef} className="border-b border-neutral-900 pb-4">
            <h1 className="my-20 text-center text-4xl text-white">
                A 
                <span className="text-neutral-500"> propos</span>
            </h1>

            <div className="grid gap-10 lg:grid-cols-[1.8fr_1fr] lg:items-start">
                <div className="space-y-8">
                    <motion.p
                        variants={container(0)}
                        initial="hidden"
                        animate="visible"
                        className="max-w-3xl text-lg leading-8 tracking-tight text-white">
                        {lang.about.text}
                    </motion.p>
                </div>
                <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
                    {stats.map((stat, index) => (
                        <div
                            key={stat.label}
                            className="rounded-3xl border border-neutral-700 bg-neutral-900/70 p-6 shadow-xl shadow-black/20"
                        >
                            <p className="text-4xl font-bold text-white">
                                {counts[index]}
                                {stat.suffix}
                            </p>
                            <p className="mt-2 text-sm text-neutral-400">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
