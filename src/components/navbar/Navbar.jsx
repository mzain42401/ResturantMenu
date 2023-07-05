import React from 'react'
import './navbar.css'
const Navbar = ({ filter, unique }) => {

    return (
        <>
            <nav className='navBar'>
            {
                    unique.map((curElem) => {
                        return(

            <button onClick = {()=>filter(curElem)}>{curElem}</button>
            )
        
    })
}



        </nav >
    </>
  )
}

export default Navbar
