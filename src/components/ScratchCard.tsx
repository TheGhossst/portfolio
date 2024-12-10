import React, { useRef, useEffect, useState, useCallback } from 'react'

interface ScratchCardProps {
    image: string
    width: number
    height: number
    setFinish: (boolean: boolean) => void
}

export function ScratchCard({ image, width, height, setFinish }: ScratchCardProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const [isRevealed, setIsRevealed] = useState(false)
    const [isDrawing, setIsDrawing] = useState(false)
    const [showMessage, setShowMessage] = useState(false)
    const lastPointRef = useRef<{ x: number; y: number } | null>(null)
    const imageRef = useRef<HTMLImageElement | null>(null)

    useEffect(() => {
        const img = new Image()
        img.src = image
        img.crossOrigin = "anonymous"
        img.onload = () => {
            imageRef.current = img
            initCanvas()
        }

        return () => {
            if (imageRef.current) {
                imageRef.current = null
            }
        }
    }, [image])

    const initCanvas = () => {
        const canvas = canvasRef.current
        const ctx = canvas?.getContext('2d')
        if (!ctx) return

        ctx.fillStyle = '#1a1a1a'
        ctx.fillRect(0, 0, width, height)

        ctx.font = 'bold 24px Arial'
        ctx.fillStyle = '#ffffff'
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.fillText('Scratch here!', width / 2, height / 2)

        ctx.strokeStyle = '#ffffff'
        ctx.lineWidth = 2
        ctx.setLineDash([5, 5])
        ctx.strokeRect(20, 20, width - 40, height - 40)
    }

    const scratch = (x: number, y: number) => {
        const canvas = canvasRef.current
        const ctx = canvas?.getContext('2d')
        if (!ctx || !isDrawing) return

        ctx.globalCompositeOperation = 'destination-out'
        ctx.lineWidth = 40
        ctx.lineCap = 'round'
        ctx.lineJoin = 'round'

        if (lastPointRef.current) {
            ctx.beginPath()
            ctx.moveTo(lastPointRef.current.x, lastPointRef.current.y)
            ctx.lineTo(x, y)
            ctx.stroke()
        }

        lastPointRef.current = { x, y }

        const imageData = ctx.getImageData(0, 0, width, height)
        const pixelsRevealed = imageData.data.filter((_, i) => i % 4 === 3 && imageData.data[i] === 0).length
        const percentRevealed = (pixelsRevealed / (width * height)) * 100

        if (percentRevealed > 40 && !isRevealed) {
            setIsRevealed(true)
            setShowMessage(true)
            clearCanvas()
            setFinish(true)
        }
    }

    const clearCanvas = () => {
        const canvas = canvasRef.current
        const ctx = canvas?.getContext('2d')
        if (!ctx) return

        ctx.clearRect(0, 0, width, height)
    }

    const handleStart = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
        setIsDrawing(true)
        const canvas = canvasRef.current
        if (!canvas) return

        const rect = canvas.getBoundingClientRect()
        const x = 'touches' in e
            ? e.touches[0].clientX - rect.left
            : e.clientX - rect.left
        const y = 'touches' in e
            ? e.touches[0].clientY - rect.top
            : e.clientY - rect.top

        lastPointRef.current = { x, y }
        scratch(x, y)
    }

    const handleMove = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
        if (!isDrawing) return

        const canvas = canvasRef.current
        if (!canvas) return

        const rect = canvas.getBoundingClientRect()
        const x = 'touches' in e
            ? e.touches[0].clientX - rect.left
            : e.clientX - rect.left
        const y = 'touches' in e
            ? e.touches[0].clientY - rect.top
            : e.clientY - rect.top

        scratch(x, y)
    }

    const handleEnd = () => {
        setIsDrawing(false)
        lastPointRef.current = null
    }

    const hideMessage = useCallback(() => {
        setShowMessage(false)
    }, [])

    useEffect(() => {
        let timer: ReturnType<typeof setTimeout>
        if (showMessage) {
            timer = setTimeout(hideMessage, 4000)
        }
        return () => {
            if (timer) clearTimeout(timer)
        }
    }, [showMessage, hideMessage])

    return (
        <div className="relative w-full h-full group">
            <img
                src={image}
                alt="Hidden"
                className="absolute top-0 left-0 w-full h-full object-cover rounded-[32px] select-none"
                style={{
                    WebkitUserSelect: 'none',
                    MozUserSelect: 'none',
                    msUserSelect: 'none',
                    userSelect: 'none',
                    pointerEvents: 'none'
                }}
            />
            <canvas
                ref={canvasRef}
                width={width}
                height={height}
                className="absolute top-0 left-0 touch-none rounded-[32px] transition-all duration-300 group-hover:shadow-lg"
                onMouseDown={handleStart}
                onMouseMove={handleMove}
                onMouseUp={handleEnd}
                onMouseLeave={handleEnd}
                onTouchStart={handleStart}
                onTouchMove={handleMove}
                onTouchEnd={handleEnd}
            />
            {showMessage && (
                <div className="absolute bottom-4 left-0 right-0 mx-auto w-max text-center bg-green-500 text-white py-2 px-6 rounded-full transform transition-all duration-500 animate-bounce-in">
                    You revealed it! 🎉
                </div>
            )}
        </div>
    )
}