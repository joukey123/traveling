const products = document.querySelectorAll(".productlist-component");
const body = document.querySelector("body");

//예약확인박스
const reserveBox = document.createElement("div");
//달력선택
const calender = document.createElement("div");
const calenderTable = document.createElement("div");
const monthTitle = document.createElement("div");

//인원선택
const people = document.createElement("div");
const peopleTable = document.createElement("div");
const adultDiv = document.createElement("div");
const childDiv = document.createElement("div");
const resultPay = document.createElement("div");
people.className = "people";
peopleTable.className = "peopleTable";
reserveBox.appendChild(people);
people.appendChild(peopleTable);
peopleTable.appendChild(adultDiv);
adultDiv.id = "adult";
peopleTable.appendChild(childDiv);
childDiv.id = "child";
peopleTable.appendChild(resultPay);
resultPay.id = "result";
const totalDiv = document.createElement("div");
const reservePrice = document.createElement("h4");
const reserveDate = document.createElement("small");

const day_han = [`일`, `월`, `화`, `수`, `목`, `금`, `토`];
let currentDay = new Date();
let adultNumber = 0;
let childNumber = 0;
let totalPrice = 0;
reservePrice.innerText = "";
reserveDate.innerText = "";

function paintPeople(clone) {
  paintAdultPeople(clone);
  paintChildPeople(clone);
  paintResultPay(clone);
}
function sum(clone) {
  const adultPrice = parseInt(
    clone.querySelector(".productlist-price").innerText
  );
  const childPrice = adultPrice * 0.8;
  totalPrice = adultNumber * adultPrice + childNumber * childPrice;
  reservePrice.innerText = `${totalPrice} $`;
  totalDiv.appendChild(reservePrice);
}
function paintResultPay(clone) {
  totalDiv.className = "totalPrice";
  sum(clone);
  totalDiv.prepend(reserveDate);
  resultPay.appendChild(totalDiv);
  const buttonDiv = document.createElement("div");
  buttonDiv.className = "btnBox";
  const payBtn = document.createElement("button");
  payBtn.className = "payBtn";
  payBtn.innerText = "결제";
  const cartBtn = document.createElement("button");
  cartBtn.className = "cartBtn";
  cartBtn.innerText = "장바구니";
  resultPay.appendChild(buttonDiv);
  buttonDiv.appendChild(payBtn);
  buttonDiv.appendChild(cartBtn);
}

function paintChildPeople(clone) {
  const childIcon = document.createElement("i");
  childIcon.className = "fa-solid fa-child";
  const childSpan = document.createElement("span");
  childSpan.innerText = "어린이";
  const price = clone.querySelector(".productlist-price");
  const childPrice = document.createElement("span");
  childPrice.innerText = `${parseInt(price.innerText * 0.8)} $`;
  const decreaseBtn = document.createElement("button");
  const decreaseBtnIcon = document.createElement("i");
  decreaseBtnIcon.className = "fa-solid fa-minus";
  decreaseBtn.appendChild(decreaseBtnIcon);
  const increaseBtn = document.createElement("button");
  const increaseBtnIcon = document.createElement("i");
  increaseBtnIcon.className = "fa-solid fa-plus";
  increaseBtn.appendChild(increaseBtnIcon);
  const numberBox = document.createElement("div");
  const number = document.createElement("h3");
  numberBox.appendChild(number);
  childIcon.appendChild(childSpan);
  childDiv.appendChild(childIcon);
  childDiv.appendChild(childPrice);
  childDiv.appendChild(decreaseBtn);
  childDiv.appendChild(numberBox);
  childDiv.appendChild(increaseBtn);
  number.innerText = childNumber;

  decreaseBtnIcon.addEventListener("click", (event) => {
    if (childNumber <= 0) {
      return 0;
    } else {
      childNumber--;
      number.innerText = childNumber;
    }
    sum(event.target.parentNode.offsetParent);
  });
  increaseBtnIcon.addEventListener("click", (event) => {
    childNumber++;
    number.innerText = childNumber;
    sum(event.target.parentNode.offsetParent);
  });
}

