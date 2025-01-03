// Header fix
if (typeof window !== "undefined") {
  window.addEventListener("scroll", () => {
    const headerBottom = document.querySelector("#headerBottom");
    const scrollVerticalPos = window.scrollY;
    if (headerBottom && scrollVerticalPos > 200) {
      headerBottom.classList.add("stuck");
    } else if(headerBottom && scrollVerticalPos <= 200){
      headerBottom.classList.remove("stuck");
    }
  });
}
