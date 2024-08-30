var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var image1Source = "images/dice" + randomNumber1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", image1Source);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var image2Source = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", image2Source);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} else {
  document.querySelector("h1").textContent = "Draw!";
}

// My first code all made by me 😊❤

// //get a random number from 1 to 6
// function random() {
//   var random = Math.random() * 5;
//   random = Math.round(random) + 1;

//   return random;
// }

// // player one dice
// var player1Value = "";

// function player1(random) {
//   player1Value = random;

//   if (player1Value === 1) {
//     document.querySelector(".img1").setAttribute("src", "images/dice1.png");
//   } else if (player1Value === 2) {
//     document.querySelector(".img1").setAttribute("src", "images/dice2.png");
//   } else if (player1Value === 3) {
//     document.querySelector(".img1").setAttribute("src", "images/dice3.png");
//   } else if (player1Value === 4) {
//     document.querySelector(".img1").setAttribute("src", "images/dice4.png");
//   } else if (player1Value === 5) {
//     document.querySelector(".img1").setAttribute("src", "images/dice5.png");
//   } else {
//     document.querySelector(".img1").setAttribute("src", "images/dice6.png");
//   }
//   return player1Value;
// }
// player1(random());

// // player tow dice

// var player2Value = "";

// function player2(random) {
//   player2Value = random;

//   if (player2Value === 1) {
//     document.querySelector(".img2").setAttribute("src", "images/dice1.png");
//   } else if (player2Value === 2) {
//     document.querySelector(".img2").setAttribute("src", "images/dice2.png");
//   } else if (player2Value === 3) {
//     document.querySelector(".img2").setAttribute("src", "images/dice3.png");
//   } else if (player2Value === 4) {
//     document.querySelector(".img2").setAttribute("src", "images/dice4.png");
//   } else if (player2Value === 5) {
//     document.querySelector(".img2").setAttribute("src", "images/dice5.png");
//   } else {
//     document.querySelector(".img2").setAttribute("src", "images/dice6.png");
//   }
//   return player2Value;
// }

// player1(random());
// player2(random());

// if (player1Value > player2Value) {
//   document.querySelector("h1").innerHTML =
//     "<span>&#128681</span> Player 1 Wins!";
// } else if (player1Value < player2Value) {
//   document.querySelector("h1").innerHTML =
//     "Player 2 Wins! <span>&#128681</span>";
// } else {
//   document.querySelector("h1").textContent = "Draw!";
// }
