interface ProjectCardProps {
    name: string
    url: string
    openGraphImageUrl: string
}

export function ProjectCard({ name, url, openGraphImageUrl }: ProjectCardProps) {
    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-zinc-900/50 rounded-lg overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-colors"
        >
            <div className="relative aspect-[16/9] w-full">
                <img
                    src={openGraphImageUrl}
                    alt={name}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-2 right-2 p-1.5 rounded-full bg-zinc-900/80 backdrop-blur-sm">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                    </svg>
                </div>
            </div>
            <div className="p-4 flex flex-col justify-between h-full">
                <h3 className="font-semibold text-lg text-white group-hover:text-blue-400 transition-colors">
                    {name}
                </h3>             
            </div>
        </a>
    )
}

