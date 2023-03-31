import React from 'react'
import insta from './icons/insta.png'
import camere from './icons/camera.png'
import { Link } from 'react-router-dom'

const Header = () =>{
    return(
        <div className='doc-head'>
        <div className='logo'>
            <span><img className='insta-pic' src={insta}/></span>
            <span><h2 className='insta-text'>Instagram</h2></span>
        </div>
        <Link to="/createpost"><div><span><img className='camera-pic' src={camere}/></span> </div></Link>
        </div>
    )
}
export default Header