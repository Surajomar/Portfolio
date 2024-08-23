import { IconBrandGithub, IconBrandInstagram, IconBrandLeetcode, IconBrandLinkedin, IconBrandYoutube } from "@tabler/icons-react";
const Info = {
    name: "Suraj Omar",
    stack: ['Software Developer', 'Web Developer', 'MERN Developer' , 'Data Science Enthusiast' ],
    bio: "I'm a passionate software engineer specialized DSA , Web Development and DataScience .  Let's connect and create something amazing together!"
}



const ProjectInfo = [
    {
        title: "Pen & Pixels - A Blog Application",
        technologies: ["HTML", "CSS", "Node.js", "Express", "MongoDB"],
        image: "pen.png",
        live: false,
        desc: "Created a blog application using Express.js, Node.js, EJS, Tailwind CSS, and MongoDB to perform content-based filtering, access control, and membership upgrades for four different user types: Elite Reader, Elite Writer, Premium Reader, and Premium Writer. Engineered a lively backend duo with Express.js and Node.js, smoothly synchronized with MongoDB for data storage. Fashioned an inviting user interface using EJS and Tailwind CSS, unveiling effortless user roles and intuitive access control.",
        github: "https://github.com/suraj5621/Pen-Pixel"
    },
    {
        title: "Flick Pick AI - A Movie Recommendation Application",
        live: false,
        image: "movie.png",
        technologies: ["HTML", "CSS", "Python", "Flask","Machine Learning"],
        desc: "Created a personalized movie recommendation system by analyzing the TMDB dataset, demonstrating expertise in content filtering and data-driven insights for improving user experiences. Implemented content filtering techniques like user-based and item-based filtering to enhance user experience and provide accurate movie recommendations.",
        github: "https://github.com/suraj5621/Flick-Pick-AI-"
    },
    {
        title: "Mega Mart - An E-Commerce Platform",
        technologies: ["HTML", "CSS", "Node.js", "Express", "MongoDB"],
        image: "ecom.png",
        live: false,
        desc:"Engineered a versatile e-commerce platform where users seamlessly transition between roles as sellers and buyers. Implemented features like product lifecycle management, content-based filtering, and refined cart functionality. Leveraged Node.js, Express, EJS, and CSS to craft a resilient backend with dynamic content rendering and intuitive interface. From streamlined navigation to secure authentication, every detail was meticulously designed for an enhanced user experience.",
        github: "https://github.com/suraj5621/Mega-Mart",

        
    }
]
//     {
//         title: "CodeX Code Editor",
//         desc: "CodeX is a modern, fully responsive code editor built using React, TailwindCSS, and Ace Editor, offering a seamless coding experience across all devices. It features syntax highlighting for popular programming languages, including HTML, CSS, JavaScript, Python, and Java. Users can create, edit, and save code files, with the option to download them as text files. CodeX combines robust functionality with a sleek, intuitive design, making coding effortless and enjoyable.",
//         image: "CodeX.png",
//         live: false,
//         technologies: ["React", "Tailwind", "Ace Editor"],
//         link: "https://github.com/Code-Mars/CodeX",
//         github: "https://github.com/Code-Mars/CodeX"
//     }
// ]


const SkillInfo = [
    {
        title: "Languages",
        skills: ["Java", "Python", "JavaScript", "Node JS" , "C++"]
    },
    {
        title: "Libraries",
        skills: ["React Js", "Github","Tailwind CSS" ,"Pandas"," NumPy", "scikit-learn"]
    },
    {
        title: "Databases",
        skills: ["MongoDB" , "MySQL"]
    },
    {
        title: "Developer Tools",
        skills: ["Git", "Github", "VS Code", "Postman",  "PyCharm", "Eclipse", "Google Colab"]
    },
    {
        title: "Frameworks",
        skills: [ "Express JS" , "Flask"]
    },
]
// const socialLinks = [
//     { link: "https://github.com/Code-Mars", icon: IconBrandGithub },
//     { link: "https://www.linkedin.com/in/chandrabhan-maurya", icon: IconBrandLinkedin },
//     { link: "https://www.instagram.com/code.marshal_", icon: IconBrandInstagram }, 
//     { link: "https://www.youtube.com/channel/UC1ki6jaFvFiH_E79b9FYptw", icon: IconBrandYoutube },
//     { link: "https://www.leetcode.com/u/CodeMars", icon: IconBrandLeetcode }
// ];


// const ExperienceInfo = [
//     {
//         role: "Specialist Programmer",
//         company: "Infosys",
//         date: "Oct 2023 - Present",
//         desc: "I led software development with Spring Boot, React, and Angular, creating scalable microservices and interfaces. I optimized performance by integrating frontend and backend, and enhanced security with RESTful APIs. Collaborating in agile teams, I fostered innovation and efficiency for top-quality solutions.",
//         skills: ["Springboot", "React JS", "Angular", "Node JS", "MySQL", "MongoDB", "Microservices"]
//     },
//     {
//         role: "System Engineer",
//         company: "Infosys",
//         date: "Nov 2022 - Sep 2023",
//         desc: " I leveraged my skills in Java, Selenium, automation testing, and MySQL to design and implement automated testing frameworks, ensuring robust software validation. I optimized database performance and reliability, and collaborated with cross-functional teams to enhance system operations and ensure seamless integration.",
//         skills: ["Java", "MySQL", "Hibernate", "Selenium", "Jenkins", "JIRA", "Automation Testing"]
//     }
// ]
const Slugs = [
    "typescript",
    "spring",
    "javascript",
    "dart",
    "java",
    "react",
    "angular",
    "flutter",
    "android",
    "html5",
    "css3",
    "springboot",
    "mongodb",
    "selenium",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "mysql",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
];
export { Info, ProjectInfo, SkillInfo, Slugs };
