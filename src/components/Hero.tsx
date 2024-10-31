import { ArrowDown, Download } from "lucide-react"

export function Hero() {

    function handleClick(){
        const link = document.createElement('a')
        link.href = '/Resume.pdf'
        link.download = 'resume.pdf'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }
    return (
        <div className="flex min-h-screen items-center px-4 py-20" id = "home">
            <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
                <div className="flex flex-col justify-center space-y-8">
                    <div className="flex items-center space-x-2 rounded-full bg-white/10 px-3 py-1.5 w-fit">
                        <span className="flex text-sm text-white/80">
                            <span className="flex w-3 h-3 my-auto mx-1 bg-green-500 rounded-full" />
                            Available for work
                        </span>
                    </div>
                
                    <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                        Something very cool about me
                    </h1>
                
                    <div className="flex flex-wrap gap-4">
                        <button className="inline-flex items-center space-x-2 rounded-full bg-blue-500 px-6 py-3 text-white transition-colors hover:bg-blue-600">
                        <Download className="h-5 w-5" />
                        <span onClick = { handleClick }>Download Résumé</span>
                        </button>
                        <button className="inline-flex items-center space-x-2 rounded-full border border-white/20 px-6 py-3 text-white transition-colors hover:bg-white/10">
                        <span>Scroll down</span>
                        <ArrowDown className="h-5 w-5" />
                        </button>
                    </div>
                </div>
                <div className="relative mx-auto w-full max-w-sm overflow-hidden rounded-xl lg:mx-0 bg-gradient-to-t from-blue-400 to-trasparent">
                    <div className="aspect-square rounded-[32px]">
                        <img
                            src="/logo.png"
                            alt="Portrait"
                            className="h-full w-full object-cover object-center"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}