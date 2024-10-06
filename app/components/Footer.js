"use client";
import React, { useState } from 'react';
import styles from './Footer.module.css'; // Ensure you have this CSS module

const Footer = () => {
    const [isMettaMuseOpen, setMettaMuseOpen] = useState(false);
    const [isQuickLinksOpen, setQuickLinksOpen] = useState(false);
    const [isFollowUsOpen, setFollowUsOpen] = useState(false);

    const toggleMettaMuse = () => setMettaMuseOpen(!isMettaMuseOpen);
    const toggleQuickLinks = () => setQuickLinksOpen(!isQuickLinksOpen);
    const toggleFollowUs = () => setFollowUsOpen(!isFollowUsOpen);

    return (
        <footer className={styles.footer}>
            <div className={styles.upperSection}>
                <div className={styles.leftPortion}>
                    <h3>BE THE FIRST TO KNOW</h3>
                    <p>Sign up for updates from mettã muse.</p>
                    <div className={styles.emailContainer}>
                        <input type="email" placeholder="Enter your e-mail..." className={styles.emailInput} />
                        <button className={styles.subscribeButton}>SUBSCRIBE</button>
                    </div>
                </div>
                <div className={styles.rightPortion}>
                    <h3>CONTACT US</h3>
                    <p>+44 221 133 5360</p>
                    <p>customercare@mettamuse.com</p>
                    <label htmlFor="currencySelect">CURRENCY:</label>
                    <select id="currencySelect" className={styles.currencySelect}>
                        <option value="usd">+ USD</option>
                        <option value="eur">€ EUR</option>
                        <option value="gbp">£ GBP</option>
                    </select>
                    <p className={styles.currencyNote}>Transactions will be completed in Euros and a currency reference is available on hover.</p>
                </div>
            </div>
            <hr className={styles.separator} />
            <div className={styles.lowerSection}>
                <div className={styles.lowerLeft}>
                    <h3 onClick={toggleMettaMuse} className={styles.dropdownToggle}>
                        mettã muse <span className={styles.downArrow}>{isMettaMuseOpen ? '▲' : '▼'}</span>
                    </h3>
                    {(isMettaMuseOpen || window.innerWidth > 768) && (
                        <ul>
                            <li>About Us</li>
                            <li>Stories</li>
                            <li>Artisans</li>
                            <li>Boutiques</li>
                            <li>Contact Us</li>
                            <li>EU Compliances Docs</li>
                        </ul>
                    )}
                </div>
                <div className={styles.lowerCenter}>
                    <h3 onClick={toggleQuickLinks} className={styles.dropdownToggle}>
                        QUICK LINKS <span className={styles.downArrow}>{isQuickLinksOpen ? '▲' : '▼'}</span>
                    </h3>
                    {(isQuickLinksOpen || window.innerWidth > 768) && (
                        <ul>
                            <li>Orders & Shipping</li>
                            <li>Join/Login as a Seller</li>
                            <li>Payment & Pricing</li>
                            <li>Return & Refunds</li>
                            <li>FAQS</li>
                            <li>Privacy Policy</li>
                            <li>Terms & Conditions</li>
                        </ul>
                    )}
                </div>
                <div className={styles.lowerRight}>
                    <h3 onClick={toggleFollowUs} className={styles.dropdownToggle}>
                        FOLLOW US <span className={styles.downArrow}>{isFollowUsOpen ? '▲' : '▼'}</span>
                    </h3>
                    {(isFollowUsOpen || window.innerWidth > 768) && (
                        <div>
                            <div className={styles.socialIcons}>
                                <span><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="70" height="50" viewBox="0 0 48 48">
<path fill="#304ffe" d="M41.67,13.48c-0.4,0.26-0.97,0.5-1.21,0.77c-0.09,0.09-0.14,0.19-0.12,0.29v1.03l-0.3,1.01l-0.3,1l-0.33,1.1 l-0.68,2.25l-0.66,2.22l-0.5,1.67c0,0.26-0.01,0.52-0.03,0.77c-0.07,0.96-0.27,1.88-0.59,2.74c-0.19,0.53-0.42,1.04-0.7,1.52 c-0.1,0.19-0.22,0.38-0.34,0.56c-0.4,0.63-0.88,1.21-1.41,1.72c-0.41,0.41-0.86,0.79-1.35,1.11c0,0,0,0-0.01,0 c-0.08,0.07-0.17,0.13-0.27,0.18c-0.31,0.21-0.64,0.39-0.98,0.55c-0.23,0.12-0.46,0.22-0.7,0.31c-0.05,0.03-0.11,0.05-0.16,0.07 c-0.57,0.27-1.23,0.45-1.89,0.54c-0.04,0.01-0.07,0.01-0.11,0.02c-0.4,0.07-0.79,0.13-1.19,0.16c-0.18,0.02-0.37,0.03-0.55,0.03 l-0.71-0.04l-3.42-0.18c0-0.01-0.01,0-0.01,0l-1.72-0.09c-0.13,0-0.27,0-0.4-0.01c-0.54-0.02-1.06-0.08-1.58-0.19 c-0.01,0-0.01,0-0.01,0c-0.95-0.18-1.86-0.5-2.71-0.93c-0.47-0.24-0.93-0.51-1.36-0.82c-0.18-0.13-0.35-0.27-0.52-0.42 c-0.48-0.4-0.91-0.83-1.31-1.27c-0.06-0.06-0.11-0.12-0.16-0.18c-0.06-0.06-0.12-0.13-0.17-0.19c-0.38-0.48-0.7-0.97-0.96-1.49 c-0.24-0.46-0.43-0.95-0.58-1.49c-0.06-0.19-0.11-0.37-0.15-0.57c-0.01-0.01-0.02-0.03-0.02-0.05c-0.1-0.41-0.19-0.84-0.24-1.27 c-0.06-0.33-0.09-0.66-0.09-1c-0.02-0.13-0.02-0.27-0.02-0.4l1.91-2.95l1.87-2.88l0.85-1.31l0.77-1.18l0.26-0.41v-1.03 c0.02-0.23,0.03-0.47,0.02-0.69c-0.01-0.7-0.15-1.38-0.38-2.03c-0.22-0.69-0.53-1.34-0.85-1.94c-0.38-0.69-0.78-1.31-1.11-1.87 C14,7.4,13.66,6.73,13.75,6.26C14.47,6.09,15.23,6,16,6h16c4.18,0,7.78,2.6,9.27,6.26C41.43,12.65,41.57,13.06,41.67,13.48z"></path><path fill="#4928f4" d="M42,16v0.27l-1.38,0.8l-0.88,0.51l-0.97,0.56l-1.94,1.13l-1.9,1.1l-1.94,1.12l-0.77,0.45 c0,0.48-0.12,0.92-0.34,1.32c-0.31,0.58-0.83,1.06-1.49,1.47c-0.67,0.41-1.49,0.74-2.41,0.98c0,0,0-0.01-0.01,0 c-3.56,0.92-8.42,0.5-10.78-1.26c-0.66-0.49-1.12-1.09-1.32-1.78c-0.06-0.23-0.09-0.48-0.09-0.73v-7.19 c0.01-0.15-0.09-0.3-0.27-0.45c-0.54-0.43-1.81-0.84-3.23-1.25c-1.11-0.31-2.3-0.62-3.3-0.92c-0.79-0.24-1.46-0.48-1.86-0.71 c0.18-0.35,0.39-0.7,0.61-1.03c1.4-2.05,3.54-3.56,6.02-4.13C14.47,6.09,15.23,6,16,6h10.8c5.37,0.94,10.32,3.13,14.47,6.26 c0.16,0.39,0.3,0.8,0.4,1.22c0.18,0.66,0.29,1.34,0.32,2.05C42,15.68,42,15.84,42,16z"></path><path fill="#6200ea" d="M42,16v4.41l-0.22,0.68l-0.75,2.33l-0.78,2.4l-0.41,1.28l-0.38,1.19l-0.37,1.13l-0.36,1.12l-0.19,0.59 l-0.25,0.78c0,0.76-0.02,1.43-0.07,2c-0.01,0.06-0.02,0.12-0.02,0.18c-0.06,0.53-0.14,0.98-0.27,1.36 c-0.01,0.06-0.03,0.12-0.05,0.17c-0.26,0.72-0.65,1.18-1.23,1.48c-0.14,0.08-0.3,0.14-0.47,0.2c-0.53,0.18-1.2,0.27-2.02,0.32 c-0.6,0.04-1.29,0.05-2.07,0.05H31.4l-1.19-0.05L30,37.61l-2.17-0.09l-2.2-0.09l-7.25-0.3l-1.88-0.08h-0.26 c-0.78-0.01-1.45-0.06-2.03-0.14c-0.84-0.13-1.49-0.35-1.98-0.68c-0.7-0.45-1.11-1.11-1.35-2.03c-0.06-0.22-0.11-0.45-0.14-0.7 c-0.1-0.58-0.15-1.25-0.18-2c0-0.15,0-0.3-0.01-0.46c-0.01-0.01,0-0.01,0-0.01v-0.58c-0.01-0.29-0.01-0.59-0.01-0.9l0.05-1.61 l0.03-1.15l0.04-1.34v-0.19l0.07-2.46l0.07-2.46l0.07-2.31l0.06-2.27l0.02-0.6c0-0.31-1.05-0.49-2.22-0.64 c-0.93-0.12-1.95-0.23-2.56-0.37c0.05-0.23,0.1-0.46,0.16-0.68c0.18-0.72,0.45-1.4,0.79-2.05c0.18-0.35,0.39-0.7,0.61-1.03 c2.16-0.95,4.41-1.69,6.76-2.17c2.06-0.43,4.21-0.66,6.43-0.66c7.36,0,14.16,2.49,19.54,6.69c0.52,0.4,1.03,0.83,1.53,1.28 C42,15.68,42,15.84,42,16z"></path><path fill="#673ab7" d="M42,18.37v4.54l-0.55,1.06l-1.05,2.05l-0.56,1.08l-0.51,0.99l-0.22,0.43c0,0.31,0,0.61-0.02,0.9 c0,0.43-0.02,0.84-0.05,1.22c-0.04,0.45-0.1,0.86-0.16,1.24c-0.15,0.79-0.36,1.47-0.66,2.03c-0.04,0.07-0.08,0.14-0.12,0.2 c-0.11,0.18-0.24,0.35-0.38,0.51c-0.18,0.22-0.38,0.41-0.61,0.57c-0.34,0.26-0.74,0.47-1.2,0.63c-0.57,0.21-1.23,0.35-2.01,0.43 c-0.51,0.05-1.07,0.08-1.68,0.08l-0.42,0.02l-2.08,0.12h-0.01L27.5,36.6l-2.25,0.13l-3.1,0.18l-3.77,0.22l-0.55,0.03 c-0.51,0-0.99-0.03-1.45-0.09c-0.05-0.01-0.09-0.02-0.14-0.02c-0.68-0.11-1.3-0.29-1.86-0.54c-0.68-0.3-1.27-0.7-1.77-1.18 c-0.44-0.43-0.82-0.92-1.13-1.47c-0.07-0.13-0.14-0.25-0.2-0.39c-0.3-0.59-0.54-1.25-0.72-1.97c-0.03-0.12-0.06-0.25-0.08-0.38 c-0.06-0.23-0.11-0.47-0.14-0.72c-0.11-0.64-0.17-1.32-0.2-2.03v-0.01c-0.01-0.29-0.02-0.57-0.02-0.87l-0.49-1.17l-0.07-0.18 L9.5,25.99L8.75,24.2l-0.12-0.29l-0.72-1.73l-0.8-1.93c0,0,0,0-0.01,0L6.29,18.3L6,17.59V16c0-0.63,0.06-1.25,0.17-1.85 c0.05-0.23,0.1-0.46,0.16-0.68c0.85-0.49,1.74-0.94,2.65-1.34c2.08-0.93,4.31-1.62,6.62-2.04c1.72-0.31,3.51-0.48,5.32-0.48 c7.31,0,13.94,2.65,19.12,6.97c0.2,0.16,0.39,0.32,0.58,0.49C41.09,17.48,41.55,17.91,42,18.37z"></path><path fill="#8e24aa" d="M42,21.35v5.14l-0.57,1.19l-1.08,2.25l-0.01,0.03c0,0.43-0.02,0.82-0.05,1.17c-0.1,1.15-0.38,1.88-0.84,2.33 c-0.33,0.34-0.74,0.53-1.25,0.63c-0.03,0.01-0.07,0.01-0.1,0.02c-0.16,0.03-0.33,0.05-0.51,0.05c-0.62,0.06-1.35,0.02-2.19-0.04 c-0.09,0-0.19-0.01-0.29-0.02c-0.61-0.04-1.26-0.08-1.98-0.11c-0.39-0.01-0.8-0.02-1.22-0.02h-0.02l-1.01,0.08h-0.01l-2.27,0.16 l-2.59,0.2l-0.38,0.03l-3.03,0.22l-1.57,0.12l-1.55,0.11c-0.27,0-0.53,0-0.79-0.01c0,0-0.01-0.01-0.01,0 c-1.13-0.02-2.14-0.09-3.04-0.26c-0.83-0.14-1.56-0.36-2.18-0.69c-0.64-0.31-1.17-0.75-1.6-1.31c-0.41-0.55-0.71-1.24-0.9-2.07 c0-0.01,0-0.01,0-0.01c-0.14-0.67-0.22-1.45-0.22-2.33l-0.15-0.27L9.7,26.35l-0.13-0.22L9.5,25.99l-0.93-1.65l-0.46-0.83 l-0.58-1.03l-1-1.79L6,19.75v-3.68c0.88-0.58,1.79-1.09,2.73-1.55c1.14-0.58,2.32-1.07,3.55-1.47c1.34-0.44,2.74-0.79,4.17-1.02 c1.45-0.24,2.94-0.36,4.47-0.36c6.8,0,13.04,2.43,17.85,6.47c0.22,0.17,0.43,0.36,0.64,0.54c0.84,0.75,1.64,1.56,2.37,2.41 C41.86,21.18,41.94,21.26,42,21.35z"></path><path fill="#c2185b" d="M42,24.71v7.23c-0.24-0.14-0.57-0.31-0.98-0.49c-0.22-0.11-0.47-0.22-0.73-0.32 c-0.38-0.17-0.79-0.33-1.25-0.49c-0.1-0.04-0.2-0.07-0.31-0.1c-0.18-0.07-0.37-0.13-0.56-0.19c-0.59-0.18-1.24-0.35-1.92-0.5 c-0.26-0.05-0.53-0.1-0.8-0.14c-0.87-0.15-1.8-0.24-2.77-0.25c-0.08-0.01-0.17-0.01-0.25-0.01l-2.57,0.02l-3.5,0.02h-0.01 l-7.49,0.06c-2.38,0-3.84,0.57-4.72,0.8c0,0-0.01,0-0.01,0.01c-0.93,0.24-1.22,0.09-1.3-1.54c-0.02-0.45-0.03-1.03-0.03-1.74 l-0.56-0.43l-0.98-0.74l-0.6-0.46l-0.12-0.09L8.88,24.1l-0.25-0.19l-0.52-0.4l-0.96-0.72L6,21.91v-3.4 c0.1-0.08,0.19-0.15,0.29-0.21c1.45-1,3-1.85,4.64-2.54c1.46-0.62,3-1.11,4.58-1.46c0.43-0.09,0.87-0.18,1.32-0.24 c1.33-0.23,2.7-0.34,4.09-0.34c6.01,0,11.53,2.09,15.91,5.55c0.66,0.52,1.3,1.07,1.9,1.66c0.82,0.78,1.59,1.61,2.3,2.49 c0.14,0.18,0.28,0.36,0.42,0.55C41.64,24.21,41.82,24.46,42,24.71z"></path><path fill="#d81b60" d="M42,28.72V32c0,0.65-0.06,1.29-0.18,1.91c-0.18,0.92-0.49,1.8-0.91,2.62c-0.22,0.05-0.47,0.05-0.75,0.01 c-0.63-0.11-1.37-0.44-2.17-0.87c-0.04-0.01-0.08-0.03-0.11-0.05c-0.25-0.13-0.51-0.27-0.77-0.43c-0.53-0.29-1.09-0.61-1.65-0.91 c-0.12-0.06-0.24-0.12-0.35-0.18c-0.64-0.33-1.3-0.63-1.96-0.86c0,0,0,0-0.01,0c-0.14-0.05-0.29-0.1-0.44-0.14 c-0.57-0.16-1.15-0.26-1.71-0.26l-1.1-0.32l-4.87-1.41c0,0,0,0-0.01,0l-2.99-0.87h-0.01l-1.3-0.38c-3.76,0-6.07,1.6-7.19,0.99 c-0.44-0.23-0.7-0.81-0.79-1.95c-0.03-0.32-0.04-0.68-0.04-1.1l-1.17-0.57l-0.05-0.02h-0.01l-0.84-0.42L9.7,26.35l-0.07-0.03 l-0.17-0.09L7.5,25.28L6,24.55v-3.43c0.17-0.15,0.35-0.29,0.53-0.43c0.19-0.15,0.38-0.29,0.57-0.44c0.01,0,0.01,0,0.01,0 c1.18-0.85,2.43-1.6,3.76-2.22c1.55-0.74,3.2-1.31,4.91-1.68c0.25-0.06,0.51-0.12,0.77-0.16c1.42-0.27,2.88-0.41,4.37-0.41 c5.27,0,10.11,1.71,14.01,4.59c1.13,0.84,2.18,1.77,3.14,2.78c0.79,0.83,1.52,1.73,2.18,2.67c0.05,0.07,0.1,0.14,0.15,0.2 c0.37,0.54,0.71,1.09,1.03,1.66C41.64,28.02,41.82,28.37,42,28.72z"></path><path fill="#f50057" d="M41.82,33.91c-0.18,0.92-0.49,1.8-0.91,2.62c-0.19,0.37-0.4,0.72-0.63,1.06c-0.14,0.21-0.29,0.41-0.44,0.6 c-0.36-0.14-0.89-0.34-1.54-0.56c0,0,0,0,0-0.01c-0.49-0.17-1.05-0.35-1.65-0.52c-0.17-0.05-0.34-0.1-0.52-0.15 c-0.71-0.19-1.45-0.36-2.17-0.46c-0.6-0.1-1.19-0.16-1.74-0.16l-0.46-0.13h-0.01l-2.42-0.7l-1.49-0.43l-1.66-0.48h-0.01l-0.54-0.15 l-6.53-1.88l-1.88-0.54l-1.4-0.33l-2.28-0.54l-0.28-0.07c0,0,0,0-0.01,0l-2.29-0.53c0-0.01,0-0.01,0-0.01l-0.41-0.09l-0.21-0.05 l-1.67-0.39l-0.19-0.05l-1.42-1.17L6,27.9v-4.08c0.37-0.36,0.75-0.7,1.15-1.03c0.12-0.11,0.25-0.21,0.38-0.31 c0.12-0.1,0.25-0.2,0.38-0.3c0.91-0.69,1.87-1.31,2.89-1.84c1.3-0.7,2.68-1.26,4.13-1.66c0.28-0.09,0.56-0.17,0.85-0.23 c1.64-0.41,3.36-0.62,5.14-0.62c4.47,0,8.63,1.35,12.07,3.66c1.71,1.15,3.25,2.53,4.55,4.1c0.66,0.79,1.26,1.62,1.79,2.5 c0.05,0.07,0.09,0.13,0.13,0.2c0.32,0.53,0.62,1.08,0.89,1.64c0.25,0.5,0.47,1,0.67,1.52C41.34,32.25,41.6,33.07,41.82,33.91z"></path><path fill="#ff1744" d="M40.28,37.59c-0.14,0.21-0.29,0.41-0.44,0.6c-0.44,0.55-0.92,1.05-1.46,1.49c-0.47,0.39-0.97,0.74-1.5,1.04 c-0.2-0.05-0.4-0.11-0.61-0.19c-0.66-0.23-1.35-0.61-1.99-1.01c-0.96-0.61-1.79-1.27-2.16-1.57c-0.14-0.12-0.21-0.18-0.21-0.18 l-1.7-0.15L30,37.6l-2.2-0.19l-2.28-0.2l-3.37-0.3l-5.34-0.47l-0.02-0.01l-1.88-0.91l-1.9-0.92l-1.53-0.74l-0.33-0.16l-0.41-0.2 l-1.42-0.69L7.43,31.9l-0.59-0.29L6,31.35v-4.47c0.47-0.56,0.97-1.09,1.5-1.6c0.34-0.32,0.7-0.64,1.07-0.94 c0.06-0.05,0.12-0.1,0.18-0.14c0.04-0.05,0.09-0.08,0.13-0.1c0.59-0.48,1.21-0.91,1.85-1.3c0.74-0.47,1.52-0.89,2.33-1.24 c0.87-0.39,1.78-0.72,2.72-0.97c1.63-0.46,3.36-0.7,5.14-0.7c4.08,0,7.85,1.24,10.96,3.37c1.99,1.36,3.71,3.08,5.07,5.07 c0.45,0.64,0.85,1.32,1.22,2.02c0.13,0.26,0.26,0.52,0.37,0.78c0.12,0.25,0.23,0.5,0.34,0.75c0.21,0.52,0.4,1.04,0.57,1.58 c0.32,1,0.56,2.02,0.71,3.08C40.21,36.89,40.25,37.24,40.28,37.59z"></path><path fill="#ff5722" d="M38.39,39.42c0,0.08,0,0.17-0.01,0.26c-0.47,0.39-0.97,0.74-1.5,1.04c-0.22,0.12-0.44,0.24-0.67,0.34 c-0.23,0.11-0.46,0.21-0.7,0.3c-0.34-0.18-0.8-0.4-1.29-0.61c-0.69-0.31-1.44-0.59-2.02-0.68c-0.14-0.03-0.27-0.04-0.39-0.04 l-1.64-0.21h-0.02l-2.04-0.27l-2.06-0.27l-0.96-0.12l-7.56-0.98c-0.49,0-1.01-0.03-1.55-0.1c-0.66-0.06-1.35-0.16-2.04-0.3 c-0.68-0.12-1.37-0.28-2.03-0.45c-0.69-0.16-1.37-0.35-2-0.53c-0.73-0.22-1.41-0.43-1.98-0.62c-0.47-0.15-0.87-0.29-1.18-0.4 c-0.18-0.43-0.33-0.88-0.44-1.34C6.1,33.66,6,32.84,6,32v-1.67c0.32-0.53,0.67-1.05,1.06-1.54c0.71-0.94,1.52-1.8,2.4-2.56 c0.03-0.04,0.07-0.07,0.1-0.09l0.01-0.01c0.31-0.28,0.63-0.53,0.97-0.77c0.04-0.04,0.08-0.07,0.12-0.1 c0.16-0.12,0.33-0.24,0.51-0.35c1.43-0.97,3.01-1.73,4.7-2.24c1.6-0.48,3.29-0.73,5.05-0.73c3.49,0,6.75,1.03,9.47,2.79 c2.01,1.29,3.74,2.99,5.06,4.98c0.16,0.23,0.31,0.46,0.46,0.7c0.69,1.17,1.26,2.43,1.68,3.75c0.05,0.15,0.09,0.3,0.13,0.46 c0.08,0.27,0.15,0.55,0.21,0.83c0.02,0.07,0.04,0.14,0.06,0.22c0.14,0.63,0.24,1.29,0.31,1.95c0,0.01,0,0.01,0,0.01 C38.36,38.22,38.39,38.82,38.39,39.42z"></path><path fill="#ff6f00" d="M36.33,39.42c0,0.35-0.02,0.73-0.06,1.11c-0.02,0.18-0.04,0.36-0.06,0.53c-0.23,0.11-0.46,0.21-0.7,0.3 c-0.45,0.17-0.91,0.31-1.38,0.41c-0.32,0.07-0.65,0.13-0.98,0.16h-0.01c-0.31-0.19-0.67-0.42-1.04-0.68 c-0.67-0.47-1.37-1-1.93-1.43c-0.01-0.01-0.01-0.01-0.02-0.02c-0.59-0.45-1.01-0.79-1.01-0.79l-1.06,0.04l-2.04,0.07l-0.95,0.04 l-3.82,0.14l-3.23,0.12c-0.21,0.01-0.46,0.01-0.77,0h-0.01c-0.42-0.01-0.92-0.04-1.47-0.09c-0.64-0.05-1.34-0.11-2.05-0.18 c-0.69-0.08-1.39-0.16-2.06-0.24c-0.74-0.08-1.44-0.17-2.04-0.25c-0.47-0.06-0.88-0.11-1.21-0.15c-0.28-0.32-0.53-0.65-0.77-1.01 c-0.36-0.54-0.67-1.11-0.91-1.72c-0.18-0.43-0.33-0.88-0.44-1.34c0.29-0.89,0.67-1.73,1.12-2.54c0.36-0.66,0.78-1.29,1.24-1.89 c0.45-0.59,0.94-1.14,1.47-1.64v-0.01c0.15-0.15,0.3-0.29,0.45-0.42c0.28-0.26,0.57-0.5,0.87-0.73h0.01 c0.01-0.02,0.02-0.02,0.03-0.03c0.24-0.19,0.49-0.36,0.74-0.53c1.48-1.01,3.15-1.76,4.95-2.2c1.19-0.29,2.44-0.45,3.73-0.45 c2.54,0,4.94,0.61,7.05,1.71h0.01c1.81,0.93,3.41,2.21,4.7,3.75c0.71,0.82,1.32,1.72,1.82,2.67c0.35,0.64,0.65,1.31,0.9,1.99 c0.02,0.06,0.04,0.11,0.06,0.16c0.17,0.5,0.32,1.02,0.45,1.54c0.09,0.37,0.16,0.75,0.22,1.13c0.02,0.12,0.04,0.23,0.05,0.35 C36.28,37.99,36.33,38.7,36.33,39.42z"></path><path fill="#ff9800" d="M34.28,39.42v0.1c0,0.34-0.03,0.77-0.06,1.23c-0.03,0.34-0.06,0.69-0.09,1.02c-0.32,0.07-0.65,0.13-0.98,0.16 h-0.01C32.76,41.98,32.39,42,32,42h-1.75l-0.38-0.11l-1.97-0.6l-2-0.6l-4.63-1.39l-2-0.6c0,0-0.83,0.33-2,0.72h-0.01 c-0.45,0.15-0.94,0.31-1.46,0.47c-0.65,0.19-1.34,0.38-2.02,0.53c-0.7,0.16-1.39,0.28-2.01,0.33c-0.19,0.02-0.38,0.03-0.55,0.03 c-0.56-0.31-1.1-0.68-1.59-1.09c-0.43-0.36-0.83-0.75-1.2-1.18c-0.28-0.32-0.53-0.65-0.77-1.01c0.07-0.45,0.15-0.89,0.27-1.32 c0.3-1.19,0.77-2.33,1.39-3.37c0.34-0.59,0.72-1.16,1.16-1.69c0.01-0.03,0.04-0.06,0.07-0.08c-0.01-0.01,0-0.01,0-0.01 c0.13-0.17,0.27-0.33,0.41-0.48c0-0.01,0-0.01,0-0.01c0.41-0.44,0.83-0.86,1.29-1.25c0.16-0.13,0.31-0.26,0.48-0.39 c0.03-0.03,0.06-0.05,0.1-0.08c2.25-1.72,5.06-2.76,8.09-2.76c3.44,0,6.57,1.29,8.94,3.41c1.14,1.03,2.11,2.26,2.84,3.63 c0.06,0.1,0.12,0.21,0.17,0.32c0.09,0.18,0.18,0.37,0.26,0.57c0.33,0.72,0.59,1.48,0.77,2.26c0.02,0.08,0.04,0.16,0.06,0.24 c0.08,0.37,0.15,0.75,0.2,1.13C34.24,38.21,34.28,38.81,34.28,39.42z"></path><path fill="#ffc107" d="M32.22,39.42c0,0.2-0.01,0.42-0.02,0.65c-0.02,0.37-0.05,0.77-0.1,1.18c-0.02,0.25-0.06,0.5-0.1,0.75h-5.48 l-1.06-0.17l-4.14-0.66l-0.59-0.09l-1.35-0.22c-0.59,0-1.87,0.26-3.22,0.51c-0.71,0.13-1.43,0.27-2.08,0.36 c-0.08,0.01-0.16,0.02-0.23,0.03h-0.01c-0.7-0.15-1.38-0.38-2.02-0.68c-0.2-0.09-0.4-0.19-0.6-0.3c-0.56-0.31-1.1-0.68-1.59-1.09 c-0.01-0.12-0.02-0.22-0.02-0.27c0-0.26,0.01-0.51,0.03-0.76c0.04-0.64,0.13-1.26,0.27-1.86c0.22-0.91,0.54-1.79,0.97-2.6 c0.08-0.17,0.17-0.34,0.27-0.5c0.04-0.08,0.09-0.15,0.13-0.23c0.18-0.29,0.38-0.57,0.58-0.85c0.42-0.55,0.89-1.07,1.39-1.54 c0.01,0,0.01,0,0.01,0c0.04-0.04,0.08-0.08,0.12-0.11c0.05-0.04,0.09-0.09,0.14-0.12c0.2-0.18,0.4-0.34,0.61-0.49 c0-0.01,0.01-0.01,0.01-0.01c1.89-1.41,4.23-2.24,6.78-2.24c1.98,0,3.82,0.5,5.43,1.38h0.01c1.38,0.76,2.58,1.79,3.53,3.03 c0.37,0.48,0.7,0.99,0.98,1.53h0.01c0.05,0.1,0.1,0.2,0.15,0.3c0.3,0.59,0.54,1.21,0.72,1.85h0.01c0.01,0.05,0.03,0.1,0.04,0.15 c0.12,0.43,0.22,0.87,0.29,1.32c0.01,0.09,0.02,0.19,0.03,0.28C32.19,38.43,32.22,38.92,32.22,39.42z"></path><path fill="#ffd54f" d="M30.17,39.31c0,0.16,0,0.33-0.02,0.49v0.01c0,0.01,0,0.01,0,0.01c-0.02,0.72-0.12,1.43-0.28,2.07 c0,0.04-0.01,0.07-0.03,0.11h-4.67l-3.85-0.83l-0.51-0.11l-0.08,0.02l-4.27,0.88L16.27,42H16c-0.64,0-1.27-0.06-1.88-0.18 c-0.09-0.02-0.18-0.04-0.27-0.06h-0.01c-0.7-0.15-1.38-0.38-2.02-0.68c-0.02-0.11-0.04-0.22-0.05-0.33 c-0.07-0.43-0.1-0.88-0.1-1.33c0-0.17,0-0.34,0.01-0.51c0.03-0.54,0.11-1.07,0.23-1.58c0.08-0.38,0.19-0.75,0.32-1.1 c0.11-0.31,0.24-0.61,0.38-0.9c0.12-0.25,0.26-0.49,0.4-0.73c0.14-0.23,0.29-0.45,0.45-0.67c0.4-0.55,0.87-1.06,1.39-1.51 c0.3-0.26,0.63-0.51,0.97-0.73c1.46-0.96,3.21-1.52,5.1-1.52c0.37,0,0.73,0.02,1.08,0.07h0.02c1.07,0.12,2.07,0.42,2.99,0.87 c0.01,0,0.01,0,0.01,0c1.45,0.71,2.68,1.78,3.58,3.1c0.15,0.22,0.3,0.46,0.43,0.7c0.11,0.19,0.21,0.39,0.3,0.59 c0.14,0.31,0.27,0.64,0.38,0.97h0.01c0.11,0.37,0.21,0.74,0.28,1.13v0.01C30.11,38.16,30.17,38.73,30.17,39.31z"></path><path fill="#ffe082" d="M28.11,39.52v0.03c0,0.59-0.07,1.17-0.21,1.74c-0.05,0.24-0.12,0.48-0.21,0.71h-4.48l-2.29-0.63L18.63,42H16 c-0.64,0-1.27-0.06-1.88-0.18c-0.02-0.03-0.03-0.06-0.04-0.09c-0.14-0.43-0.25-0.86-0.3-1.31c-0.04-0.29-0.06-0.59-0.06-0.9 c0-0.12,0-0.25,0.02-0.37c0.01-0.47,0.08-0.93,0.2-1.37c0.06-0.3,0.15-0.59,0.27-0.87c0.04-0.14,0.1-0.27,0.17-0.4 c0.15-0.34,0.33-0.67,0.53-0.99c0.22-0.32,0.46-0.62,0.73-0.9c0.32-0.36,0.68-0.69,1.09-0.96c0.7-0.51,1.5-0.89,2.37-1.1 c0.58-0.16,1.19-0.24,1.82-0.24c2,0,3.79,0.8,5.09,2.09c0.05,0.05,0.11,0.11,0.16,0.18h0.01c0.14,0.15,0.27,0.3,0.4,0.47 c0.37,0.47,0.68,0.98,0.92,1.54c0.12,0.26,0.22,0.53,0.3,0.81c0.01,0.04,0.02,0.07,0.03,0.11c0.14,0.49,0.23,1,0.25,1.53 C28.1,39.2,28.11,39.36,28.11,39.52z"></path><path fill="#ffecb3" d="M26.06,39.52c0,0.41-0.05,0.8-0.16,1.17c-0.1,0.4-0.25,0.78-0.44,1.14c-0.03,0.06-0.1,0.17-0.1,0.17h-8.88 c-0.01-0.01-0.02-0.03-0.02-0.04c-0.12-0.19-0.22-0.38-0.3-0.59c-0.2-0.46-0.32-0.96-0.36-1.48c-0.02-0.12-0.02-0.25-0.02-0.37 c0-0.06,0-0.13,0.01-0.19c0.01-0.44,0.07-0.86,0.19-1.25c0.1-0.36,0.23-0.69,0.4-1.01c0,0,0.01-0.01,0.01-0.02 c0.12-0.21,0.25-0.42,0.4-0.62c0.49-0.66,1.14-1.2,1.89-1.55c0.01,0,0.01,0,0.01,0c0.24-0.12,0.49-0.22,0.75-0.29c0,0,0,0,0.01,0 c0.46-0.14,0.96-0.21,1.47-0.21c0.59,0,1.16,0.09,1.68,0.28c0.19,0.05,0.37,0.13,0.55,0.22c0,0,0,0,0.01,0 c0.86,0.41,1.59,1.05,2.09,1.85c0.1,0.15,0.19,0.31,0.27,0.48c0.04,0.07,0.08,0.15,0.11,0.22c0.23,0.52,0.37,1.09,0.41,1.69 c0.01,0.05,0.01,0.1,0.01,0.16C26.06,39.36,26.06,39.44,26.06,39.52z"></path><g><path fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M30,11H18c-3.9,0-7,3.1-7,7v12c0,3.9,3.1,7,7,7h12c3.9,0,7-3.1,7-7V18C37,14.1,33.9,11,30,11z"></path><circle cx="31" cy="16" r="1" fill="#fff"></circle></g><g><circle cx="24" cy="24" r="6" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"></circle></g>
</svg></span> {/* Instagram Icon */}
                                <span><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48">
<path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path><path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"></path>
</svg></span> {/* LinkedIn Icon */}
                            </div>
                            <p>mettã muse ACCEPTS</p>
                            <div className={styles.paymentIcons}>
                                <span><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="70" height="50" viewBox="0 0 48 48">
<path fill="#cfd8dc" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5    V37z"></path><path fill="#536dfe" d="M37,6H26.463L13.154,42H37c2.762,0,5-2.238,5-5V11C42,8.238,39.762,6,37,6z"></path><path fill="#fafafa" d="M24.34,23.869v3.365h-1.067v-8.31h2.831c0.683-0.014,1.343,0.245,1.833,0.719 c0.496,0.447,0.776,1.086,0.766,1.754c0.014,0.671-0.265,1.316-0.766,1.764c-0.495,0.472-1.106,0.708-1.833,0.707L24.34,23.869 L24.34,23.869z M24.34,19.947v2.901h1.79c0.397,0.012,0.78-0.144,1.056-0.43c0.561-0.545,0.573-1.442,0.028-2.003 c-0.009-0.01-0.019-0.019-0.028-0.028c-0.273-0.292-0.657-0.452-1.056-0.441L24.34,19.947L24.34,19.947z"></path><path fill="#fafafa" d="M31.163,21.362c0.789,0,1.412,0.211,1.868,0.633s0.685,1,0.684,1.734v3.504h-1.021v-0.789h-0.046 c-0.442,0.65-1.03,0.975-1.764,0.975c-0.626,0-1.15-0.186-1.572-0.557c-0.41-0.345-0.642-0.857-0.633-1.392 c0-0.588,0.222-1.056,0.667-1.404c0.445-0.347,1.038-0.522,1.781-0.522c0.634,0,1.156,0.116,1.566,0.348v-0.244 c0.002-0.365-0.159-0.712-0.441-0.945c-0.282-0.255-0.65-0.394-1.03-0.389c-0.596,0-1.068,0.252-1.416,0.755l-0.94-0.592 C29.384,21.734,30.149,21.362,31.163,21.362z M29.782,25.493c-0.001,0.276,0.13,0.535,0.354,0.696 c0.236,0.186,0.529,0.284,0.829,0.278c0.45-0.001,0.882-0.18,1.201-0.499c0.354-0.333,0.53-0.723,0.53-1.172 c-0.333-0.265-0.797-0.398-1.392-0.398c-0.434,0-0.795,0.105-1.085,0.314C29.927,24.925,29.782,25.183,29.782,25.493L29.782,25.493 z"></path><path fill="#fafafa" d="M39.576,21.548l-3.564,8.192H34.91l1.323-2.866l-2.344-5.325h1.16l1.694,4.084h0.023l1.648-4.084 H39.576z"></path><path fill="#4285f4" d="M17.263,23.143c0-0.325-0.027-0.65-0.082-0.971h-4.502v1.839h2.578 c-0.107,0.593-0.451,1.117-0.953,1.451v1.193h1.539C16.744,25.824,17.263,24.596,17.263,23.143z"></path><path fill="#34a853" d="M12.679,27.808c1.288,0,2.373-0.423,3.164-1.152l-1.539-1.193c-0.428,0.29-0.98,0.456-1.625,0.456 c-1.245,0-2.302-0.839-2.68-1.97H8.414v1.23C9.224,26.79,10.875,27.808,12.679,27.808z"></path><path fill="#fbbc04" d="M9.999,23.948c-0.2-0.593-0.2-1.235,0-1.827v-1.23H8.414c-0.678,1.349-0.678,2.938,0,4.287 L9.999,23.948z"></path><path fill="#ea4335" d="M12.679,20.15c0.681-0.011,1.339,0.246,1.831,0.716l0,0l1.362-1.362 c-0.864-0.811-2.009-1.257-3.194-1.243c-1.805,0-3.455,1.018-4.265,2.63l1.585,1.23C10.377,20.99,11.434,20.15,12.679,20.15z"></path>
</svg></span>
                                <span><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="70" height="50" viewBox="0 0 48 48">
<linearGradient id="4aQSF3KYsmAUlEZ8JzDHGa_So6jK8i6jddZ_gr1" x1="20.375" x2="28.748" y1="1365.061" y2="1394.946" gradientTransform="translate(0 -1354)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#00b3ee"></stop><stop offset="1" stop-color="#0082d8"></stop></linearGradient><path fill="url(#4aQSF3KYsmAUlEZ8JzDHGa_So6jK8i6jddZ_gr1)" d="M43.125,9H4.875C3.287,9,2,10.287,2,11.875v24.25C2,37.713,3.287,39,4.875,39h38.25    C44.713,39,46,37.713,46,36.125v-24.25C46,10.287,44.713,9,43.125,9z"></path><path d="M23.778,27.981c-0.827,0-1.5-0.673-1.5-1.5V26.44l-0.309,0.669c-0.244,0.529-0.779,0.872-1.362,0.872   h-0.917c-0.593,0-1.131-0.35-1.371-0.892l-0.254-0.572c-0.019,0.811-0.684,1.464-1.5,1.464h-2.638c-0.596,0-1.135-0.353-1.374-0.898 l-0.289-0.66h-2.12l-0.28,0.651c-0.238,0.551-0.779,0.907-1.378,0.907H7.383c-0.689,0-1.25-0.561-1.25-1.25v-0.055l0.012-0.12   L6.179,26.4l2.84-6.503C9.261,19.352,9.8,19,10.394,19h1.623c0.59,0,1.127,0.348,1.369,0.887l0.958,2.146V20.5  c0-0.827,0.673-1.5,1.5-1.5h1.872c0.589,0,1.126,0.347,1.368,0.885l1.061,2.362l1.067-2.363C21.453,19.347,21.99,19,22.578,19H24.5  c0.827,0,1.5,0.673,1.5,1.5v5.981c0,0.827-0.673,1.5-1.5,1.5H23.778z" opacity=".05"></path><path d="M23.778,27.481c-0.551,0-1-0.449-1-1v-2.318L21.515,26.9c-0.163,0.353-0.519,0.581-0.908,0.581   h-0.917c-0.395,0-0.754-0.233-0.914-0.595l-1.21-2.729v2.324c0,0.551-0.449,1-1,1h-2.638c-0.397,0-0.757-0.235-0.916-0.599  l-0.42-0.959H9.815l-0.41,0.954c-0.159,0.367-0.519,0.604-0.919,0.604H7.383c-0.414,0-0.75-0.336-0.75-0.75v-0.067l0.035-0.156  l2.81-6.411c0.161-0.363,0.52-0.598,0.916-0.598h1.623c0.394,0,0.751,0.232,0.913,0.591l1.915,4.288V20.5c0-0.551,0.449-1,1-1h1.872 c0.393,0,0.751,0.231,0.912,0.59l1.516,3.375l1.523-3.376c0.162-0.358,0.52-0.589,0.912-0.589H24.5c0.551,0,1,0.449,1,1v5.981   c0,0.551-0.449,1-1,1H23.778z M11.463,23.415l-0.293-0.671l-0.282,0.671H11.463z" opacity=".07"></path><path fill="#fff" d="M24.5,20h-1.922c-0.197,0-0.375,0.115-0.456,0.294l-1.98,4.389l-1.97-4.388   C18.091,20.116,17.912,20,17.715,20h-1.871c-0.276,0-0.5,0.224-0.5,0.5v6.226l-2.871-6.43C12.393,20.116,12.214,20,12.017,20h-1.623 c-0.198,0-0.378,0.117-0.458,0.299L7.15,26.64c0,0-0.017,0.063-0.017,0.091c0,0.138,0.112,0.25,0.25,0.25v0h1.103   c0.2,0,0.38-0.119,0.459-0.302l0.541-1.256h3.432l0.551,1.258c0.08,0.182,0.259,0.299,0.458,0.299h2.638c0.276,0,0.5-0.224,0.5-0.5  v-4.685l2.167,4.888c0.08,0.181,0.259,0.297,0.457,0.297h0.918c0.195,0,0.372-0.113,0.454-0.29l2.217-4.805v4.595   c0,0.276,0.224,0.5,0.5,0.5H24.5c0.276,0,0.5-0.224,0.5-0.5V20.5C25,20.224,24.776,20,24.5,20z M10.135,23.915l1.026-2.44   l1.066,2.44H10.135z"></path><path d="M38.994,28c-0.433,0-0.844-0.187-1.129-0.512l-1.15-1.313l-1.189,1.313   c-0.283,0.313-0.688,0.494-1.112,0.494H28.5c-0.827,0-1.5-0.673-1.5-1.5V20.5c0-0.827,0.673-1.5,1.5-1.5h6.811l1.494,1.69   l1.31-1.422l0.099-0.042c0.145-0.119,0.405-0.207,0.679-0.207h1.541c0.689,0,1.25,0.561,1.25,1.25c0,0.204-0.052,0.509-0.302,0.804  l-2.16,2.36l2.561,2.97l-0.103,0.24c0.003,0.036,0.005,0.072,0.005,0.107c0,0.689-0.561,1.25-1.25,1.25H38.994z" opacity=".05"></path><path d="M38.994,27.5c-0.289,0-0.563-0.125-0.752-0.341l-1.521-1.736l-1.566,1.73   c-0.188,0.209-0.459,0.329-0.741,0.329H28.5c-0.551,0-1-0.449-1-1V20.5c0-0.551,0.449-1,1-1h6.585l1.711,1.936l1.612-1.75   l0.033-0.014c0.13-0.099,0.286-0.153,0.45-0.153h1.541c0.414,0,0.75,0.336,0.75,0.75c0,0.121-0.032,0.302-0.184,0.481l-2.447,2.673  l2.647,3.069l-0.037,0.085c0.014,0.056,0.021,0.114,0.021,0.172c0,0.414-0.336,0.75-0.75,0.75H38.994z M33.507,25.016l0.347-0.381   h-3.638v0.381H33.507z M34.055,24.415l0.916-1.005l-0.916-1.026V24.415z M33.991,22.312l-0.265-0.296l-3.51-0.01v0.307H33.991z" opacity=".07"></path><path fill="#fff" d="M40.615,26.586l0.001-0.003l-2.734-3.169l2.734-2.986c0.037-0.044,0.066-0.097,0.066-0.159   c0-0.138-0.112-0.25-0.25-0.25c-0.007,0-1.538,0-1.541,0c-0.072,0-0.135,0.033-0.18,0.082l-0.007,0.003l-1.916,2.079L34.86,20H28.5  c-0.276,0-0.5,0.224-0.5,0.5v5.982c0,0.276,0.224,0.5,0.5,0.5h5.913c0.141,0,0.276-0.06,0.371-0.164l1.943-2.147l1.891,2.158    C38.713,26.938,38.85,27,38.994,27h1.44c0.138,0,0.25-0.112,0.25-0.25C40.683,26.686,40.655,26.63,40.615,26.586z M33.728,25.516    h-4.011v-1.381h3.838v-1.323h-3.838v-1.308l4.234,0.012l1.693,1.897L33.728,25.516z"></path>
</svg></span>
                                <span><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="70" height="50" viewBox="0 0 48 48">
<path fill="#3F51B5" d="M45,35c0,2.209-1.791,4-4,4H7c-2.209,0-4-1.791-4-4V13c0-2.209,1.791-4,4-4h34c2.209,0,4,1.791,4,4V35z"></path><path fill="#FFC107" d="M30 14A10 10 0 1 0 30 34A10 10 0 1 0 30 14Z"></path><path fill="#FF3D00" d="M22.014,30c-0.464-0.617-0.863-1.284-1.176-2h5.325c0.278-0.636,0.496-1.304,0.637-2h-6.598C20.07,25.354,20,24.686,20,24h7c0-0.686-0.07-1.354-0.201-2h-6.598c0.142-0.696,0.359-1.364,0.637-2h5.325c-0.313-0.716-0.711-1.383-1.176-2h-2.973c0.437-0.58,0.93-1.122,1.481-1.595C21.747,14.909,19.481,14,17,14c-5.523,0-10,4.477-10,10s4.477,10,10,10c3.269,0,6.162-1.575,7.986-4H22.014z"></path>
</svg></span>
                                <span><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="70" height="50" viewBox="0 0 48 48">
<path fill="#0d62ab" d="M18.7,13.767l0.005,0.002C18.809,13.326,19.187,13,19.66,13h13.472c0.017,0,0.034-0.007,0.051-0.006    C32.896,8.215,28.887,6,25.35,6H11.878c-0.474,0-0.852,0.335-0.955,0.777l-0.005-0.002L5.029,33.813l0.013,0.001    c-0.014,0.064-0.039,0.125-0.039,0.194c0,0.553,0.447,0.991,1,0.991h8.071L18.7,13.767z"></path><path fill="#199be2" d="M33.183,12.994c0.053,0.876-0.005,1.829-0.229,2.882c-1.281,5.995-5.912,9.115-11.635,9.115   c0,0-3.47,0-4.313,0c-0.521,0-0.767,0.306-0.88,0.54l-1.74,8.049l-0.305,1.429h-0.006l-1.263,5.796l0.013,0.001 c-0.014,0.064-0.039,0.125-0.039,0.194c0,0.553,0.447,1,1,1h7.333l0.013-0.01c0.472-0.007,0.847-0.344,0.945-0.788l0.018-0.015  l1.812-8.416c0,0,0.126-0.803,0.97-0.803s4.178,0,4.178,0c5.723,0,10.401-3.106,11.683-9.102   C42.18,16.106,37.358,13.019,33.183,12.994z"></path><path fill="#006fc4" d="M19.66,13c-0.474,0-0.852,0.326-0.955,0.769L18.7,13.767l-2.575,11.765 c0.113-0.234,0.359-0.54,0.88-0.54c0.844,0,4.235,0,4.235,0c5.723,0,10.432-3.12,11.713-9.115c0.225-1.053,0.282-2.006,0.229-2.882  C33.166,12.993,33.148,13,33.132,13H19.66z"></path>
</svg>
</span>
                                <span><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="70" height="50" viewBox="0 0 48 48">
<linearGradient id="tqttHKKYN8QCm0QroIldIa_hCQjDhlJZbKP_gr1" x1="6.367" x2="6.367" y1="11.574" y2="32.038" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#6d6d6d"></stop><stop offset=".438" stop-color="#626262"></stop><stop offset=".987" stop-color="#464646"></stop><stop offset=".998" stop-color="#454545"></stop></linearGradient><path fill="url(#tqttHKKYN8QCm0QroIldIa_hCQjDhlJZbKP_gr1)" d="M8.653,17.61c-0.559,0.684-1.453,1.224-2.348,1.146c-0.111-0.924,0.327-1.908,0.84-2.514 C7.703,15.539,8.681,15.038,9.473,15C9.566,15.963,9.203,16.907,8.653,17.61 M12.339,25.731c-0.693-0.52-1.137-1.114-1.137-1.9  c0-0.786,0.384-1.319,0.795-1.719c0.384-0.374,0.527-0.92,0.228-1.361C11.287,19.368,9.861,19,9.166,19 c-0.773,0-1.365,0.238-1.84,0.431c-0.323,0.13-0.578,0.172-0.81,0.172c-0.282,0-0.657-0.082-1.02-0.22  c-0.478-0.184-0.973-0.373-1.52-0.373c-1.413,0-2.52,0.688-3.284,2.035c-1.519,2.604-0.272,6.192,0.866,7.838   c0.503,0.732,1.438,2.097,2.987,2.097c0.001,0,0.001,0,0.002,0c0.56-0.021,0.95-0.18,1.265-0.308   c0.279-0.114,0.465-0.189,0.804-0.189c0.325,0,0.513,0.075,0.797,0.188c0.347,0.138,0.778,0.31,1.409,0.31  c1.417,0,2.187-1.127,2.827-2.064c0.615-0.893,0.927-1.775,1.028-2.105C12.802,26.449,12.779,26.103,12.339,25.731z"></path><linearGradient id="tqttHKKYN8QCm0QroIldIb_hCQjDhlJZbKP_gr2" x1="32.625" x2="32.625" y1="13.141" y2="36.192" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#6d6d6d"></stop><stop offset=".438" stop-color="#626262"></stop><stop offset=".987" stop-color="#464646"></stop><stop offset=".998" stop-color="#454545"></stop></linearGradient><path fill="url(#tqttHKKYN8QCm0QroIldIb_hCQjDhlJZbKP_gr2)" d="M22.688,17H17.25v13.999h2.265v-4.666h3.099c2.844,0,4.887-1.937,4.887-4.666  S25.495,17,22.688,17z M22.137,24.466h-2.622v-5.6h2.622c1.952,0,3.099,1.031,3.099,2.8S24.098,24.466,22.137,24.466z M32.752,20.5  c-2.39,0-4.156,1.324-4.222,3.144h2.027c0.167-0.865,0.995-1.432,2.13-1.432c1.376,0,2.154,0.621,2.154,1.766l0.001,0.79    l-2.814,0.147C29.414,25.068,28,26.105,28,27.907c0,1.82,1.46,3.028,3.552,3.028c1.413,0,2.725-0.693,3.319-1.793h0.046v1.685H37    v-6.992C37.001,21.806,35.327,20.5,32.752,20.5z M34.834,27.014c0,1.316-1.153,2.253-2.678,2.253c-1.199,0-1.962-0.559-1.962-1.414  c0-0.883,0.734-1.396,2.139-1.478l2.508-0.184L34.834,27.014z M45.691,20.5l-2.675,8.588H42.97L40.294,20.5H37.92l3.848,10.584  l-0.206,0.644c-0.348,1.091-0.91,1.511-1.914,1.511c-0.172,0-0.497-0.017-0.647-0.036v1.745C39.152,34.982,39.68,35,39.844,35   c2.215,0,3.256-0.839,4.167-3.385L48,20.5H45.691z"></path>
</svg></span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <p className={styles.copyright}>Copyright © 2024 mettamuse. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
