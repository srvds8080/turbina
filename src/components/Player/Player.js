import React, { useRef, useState, useCallback, useEffect } from "react";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import styles from "./Player.module.css";
import { Track } from "../Track/Track";
import { ReactComponent as PlayIcon } from "../../images/play.svg";
import { ReactComponent as PauseIcon } from "../../images/pause.svg";
import { ReactComponent as ArrowIcon } from "../../images/arrow.svg";
import { ReactComponent as CrossIcon } from "../../images/cross.svg";

const AudioContext = window.AudioContext || window.webkitAudioContext;
const context = new AudioContext();
const analyser = context.createAnalyser();

export function Player({ releaseList }) {
  const audioElement = useRef();
  const trackName = useRef();
  const blur = useRef();
  const isConnected = useRef(false);
  const requestId = window.requestAnimationFrame;

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

  useEffect(() => {
    if (!isConnected.current) {
      isConnected.current = true;
      const audio = context.createMediaElementSource(audioElement.current);
      audio.connect(analyser).connect(context.destination);
      analyser.connect(context.destination);
      analyser.fftSize = 2048;
    }
  }, []);

  const loop = useCallback(() => {
    //в условии нельзя устанавливать isPaused,
    // т.к. его состояние устанавливается после вызова loop
    !audioElement.current.paused && window.requestAnimationFrame(loop);
    const array = new Uint8Array(2048);
    analyser.getByteFrequencyData(array);
    blur.current.style.background = `radial-gradient(at bottom, rgba(25, 40, 130, 0.6) ${
      array[10] * 0.1
    }%, rgba(130, ${array[64]}, ${
      array[128]
    }, 0.5) 30%, rgba(240, 170, 170, 0.5) 90%)`;
  }, []);
  const togglePlay = useCallback(() => {
    if (audioElement.current) {
      if (isPaused) {
        if (context.state === "suspended") {
          //при первом запуске аудио контексту нужно сменить состояние на "running"
          context.resume();
        }
        setIsPaused(false);
        audioElement.current.play();
        loop();
      } else {
        window.cancelAnimationFrame(requestId); //удаляем рекурсию вызова f loop();
        setIsPaused(true);
        audioElement.current.pause();
      }
    }
  }, [isPaused, loop, requestId]);

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
    <>
      <div ref={blur} className={styles.blur} />
      <div className={styles.container}>
        <div className={styles.playerContainer}>
          <button onClick={togglePlay} className={styles.playBtn}>
            {isPaused ? (
              <PlayIcon className={styles.playIcon} />
            ) : (
              <PauseIcon />
            )}
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
            <div className={styles.lyricsBtnWrap}>
              <button onClick={toggleLyrics} className={styles.lyricsBtn}>
                {isOpenLyrics ? "Релизы" : "Текст песни"}
              </button>
            </div>
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
    </>
  );
}
