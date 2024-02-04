'use client'

import React, { useState } from 'react'

import MyButton from './Button'

const HOME = 'HOME'
const PORTFOLIO = 'PORTFOLIO'
const BLOGS = 'BLOGS'

function Navbar(){
    const [activeMenu, setActiveMenu] = useState('HOME')

    const onMenuClicked = (menu) =>{
        setActiveMenu(menu)
    }

    return(
        <div className='my-navbar' style={{ height: '65px', width: '100%', backgroundColor: 'transparent'}}> 
        {/* <div className='my-navbar' style={{ height: '65px', width: '100%', backgroundColor: '#0D9276'}}>  */}
            <nav>
                <ul>
                    <li>
                        <MyButton text={HOME} isActive={activeMenu === HOME} onClick={()=> onMenuClicked(HOME)} />
                    </li>
                    <li>
                        <MyButton text={PORTFOLIO} isActive={activeMenu === PORTFOLIO} onClick={()=> onMenuClicked(PORTFOLIO)} />
                    </li>
                    <li>
                        <MyButton text={BLOGS} isActive={activeMenu === BLOGS} onClick={()=> onMenuClicked(BLOGS)} />
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar