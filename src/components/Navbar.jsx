import logo from '../assets/logo_amien.png'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaTiktok } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'

export function Navbar() {
    return (
        <nav className="fixed left-1/2 top-6 z-50 w-[95%] max-w-6xl -translate-x-1/2">
            <div className="flex min-h-[72px] items-center justify-between gap-3 rounded-full border-[5px] border-black bg-white p-2 shadow-[0_8px_20px_rgba(0,0,0,0.25)]">

                {/* LOGO */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white">
                    <img
                        src={logo}
                        alt="Logo Amien"
                        className="h-full w-full object-contain p-1"
                    />
                </div>

                {/* MENU */}
                <div className="hidden flex-1 flex-nowrap items-center justify-center gap-4 overflow-x-auto whitespace-nowrap md:flex lg:gap-8">

                    <a
                        href="#acceuil"
                        className="font-medium text-black transition hover:text-gray-500"
                    >
                        Acceuil
                    </a>

                    <a
                        href="#apropos"
                        className="font-medium text-black transition hover:text-gray-500"
                    >
                        A propos
                    </a>

                    <a
                        href="#projets"
                        className="font-medium text-black transition hover:text-gray-500"
                    >
                        Projets
                    </a>

                    <a
                        href="#competences"
                        className="font-medium text-black transition hover:text-gray-500"
                    >
                        Competences
                    </a>
                    <a
                        href="#certifications"
                        className="font-medium text-black transition hover:text-gray-500"
                    >
                        Certifications
                    </a>
                    <a
                        href="#experiences"
                        className="font-medium text-black transition hover:text-gray-500"
                    >
                        Experiences
                    </a>
                    <a
                        href="#contacts"
                        className="font-medium text-black transition hover:text-gray-500"
                    >
                        Contacts
                    </a>
                </div>

                {/* Social Links */}
                <div className="flex shrink-0 items-center justify-center rounded-full bg-black px-5 py-3 text-sm font-medium text-white transition hover:bg-gray-800">
                    <div className="flex items-center justify-center gap-5 text-2xl">

                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noreferrer"
                            className="transition hover:-translate-y-1 hover:text-blue-400"
                        >
                            <FaLinkedin />
                        </a>

                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noreferrer"
                            className="transition hover:-translate-y-1 hover:text-gray-300"
                        >
                            <FaGithub />
                        </a>

                        <a
                            href="#"
                            className="transition hover:-translate-y-1 hover:text-blue-400"
                        >
                            <FaTwitter />
                        </a>

                        <a
                            href="#"
                            className="transition hover:-translate-y-1 hover:text-pink-500"
                        >
                            <FaInstagram />
                        </a>

                        <a
                            href="#"
                            className="transition hover:-translate-y-1 hover:text-pink-700"
                        >
                            <FaTiktok />
                        </a>

                        <a
                            href="#"
                            className="transition hover:-translate-y-1 hover:text-blue-500"
                        >
                            <FaFacebook />
                        </a>

                    </div>
                </div>

            </div>
        </nav>
    )
}