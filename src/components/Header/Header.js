import React from "react";
import logo from "../../images/logo.svg";
import turbina from "../../images/turbina.svg";
import styles from "./Header.module.css";
import { Player } from "../Player/Player";
import { streamingList, releaseList } from "../../utils/constants";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.navigation}>
        <a href="/" className={styles.logo}>
          <img className={styles.logoIcon} src={logo} alt="логотип" />
        </a>
        <ul className={styles.streamingList}>
          {streamingList.map((item) => (
            <li key={item.name} className={styles.streamingItem}>
              <a href={item.link} className={styles.streamingLink}>
                {item.name} ↗
              </a>
            </li>
          ))}
        </ul>
      </div>
      <h1 className={styles.title}>
        <img className={styles.titleImage} src={turbina} alt="Турбина" />
      </h1>
      <Player releaseList={releaseList} />
    </header>
  );
}
