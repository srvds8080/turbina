import React, { useCallback, useState } from "react";
import logo from "../../images/logo.svg";
import turbina from "../../images/turbina.svg";
import styles from "./Header.module.css";
import { Player } from "../Player/Player";
import { streamingList, releaseList } from "../../utils/constants";
import { ReactComponent as CloseIcon } from "../../images/close.svg";

const IS_MOBILE = window.innerWidth < 767;

export function Header() {
  const [isCollapsed, setIsCollapsed] = useState(IS_MOBILE);

  const handleOnCollapseClick = useCallback(() => {
    setIsCollapsed((prevState) => !prevState);
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.navigation}>
        <a href="/" className={styles.logo}>
          <img className={styles.logoIcon} src={logo} alt="логотип" />
        </a>
        <div className={styles.streaming}>
          {IS_MOBILE && (
            <>
              {isCollapsed ? (
                <button
                  className={styles.showStreaming}
                  onClick={handleOnCollapseClick}
                >
                  Стриминги
                </button>
              ) : (
                <CloseIcon
                  className={styles.close}
                  onClick={handleOnCollapseClick}
                />
              )}
            </>
          )}
          {!isCollapsed && (
            <ul className={styles.streamingList}>
              {streamingList.map((item) => (
                <li key={item.name} className={styles.streamingItem}>
                  <a href={item.link} className={styles.streamingLink}>
                    {item.name} ↗
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <h1 className={styles.title}>
        <img className={styles.titleImage} src={turbina} alt="Турбина" />
      </h1>
      <Player releaseList={releaseList} />
    </header>
  );
}
