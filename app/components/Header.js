"use client";

import React, { useState } from 'react';
import styles from './Header.module.css'; // CSS module for styling

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false); // Manage menu visibility

    const toggleMenu = () => {
        setMenuOpen(!menuOpen); // Toggle menu state
    };

    return (
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <span className={styles.hamburgerMenu} onClick={toggleMenu}>
                    ☰
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50">
                    <path d="M 11.984375 4 A 1.0001 1.0001 0 0 0 11.292969 4.2929688 L 3.2929688 12.292969 A 1.0001 1.0001 0 0 0 3 13 L 3 36 A 1.0001 1.0001 0 0 0 3.2929688 36.707031 L 13.292969 46.707031 A 1.0001 1.0001 0 0 0 15 46 L 15 25.414062 L 24.292969 34.707031 A 1.0001 1.0001 0 0 0 25.707031 34.707031 L 35 25.414062 L 35 46 A 1.0001 1.0001 0 0 0 36.707031 46.707031 L 46.707031 36.707031 A 1.0001 1.0001 0 0 0 47 36 L 47 13 A 1.0001 1.0001 0 0 0 46.707031 12.292969 L 38.707031 4.2929688 A 1.0001 1.0001 0 0 0 37.292969 4.2929688 L 25 16.585938 L 12.707031 4.2929688 A 1.0001 1.0001 0 0 0 11.984375 4 z M 12 6.4140625 L 24 18.414062 L 24 31.585938 L 5.4140625 13 L 12 6.4140625 z M 38 6.4140625 L 44.585938 13 L 26 31.585938 L 26 18.414062 L 38 6.4140625 z M 5 15.414062 L 13 23.414062 L 13 43.585938 L 5 35.585938 L 5 15.414062 z M 45 15.414062 L 45 35.585938 L 37 43.585938 L 37 23.414062 L 45 15.414062 z"></path>
                </svg>
                <h1 className={styles.logo}>LOGO</h1>
                <div className={styles.icons}>
                    <span className={`${styles.icon} ${styles.searchIcon}`}>🔍</span>
                    <span className={`${styles.icon} ${styles.heartIcon}`}>❤️</span>
                    <span className={`${styles.icon} ${styles.bagIcon}`}>🛍️</span>
                    <span className={styles.icon}>👤</span>
                    <select className={styles.languageSelect}>
                        <option value="en">English</option>
                        <option value="fr">French</option>
                        <option value="es">Spanish</option>
                    </select>
                </div>
            </div>
            <nav className={styles.navbar}>
                <ul className={`${styles.navList} ${menuOpen ? styles.mobileVisible : ''}`}>
                    <li>SHOP</li>
                    <li>SKILLS</li>
                    <li>STORIES</li>
                    <li>ABOUT</li>
                    <li>CONTACT US</li>
                </ul>
            </nav>
            <div className={`${styles.currentPage} ${styles.mobileOnly}`}>HOME | SHOP</div>
            <hr className={styles.separator} />
            <h2 className={styles.welcomeText}>DISCOVER OUR PRODUCTS!</h2>
            <p className={styles.welcomeDescription}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu quam elit. 
                Aliquam erat volutpat. Fusce placerat ipsum neque, at efficitur ante tincidunt ac.
            </p>
        </header>
    );
};

export default Header;
