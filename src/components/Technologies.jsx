import { FaDocker, FaPython, FaGithub, FaGitAlt, FaJava,FaHtml5} from "react-icons/fa"
import { SiFlask, SiSpringboot, SiMysql, SiPostgresql, SiTailwindcss, SiJavascript } from "react-icons/si"
import { RiReactjsLine } from "react-icons/ri"

const technologies = [
    {name: "React", icon: RiReactjsLine, color: "text-cyan-400"},
    { name: "Java", icon: FaPython, color: "text-yellow-500" },
    { name: "Python", icon: FaJava, color: "text-red-500" },
    { name: "Spring Boot", icon: SiSpringboot, color: "text-green-500" },
    { name: "MySQL", icon: SiMysql, color: "text-cyan-500" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-500" },
    { name: "Git", icon: FaGitAlt, color: "text-orange-500" },
    { name: "GitHub", icon: FaGithub, color: "text-white" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
    { name: "Docker", icon: FaDocker, color: "text-blue-400" },
    { name: "Flask", icon: SiFlask, color: "text-gray-300" },
    { name: "HTML", icon: FaHtml5, color: "text-orange-800" },
    { name: "JavaScript", icon: SiJavascript, color: "text-yellow-300" },
]

export const Technologies = () => {
    return (
        <div className="border-b border-neutral-800 pb-24">
            <h2 className="my-20 text-center text-4xl text-white" id="competences">Technologies</h2>
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
