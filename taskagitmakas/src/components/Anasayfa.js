import React from 'react';
import {Link} from "react-router-dom";
import '../styles/anasayfa.css';
import './Footer'
import tas from '../images/tas.png'
import kagit from '../images/kagit.png'
import makas from '../images/makas.png'
function Anasayfa() {
    return (
        <div className='main'>
            <div className='center2'>
            </div>
            <div className='header'>
                <img src={tas} alt='rock' />
                <img src= {kagit} alt='paper' />
                <img src={makas} alt='scissors' />
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