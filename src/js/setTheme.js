const body = document.querySelector("body");
if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  body.classList = "dark";
} else {
  body.classList = "";
}
