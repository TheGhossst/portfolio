import { Github, Linkedin, FileText } from 'lucide-react';

export function Footer() {
    return (
        <footer className="border-t-2 border-gray-700 py-8 bottom-0 left-0 right-0" id = "contact">
            <div className="container mx-auto px-4">
                <div className="flex justify-center space-x-10">
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
                    <a 
                        href="./Resume.pdf" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex flex-col items-center group"
                    >
                        <FileText className="h-6 w-6 text-gray-400 group-hover:text-white transition-colors duration-200" />
                        <span className="mt-2 text-sm text-gray-400 group-hover:text-white transition-colors duration-200">Résumé</span>
                    </a>
                </div>
            </div>
        </footer>
    );
}

