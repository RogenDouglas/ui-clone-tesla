import { useMotionValue } from "framer-motion";
import { useContext, useEffect } from "react";
import ModelsContext from "./ModelsContext";

const useWrapperScroll = () => {
  const { wrapperRef } = useContext(ModelsContext);

  const scrollY = useMotionValue(0);
  const scrollYProgress = useMotionValue(0);

  useEffect(() => {
    const wRef = wrapperRef.current;

    if (wRef) {
      const updateScrollValue = () => {
        if (wRef) {
          const { scrollTop, scrollHeight, offsetHeight } = wRef;

          const fullScroll = scrollHeight - offsetHeight;

          scrollY.set(scrollTop);
          scrollYProgress.set(scrollTop / fullScroll);
        }
      };

      wRef.addEventListener("scroll", updateScrollValue);

      return () => {
        wRef?.removeEventListener("scroll", updateScrollValue);
      };
    }
  }, [scrollY, scrollYProgress, wrapperRef]);

  return {
    scrollY,
    scrollYProgress,
  };
};

export default useWrapperScroll;
