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

people.className = "people";
reserveBox.appendChild(people);
people.appendChild(peopleTable);

const day_han = [`일`, `월`, `화`, `수`, `목`, `금`, `토`];
let currentDay = new Date();

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

    // li.onclick = function (event) {
    //   if (isClicked === 0) {
    //     const second_select = document.getElementById("second_select");
    //     if (second_select === null) {
    //       li.setAttribute(`class`, `selectOn`);
    //       li.setAttribute(`id`, `fisrt_select`);
    //     } else {
    //       second_select.removeAttribute(`class`, `selectOn`);
    //       second_select.removeAttribute(`id`, `second_select`);
    //     }

    //     isClicked = 1;
    //   } else {
    //     const fisrt_select = document.getElementById("fisrt_select");
    //     if (fisrt_select === null) {
    //       li.setAttribute(`class`, `selectOn`);
    //       li.setAttribute(`id`, `second_select`);
    //     } else {
    //       fisrt_select.removeAttribute(`class`, `selectOn`);
    //       fisrt_select.removeAttribute(`id`, `fisrt_select`);
    //     }

    //     isClicked = 0;
    //   }
    // };

    li.onclick = function (event) {
      const fisrt_select = document.getElementById("fisrt_select");
      const second_select = document.getElementById("second_select");
      if (fisrt_select === null) {
        li.setAttribute(`class`, `selectOn`);
        li.setAttribute(`id`, `fisrt_select`);
      } else {
        fisrt_select.removeAttribute(`class`, `selectOn`);
        fisrt_select.removeAttribute(`id`, `fisrt_select`);
        li.setAttribute(`class`, `selectOn`);
        li.setAttribute(`id`, `fisrt_select`);
      }
      if (fisrt_select !== null && li.innerText === li.innerText) {
        fisrt_select.removeAttribute(`class`, `selectOn`);
        fisrt_select.removeAttribute(`id`, `fisrt_select`);
      }
    };

    const Checkedday = new Date(year, month, i).getDay(); //요일
    if (Checkedday == 6) {
      // arr = arr + "\n";
      const br = document.createElement("br");
      calenderTable.append(br);
    } else if (Checkedday == 0) li.setAttribute(`class`, `redColor`);

    // arr = arr + " " + i;
  }

  // console.log(year, month, date, day);
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
  //   body.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
}

for (let product of products) {
  product.addEventListener("click", handleShowProductDetail);
}
