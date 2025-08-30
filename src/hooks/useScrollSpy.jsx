import { useState, useEffect } from "react";

// Custom hook to track which section is currently in view
export default function useScrollSpy(sectionIds, offset = 70) {
  // State for currently active section id
  const [activeId, setActiveId] = useState(sectionIds[0]);

  useEffect(() => {
    // Handler to update active section based on scroll position
    const handleScroll = () => {
      const scrollPos = window.scrollY + offset;
      let current = sectionIds[0];

      // Find the last section above the scroll position
      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= scrollPos) {
          current = id;
        }
      });

      setActiveId(current);
    };

    // Listen for scroll events and initialize on mount
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    // Cleanup event listener on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds, offset]);

  // Return the currently active section id
  return activeId;
}
