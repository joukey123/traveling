const travel = document.querySelector("#travel");
const recCityContents = document.querySelector(".recCityContents");
const recCityBoxs = document.querySelectorAll(".recCityBox");
const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");
const recVideo = document.querySelector(".recVideo");
const moreBtn = document.querySelector(".moreBtn");
const childrens = recCityContents.children;

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

//선택된 이미지
const handleSelectCity = () => {
  const textBoxs = document.querySelectorAll(".recCityDef");
  for (let textBox of textBoxs) {
    textBox.classList.add("imgTextHidden");
  }
  for (let children of childrens) {
    children.className = "recCityBox";
  }
  childrens[2].childNodes[1].classList.remove("imgTextHidden");
  childrens[2].classList.add(`big`);
};

//뒤로보냄 //왼쪽버튼
const handleAppendMoveImg = () => {
  recCityContents.insertAdjacentElement("beforeend", recCityBoxs[imgNum]);
  handleSelectCity();
};

//앞으로보냄 //오른쪽버튼
const handlePrependMoveImg = () => {
  recCityContents.insertAdjacentElement("afterbegin", recCityBoxs[imgNum]);
  handleSelectCity();
};
handleAppendMoveImg;
const handlePrevCity = () => {
  handleAppendMoveImg();
  imgNum++;
  if (imgNum >= 5) {
    imgNum = 0;
  }
};
const handleNextCity = () => {
  if (imgNum <= 0) {
    imgNum = 4;
  } else {
    imgNum--;
  }
  handlePrependMoveImg();
};

handleSelectCity("");

moreBtn.addEventListener("click", handleShowVideo);
prevBtn.addEventListener("click", handlePrevCity);
nextBtn.addEventListener("click", handleNextCity);
