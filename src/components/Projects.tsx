import { useGitHubProjects } from '../hooks/GitHubProjects'
import { ProjectCard } from './ProjectCard'

export function Projects() {
    const { projects, loading, error } = useGitHubProjects('TheGhossst')

    if (loading) {
        return (
            <div className="w-full py-12">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="animate-pulse">Loading projects...</div>
                </div>
            </div>
        )
    }

    if (error) {
        return (
            <div className="w-full py-12">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="text-red-500">Error loading projects: {error.message}</div>
                </div>
            </div>
        )
    }

    return (
        <section className="w-full py-12 relative" id="projects">
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/50 to-zinc-900/80 pointer-events-none" />
            <div className="container px-4 md:px-6 mx-auto relative">
                <h2 className="text-4xl font-bold mb-8 text-white">My Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.name}
                            name={project.name}
                            url={project.url}
                            openGraphImageUrl={project.openGraphImageUrl}
                        />
                    ))}
                </div>
                <p className='mt-2 text-end'>Fetched via GitHub api</p>
            </div>
        </section>
    )
}