function paintAdultPeople(clone) {
  const adultIcon = document.createElement("i");
  adultIcon.className = "fa-solid fa-person";
  const adultSpan = document.createElement("span");
  adultSpan.innerText = "성인";
  const price = clone.querySelector(".productlist-price");
  const adultPrice = document.createElement("span");
  adultPrice.innerText = `${price.innerText} $`;
  const decreaseBtn = document.createElement("button");
  const decreaseBtnIcon = document.createElement("i");
  decreaseBtnIcon.className = "fa-solid fa-minus";
  decreaseBtn.appendChild(decreaseBtnIcon);
  const increaseBtn = document.createElement("button");
  const increaseBtnIcon = document.createElement("i");
  increaseBtnIcon.className = "fa-solid fa-plus";
  increaseBtn.appendChild(increaseBtnIcon);
  const numberBox = document.createElement("div");
  const number = document.createElement("h3");
  numberBox.appendChild(number);
  adultIcon.appendChild(adultSpan);
  adultDiv.appendChild(adultIcon);
  adultDiv.appendChild(adultPrice);
  adultDiv.appendChild(decreaseBtn);
  adultDiv.appendChild(numberBox);
  adultDiv.appendChild(increaseBtn);
  number.innerText = adultNumber;

  decreaseBtnIcon.addEventListener("click", (event) => {
    if (adultNumber <= 0) {
      return 0;
    } else {
      adultNumber--;
      number.innerText = adultNumber;
    }
    sum(event.target.parentNode.offsetParent);
  });
  increaseBtnIcon.addEventListener("click", (event) => {
    adultNumber++;
    number.innerText = adultNumber;
    sum(event.target.parentNode.offsetParent);
  });
}

