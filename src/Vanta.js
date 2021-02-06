import React, { useState, useEffect, useRef } from 'react'
import Info from "./Info"
import BIRDS from 'vanta/dist/vanta.birds.min'

const VantaJs = (props) => {
    const [vantaEffect, setVantaEffect] = useState(0)
    const myRef = useRef(null)

    useEffect(() => {
        // effects setting
        if (!vantaEffect) {
            setVantaEffect(
                BIRDS({
                    el: myRef.current,
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: 1200.00,
                    minWidth: 1200.00,
                    scale: 1.00,
                    scaleMobile: 1.00,
                    backgroundColor: 0xebeaea,
                    color1: 0x89ff,
                    separation: 85,
                }))
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy()
        }
    }, [vantaEffect])

    // foreground elements
    return <div ref={myRef}>
        <Info />
    </div>
}


export default VantaJs;