"use strict";
const startBtn = document.querySelector(".start_btn");
const ulEffect = document.querySelector("ul");

const playerChoice = document.querySelector(".for_player");
const computerChoice = document.querySelector(".for_computer");

const content1 = document.querySelector(".content1");
const content2 = document.querySelector(".content2");
let roundTime = document.querySelector(".roundTime");

const forRock = "./img/2.png";
const forScissors = "./img/3.png";
const forPaper = "./img/1.png";
const original = "./img/4.png";
let roundOne = 0;
let roundTwo = 0;
let roundThree = 0;
let btn = 0;
let pointP = 0;
let pointC = 0;

const pointOfP = document.querySelector(".pointP");
const pointOfC = document.querySelector(".pointC");
const audio = new Audio();
audio.src = "./audio/mixkit-classic-click-1117.wav";
startBtn.addEventListener("click", function () {
  btn += 1;
  if (btn == 1) {
    ulEffect.classList.add("ul_active");
  }
});

function originalFun() {
  playerChoice.setAttribute("src", original);
  computerChoice.setAttribute("src", original);
  content1.innerHTML = " ";
  content2.innerHTML = " ";
  playerChoice.classList.add("mark");
  computerChoice.classList.add("mark");
  if (roundThree <= 2) {
    ulEffect.classList.toggle("ul_active");
  }
}

ulEffect.addEventListener("click", function (e) {
  let option = e.target;
  ulEffect.classList.toggle("ul_active");

  roundOne += 1;

  console.log(roundOne);
  function roundFun() {
    let pcChoice1 = Math.trunc(Math.random() * 3 + 1);
    let resultPc = "./img/" + pcChoice1 + ".png";
    // console.log(pcChoice1);
    if (option.classList.contains("rock")) {
      playerChoice.setAttribute("src", forRock);
      content1.innerHTML = "ကျောက်တုံး";
      if (pointP <= 2 || pointC <= 2) {
        if (pcChoice1 == 1) {
          pointC += 1;
          pointOfC.innerHTML = pointC;
        } else if (pcChoice1 == 2) {
        } else if (pcChoice1 == 3) {
          pointP += 1;
          pointOfP.innerHTML = pointP;
        }
      }
    }
    if (option.classList.contains("scissors")) {
      playerChoice.setAttribute("src", forScissors);
      content1.innerHTML = "ကတ်ကြေး";
      if (pointP <= 2 || pointC <= 2) {
        if (pcChoice1 == 1) {
          pointP += 1;
          pointOfP.innerHTML = pointP;
        } else if (pcChoice1 == 2) {
          pointC += 1;
          pointOfC.innerHTML = pointC;
        } else if (pcChoice1 == 3) {
        }
      }
    }
    if (option.classList.contains("paper")) {
      playerChoice.setAttribute("src", forPaper);
      content1.innerHTML = "စက္ကူ";
      if (pointP <= 3 || pointC <= 3) {
        if (pcChoice1 == 1) {
        } else if (pcChoice1 == 2) {
          pointP += 1;
          pointOfP.innerHTML = pointP;
        } else if (pcChoice1 == 3) {
          pointC += 1;
          pointOfC.innerHTML = pointC;
        }
      }
    }

    playerChoice.classList.remove("mark");
    computerChoice.setAttribute("src", resultPc);
    if (pcChoice1 == 1) {
      content2.innerHTML = "စက္ကူ";
    } else if (pcChoice1 == 2) {
      content2.innerHTML = "ကျောက်တုံး";
    } else if (pcChoice1 === 3) {
      content2.innerHTML = "ကတ်ကြေး";
    }

    computerChoice.classList.remove("mark");
  }

  if (roundOne == 1 || roundTwo == 1 || roundThree == 2) {
    roundFun();
    roundTwo += 1;
    roundThree += 1;
    console.log(roundThree + "I am 3");

    if (option.classList.contains("option")) {
      setTimeout(originalFun, 3000);
    }
  }
  if (roundOne == 1) {
    roundTime.innerHTML = "Round One";
  } else if (roundTwo == 2) {
    roundTime.innerHTML = "Round Two";
  } else if (roundThree == 3) {
    if (pointC < pointP) {
      roundTime.innerHTML = "You Win !";
    } else if (pointC > pointP) {
      roundTime.innerHTML = "You Lost !";
    } else {
      roundTime.innerHTML = "Draw !";
    }
  }
});
