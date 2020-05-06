import React from 'react'
import './Loader.scss'

export const Loader: React.FC = () =>{
    return(
        <div className='loader'>
            <div className='loader__item-1'></div>
            <div className='loader__item-2'></div>
            <div className='loader__item-3'></div>
            <div className='loader__item-4'></div>
            <div className='loader__item-5'></div>
        </div>
    )
}