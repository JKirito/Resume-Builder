import Head from 'next/head';
import Image from 'next/image';
import HomePage from '../components/Home/HomePage';
import styles from '../styles/Home.module.css';
import { useEffect } from 'react';

export default function Home() {
  return (
    <div className={styles.container} id='maincontainer'>
      <HomePage />
    </div>
  );
}
