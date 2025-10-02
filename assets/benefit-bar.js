/* Benefit / Trust Bar (benefit-bar) */
(function () {
  const root = document.querySelectorAll(".benefit-bar");
  if (!root.length) return;

  root.forEach((section) => {
    const sticky = section.getAttribute("data-sticky") === "true";
    if (!sticky) return;

    // Make the inner wrapper sticky without layout jump
    const wrap = section.querySelector(".benefit-bar__wrap");
    if (!wrap) return;

    // Create a sentinel spacer with same height so content below doesn't jump
    const spacer = document.createElement("div");
    spacer.style.height = wrap.offsetHeight + "px";
    spacer.style.pointerEvents = "none";
    spacer.setAttribute("aria-hidden", "true");
    section.insertBefore(spacer, wrap);

    wrap.classList.add("benefit-bar--sticky");

    // Recompute spacer height on resize
    const ro = new ResizeObserver(() => {
      spacer.style.height = wrap.offsetHeight + "px";
    });
    ro.observe(wrap);

    // Add subtle elevation when scrolled
    let elevated = false;
    const onScroll = () => {
      const scrolled = window.scrollY > 8;
      if (scrolled !== elevated) {
        elevated = scrolled;
        wrap.style.boxShadow = scrolled
          ? "0 8px 24px rgba(0,0,0,.12)"
          : "var(--bb-shadow)";
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  });

  // Prevent horizontal scroll issues on mobile
  root.forEach((section) => {
    const pill = section.querySelector(".benefit-bar__pill--scroll");
    if (!pill) return;

    // Ensure smooth scrolling and prevent body scroll when scrolling horizontally
    let isScrolling = false;

    pill.addEventListener(
      "touchstart",
      () => {
        isScrolling = true;
      },
      { passive: true }
    );

    pill.addEventListener(
      "touchend",
      () => {
        setTimeout(() => {
          isScrolling = false;
        }, 100);
      },
      { passive: true }
    );

    pill.addEventListener(
      "scroll",
      () => {
        if (isScrolling) {
          document.body.style.overflow = "hidden";
          clearTimeout(pill.scrollTimeout);
          pill.scrollTimeout = setTimeout(() => {
            document.body.style.overflow = "";
          }, 150);
        }
      },
      { passive: true }
    );
  });
})();
