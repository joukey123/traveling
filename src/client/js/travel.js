const recVideo = document.querySelector(".recVideo");
const moreBtn = document.querySelector(".moreBtn");

let imgNum = 0;
const handlesHideVideo = () => {
  recVideo.style.height = "28rem";
  moreBtn.innerText = "더보기";
  moreBtn.addEventListener("click", handleShowVideo);
  moreBtn.removeEventListener("click", handlesHideVideo);
};

const handleShowVideo = () => {
  recVideo.style.height = "56rem";
  moreBtn.innerText = "접기";
  moreBtn.removeEventListener("click", handleShowVideo);
  moreBtn.addEventListener("click", handlesHideVideo);
};

moreBtn.addEventListener("click", handleShowVideo);