function paintCalender() {
  // let arr = "";

  let i = 1;
  let a = 1;

  const year = currentDay.getFullYear();
  const month = currentDay.getMonth();
  const date = currentDay.getDate();
  const day = currentDay.getDay(); //요일

  const lastdate = new Date(year, month + 1, 0).getDate(); //마지막 날짜 구하기, 마지막 인자가 0 이면 저번달 마지막 날짜를 구한다!!
  const lastday = new Date(year, month, lastdate).getDay(); //마지막 날짜 요일 구하기.

  const firstday = new Date(year, month, 1).getDay(); //시작하는 요일 구하기
  const lastdate_1 = new Date(year, month, 0).getDate(); //마지막 날짜 구하기, 마지막 인자가 0 이면 저번달 마지막 날짜를 구한다!!

  let b = lastdate_1 - firstday + 1;
  let c = 1;

  //firstday ==> 6
  const monthBox = document.createElement("div");
  monthBox.className = "monthBox";
  const h1 = document.createElement("h1"); //달month
  const small = document.createElement("small"); //년year
  const prevBtn = document.createElement("button");
  const prevBtnIcon = document.createElement("i");
  prevBtn.id = "prevBtn";
  prevBtnIcon.className = "fa-solid fa-chevron-left";
  prevBtn.appendChild(prevBtnIcon);
  const nextBtn = document.createElement("button");
  const nextBtnIcon = document.createElement("i");
  nextBtn.id = "nextBtn";
  nextBtnIcon.className = "fa-solid fa-chevron-right";
  nextBtn.appendChild(nextBtnIcon);
  monthTitle.appendChild(prevBtn);
  monthBox.appendChild(h1);
  monthBox.appendChild(small);

  monthTitle.appendChild(monthBox);
  monthTitle.appendChild(nextBtn);
  calender.prepend(monthTitle);

  prevBtn.addEventListener("click", preMonth);
  nextBtn.addEventListener("click", nextMonth);

  h1.innerText = `${month + 1} 월`;
  small.innerText = `${year}년`;
  //   console.log(`Today is ${year}년 ${month + 1}월 입니다.`);
  //   console.log(`이번 달의 마지막 일은 ${lastdate} 입니다.`);
  //   console.log(`이번 달 시작 요일은 ${firstday} 입니다.`);
  //   console.log(`저번 달 마지막 일은 ${lastdate_1} 입니다.`);

  //요일
  for (day_title = 0; day_title < day_han.length; day_title++) {
    const day_li = document.createElement("li");
    calenderTable.append(day_li);
    day_li.innerText = day_han[day_title];

    if (day_title == 6) {
      const br = document.createElement("br");
      calenderTable.append(br);
    }

    if (day_title == 0) day_li.setAttribute(`class`, `redColor`);
  }

  //앞쪽 빈칸 채우기
  for (a; a <= firstday; a++) {
    // arr = arr + `[]`;
    for (b; b <= lastdate_1; b++) {
      const blank_li = document.createElement("li");
      calenderTable.append(blank_li);
      blank_li.setAttribute(`class`, `gray`);
      blank_li.innerText = b;
    }
  }

  for (i; i <= lastdate; i++) {
    const li = document.createElement("li");
    calenderTable.append(li);
    li.innerText = i;
    if (i === date) {
      li.setAttribute(`class`, `selectOn`);
      li.setAttribute(`id`, `fisrt_select`);
      reserveDate.innerText = `${year}년 ${month + 1}월 ${date}일`;
    }

    li.onclick = function (event) {
      const fisrt_select = document.getElementById("fisrt_select");
      // const second_select = document.getElementById("second_select");
      if (fisrt_select === null) {
        li.setAttribute(`class`, `selectOn`);
        li.setAttribute(`id`, `fisrt_select`);
      } else {
        fisrt_select.removeAttribute(`class`, `selectOn`);
        fisrt_select.removeAttribute(`id`, `fisrt_select`);
        li.setAttribute(`class`, `selectOn`);
        li.setAttribute(`id`, `fisrt_select`);
      }
      // if (fisrt_select !== null && li.innerText === li.innerText) {
      //   fisrt_select.removeAttribute(`class`, `selectOn`);
      //   fisrt_select.removeAttribute(`id`, `fisrt_select`);
      // }
      reserveDate.innerText = `${year}년 ${month + 1}월 ${
        event.target.innerText
      }일`;
    };

    const Checkedday = new Date(year, month, i).getDay(); //요일
    if (Checkedday == 6) {
      // arr = arr + "\n";
      const br = document.createElement("br");
      calenderTable.append(br);
    } else if (Checkedday == 0) li.setAttribute(`class`, `redColor`);

    // arr = arr + " " + i;
  }

  console.log(year, month, date, day);
  // console.log(arr);
  for (c; c <= 6 - lastday; c++) {
    const last_li = document.createElement("li");
    calenderTable.append(last_li);
    last_li.innerText = c;
    last_li.setAttribute(`class`, `gray`);
  }
}

function nextMonth() {
  currentDay.setMonth(currentDay.getMonth() + 1); // 현재 달을 1 증가
  reset();
  paintCalender();
}

function preMonth() {
  currentDay.setMonth(currentDay.getMonth() - 1); // 현재 달을 1 증가
  reset();
  paintCalender();
}

function reset() {
  monthTitle.innerHTML = "";
  calenderTable.innerHTML = "";
}

function handleShowProductDetail() {
  const bgDiv = document.createElement("div");
  bgDiv.id = "selectProduct";
  const clone = this.cloneNode(true);
  body.appendChild(bgDiv);
  bgDiv.appendChild(clone);
  //달력
  reserveBox.id = "reserveBox";
  const cloneText = clone.querySelector(".productlist-text");
  cloneText.appendChild(reserveBox);
  reserveBox.prepend(calender);
  calender.appendChild(calenderTable);
  calender.className = "calender";
  calenderTable.className = "calenderTable";
  monthTitle.className = "monthTitle";
  paintCalender();
  paintPeople(clone);
  //   body.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
}

for (let product of products) {
  product.addEventListener("click", handleShowProductDetail);
}
