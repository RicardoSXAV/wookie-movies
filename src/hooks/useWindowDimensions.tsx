import { useState, useEffect } from "react";

interface DimensionsState {
  width?: number;
  height?: number;
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState<DimensionsState>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}
