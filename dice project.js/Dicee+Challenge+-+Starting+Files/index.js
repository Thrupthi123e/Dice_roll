var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomDiceImaage ="dice"+randomNumber1+".png";//dice1.png
var randomImageSource = "./images/"+randomDiceImaage; //./images/dice1.png

var image1= document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource);

var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomDiceImage2 = "dice"+randomNumber2+".png";
var randomImageSource2 = "./images/" + randomDiceImage2;

var image2 =document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource2);

if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").innerHTML="player 1 wins!";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML ="player 2 wins!";

}
else{
    document.querySelector("h1").innerHTML ="Draw!";
}

