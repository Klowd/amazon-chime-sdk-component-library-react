// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react';

import { LocalAudioOutputContextType } from '../../types';
import { useAudioVideo } from '../AudioVideoProvider';

const Context = createContext<LocalAudioOutputContextType | null>(null);

const LocalAudioOutputProvider: React.FC = ({ children }) => {
  const audioVideo = useAudioVideo();
  const [isAudioOn, setIsAudioOn] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (!audioVideo) {
      return;
    }

    if (audioRef.current) {
      audioVideo.bindAudioElement(audioRef.current);
    }
    return (): void => {
      audioVideo.unbindAudioElement();
    };
  }, [audioVideo]);

  const toggleAudio = useCallback((): void => {
    if (!audioRef.current) {
      return;
    }
    setIsAudioOn(!isAudioOn);
    if (isAudioOn) {
      audioVideo?.unbindAudioElement();
    } else {
      audioVideo?.bindAudioElement(audioRef.current);
    }
  }, [audioRef, audioVideo, isAudioOn]);

  const value = useMemo(() => ({ isAudioOn, toggleAudio }), [
    isAudioOn,
    toggleAudio
  ]);

  return (
    <Context.Provider value={value}>
      {children}
      <audio ref={audioRef} style={{ display: 'none' }} />
    </Context.Provider>
  );
};

const useLocalAudioOutput = (): LocalAudioOutputContextType => {
  const context = useContext(Context);
  if (!context) {
    throw new Error(
      'useLocalAudioOutput must be used within LocalAudioOutputProvider'
    );
  }
  return context;
};

export { LocalAudioOutputProvider, useLocalAudioOutput };
