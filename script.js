// console.log("Привет, мир!");
// console.log(12345);
// console.log("5+5");
// console.log(5+5);

// console.log("10+10="+(10+10));
// console.log("6*9 + 6+9 = "+(6*9+6+9));
// console.log(10+6/2);
// console.log(10*5-60);
// console.log(4**2);

// console.log("машины:");
// console.log("   BMW");
// console.log("   AUDI");
// console.log("   VOLKSWAGEN");

// let car="LAMBORGHINI"
// console.log(car);

// let number=100
// console.log(number);
// console.log(number*2);

// let spisok=`расписание на пятницу:
//    8:00 технология
//    8:50 технология
//    9:40 литература
//    10:30 география
//    11:20 биология
//    14:00 программирование
// `
// console.log(spisok);

// let boys="12";
// console.log(boys*2);
// console.log(boys+2);

// let russia=17100000
// let canada=9985000
// let china=9597000
// let usa=9834000
// let japan=377975

// console.log("площадь России "+russia+"км²");
// console.log("площадь Канады "+canada+"км²");
// console.log("площадь Китая "+china+"км²");
// console.log("площадь США "+usa+"км²");
// console.log("площадь Японии "+japan+"км²");







let health = 3
let min = 1
let max = 10
let secretNumber = Math.floor(Math.random() * max + min)
console.log("secret=" + secretNumber);
console.log("hp=" + health);

let title = document.getElementById("title")
let winText = document.getElementById("winText")
let healthMeter = document.getElementById("healthMeter")
let resetButton = document.getElementById("resetButton")
let checkButton = document.getElementById("checkButton")
let numberInput = document.getElementById("numberInput")
let hintDisplay = document.getElementById("hintDisplay")
let mode = "easy"
let easyMode = document.getElementById("easyMode")
let normalMode = document.getElementById("normalMode")
let hardMode = document.getElementById("hardMode")



easyMode.onclick = function () {
   let activeButton = document.getElementsByClassName("activeButton")[0]
   activeButton.classList.remove("activeButton")
   easyMode.classList.add("activeButton")

   mode = "easy"
   console.log(mode + " режим включен");
   min = 1
   max = 10
   title.innerHTML = `угадай число (от ${min} до ${max})`
   newGame()
}

normalMode.onclick = function () {
   let activeButton = document.getElementsByClassName("activeButton")[0]
   activeButton.classList.remove("activeButton")
   normalMode.classList.add("activeButton")

   mode = "normal"
   console.log(mode + " режим включен")
   min = 1
   max = 50
   title.innerHTML = `угадай число (от ${min} до ${max})`
   newGame()
}

hardMode.onclick = function () {
   let activeButton = document.getElementsByClassName("activeButton")[0]
   activeButton.classList.remove("activeButton")
   hardMode.classList.add("activeButton")

   mode = "hard"
   console.log(mode + " режим включен");
   min = 1
   max = 100
   title.innerHTML = `угадай число (от ${min} до ${max})`
   newGame()
}

function newGame() {
   if (mode == "easy") {
      health = 3
   }
   else if (mode == "normal") {
      health = 5
   }
   else if (mode == "hard") {
      health = 7
   }
   secretNumber = Math.floor(Math.random() * max + min)
   console.log("secret=" + secretNumber);
   console.log("hp=" + health);
   healthMeter.innerHTML = "Жизни: " + health
   winText.style.transform = "translate(-50%, -50%) scale(0)"
   hintDisplay.innerHTML = "Вводи число и нажимай проверить"
   checkButton.disabled = false
}

// title.innerHTML = "угадай число (от " + min + " до " + max + ")"
title.innerHTML = `угадай число (от ${min} до ${max})`

// console.log(checkButton);
healthMeter.innerHTML = "Жизни: " + health

resetButton.onclick = function () {
   newGame()
}

checkButton.onclick = function (event) {
   // "event.preventDefault()" чтобы не обновлять страницу
   event.preventDefault();

   // console.log("Button test");
   // console.log(numberInput.value);
   if (health > 0) {
      if (secretNumber == numberInput.value) {
         console.log("Ты выиграл!");
         // title.innerHTML = "Ты выиграл!"
         winText.innerHTML = "Ты выиграл!"
         winText.style.transform = "translate(-50%, -50%) scale(1)"
         hintDisplay.innerHTML = "ㅤ"
         checkButton.disabled = true
      }
      else if (secretNumber > numberInput.value) {
         console.log("Секретное число больше.")
         hintDisplay.innerHTML = "Секретное число больше."
         health -= 1
      }
      else if (secretNumber < numberInput.value) {
         console.log("Секретное число меньше.");
         hintDisplay.innerHTML = "Секретное число меньше."
         health -= 1
      }
      else {
         console.log("Ошибка.");
         hintDisplay.innerHTML = "Ошибка."
      }
   }
   // else{
   //    console.log("Ты проиграл!");
   //    title.innerHTML = "Ты Проиграл!"
   // }
   console.log("hp=" + health);
   healthMeter.innerHTML = "Жизни: " + health

   if (health < 1) {
      console.log("Ты проиграл!");
      winText.style.transform = "translate(-50%, -50%) scale(1)"
      winText.innerHTML = "Ты Проиграл! Секретное число было " + secretNumber
      hintDisplay.innerHTML = "ㅤ"
      checkButton.disabled = true
   }
}