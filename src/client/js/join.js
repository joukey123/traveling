const join = document.getElementById("join");
const errorMessage = join.querySelector("span");

const hideAnimation = [
  { opacity: 1 },
  { opacity: 0.2 },
  { opacity: 0, transform: "translate(0, 50px)" },
];
const hideAnimationOptions = {
  duration: 1000,
  easing: "linear",
  fill: "forwards",
};

const handleHideErrorMessage = () => {
  errorMessage.animate(hideAnimation, hideAnimationOptions);
};

if (errorMessage) {
  setTimeout(handleHideErrorMessage, 2000);
}
