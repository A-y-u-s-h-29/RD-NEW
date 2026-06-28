// src/context/LoaderContext.jsx
"use client";

import { createContext, useContext, useState, useEffect } from "react";

const LoaderContext = createContext();

export function LoaderProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Small delay after loader disappears before animations start
      setTimeout(() => {
        setIsReady(true);
      }, 100);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <LoaderContext.Provider value={{ isLoading, isReady }}>
      {children}
    </LoaderContext.Provider>
  );
}

export function useLoader() {
  const context = useContext(LoaderContext);
  if (!context) {
    throw new Error("useLoader must be used within a LoaderProvider");
  }
  return context;
}