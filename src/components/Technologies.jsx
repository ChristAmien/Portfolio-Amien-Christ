import { FaDocker, FaPython, FaCss3, FaGithub, FaGitAlt, FaJava, FaHtml5 } from "react-icons/fa"
import { SiFlask, SiSupabase, SiFlutter, SiSpringboot, SiMysql, SiPostgresql, SiTailwindcss, SiJavascript } from "react-icons/si"
import { RiReactjsLine } from "react-icons/ri"
import OrbitImages from './OrbitImages'
import BlobCursor from './BlobCursor'

const technologies = [
    { name: "React", icon: RiReactjsLine, color: "text-cyan-400" },
    { name: "Java", icon: FaJava, color: "text-red-500" },
    { name: "Python", icon: FaPython, color: "text-yellow-500" },
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

const orbitItems = technologies.map(({ name, icon: Icon, color }) => (
    <div
        key={name}
        title={name}
        className="flex h-full w-full flex-col items-center justify-center rounded-2xl border border-neutral-700 bg-neutral-900/80 p-2 shadow-lg shadow-black/20"
    >
        <Icon className={`text-5xl ${color}`} />
        <span className="mt-1 truncate text-xs font-medium text-neutral-300">{name}</span>
    </div>
))

export const Technologies = () => {
    return (
        <div className="relative left-1/2 w-screen -translate-x-1/2 cursor-none overflow-hidden border-b border-neutral-800 bg-black pb-12">

            {/* Fond grille + glow radial — derrière tout, purement visuel */}
            <div className="pointer-events-none absolute inset-0 z-0">
                <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
                <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>
            </div>

            {/* Blob cursor — au-dessus de tout, capte la souris */}
            <div className="absolute inset-0 z-30" style={{ opacity: 0.4 }}>
                <BlobCursor
                    blobType="circle"
                    fillColor="#5227FF"
                    trailCount={1}
                    sizes={[60]}
                    innerSizes={[20]}
                    innerColor="rgba(255,255,255,0.8)"
                    opacities={[0.6]}
                    shadowColor="rgba(0,0,0,0.75)"
                    shadowBlur={5}
                    shadowOffsetX={10}
                    shadowOffsetY={10}
                    filterStdDeviation={30}
                    useFilter={true}
                    fastDuration={0.1}
                    slowDuration={0.5}
                    zIndex={100}
                />
            </div>

            <h2 className="relative z-10 my-6 text-center text-4xl text-white" id="competences">
                Competences
            </h2>

            <div className="relative z-10 mx-auto h-[600px] max-w-6xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                    <OrbitImages
                        items={orbitItems}
                        shape="ellipse"
                        baseWidth={1600}
                        radiusX={650}
                        radiusY={280}
                        rotation={-8}
                        duration={34}
                        itemSize={150}
                        responsive={true}
                        direction="normal"
                        fill
                        showPath={false}
                        paused={false}
                    />
                </div>
            </div>
        </div>
    )
}