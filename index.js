var randomno1 = Math.floor(Math.random()*6) + 1;
var randomimage1 = "dice" + randomno1 + ".png";
var randomimagesource1 = "images/" + randomimage1;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomimagesource1)

var randomno2 = Math.floor(Math.random()*6) + 1;
var randomimage2 = "images/" + "dice" + randomno2 + ".png";
var image2 = document.querySelectorAll("img")[1].setAttribute("src",randomimage2)

if(randomno1 > randomno2){
    document.querySelector("h1").innerHTML = "Player 1 wins"
}
else if (randomno2 > randomno1){
    document.querySelector("h1").innerHTML = "Player 2 wins"
}
else{
    document.querySelector("h1").innerHTML = "It's a Draw"
}