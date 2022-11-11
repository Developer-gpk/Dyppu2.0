import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { LogoDyppu } from 'ui'

export default function Navbar(){
    const [isActive, setIsActive] = useState(false)
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
                    <div className='logo'>
                        <Link href="/#cover" legacyBehavior>
                            <Image src={LogoDyppu} />
                        </Link>
                    </div>
                </nav>
            </div>
        </div>
    )
}