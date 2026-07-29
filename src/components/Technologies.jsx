import { FaDocker, FaPython,FaCss3, FaGithub, FaGitAlt, FaJava,FaHtml5} from "react-icons/fa"
import { SiFlask, SiSupabase, SiFlutter, SiSpringboot, SiMysql, SiPostgresql, SiTailwindcss, SiJavascript } from "react-icons/si"
import { RiReactjsLine } from "react-icons/ri"
import { motion } from "framer-motion"

const iconVariants = (duration) => ({
    initial: { y: -10},
    animal: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
})

const technologies = [
    {name: "React", icon: RiReactjsLine, color: "text-cyan-400"},
    { name: "Java", icon: FaPython, color: "text-yellow-500" },
    { name: "Python", icon: FaJava, color: "text-red-500" },
    { name: "Spring Boot", icon: SiSpringboot, color: "text-green-500" },
    { name: "MySQL", icon: SiMysql, color: "text-cyan-500" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "text-sky-700" },
    { name: "Git", icon: FaGitAlt, color: "text-orange-500" },
    { name: "GitHub", icon: FaGithub, color: "text-white" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
    { name: "Docker", icon: FaDocker, color: "text-blue-400" },
    { name: "Flask", icon: SiFlask, color: "text-gray-300" },
    { name: "HTML", icon: FaHtml5, color: "text-orange-800" },
    { name: "CSS", icon: FaCss3, color: "text-purple-800" },
    { name: "JavaScript", icon: SiJavascript, color: "text-yellow-300" },
    { name: "Flutter", icon: SiFlutter, color: "text-cyan-400" },
    { name: "Supabase", icon: SiSupabase, color: "text-green-400" },
]

export const Technologies = () => {
    return (
        <div className="border-b border-neutral-800 pb-24">
            <h2 className="my-20 text-center text-4xl text-white" id="competences">Competences</h2>
            <div className="flex flex-wrap items-center justify-center gap-4">
                {technologies.map(({ name, icon: Icon, color }) => (
                    <div
                        key={name}
                        className="flex min-w-[140px] flex-col items-center justify-center rounded-2xl border border-neutral-700 bg-neutral-900/70 p-4 shadow-lg shadow-black/20"
                    >
                        <Icon className={`text-6xl ${color}`} />
                        <span className="mt-3 text-sm font-medium text-neutral-200">{name}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}
