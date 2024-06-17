export function scrollAtivoDesktop() {
  const allAnimation = document.querySelectorAll("[data-animation]");

  const options: IntersectionObserverInit = {
    rootMargin: "0px",
    threshold: 0.2,
  };

  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      const dataAnimation: string | null =
        entries[0].target.getAttribute("data-animation");
      switch (dataAnimation) {
        case "left":
          entries[0].target.classList.add("animation-left");
          break;

        case "right":
          entries[0].target.classList.add("animation-right");
          break;
        case "center":
          entries[0].target.classList.add("scaleAnimation");
          break;
        default:
          break;
      }
      observer.unobserve(entries[0].target);
    }
  }, options);

  allAnimation.forEach((singleElement) => {
    observer.observe(singleElement);
    const elemento = singleElement as HTMLElement;
    elemento.style.opacity = "0";
  });
}

export function scrollAtivoMobile() {
  const allAnimationMobile = document.querySelectorAll(
    "[data-animation-mobile]"
  );

  const options: IntersectionObserverInit = {
    rootMargin: "0px",
    threshold: 0.05,
  };

  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      const dataAnimation: string | null = entries[0].target.getAttribute(
        "data-animation-mobile"
      );

      switch (dataAnimation) {
        case "left":
          entries[0].target.classList.add("animation-left");
          break;
        case "right":
          entries[0].target.classList.add("animation-right");
          break;
        case "center":
          entries[0].target.classList.add("scaleAnimation");
          break;
        default:
          break;
      }

      observer.unobserve(entries[0].target);
    }
  }, options);

  allAnimationMobile.forEach((singleElement) => {
    observer.observe(singleElement);
  });
}
