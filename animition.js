window.addEventListener("load", () => {
  setTimeout(() => {
    const splash = document.getElementById("splash");
    const content = document.getElementById("main-content");

    splash.style.opacity = 0;
    splash.style.visibility = "hidden";
    content.classList.remove("hidden");
  }, 2500); // Show splash screen for 2.5 seconds
});
