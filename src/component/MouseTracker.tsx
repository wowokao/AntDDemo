import React, {useState, useEffect} from 'react'

const MouseTracker = () => {
  const [position, setPosition] = useState({x:0, y:0})
  useEffect(() => {
    const updateMouse = (e:MouseEvent) => {
      console.log('inner')
      setPosition({x: e.clientX, y:e.clientY})
    }
    document.addEventListener('click',updateMouse)
    return () => {
      document.removeEventListener('click',updateMouse)
    }
  })
}

export default MouseTracker