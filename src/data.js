/*Button contents*/
export const buttons = [
    { id: 1, icon: '💫', text: 'Hire Me', href: '#contact' },
    { id: 2, icon: '</>', text: 'View Projects', href: '#projects' },
    { id: 3, icon: '📨', text: 'Contact Me', href: '#contact' },
    { id: 4, text: 'GitHub', href: '#github' },
    { id: 5, icon: '✨', text: 'Live Demo', href: '#liveurl' },

];

/*NavBar content*/
export const profile = {
    name: "Abigiya Endale",
    href: '#home',

};

export const navLinks = [
    { id: 1, label: "Home", href: '#home' },
    { id: 2, label: "About", href: '#about' },
    { id: 3, label: "Projects", href: '#projects' },
    { id: 4, label: "Skills", href: '#skills' },
    { id: 5, label: "Contact", href: '#contact' },
];


/*Hero content*/
export const hero = {
    eyebrow: "JUNIOR FRONT-END DEVELOPER",
    title: "Crafting Digital Experience with Heart",
    intro: "Passionate about creating fun, interactive, and visually engaging websites, and the magic in between.",

}


/*---------------------------about content------------------------*/

export const about = {
    eyebrow: "MY STORY",
    title: "The Journey",
    photo: "/photo.png",
    photoAlt: "Portrait",
    plumbob: "/Plumbob.webp",
    role: "Junior Front-End Developer",
    bio: "Hi! I'm Abigiya, a developer who enjoys combining creativity and technology to create beautiful digital experiences.",

    hobbiesTitle: "When I'm not coding",
    hobbies: [
        { id: 1, icon: "🎨", label: "Sketching" },
        { id: 2, icon: "📖", label: "Reading historical fiction" },
        { id: 3, icon: "🧶", label: "Crocheting" },
    ],

    timeline: [
        {
            id: 1,
            year: "2025",
            title: "Python",
            description: "My first programming language.",
        },

        {
            id: 2,
            year: "2026",
            title: "C++",
            description: "Learned how programs manage memory and data.",
        },

        {
            id: 3,
            year: "2026",
            title: "Java",
            description: "Learned object-oriented programming and built a budget planning system with a friend.",
        },

        {
            id: 4,
            year: "2026",
            title: "The Spark",
            description: 'Discovered web development and wrote my first "Hello World".',
        },

        {
            id: 5,
            year: "2026",
            title: "Falling For HTML & CSS",
            description: "Started creating websites and learning how design and code work together.",
        },

        {
            id: 6,
            year: "2026",
            title: "Exploring JavaScript",
            description: "Started building interactive experiences and understanding programming logic.",
        },
    ],
};


/*---------------------------skills content------------------------*/
export const skills = {
    eyebrow: "MY TOOLKIT",
    title: "Skills & Technologies",
    groups: [
        {
            id: 1,
            icon: "💻",
            title: "Languages",
            skills: [
                { id: 1, name: "Python" },
                { id: 2, name: "C++" },
                { id: 3, name: "Java" },
                { id: 4, name: "JavaScript" },
            ],
        },
        {
            id: 2,
            icon: "🎨",
            title: "Web & Tools",
            skills: [
                { id: 1, name: "HTML" },
                { id: 2, name: "CSS" },
                { id: 3, name: "React" },
                { id: 4, name: "Git & GitHub" },
            ],
        },
    ],
};

/*---------------------------projects content------------------------*/



export const projects = [
    {
        id: 1,
        number: "01",
        category: "WEB DEVELOPMENT",
        title: "Gym Fitness Website",
        description:
            "A modern fitness website featuring workout programs, membership information, and an engaging user experience.",
        image: "/cyberblue.png",
        imageAlt: "Gym fitness website preview",
        technologies: ["HTML", "CSS", "JavaScript"],
        github: "https://github.com/Abby-End",
        live: "https://gym-fitness-website-ddbytj086-abby-dev.vercel.app/",
    },
    {
        id: 2,
        number: "02",
        category: "WEB DESIGN",
        title: "Apple Website (Now)",
        description:
            "A minimalist website inspired by Apple's clean design language, featuring soft colors, elegant layouts, and smooth visuals.",
        image: "/lavender.png",
        imageAlt: "Apple website snow design preview",
        technologies: ["HTML", "CSS"],
        github: "https://github.com/Abby-End",
        live: "https://new-apple-website-blush.vercel.app/",
    },
    {
        id: 3,
        number: "03",
        category: "WEB DESIGN",
        title: "Apple Website (Classic)",
        description:
            "A classic Apple-inspired design exploring a clean layout, bold visuals, and a simple user interface.",
        image: "/pink.png",
        imageAlt: "Apple classic website preview",
        technologies: ["HTML", "CSS"],
        github: "https://github.com/Abby-End",
        live: "https://old-apple-wbsite-gb7p-4l5gkv9ue-abby-dev.vercel.app/",
    },
    {
        id: 4,
        number: "04",
        category: "WEB DESIGN",
        title: "Poppy Lovers",
        description:
            "A playful and colorful website celebrating poppies through soft visuals, creative layouts, and an expressive design.",
        image: "/softorchid.png",
        imageAlt: "Poppy Lovers website preview",
        technologies: ["HTML", "CSS", "JavaScript"],
        github: "https://github.com/Abby-End",
        live: "https://puppy-lovers-page-three.vercel.app/",
    },
    {
        id: 5,
        number: "05",
        category: "WEB DEVELOPMENT",
        title: "Music Catalog",
        description:
            "A music-inspired website for exploring and organizing music, with a simple interface and a visually engaging experience.",
        image: "/willowgreen.png",
        imageAlt: "Music catalog website preview",
        technologies: ["HTML", "CSS", "JavaScript"],
        github: "https://github.com/Abby-End",
        live: "https://music-catalog-r36juym61-abby-dev.vercel.app/",
    },
];


/* --------------------------- Contact content --------------------------- */

export const contact = {
    eyebrow: "GET IN TOUCH",
    title: "Let's Connect",
    intro:
        "Whether you have a project, a question, or simply want to say hello, I'd love to hear from you.",

    details: [
        {
            id: 1,
            icon: "✉️",
            label: "Email",
            value: "Your email address",
            href: "#",
        },
        {
            id: 2,
            icon: "💻",
            label: "GitHub",
            value: "Abby-End",
            href: "#",
        },
        {
            id: 3,
            icon: "💼",
            label: "LinkedIn",
            value: "Connect with me",
            href: "#",
        },
        {
            id: 4,
            icon: "📍",
            label: "Location",
            value: "Addis Ababa, Ethiopia",
            href: null,
        },
    ],
};


/* --------------------------- Footer content --------------------------- */

export const footer = {
    name: "Abigiya Endale",
    tagline: "Crafting digital experiences with heart",
    copyright: "© 2026 Abigiya Endale. All rights reserved.",
};




