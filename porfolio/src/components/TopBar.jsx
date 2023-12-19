// import React from 'react';
import logo from '../assets/images/IYV.png'

function TopBar(){
    return (
        <>
        <nav className='navBar'>
            <div className='containerLogo'>
                <img src={logo} alt="logo" />
            </div>
            <div className='listado'>
                <ul className="listNavBar">
                    <li>
                        <a href="/">Pesronas</a>
                    </li>
                    <li>
                        <a href="/">Paisajes</a>
                    </li>
                    <li>
                        <a href="/">Abstractos</a>
                    </li>
                </ul>
            </div>
            <div>
                <button>Contacto</button>
                <button></button>
            </div>
        </nav>
        </>
    )
    
};

export default TopBar;