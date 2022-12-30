import React from 'react';
function Footer() {
    const footerStyles = {
        position: 'fixed',
        bottom: '0',
        left: '0',
        right: '0',
        backgroundColor: '#333',
        color: '#fff',
        textAlign: 'center',
        padding: '15px'
    };

    return (
        <footer style={footerStyles}>
            <p>Samet Barut 1030510398</p>
        </footer>
    );
}

export default Footer;