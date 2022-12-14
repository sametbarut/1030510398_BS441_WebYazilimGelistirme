import React from 'react';
import {Link} from "react-router-dom";
import './anasayfa.css';
import './Footer'
import Footer from "./Footer";


function Anasayfa() {
    return (
        <div className='main'>
            <div className='center2'>
            </div>
            <div className='header'>
                <img src= "tas.png" alt='rock' />
                <img src= "kagit.png" alt='paper' />
                <img src="makas.png" alt='scissors' />
            </div>
            <br/>
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
                        Oynama Başla
                    </Link>{' '}
                </button>
                <p></p>
                <button>
                    {' '}
                    <Link
                        to='/ZamanaKarsi'
                        className='press'
                        style={{
                            color: 'black',
                            textDecoration: 'none',
                            fontSize: '20px',
                        }}
                    >
                        Zamana Karşı Oyna
                    </Link>{' '}
                </button>
                <div className='center'>
                </div>
            </div>
        </div>
    );
}
export default Anasayfa;