export function scrollAtivo() {
  const allAnimation = document.querySelectorAll("[data-animation]");

  const options: IntersectionObserverInit = {
    rootMargin: "0px",
    threshold: 0.25,
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
    }
  }, options);

  allAnimation.forEach((single) => {
    observer.observe(single);
    const elemento = single as HTMLElement;
    elemento.style.opacity = "0";
  });
}
