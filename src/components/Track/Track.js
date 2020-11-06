import React, { useCallback } from 'react';

export function Track({ onClick, track }) {
  const switchTrack = useCallback(() => {
    onClick(track);
  }, [onClick, track]);

  return(<span onClick={switchTrack}>{track.name}</span>);
}
