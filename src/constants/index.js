import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/Coffee.png"
import project6 from "../assets/projects/project-6.jpg"

export const HERO_CONTENT = `Développeur Full Stack passionné par la conception d’applications web modernes et performantes. Je travaille principalement avec Java, Spring Boot, React et JavaScript, avec un intérêt particulier pour le développement backend, les API REST et les solutions digitales dans le secteur bancaire.`;

export const ABOUT_TEXT = `Je suis un développeur Full Stack passionné, spécialisé dans Java, Spring Boot, React et JavaScript. Je conçois des applications web modernes en travaillant aussi bien sur le backend, les API REST et les bases de données que sur les interfaces utilisateur.
Curieux et constamment en apprentissage, j’aime transformer des idées en solutions concrètes à travers des projets personnels. Mon ambition est de progresser en tant que développeur logiciel et de créer des applications fiables, performantes et évolutives, avec un intérêt particulier pour le secteur bancaire et financier.`

export const EXPERIENCES = [
    {
        year: "2026",
        role: "Développeur Java",
        company: "Projets Personnels",
        description: `Simulation des opérations bancaires (comptes, clients, transactions) en Java. Développement d'une API REST avec Spring Boot incluant CRUD et gestion des avis utilisateurs, connectée à une base de données. Tests des requêtes API avec Postman.`,
        technologies: ["Java", "Spring Boot", "REST API", "Postman"],
    },
    {
        year: "2025 - 2026",
        role: "Développeur Web",
        company: "OBVX",
        description: `Création et administration de bases de données. Conception de l'interface utilisateur en collaboration avec l'équipe Frontend.`,
        technologies: ["Web", "Base de données", "UI"],
    },
];

export const PROJECTS = [
    {
        title: "Site E-commerce",
        image: project1,
        description:
            "Site e-commerce complet permettant aux utilisateurs de parcourir les produits, de les ajouter au panier, de créer un compte et de passer leurs commandes en toute simplicité.",
        technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
        demoUrl: "#",
        sourceUrl: "#",
    },
    {
        title: "Application de Gestion de Tâches",
        image: project2,
        description:
            "Application web conçue pour organiser et suivre les tâches et projets, avec des fonctionnalités de création, d'attribution et de suivi de l'avancement.",
        technologies: ["HTML", "CSS", "Angular", "Firebase"],
        demoUrl: "#",
        sourceUrl: "#",
    },
    {
        title: "Plateforme de Blog",
        image: project4,
        description:
            "Plateforme permettant de créer, publier et gérer des articles de blog, avec un éditeur de texte, un espace de commentaires et la gestion des profils utilisateurs.",
        technologies: ["HTML", "CSS", "Vue.js", "Express", "MySQL"],
        demoUrl: "#",
        sourceUrl: "#",
    },
    {
        title: "Am'Coffee",
        image: project5,
        description:
            "Site vitrine moderne dédié à un café, mettant en valeur les boissons, les spécialités de la maison, les promotions et les informations essentielles, tout en offrant une expérience utilisateur conviviale et immersive.",
        technologies: ["HTML", "CSS", "JAVASCRIPT"],
        demoUrl: "#",
        sourceUrl: "#",
    },
    {
        title: "Portfolio AMIEN",
        image: project6,
        description:
            "Un portfolio moderne présentant mes projets en développement web, mobile et intelligence artificielle. J'y partage des solutions performantes, des interfaces soignées et des applications conçues pour répondre à des besoins concrets tout en offrant une expérience utilisateur fluide.",
        technologies: ["REACT", "TAILWINDCSS", "JAVASCRIPT", "FRAMER"],
        demoUrl: "https://portfolio-amien-christ.vercel.app/",
        sourceUrl: "https://github.com/ChristAmien/Portfolio-Amien-Christ",
    },

];

// Place tes fichiers PDF dans /public/certifications/ puis référence-les
// ci-dessous avec le chemin "/certifications/nom-du-fichier.pdf"
export const CERTIFICATIONS = [
    {
        title: "Certification VIBEATHON",
        issuer: "Vibeathon",
        date: "2026",
        file: "../public/certificates/certificat-vibeathon-2026.pdf",
    },
    {
        title: "Getting started with Microsoft Office 365",
        issuer: "Coursera",
        date: "2026",
        file: "../public/certificates/Coursera DTUY7BEYFJC6.pdf",
    },
    {
        title: "IA Générative",
        issuer: "MTN Skills Academy",
        date: "2026",
        file: "../public/certificates/IA_g_n_rative_Certificate.pdf",
    },
    {
        title: "IA Responsable",
        issuer: "MTN Skills Academy",
        date: "2026",
        file: "../public/certificates/IA_responsable_Certificate.pdf",
    },
    {
        title: "IA Pour Tous",
        issuer: "MTN Skills Academy",
        date: "2026",
        file: "../public/certificates/L_IA_pour_tous_Certificate.pdf",
    },
    {
        title: "Bases de l'IA Générative",
        issuer: "MTN Skills Academy",
        date: "2026",
        file: "../public/certificates/Les_bases_de_l_IA_Certificate.pdf",
    },
    {
        title: "Recherche sur Internet",
        issuer: "MTN Skills Academy",
        date: "2026",
        file: "../public/certificates/Recherche_sur_Internet_et_au_d_Certificate.pdf",
    },
];

export const CONTACT = {
    address: "Bingerville, Abidjan, Côte d'Ivoire ",
    phoneNo: "+225 0706528067 ",
    email: "amienfabien@gmail.com",
};