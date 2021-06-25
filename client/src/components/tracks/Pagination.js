import React,{ useState,useContext } from 'react'
import {GlobalContext} from '../../context/GlobalState'
import bootstrap from 'react-bootstrap'


export const Pagination = (props) => {
    return (
            
            <nav className="text-center col-md-6">
                <ul className='pagination'>
                    {props.pageNumbers.map( number=>(
                    <li key={ number } className = 'page-item'>
                        <a onClick={ ()=>props.paginate(number) }href='#' className='page-link' >{number}</a>
                    </li>   
                    ))}

                </ul>
            
            </nav>
    )
}
