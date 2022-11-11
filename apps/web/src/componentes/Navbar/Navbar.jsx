import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { LogoDyppu } from 'ui'

export default function Navbar(){
    const [isActive, setIsActive] = useState(false)
    const toTop = () => {
        window.scroll({
          top: 0,
          left: 0,
          behavior: "smooth"
        })
    }
    const chageBackground = () =>{
        if(window.scrollY >= 80){
            setIsActive(true)
        } else {
            setIsActive(false)
        }
    }
    useEffect(() => {
        chageBackground()
        window.addEventListener('scroll', chageBackground)
    })
    return(
        <div className={`navigation ${isActive ? 'isScroll' : ''}`}>
            <div className='holder'>
                <nav className='navbar-custom'>
                    <div className='logo' onClick={toTop}>
                        
                            <button onClick={toTop}>
                                <Image src={LogoDyppu} />
                            </button>
                        
                    </div>
                </nav>
            </div>
        </div>
    )
}