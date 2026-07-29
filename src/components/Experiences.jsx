import { EXPERIENCES } from "../constants"

export const Experiences = () => {
    return (
        <section>
            <h1 id="experiences" className="my-20 text-center text-4xl text-white">Experiences</h1>

            <div className="relative">
                {/* Ligne verticale qui traverse la colonne timeline (visible sur lg+) */}
                <div
                    className="hidden lg:block absolute top-0 bottom-0 w-[2px] bg-neutral-700/20"
                    style={{ left: "calc(25% + 1.5rem)" }}
                />

                <div className="space-y-8">
                    {EXPERIENCES.map((experience, index) => (
                        <div key={index} className="mb-8 lg:grid lg:grid-cols-12 lg:items-start">
                            {/* Année */}
                            <div className="w-full lg:col-span-3">
                                <p className="mb-2 text-sm text-neutral-400 text-gray-400">{experience.year}</p>
                            </div>

                            {/* Colonne timeline (pour le point), cachée sur petits écrans */}
                            <div className="hidden lg:flex lg:col-span-1 justify-center">
                                <div className="relative w-6 h-full flex items-center justify-center">
                                    <span className="inline-block w-4 h-4 rounded-full bg-purple-300 shadow-md" />
                                </div>
                            </div>

                            {/* Description */}
                            <div className="w-full max-w-xl lg:col-span-8">
                                <h6 className="mb-2 font-semibold text-white">
                                    {experience.role} - {" "}
                                    <span className="text-sm text-purple-100">{experience.company}</span>
                                </h6>
                                <p className="mb-4 text-neutral-400">{experience.description}</p>
                                {experience.technologies.map((tech, idx) => (
                                    <span key={idx} className="mr-2 mt-4 inline-block rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
