import React from 'react';
import logo from '../../images/logo.svg';
import turbina from '../../images/turbina.svg';
import styles from './Header.module.css';

const streamingList = [
  {
    name: 'Яндекс.Музыка',
    link: '/',
  },
  {
    name: 'Spotify',
    link: '/',
  },
  {
    name: 'Apple Music',
    link: '/',
  },
  {
    name: 'VK Music',
    link: '/',
  },
];

export function Header() {
  return(
    <header className={styles.header}>
      <div className={styles.navigation}>
        <a href="/" className={styles.logo}><img src={logo} alt="логотип"/></a>
        <ul className={styles.streamingList}>
          {
            streamingList.map((item) => (
              <li key={item.name} className={styles.streamingItem}>
                <a href={item.link} className={styles.streamingLink}>{item.name} ↗</a>
              </li>
            ))
          }
        </ul>
      </div>
      <h1 className={styles.title}><img src={turbina} alt="Турбина"/></h1>
    </header>
  );
}
