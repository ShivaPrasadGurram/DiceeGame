var player1 = prompt("Name of player1?");
var player2 = prompt("Name of player2?");

document.querySelectorAll("p")[0].innerHTML = player1;
document.querySelectorAll("p")[1].innerHTML = player2;


function myFunction()
{
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomImage1 = "images/dice" + randomNumber1 +".png";
    var image1 = document.querySelectorAll("img")[0];
    image1.setAttribute("src",randomImage1);

    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    var randomImage2 = "images/dice" + randomNumber2 +".png";
    var image2 = document.querySelectorAll("img")[1];
    image2.setAttribute("src",randomImage2);


    //If player 1 wins
    if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩" +player1+" Wins!";
    }
   else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = player2 +" Wins! 🚩";
   }
   else {
    document.querySelector("h1").innerHTML = "Draw!";
   }
  
}