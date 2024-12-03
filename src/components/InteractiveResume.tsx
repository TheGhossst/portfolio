import { ArrowLeft, Mail, Phone, MapPin, Github, Linkedin, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Certificate {
    name: string;
    issuer: string;
    date: string;
}

interface Job {
    title: string;
    company: string;
    date: string;
    location: string;
    responsibilities: string[];
}

interface Project {
    title: string;
    date: string;
    tech: string;
    link: string;
    description: string[];
}

interface SkillCategory {
    title: string;
    skills: string[];
}

export function InteractiveResume() {
    const certificates: Certificate[] = [
        { name: "Google Cybersecurity", issuer: "Coursera", date: "June 2023" },
        { name: "NPTEL-Ethical Hacking", issuer: "NPTEL", date: "October 2023" },
        { name: "Python OOPS", issuer: "UDEMY", date: "October 2023" },
        { name: "NTPEL- CyberSecurity", issuer: "NPTEL", date: "May 2024" },
        { name: "HackerRank Problem Solving", issuer: "HackerRank", date: "July 2024" },
        { name: "HackerRank Python", issuer: "HackerRank", date: "April 2024" }
    ]

    const progSkills = ['C', 'Java', 'Python', 'Bash', 'Go lang', 'JavaScript', 'PHP']
    const libSkills = ['Node', 'React'];
    const toolSkills = ['VS code', 'Git', 'Wireshark', 'Burpsuite', 'Nmap']
    const dbSkills = ['SQL', 'SQLite', 'Firebase']
    const languages = ['English', 'Malayalam', 'Hindi', 'Sanskrit']

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    const staggerChildren = {
        visible: { transition: { staggerChildren: 0.1 } }
    };

    interface SectionProps {
        children: React.ReactNode;
        title: string;
    }

    const Section: React.FC<SectionProps> = ({ children, title }) => {
        const [ref, inView] = useInView({
            triggerOnce: true,
            threshold: 0.1,
        });

        return (
            <motion.section
                ref={ref}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={fadeInUp}
                className="mb-12"
            >
                <h2 className="text-2xl font-semibold mb-4">{title}</h2>
                {children}
            </motion.section>
        );
    };

    return (
        <div className="min-h-screen bg-transparent text-white/90">
            <div className="max-w-4xl mx-auto py-8 px-4">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Link
                        to="/"
                        className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8 transition-colors"
                    >
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        <span>Back to Home</span>
                    </Link>
                </motion.div>

                <motion.header
                    className="mb-12"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <h1 className="text-5xl font-bold mb-2">Nandu Krishna M</h1>
                    <p className="text-xl text-white/70">CS Student</p>
                </motion.header>

                <Section title="Contact Information">
                    <motion.div className="flex flex-wrap gap-6 text-white/70" variants={staggerChildren}>
                        {[
                            { icon: <Mail className="h-5 w-5" />, text: "nandukrishnapkm97@gmail.com" },
                            { icon: <Phone className="h-5 w-5" />, text: "(+91) 8547673580" },
                            { icon: <MapPin className="h-5 w-5" />, text: "Trivandrum, Kerala, India" }
                        ].map((item, index) => (
                            <motion.div key={index} className="flex items-center space-x-2" variants={fadeInUp}>
                                {item.icon}
                                <span>{item.text}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </Section>

                <Section title="Profiles">
                    <motion.div className="flex flex-wrap gap-6 text-white/70" variants={staggerChildren}>
                        {[
                            { icon: <Github className="h-5 w-5" />, text: "TheGhossst", href: "https://github.com/TheGhossst" },
                            { icon: <Linkedin className="h-5 w-5" />, text: "Nandu Krishna M", href: "https://linkedin.com/in/nandu-krishna-m" }
                        ].map((item, index) => (
                            <motion.a
                                key={index}
                                href={item.href}
                                className="flex items-center space-x-2 hover:text-blue-300 transition-colors"
                                variants={fadeInUp}
                            >
                                {item.icon}
                                <span>{item.text}</span>
                            </motion.a>
                        ))}
                    </motion.div>
                </Section>

                <Section title="Summary">
                    <motion.p className="text-white/70" variants={fadeInUp}>
                        Hey there! I'm Nandu Krishna M, a Computer Science and Engineering student with a
                        passion for cybersecurity and coding. I've dipped my toes into some cool internships,
                        where I got to play around with tools like aircrack-ng and hydra. I'm pretty comfortable with
                        a bunch of programming languages and frameworks, and I've got some nifty certifications
                        under my belt too.
                    </motion.p>
                </Section>

                <Section title="Experience">
                    <motion.div className="space-y-8" variants={staggerChildren}>
                        {[
                            {
                                title: "Digital Forensics Intern",
                                company: "CFSS",
                                date: "March 2024 - April 2024",
                                location: "Remote",
                                responsibilities: [
                                    "Used aircrack-ng to analyze pcap files and identify security vulnerabilities.",
                                    "Intercepted communication messages and analyzed potential security threats.",
                                    "Employed techniques like LSB steganography and digital watermarking to detect hidden information.",
                                    "Used specialized tools to uncover and analyze steganographic data.",
                                    "Analyzed audio files with Python to extract hidden messages."
                                ]
                            },
                            {
                                title: "Penetration Testing Intern",
                                company: "CFSS",
                                date: "November 2023 - December 2023",
                                location: "Remote",
                                responsibilities: [
                                    "Conducted Vulnerability Assessments and Penetration Tests.",
                                    "Utilized tools like curl for HTTP requests and hydra for password brute-forcing.",
                                    "Exploited vulnerabilities in systems and applications for hands-on security assessments.",
                                    "Mastered tools like nikto for web server scanning and netdiscover for network scanning.",
                                    "Gained proficiency in using nc for reverse shell execution and pty.spawn for acquiring a full TTY shell.",
                                    "Bypassed multiple security measures and captured flags in various CTF challenges.",
                                    "Gained root access on vulnerable systems through privilege escalation techniques."
                                ]
                            }
                        ].map((job: Job, index) => (
                            <motion.div key={index} variants={fadeInUp}>
                                <h3 className="text-xl font-medium mb-1">{job.title}</h3>
                                <p className="text-white/70 mb-2">{job.company} | {job.date} | {job.location}</p>
                                <motion.ul className="list-disc list-inside text-white/70 space-y-1" variants={staggerChildren}>
                                    {job.responsibilities.map((resp, idx) => (
                                        <motion.li key={idx} variants={fadeInUp}>{resp}</motion.li>
                                    ))}
                                </motion.ul>
                            </motion.div>
                        ))}
                    </motion.div>
                </Section>

                <Section title="Education">
                    <motion.div variants={fadeInUp}>
                        <h3 className="text-xl font-medium mb-1">B.Tech in Computer Science and Engineering</h3>
                        <p className="text-white/70">MAR BASELIOS COLLEGE OF ENGINEERING AND TECHNOLOGY | November 2021 - Present</p>
                        <p className="text-white/70">CGPA: 8.93</p>
                        <a href="https://mbcet.ac.in" className="text-blue-400 hover:text-blue-300 transition-colors">https://mbcet.ac.in</a>
                    </motion.div>
                </Section>

                <Section title="Projects">
                    <motion.div className="space-y-6" variants={staggerChildren}>
                        {[
                            {
                                title: "E-VOTING USING BLOCKCHAIN",
                                date: "Present",
                                tech: "Next.js, Solidity, Firebase",
                                link: "https://e-voting-6r0guloem-hipster16s-projects.vercel.app",
                                description: [
                                    "Developed a secure and transparent e-voting system for college-level elections using blockchain technology.",
                                    "Implemented the system to ensure the integrity and immutability of votes, providing a trustless and decentralized voting platform."
                                ]
                            },
                            {
                                title: "TuneTagger",
                                date: "October 2024",
                                tech: "React, Node.js",
                                link: "https://tunetagger.netlify.app",
                                description: [
                                    "TuneTagger is a powerful and easy-to-use tool that allows you to personalize your audio files with your own creative flair. You can modify file name, artist name, album name, and cover image."
                                ]
                            },
                            {
                                title: "TabTracker",
                                date: "August 2024",
                                tech: "HTML, CSS, JavaScript, Firebase",
                                link: "https://github.com/TheGhossst/TabTracker",
                                description: [
                                    "TabTracker is a handy browser extension that helps you save and manage your important links in one place."
                                ]
                            }
                        ].map((project: Project, index) => (
                            <motion.div key={index} variants={fadeInUp}>
                                <h3 className="text-xl font-medium mb-1">{project.title}</h3>
                                <p className="text-white/70 mb-2">{project.date}</p>
                                <p className="text-white/70 mb-2">{project.tech}</p>
                                <a href={project.link} className="text-blue-400 hover:text-blue-300 transition-colors">Project Link</a>
                                <motion.ul className="list-disc list-inside text-white/70 space-y-1 mt-2" variants={staggerChildren}>
                                    {project.description.map((desc, idx) => (
                                        <motion.li key={idx} variants={fadeInUp}>{desc}</motion.li>
                                    ))}
                                </motion.ul>
                            </motion.div>
                        ))}
                    </motion.div>
                </Section>

                <Section title="Skills">
                    <motion.div className="space-y-4" variants={staggerChildren}>
                        {[
                            { title: "Programming Languages", skills: progSkills },
                            { title: "Libraries/Frameworks", skills: libSkills },
                            { title: "Tools / Platforms", skills: toolSkills },
                            { title: "Databases", skills: dbSkills }
                        ].map((category: SkillCategory, index) => (
                            <motion.div key={index} variants={fadeInUp}>
                                <h3 className="text-lg font-medium mb-2">{category.title}</h3>
                                <motion.div className="flex flex-wrap gap-2" variants={staggerChildren}>
                                    {category.skills.map((skill) => (
                                        <motion.span
                                            key={skill}
                                            className="px-3 py-1 bg-white/10 rounded-full text-sm hover:bg-white/20 transition-colors"
                                            variants={fadeInUp}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            {skill}
                                        </motion.span>
                                    ))}
                                </motion.div>
                            </motion.div>
                        ))}
                    </motion.div>
                </Section>

                <Section title="Certifications">
                    <motion.div className="space-y-4" variants={staggerChildren}>
                        {certificates.map((cert: Certificate, index) => (
                            <motion.div key={index} className="flex items-center space-x-2" variants={fadeInUp}>
                                <Award className="h-5 w-5 text-white/70" />
                                <span className="text-white/90">{cert.name}</span>
                                <span className="text-white/70">|</span>
                                <span className="text-white/70">{cert.issuer}</span>
                                <span className="text-white/70">|</span>
                                <span className="text-white/70">{cert.date}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </Section>

                <Section title="Languages">
                    <motion.div className="flex flex-wrap gap-4" variants={staggerChildren}>
                        {languages.map((language) => (
                            <motion.span
                                key={language}
                                className="px-4 py-2 bg-white/10 rounded-full text-sm hover:bg-white/20 transition-colors"
                                variants={fadeInUp}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {language}
                            </motion.span>
                        ))}
                    </motion.div>
                </Section>
            </div>
        </div>
    );
}