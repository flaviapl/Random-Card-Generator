/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { read } from "@popperjs/core";

const generateNewCard = function() {
  let suit = ["♦", "♥", "♠", "♣"];
  let number = ["A", 2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K"];

  function generateRandom(array) {
    let random = Math.floor(Math.random() * array.length);
    return array[random];
  }
  console.log(generateRandom(suit));
  console.log(generateRandom(number));

  let x = generateRandom(suit);

  let suitVal = document.querySelector(".sign");
  let numbVal = document.querySelector(".num");
  let suitVal2 = document.querySelector(".sign2");
  suitVal.innerHTML = x;
  numbVal.innerHTML = generateRandom(number);
  suitVal2.innerHTML = x;

  if (x === "♦" || x === "♥") {
    suitVal.style.color = "red";
    suitVal2.style.color = "red";
    numbVal.style.color = "red";
  } else {
    suitVal.style.color = "black";
    suitVal2.style.color = "black";
    numbVal.style.color = "black";
  }
};

let buttVar = document.querySelector(".butt");
buttVar.addEventListener("click", generateNewCard);

window.onload = generateNewCard();
