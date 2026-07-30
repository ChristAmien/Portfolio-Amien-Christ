import { useState } from "react";
import { motion } from "framer-motion";
import { CERTIFICATIONS } from "../constants";

const Certifications = () => {
    const [previewFile, setPreviewFile] = useState(null);

    return (
        <section id="certifications" className="border-b border-neutral-900 pb-24">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
                className="my-10 text-center text-4xl text-white"
            >
                Certifications
            </motion.h2>

            {CERTIFICATIONS.length === 0 ? (
                <p className="text-center text-neutral-500">
                    Aucune certification à afficher pour le moment.
                </p>
            ) : (
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {CERTIFICATIONS.map((cert, index) => (
                        <motion.div
                            key={index}
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex flex-col rounded-lg border border-neutral-800 bg-neutral-900/40 p-5 transition hover:border-neutral-600"
                        >
                            <div
                                onClick={() => setPreviewFile(cert.file)}
                                className="mb-4 flex h-36 cursor-pointer items-center justify-center rounded-md bg-neutral-800 text-neutral-400 transition hover:text-purple-400"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="40"
                                    height="40"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                >
                                    <path d="M6 2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" />
                                    <path d="M14 2v6h6" />
                                </svg>
                            </div>

                            <h3 className="mb-1 text-lg font-semibold text-neutral-100">
                                {cert.title}
                            </h3>
                            <p className="mb-1 text-sm text-neutral-400">{cert.issuer}</p>
                            <span className="mb-4 text-xs text-neutral-500">{cert.date}</span>

                            <div className="mt-auto flex gap-3">
                                <button
                                    type="button"
                                    onClick={() => setPreviewFile(cert.file)}
                                    className="flex-1 rounded-md bg-purple-600 py-2 text-sm font-medium text-white transition hover:bg-purple-500"
                                >
                                    Voir
                                </button>
                                <a
                                    href={cert.file}
                                    download
                                    className="flex-1 rounded-md border border-purple-600 py-2 text-center text-sm font-medium text-purple-400 transition hover:bg-purple-600/10"
                                >
                                    Télécharger
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            )}

            {previewFile && (
                <div
                    onClick={() => setPreviewFile(null)}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6"
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="relative h-[85vh] w-full max-w-3xl overflow-hidden rounded-lg bg-neutral-950"
                    >
                        <button
                            onClick={() => setPreviewFile(null)}
                            aria-label="Fermer"
                            className="absolute right-3 top-2 z-10 text-2xl text-neutral-300 hover:text-white"
                        >
                            &times;
                        </button>
                        <iframe
                            src={previewFile}
                            title="Aperçu du certificat"
                            className="h-full w-full border-none"
                        />
                    </div>
                </div>
            )}
        </section>
    );
};

export default Certifications;