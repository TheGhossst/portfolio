import { useEffect, useRef } from 'react'

interface PathNode {
  title: string
  description: string
  year: string
}

const lifePathData: PathNode[] = [
    {
        title: "High School",
        description: "Discovered passion for technology and programming",
        year: "2019"
    },
    {
        title: "University",
        description: "Started Computer Science degree, focused on cybersecurity and web development",
        year: "2021"
    },
    {
        title: "Internship",
        description: "Gained real-world experience in Cybersecurity",
        year: "2022"
    },
    {
        title: "First Project",
        description: "Built my first full-stack web application",
        year: "2023"
    },
    {
        title: "Present",
        description: "Working on exciting projects and continuous learning",
        year: "2024"
    }
]

export function LifePath() {
  const observerRef = useRef<IntersectionObserver | null>(null)
  
    useEffect(() => {
        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-in')
                    }
                })
            },
            {
                threshold: 0.1,
                rootMargin: '50px'
            }
        )

        const elements = document.querySelectorAll('.path-node')
        elements.forEach((el) => observerRef.current?.observe(el))

        return () => observerRef.current?.disconnect()
    }, [])

    return (
        <section className="w-full py-24 relative" id = "journey">
            <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 to-zinc-900/80 pointer-events-none" />
            <div className="container px-4 md:px-6 mx-auto relative">
                <h2 className="text-4xl font-bold text-center mb-16 text-white">My Journey</h2>
                <div className="relative max-w-6xl mx-auto">
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-blue-500/50 to-purple-500/50 hidden md:block" />
                
                    {lifePathData.map((node, index) => (
                        <div
                            key={node.title}
                            className={`path-node opacity-0 translate-y-4 transition-all duration-700 ease-out flex items-center mb-16 ${
                                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                            } flex-col`}
                            style={{
                                transitionDelay: `${index * 200}ms`
                            }}
                        >
                            <div className={`w-full md:w-[calc(50%-1rem)] relative group`}>
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg blur-xl transition-opacity group-hover:opacity-100 opacity-0" />
                                <div className="relative bg-zinc-800/90 backdrop-blur-sm rounded-lg p-6 border border-white/10 shadow-xl transition-all duration-300 hover:shadow-purple-500/10 hover:border-purple-500/20">
                                    <div className="flex justify-between items-center mb-4">
                                        <h3 className="font-bold text-xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                            {node.title}
                                        </h3>
                                        <span className="text-sm text-zinc-400 font-mono">{node.year}</span>
                                    </div>
                                    <p className="text-zinc-300">{node.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}