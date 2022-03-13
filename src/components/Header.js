import React, { Profiler } from 'react';
import HeaderButton from './layouts/HeaderButton'
import { header } from '../profile'

const Header = () => {

    const scrollTo = () => {
        window.scrollTo({
            top: 100000,
            left: 0,
            behavior: "smooth"
        })
    }

    const toggleDarkMode = (e) =>  {
        document.documentElement.classList.toggle('dark-mode')
        document.getElementById('not-dark').classList.toggle('inverse-dark')
        document.getElementById('not-dark2').classList.toggle('inverse-dark')
        var x = document.getElementsByClassName('img-pro')
        for(let i = 0; i < x.length; i += 1) {
            x.item(i).classList.toggle("inverse-dark");
        }
        
        if (document.documentElement.classList.contains('dark-mode'))
          localStorage.setItem('mode', 'Dark')
        else
          localStorage.setItem('mode', 'Light')
        }

    return (
        <div className="parallax">
        <div>
            <div className="Header">
            <label className="switch">
                <input id="mode-switch" onClick={e => toggleDarkMode(e)} type="checkbox"/>
                <span className="slider round"></span>
            </label>
                <h1>{ `I_am${header.name}` }</h1>
            <p className="line-1 anim-typewriter">portfolio.loaded(true);</p>
            
            <HeaderButton/>
            <div onClick={scrollTo} className="gtp">Contact</div>
            </div>
            
            {/* <img id="not-dark" onClick={scrollTo} className="gtp" src="" alt="Contact Me" title="Contact Me" >
            </img> */}
        </div>
        </div>
    )
    
}

export default Header;