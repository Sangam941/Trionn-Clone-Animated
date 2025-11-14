import gsap from 'gsap'
import React, { useRef } from 'react'

const MousePointer = () => {

    const cursor = useRef(null)
    window.addEventListener("mousemove",(e)=>{
        console.log(e.x,e.y)
        gsap.to(cursor.current, {
            x: e.x,
            y: e.y,
        })
    })

  return (
    <div 
    ref={cursor}
    className='h-[30px] w-[30px] rounded-full bg-blue-300 absolute -top-2 z-[999] -left-3'>

    </div>
  )
}

export default MousePointer
