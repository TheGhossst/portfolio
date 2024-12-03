import { ArrowLeft, Mail, Phone, MapPin, Github, Linkedin, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

export function InteractiveResume() {
    const certificates = [
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

    return (
        <div className="min-h-screen bg-transparent text-white/90">
            <div className="max-w-4xl mx-auto py-8 px-4">
                <Link
                    to="/"
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8 transition-colors"
                >
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    <span>Back to Home</span>
                </Link>

                <header className="mb-12">
                    <h1 className="text-5xl font-bold mb-2">Nandu Krishna M</h1>
                    <p className="text-xl text-white/70">CS Student</p>
                </header>

                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
                    <div className="flex flex-wrap gap-6 text-white/70">
                        <div className="flex items-center space-x-2">
                            <Mail className="h-5 w-5" />
                            <span>nandukrishnapkm97@gmail.com</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Phone className="h-5 w-5" />
                            <span>(+91) 8547673580</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <MapPin className="h-5 w-5" />
                            <span>Trivandrum, Kerala, India</span>
                        </div>
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">Profiles</h2>
                    <div className="flex flex-wrap gap-6 text-white/70">
                        <a href="https://github.com/TheGhossst" className="flex items-center space-x-2 hover:text-blue-300 transition-colors">
                            <Github className="h-5 w-5" />
                            <span>TheGhossst</span>
                        </a>
                        <a href="https://linkedin.com/in/nandu-krishna-m" className="flex items-center space-x-2 hover:text-blue-300 transition-colors">
                            <Linkedin className="h-5 w-5" />
                            <span>Nandu Krishna M</span>
                        </a>
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">Summary</h2>
                    <p className="text-white/70">
                        Hey there! I'm Nandu Krishna M, a Computer Science and Engineering student with a
                        passion for cybersecurity and coding. I've dipped my toes into some cool internships,
                        where I got to play around with tools like aircrack-ng and hydra. I'm pretty comfortable with
                        a bunch of programming languages and frameworks, and I've got some nifty certifications
                        under my belt too.
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-6">Experience</h2>
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-xl font-medium mb-1">Digital Forensics Intern</h3>
                            <p className="text-white/70 mb-2">CFSS | March 2024 - April 2024 | Remote</p>
                            <ul className="list-disc list-inside text-white/70 space-y-1">
                                <li>Used aircrack-ng to analyze pcap files and identify security vulnerabilities.</li>
                                <li>Intercepted communication messages and analyzed potential security threats.</li>
                                <li>Employed techniques like LSB steganography and digital watermarking to detect hidden information.</li>
                                <li>Used specialized tools to uncover and analyze steganographic data.</li>
                                <li>Analyzed audio files with Python to extract hidden messages.</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-medium mb-1">Penetration Testing Intern</h3>
                            <p className="text-white/70 mb-2">CFSS | November 2023 - December 2023 | Remote</p>
                            <ul className="list-disc list-inside text-white/70 space-y-1">
                                <li>Conducted Vulnerability Assessments and Penetration Tests.</li>
                                <li>Utilized tools like curl for HTTP requests and hydra for password brute-forcing.</li>
                                <li>Exploited vulnerabilities in systems and applications for hands-on security assessments.</li>
                                <li>Mastered tools like nikto for web server scanning and netdiscover for network scanning.</li>
                                <li>Gained proficiency in using nc for reverse shell execution and pty.spawn for acquiring a full TTY shell.</li>
                                <li>Bypassed multiple security measures and captured flags in various CTF challenges.</li>
                                <li>Gained root access on vulnerable systems through privilege escalation techniques.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">Education</h2>
                    <div>
                        <h3 className="text-xl font-medium mb-1">B.Tech in Computer Science and Engineering</h3>
                        <p className="text-white/70">MAR BASELIOS COLLEGE OF ENGINEERING AND TECHNOLOGY | November 2021 - Present</p>
                        <p className="text-white/70">CGPA: 8.93</p>
                        <a href="https://mbcet.ac.in" className="text-blue-400 hover:text-blue-300 transition-colors">https://mbcet.ac.in</a>
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">Projects</h2>
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-xl font-medium mb-1">E-VOTING USING BLOCKCHAIN</h3>
                            <p className="text-white/70 mb-2">Present</p>
                            <p className="text-white/70 mb-2">Next.js, Solidity, Firebase</p>
                            <a href="https://e-voting-6r0guloem-hipster16s-projects.vercel.app" className="text-blue-400 hover:text-blue-300 transition-colors">Project Link</a>
                            <ul className="list-disc list-inside text-white/70 space-y-1 mt-2">
                                <li>Developed a secure and transparent e-voting system for college-level elections using blockchain technology.</li>
                                <li>Implemented the system to ensure the integrity and immutability of votes, providing a trustless and decentralized voting platform.</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-medium mb-1">TuneTagger</h3>
                            <p className="text-white/70 mb-2">October 2024</p>
                            <p className="text-white/70 mb-2">React, Node.js</p>
                            <a href="https://tunetagger.netlify.app" className="text-blue-400 hover:text-blue-300 transition-colors">Project Link</a>
                            <p className="text-white/70 mt-2">
                                TuneTagger is a powerful and easy-to-use tool that allows you to personalize your audio files
                                with your own creative flair. You can modify file name, artist name, album name, and cover image.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-medium mb-1">TabTracker</h3>
                            <p className="text-white/70 mb-2">August 2024</p>
                            <p className="text-white/70 mb-2">HTML, CSS, JavaScript, Firebase</p>
                            <a href="https://github.com/TheGhossst/TabTracker" className="text-blue-400 hover:text-blue-300 transition-colors">GitHub Repository</a>
                            <p className="text-white/70 mt-2">
                                TabTracker is a handy browser extension that helps you save and manage your important links in one place.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">Skills</h2>
                    <div className="space-y-4">
                        <div>
                            <h3 className="text-lg font-medium mb-2">Programming Languages</h3>
                            <div className="flex flex-wrap gap-2">
                                {progSkills.map((skill) => (
                                    <span key={skill} className="px-3 py-1 bg-white/10 rounded-full text-sm hover:bg-white/20 transition-colors">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-medium mb-2">Libraries/Frameworks</h3>
                            <div className="flex flex-wrap gap-2">
                                {libSkills.map((skill) => (
                                    <span key={skill} className="px-3 py-1 bg-white/10 rounded-full text-sm hover:bg-white/20 transition-colors">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-medium mb-2">Tools / Platforms</h3>
                            <div className="flex flex-wrap gap-2">
                                {toolSkills.map((skill) => (
                                    <span key={skill} className="px-3 py-1 bg-white/10 rounded-full text-sm hover:bg-white/20 transition-colors">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-medium mb-2">Databases</h3>
                            <div className="flex flex-wrap gap-2">
                                {dbSkills.map((skill) => (
                                    <span key={skill} className="px-3 py-1 bg-white/10 rounded-full text-sm hover:bg-white/20 transition-colors">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">Certifications</h2>
                    <div className="space-y-4">
                        {certificates.map((cert, index) => (
                            <div key={index} className="flex items-center space-x-2">
                                <Award className="h-5 w-5 text-white/70" />
                                <span className="text-white/90">{cert.name}</span>
                                <span className="text-white/70">|</span>
                                <span className="text-white/70">{cert.issuer}</span>
                                <span className="text-white/70">|</span>
                                <span className="text-white/70">{cert.date}</span>
                            </div>
                        ))}
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">Languages</h2>
                    <div className="flex flex-wrap gap-4">
                        {languages.map((language) => (
                            <span
                                key={language}
                                className="px-4 py-2 bg-white/10 rounded-full text-sm hover:bg-white/20 transition-colors"
                            >
                                {language}
                            </span>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}