import React from 'react';
import './notfoundpage.css';

export default function App() {
    return (
        <div className="container">
            <div className="row">
                <div className="col col-1">
                    <img
                        className="image"
                        src="https://res.cloudinary.com/dloekv0xp/image/upload/v1669370186/assets/rocket_sohfru.jpg"
                        width="100%"
                    />
                </div>
                <div className="col col-2">
                    <p className="_404-text"> 404 </p>
                    <p className="description">Seems like you got lost</p>
                    <div className="back-home">
                        <a href="/">
                            <i className="bi bi-arrow-left"> </i>
                            BACK HOME
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}