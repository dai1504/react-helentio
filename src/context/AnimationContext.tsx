'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type AnimationContextType = {
  lastPlayedIndex: number;
  setLastPlayedIndex: (index: number) => void;
};

const AnimationContext = createContext<AnimationContextType | undefined>(undefined);

export function AnimationProvider({ children }: { children: ReactNode }) {
  const [lastPlayedIndex, setLastPlayedIndex] = useState(-1); // -1 = chưa chạy gì
  return (
    <AnimationContext.Provider value={{ lastPlayedIndex, setLastPlayedIndex }}>
      {children}
    </AnimationContext.Provider>
  );
}

export function useAnimationChain() {
  const context = useContext(AnimationContext);
  if (!context) {
    throw new Error('useAnimationChain must be used inside AnimationProvider');
  }
  return context;
}
