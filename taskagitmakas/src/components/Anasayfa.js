import React from 'react';
import {Link} from "react-router-dom";
import './anasayfa.css';
import Navbar from "./Navbar";


function Anasayfa() {
    return (
        <div className='main'>
            <div className='center2'>
                <h1> TAŞ KAĞIT MAKAS </h1>
            </div>
            <div className='header'>
                <img src= "tas.png" alt='rock' />
                <img src= "kagit.png" alt='paper' />
                <img src="makas.png" alt='scissors' />
            </div>
            <div className='buttom'>
                <button>
                    {' '}
                    <Link
                        to='/Oyna'
                        className='press'
                        style={{
                            color: 'black',
                            textDecoration: 'none',
                            fontSize: '20px',
                        }}
                    >
                        OYNAMAYA BAŞLA
                    </Link>{' '}
                </button>
                <button>
                    {' '}
                    <Link
                        to='/Oyna'
                        className='press'
                        style={{
                            color: 'red',
                            textDecoration: 'none',
                            fontSize: '20px',
                        }}
                    >
                        OYNAMAYA BAŞLA
                    </Link>{' '}
                </button>
                <div className='center'>
                    <h1> Samet BARUT</h1>
                    <h2> 1030510398</h2>
                </div>
            </div>
        </div>
    );
}
export default Anasayfa;