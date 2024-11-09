import { useRef } from 'react'
import { projectsData } from '../data/Projects'


export function Projects() {
    const scrollContainerRef = useRef<HTMLDivElement>(null)

    return (
        <section className="w-full py-12 relative" id="projects">
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/50 to-zinc-900/80 pointer-events-none" />
            <div className="container px-4 md:px-6 mx-auto relative">
                <h2 className="text-4xl font-bold mb-8 text-white">My Projects</h2>
                <div
                    ref={scrollContainerRef}
                    className="flex gap-4 overflow-x-auto hide-scrollbar snap-x snap-mandatory"
                    style={{
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none'
                    }}
                >
                    {projectsData.map((project) => (
                        <a
                            key={project.name}
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-none w-[300px] group relative snap-start"
                        >
                            <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.name}
                                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                                />
                                <div className="absolute top-2 right-2 p-1 rounded-full bg-zinc-900/80 backdrop-blur-sm">
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                                    </svg>
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/60 to-transparent">
                                    <div className="flex items-center">
                                        <span className="px-2 py-1 rounded text-sm bg-zinc-800/90 text-white">
                                            {project.language}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-2">
                                <h3 className="font-semibold text-lg text-white group-hover:text-blue-400 transition-colors">
                                    {project.name}
                                </h3>
                                <p className="text-sm text-zinc-400 line-clamp-2">
                                    {project.description}
                                </p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}