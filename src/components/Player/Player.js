import React, { useRef, useState, useCallback, useEffect } from "react";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import styles from "./Player.module.css";
import { Track } from "../Track/Track";
import { ReactComponent as PlayIcon } from "../../images/play.svg";
import { ReactComponent as PauseIcon } from "../../images/pause.svg";
import { ReactComponent as ArrowIcon } from "../../images/arrow.svg";
import { ReactComponent as CrossIcon } from "../../images/cross.svg";

export function Player({ releaseList }) {
  const audioElement = useRef();
  const trackName = useRef();
  const [isPaused, setIsPaused] = useState(true);
  const [isOpenPlaylist, setIsOpenPlaylist] = useState(false);
  const [isOpenLyrics, setIsOpenLyrics] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [currentTrack, setCurrentTrack] = useState(releaseList[0]);
  const [isTrackNameOverflow, setIsTrackNameOverflow] = useState(false);
  const currentSeconds = currentTime % 60;
  const currentMinutes = (currentTime - currentSeconds) / 60;
  const duration = audioElement.current
    ? Math.round(audioElement.current.duration)
    : 0;

  const togglePlay = useCallback(() => {
    if (audioElement.current) {
      if (isPaused) {
        setIsPaused(false);
        audioElement.current.play();
      } else {
        setIsPaused(true);
        audioElement.current.pause();
      }
    }
  }, [isPaused]);

  const togglePlaylist = useCallback(() => {
    setIsOpenPlaylist(!isOpenPlaylist);
    !isOpenPlaylist && setIsOpenLyrics(false);
  }, [isOpenPlaylist]);

  const toggleLyrics = useCallback(() => {
    setIsOpenLyrics(!isOpenLyrics);
  }, [isOpenLyrics]);

  const handleTimeUpdate = useCallback((evt) => {
    setCurrentTime(Math.round(evt.target.currentTime));
  }, []);

  useEffect(() => {
    const audio = audioElement.current;
    audio.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, [handleTimeUpdate]);

  useEffect(() => {
    const trackNameRect = trackName.current.getBoundingClientRect();
    const trackNameContainerRect = trackName.current.parentElement.getBoundingClientRect();

    setIsTrackNameOverflow(trackNameRect.width > trackNameContainerRect.width);
  }, [currentTrack]);

  const switchTrack = useCallback(
    (track) => {
      audioElement.current.pause();
      setCurrentTrack(track);
      audioElement.current.load();
      if (!isPaused) {
        audioElement.current.play();
      }
    },
    [isPaused]
  );

  return (
    <div className={styles.container}>
      <div className={styles.playerContainer}>
        <button onClick={togglePlay} className={styles.playBtn}>
          {isPaused ? <PlayIcon className={styles.playIcon} /> : <PauseIcon />}
        </button>
        <div className={styles.songContainer}>
          <div className={styles.songContent}>
            <span
              ref={trackName}
              className={`${styles.songName} ${
                isTrackNameOverflow ? styles.songName_overflow : ""
              }`}
            >
              {currentTrack.name}
            </span>
            <span className={styles.currentTime}>
              {currentMinutes}:
              {currentSeconds < 10 ? `0${currentSeconds}` : currentSeconds}
            </span>
          </div>
          <div className={styles.progressBar}>
            <span
              className={styles.progress}
              style={{ width: `${(currentTime / duration) * 100}%` }}
            ></span>
          </div>
        </div>
        {isOpenPlaylist && (
          <button onClick={toggleLyrics} className={styles.lyricsBtn}>
            {isOpenLyrics ? "Релизы" : "Текст песни"}
          </button>
        )}
        <button onClick={togglePlaylist} className={styles.togglePlaylist}>
          {isOpenPlaylist ? <CrossIcon /> : <ArrowIcon />}
        </button>
        <audio ref={audioElement} controls className={styles.nativePlayer}>
          <source src={currentTrack.link} type="audio/mp3"></source>
        </audio>
      </div>

      <div
        className={`${styles.penal} ${
          isOpenPlaylist ? styles.penal_state_visible : ""
        }`}
      >
        <SimpleBar
          className={isOpenPlaylist ? styles.simplebar_state_visible : ""}
        >
          <h3 className={styles.penalTitle}>
            {isOpenLyrics ? "Текст песни:" : "Релизы:"}
          </h3>
          {isOpenLyrics ? (
            <div className={styles.lyrics}>{currentTrack.lyrics}</div>
          ) : (
            <ul className={styles.releases}>
              {" "}
              {releaseList.map((track) => (
                <li key={track.name} className={styles.track}>
                  <Track onClick={switchTrack} track={track} />
                </li>
              ))}
            </ul>
          )}
        </SimpleBar>
      </div>
    </div>
  );
}
