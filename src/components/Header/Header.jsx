import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo.png';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
        <h1><img src={logo} alt="Og logo" title="og logo" /> Code Submission</h1>
        <nav className={styles.headerNav}>
            <Link to="/">Home</Link>
            <Link to="/about-me">About Me</Link>
        </nav>
    </header>
  );
};