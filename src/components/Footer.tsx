import { Github, Linkedin, FileText, ArrowUp } from 'lucide-react';
import { Link } from "react-router-dom"

export function Footer() {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <footer className="border-t-2 border-gray-700 py-8 bottom-0 left-0 right-0" id="contact">
            <div className="container mx-auto px-4">
                <div className="flex justify-center relative space-x-10">
                    <a
                        href="https://github.com/TheGhossst"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center group"
                    >
                        <Github className="h-6 w-6 text-gray-400 group-hover:text-white transition-colors duration-200" />
                        <span className="mt-2 text-sm text-gray-400 group-hover:text-white transition-colors duration-200">GitHub</span>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/nandu-krishna-m-3431a6247/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center group"
                    >
                        <Linkedin className="h-6 w-6 text-gray-400 group-hover:text-white transition-colors duration-200" />
                        <span className="mt-2 text-sm text-gray-400 group-hover:text-white transition-colors duration-200">LinkedIn</span>
                    </a>
                    <Link to="/resume" className='flex flex-col items-center group'>
                        <FileText className="h-6 w-6 text-gray-400 group-hover:text-white transition-colors duration-200" />
                        <span className="mt-2 text-sm text-gray-400 group-hover:text-white transition-colors duration-200">Résumé</span>
                    </Link>
                    <button
                        onClick={scrollToTop}
                        className="ml-auto text-white p-2 absolute bottom-2 right-0"
                    >
                        <ArrowUp className="h-6 w-6" />
                    </button>
                </div>
            </div>
        </footer>
    );
}