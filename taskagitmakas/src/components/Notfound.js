import React from 'react';
import '../styles/notfoundpage.css';

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
                    <p className="description">Kaybolmuşa Benziyorsun.....</p>
                    <div className="back-home">
                        <a href="/">
                            <i className="bi bi-arrow-left"> </i>
                            EVE DÖN
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}