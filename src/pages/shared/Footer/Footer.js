import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="footer footer-center p-10 bg-base-200 text-base-content">
            <div>
                <p>
                    Copyright © {currentYear} - All right reserved by <span className='text-black font-semibold'>Asaduzzaman Asad</span>
                </p>
            </div>
        </footer>
    );
};

export default Footer;