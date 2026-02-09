function paddingNav() {
  const windowInnerWidth = window.innerWidth;
  const header = document.querySelector(".main-nav");
  // console.log("lf");
  if (windowInnerWidth > 768) {
    document.body.style.paddingTop = header.offsetHeight + "px";
  } else {
    document.body.style.paddingTop = 0 + "px";
  }
}
paddingNav();
window.addEventListener("resize", paddingNav);
