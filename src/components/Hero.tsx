import { useEffect, useRef, useState } from "react"
import { ArrowDown, ExternalLink } from 'lucide-react'
import { Link } from "react-router-dom"
import { ScratchCard } from './ScratchCard'

export function Hero() {
    const scrollRef = useRef<HTMLDivElement>(null)
    const [isHovering, setIsHovering] = useState(false)
    const [shouldShake, setShouldShake] = useState(false)
    const [finishScratching, setFinishScratching] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in')
                }
            },
            {
                threshold: 0.1
            }
        )

        if (scrollRef.current) {
            observer.observe(scrollRef.current)
        }

        return () => {
            if (scrollRef.current) {
                observer.unobserve(scrollRef.current)
            }
        }
    }, [])

    function handleScroll() {
        const nextSection = document.getElementById('about')
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <div className="flex-1 min-h-fit items-center px-4 py-20 md:container md:mx-auto" id="home">
            <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
                <div className="flex flex-col justify-center space-y-8 animate-fade-in-up">
                    <div className="flex items-center space-x-2 rounded-full bg-white/10 px-3 py-1.5 w-fit hover:bg-white/20 transition-all duration-300 animate-pulse">
                        <span className="flex text-sm text-white/80">
                            <span className="flex w-3 h-3 my-auto mx-1 bg-green-500 rounded-full animate-ping" />
                            Available for work
                        </span>
                    </div>

                    <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl animate-text-gradient bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">
                        Something very cool about me
                    </h1>

                    <div className="flex flex-wrap gap-4">
                        <Link
                            to="/resume"
                            className="inline-flex items-center space-x-2 rounded-full bg-blue-500 px-6 py-3 text-white transition-all duration-300 hover:bg-blue-600 hover:scale-105 hover:shadow-lg"
                        >
                            <ExternalLink className="h-5 w-5" />
                            <span>View Interactive Résumé</span>
                        </Link>
                        <button
                            className="inline-flex items-center space-x-2 rounded-full border border-white/20 px-6 py-3 text-white transition-all duration-300 hover:bg-white/10 hover:scale-105 hover:shadow-lg animate-bounce"
                            onClick={handleScroll}
                        >
                            <span>Scroll down</span>
                            <ArrowDown className="h-5 w-5" />
                        </button>
                    </div>
                </div>
                <div
                    ref={scrollRef}
                    className="relative mx-auto w-full max-w-sm overflow-hidden rounded-xl lg:mx-0 opacity-0 translate-y-4 transition-all duration-700 ease-out "
                    onMouseEnter={() => {
                        if (!shouldShake) {
                            setShouldShake(true)
                            setIsHovering(true)
                        }
                    }}
                    onMouseLeave={() => setIsHovering(false)}
                >
                    <div
                        className={`aspect-square rounded-[32px] ${finishScratching ? '' : 'coin-cursor'} ${isHovering ? 'animate-shake' : ''}`}
                    >
                        <ScratchCard
                            image="/logo.png"
                            width={384}
                            height={384}
                            setFinish={setFinishScratching}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}