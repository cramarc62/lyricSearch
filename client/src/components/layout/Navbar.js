import React, {useContext}from 'react'
import {Link} from 'react-router-dom'
import {GlobalContext} from '../../context/GlobalState'

export const Navbar = () => {
    //const {loadData}=useContext(GlobalContext)
    return (
        <nav className='navbar navbar-dark bg-dark mb-5'>
            <Link  to="/" className='navbar-brand h1 mx-auto'>Lyric Search</Link>
        </nav>
    )
}
