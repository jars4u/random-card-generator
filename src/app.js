/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let card = document.getElementById("card");
  card.style.backgroundColor = "white";
  card.style.display = "flex";
  card.style.justifyContent = "center";
  card.style.width = "250px";
  card.style.height = "375px";
  card.style.borderRadius = "10px";
  card.style.margin = "auto";
  card.style.marginTop = "100px";

  let values = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  switch (Math.floor(Math.random() * 4)) {
    case 0:
      let upperZero = document.createElement("div");
      upperZero.style.display = "flex";
      upperZero.textContent = "♥";
      upperZero.style.color = "red";
      upperZero.style.fontSize = "5em";

      let valueZero = document.createElement("div");
      valueZero.textContent = values[Math.floor(Math.random() * 13)];
      valueZero.style.color = "red";
      valueZero.style.fontSize = "6em";
      valueZero.style.color = "red";
      valueZero.style.margin = "0";
      valueZero.style.alignSelf = "center";

      let lowerZero = document.createElement("div");
      lowerZero.style.display = "flex";
      lowerZero.textContent = "♥";
      lowerZero.style.color = "red";
      lowerZero.style.fontSize = "5em";
      lowerZero.style.alignSelf = "end";

      card.appendChild(upperZero);
      card.appendChild(valueZero);
      card.appendChild(lowerZero);

      break;

    case 1:
      let upperOne = document.createElement("div");
      upperOne.style.display = "flex";
      upperOne.textContent = "♦";
      upperOne.style.color = "red";
      upperOne.style.fontSize = "5em";

      let valueOne = document.createElement("div");
      valueOne.textContent = values[Math.floor(Math.random() * 13)];
      valueOne.style.color = "red";
      valueOne.style.fontSize = "6em";
      valueOne.style.color = "red";
      valueOne.style.margin = "0";
      valueOne.style.alignSelf = "center";

      let lowerOne = document.createElement("div");
      lowerOne.style.display = "flex";
      lowerOne.textContent = "♦";
      lowerOne.style.color = "red";
      lowerOne.style.fontSize = "5em";
      lowerOne.style.alignSelf = "end";

      card.appendChild(upperOne);
      card.appendChild(valueOne);
      card.appendChild(lowerOne);

      break;

    case 2:
      let upperTwo = document.createElement("div");
      upperTwo.style.display = "flex";
      upperTwo.textContent = "♠";
      upperTwo.style.color = "black";
      upperTwo.style.fontSize = "5em";

      let valueTwo = document.createElement("div");
      valueTwo.textContent = values[Math.floor(Math.random() * 13)];
      valueTwo.style.color = "red";
      valueTwo.style.fontSize = "6em";
      valueTwo.style.color = "black";
      valueTwo.style.margin = "0";
      valueTwo.style.alignSelf = "center";

      let lowerTwo = document.createElement("div");
      lowerTwo.style.display = "flex";
      lowerTwo.textContent = "♠";
      lowerTwo.style.color = "black";
      lowerTwo.style.fontSize = "5em";
      lowerTwo.style.alignSelf = "end";

      card.appendChild(upperTwo);
      card.appendChild(valueTwo);
      card.appendChild(lowerTwo);

      break;

    case 3:
      let upperThree = document.createElement("div");
      upperThree.style.display = "flex";
      upperThree.textContent = "♣";
      upperThree.style.color = "black";
      upperThree.style.fontSize = "5em";

      let valueThree = document.createElement("div");
      valueThree.textContent = values[Math.floor(Math.random() * 13)];
      valueThree.style.color = "red";
      valueThree.style.fontSize = "6em";
      valueThree.style.color = "black";
      valueThree.style.margin = "0";
      valueThree.style.alignSelf = "center";

      let lowerThree = document.createElement("div");
      lowerThree.style.display = "flex";
      lowerThree.textContent = "♣";
      lowerThree.style.color = "black";
      lowerThree.style.fontSize = "5em";
      lowerThree.style.alignSelf = "end";

      card.appendChild(upperThree);
      card.appendChild(valueThree);
      card.appendChild(lowerThree);

      break;
  }
};
