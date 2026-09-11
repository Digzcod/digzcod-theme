/* Hero Promo – minimal JS for enhancements */
(function () {
  const sections = document.querySelectorAll(".hero-promo");
  if (!sections.length) return;

  sections.forEach((section) => {
    // Scroll hint functionality
    const scrollHint = section.querySelector("[data-scroll-hint]");
    if (scrollHint) {
      scrollHint.addEventListener("click", () => {
        const nextSection = section.nextElementSibling;
        if (nextSection) {
          nextSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        } else {
          // Fallback: scroll down by viewport height
          window.scrollBy({
            top: window.innerHeight,
            behavior: "smooth",
          });
        }
      });
    }

    // Button click analytics hook
    section.querySelectorAll(".hp-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        // Dispatch custom event for analytics
        window.dispatchEvent(
          new CustomEvent("hero-promo:button-click", {
            detail: {
              sectionId: section.dataset.sectionId,
              buttonText: btn.textContent.trim(),
              buttonHref: btn.href || null,
            },
          })
        );
      });
    });

    // Video autoplay management for better performance
    const video = section.querySelector(".hero-promo__video");
    if (video) {
      // Pause video when not in viewport to save resources
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              video.play().catch(() => {
                // Auto-play failed, which is expected in some browsers
                console.log("Video autoplay prevented by browser");
              });
            } else {
              video.pause();
            }
          });
        },
        { threshold: 0.5 }
      );

      observer.observe(section);
    }
  });
})();
