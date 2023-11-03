const travel = document.querySelector("#travel");
const recCityContents = document.querySelector(".recCityContents");
const recCityBoxs = document.querySelectorAll(".recCityBox");
const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");

let imgNum = 0;

//선택된 이미지
const handleSelectCity = (a) => {
  const childrens = recCityContents.children;
  const textBoxs = document.querySelectorAll(".recCityDef");
  for (let textBox of textBoxs) {
    textBox.classList.add("imgTextHidden");
  }
  for (let children of childrens) {
    if (a) {
      children.className = "recCityBox";
    }
  }
  childrens[2].childNodes[1].classList.remove("imgTextHidden");
  childrens[2].classList.add(`${a}big`);
};

//뒤로보냄
const handleAppendMoveImg = () => {
  recCityContents.insertAdjacentElement("beforeend", recCityBoxs[imgNum]);
  handleSelectCity("right");
};

//앞으로보냄
const handlePrependMoveImg = () => {
  recCityContents.insertAdjacentElement("afterbegin", recCityBoxs[imgNum]);
  handleSelectCity("left");
};

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

prevBtn.addEventListener("click", handlePrevCity);
nextBtn.addEventListener("click", handleNextCity);
