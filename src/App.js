import React, { useState, useEffect, useRef } from 'react'
import BIRDS from 'vanta/dist/vanta.birds.min'

const MyComponent = (props) => {
  const [vantaEffect, setVantaEffect] = useState(0)
  const myRef = useRef(null)

  useEffect(() => {
    // effects setting
    if (!vantaEffect) {
      setVantaEffect(BIRDS({
        el: myRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        backgroundColor: 0xebeaea,
        color1: 0x89ff,
        separation: 85
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  // foreground elements
  return <div ref={myRef}>
    <h1 style={{ color: "white" }}>Hi there</h1>
  </div>
}

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h1>Hi there</h1>
        <MyComponent />
      </div>
    </div>
  );
}

export default App;
