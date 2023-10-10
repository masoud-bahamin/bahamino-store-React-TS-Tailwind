import React, { useEffect } from 'react'
import "./Animations.css"

type AnimationDivProps = {
    children: React.ReactNode;
    position: "right" | "left"
}

function AnimationDiv({ children, position }: AnimationDivProps) {

    const [isAnimated, setIsAnimated] = React.useState(false)

    const divElement = React.useRef<HTMLDivElement>(null)

    useEffect(() => {

        const animationHandler = () => {
            if (divElement.current) {
                if ((window.scrollY + window.innerHeight) / 2 > (divElement.current.offsetTop / 2)) setIsAnimated(true)
            }

        }

        window.addEventListener("load", animationHandler)
        window.addEventListener("scroll", animationHandler)

        return () => {
            window.removeEventListener("load", animationHandler)
            window.removeEventListener("scroll", animationHandler)
        }

    }, [])

    const className = ` transition-all duration-1000 ${position === "right" ? " translate-x-[2500px]" : " -translate-x-[2500px]"} animation-container ${isAnimated ? "animated" : ""} `

    return (
        <div ref={divElement}
            className={className}>
            {children}
        </div>
    )
}

export default AnimationDiv