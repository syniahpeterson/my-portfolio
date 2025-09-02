import { useEffect, useRef } from "react";

// useScrollAnimation.js: Custom React hook for scroll-triggered and theme-triggered animations
const useScrollAnimation = (threshold = 0.1) => {
  const ref = useRef(null);

  // Check if element is in viewport and toggle 'active' class
  const checkVisibility = () => {
    const element = ref.current;
    if (!element) return;
    const rect = element.getBoundingClientRect();
    const inView = rect.top < window.innerHeight && rect.bottom > 0;
    if (inView) {
      element.classList.add("active");
    } else {
      element.classList.remove("active");
    }
  };

  useEffect(() => {
    if (!ref.current) return;
    const element = ref.current;

    // IntersectionObserver for scroll-triggered animation
    const observerCallback = ([entry]) => {
      if (entry.isIntersecting) {
        element.classList.add("active");
      } else {
        element.classList.remove("active");
      }
    };
    const observerOptions = {
      threshold: isFinite(threshold) ? threshold : 0.1,
    };
    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
    observer.observe(element);

    // Listen for global scroll-animation-check event
    window.addEventListener("scroll-animation-check", checkVisibility);
    // Listen for theme changes and re-check visibility
    window.addEventListener("themechange", checkVisibility);

    // Initial check in case theme toggled while already in view
    checkVisibility();

    // Cleanup listeners and observer
    return () => {
      observer.unobserve(element);
      window.removeEventListener("scroll-animation-check", checkVisibility);
      window.removeEventListener("themechange", checkVisibility);
    };
  }, [threshold]);

  return ref;
};

export default useScrollAnimation;
