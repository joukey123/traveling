import "../scss/styles.scss";
const mainBanner = document.querySelector(".mainBanner");
const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");
const mainBannerImges = document.querySelectorAll(".mainBanner__contents");
const bannerCircles = document.querySelectorAll(".circle");

let imgNumber = 0; //메인배너 롤링 초기값 셋팅
let setTimeoutPrevId;
let setTimeoutNextId;
let setIntervalId;

//배너 자동재생 멈춤 시작 (배너 마우스오버 유무)
const handleStopInterval = () => {
  clearInterval(setIntervalId);
};
const handleStratInterval = () => {
  setIntervalId = setInterval(handleNextBtn, 5000);
};
//메인 배너 다음버튼
const handleShowNextBtn = () => {
  clearTimeout(setTimeoutNextId);
  nextBtn.style.opacity = "1";
  nextBtn.removeEventListener("mouseover", handleShowNextBtn);
  nextBtn.addEventListener("mouseleave", handleHideNextBtn);
};
const handleHideNextBtn = () => {
  setTimeoutNextId = setTimeout(() => {
    nextBtn.style.opacity = "0";
  }, 2000);
  nextBtn.addEventListener("mouseover", handleShowNextBtn);
};
//메인배너 이전버튼
const handleShowPrevBtn = () => {
  clearTimeout(setTimeoutPrevId);
  prevBtn.style.opacity = "1";
  prevBtn.removeEventListener("mouseover", handleShowPrevBtn);
  prevBtn.addEventListener("mouseleave", handleHidePrevBtn);
};
const handleHidePrevBtn = () => {
  setTimeoutPrevId = setTimeout(() => {
    prevBtn.style.opacity = "0";
  }, 2000);
  prevBtn.addEventListener("mouseover", handleShowPrevBtn);
};

//메인배너 롤링
const handleMainBannerImges = () => {
  for (let mainBannerImge of mainBannerImges) {
    mainBannerImge.style.transform = "translate(-100%,0)";
  } //배너 이미지 초기화
  for (let bannerCircle of bannerCircles) {
    bannerCircle.style.transform = "";
  } //배너 하단 원 초기화
  mainBannerImges[imgNumber].style.transform = "translate(0,0%)";
  bannerCircles[imgNumber].style.transform = "scale(1.5)";
};

const handlePrevBtn = () => {
  if (imgNumber <= 0) {
    imgNumber = mainBannerImges.length - 1;
  } else {
    imgNumber--;
  }
  handleMainBannerImges();
};

const handleNextBtn = () => {
  if (imgNumber >= mainBannerImges.length - 1) {
    imgNumber = 0;
  } else {
    imgNumber++;
  }
  handleMainBannerImges();
};
handleMainBannerImges();
handleStratInterval(); // 배너 5초 자동 재생

prevBtn.addEventListener("click", handlePrevBtn);
prevBtn.addEventListener("mouseover", handleShowPrevBtn);
nextBtn.addEventListener("click", handleNextBtn);
nextBtn.addEventListener("mouseover", handleShowNextBtn);
mainBanner.addEventListener("mouseover", handleStopInterval);
mainBanner.addEventListener("mouseleave", handleStratInterval);
