const sliders = document.querySelectorAll(".slider");
sliders.forEach((slider) => {
  const slides = slider.querySelectorAll(".slider__item");
  const toggles = slider.querySelectorAll(".slider__toggle");
  const buttonPrev = slider.querySelector(".reviews__slider-button--prev");
  const buttonNext = slider.querySelector(".reviews__slider-button--next");
  let currentIndex = 0;
  console.log(slider);
  // console.log(toggles);
  function updateSlide() {
    for (let i = 0; i < slides.length; i++) {
      const isActive = i === currentIndex;

      slides[i].classList.toggle("slider__item--active", isActive);
      toggles[i].classList.toggle("slider__toggle--active", isActive);
    }
  }

  for (let i = 0; i < toggles.length; i++) {
    toggles[i].addEventListener("click", function () {
      currentIndex = i;
      updateSlide();
    });
  }
  if (buttonPrev) {
    buttonPrev.addEventListener("click", () => {
      if (currentIndex > 0) {
        currentIndex--;
      } else {
        currentIndex = slides.length - 1;
      }
      updateSlide();
    });
  }

  if (buttonNext) {
    buttonNext.addEventListener("click", () => {
      if (currentIndex < slides.length - 1) {
        currentIndex++;
      } else {
        currentIndex = 0;
      }
      updateSlide();
    });
  }
  updateSlide();
});

