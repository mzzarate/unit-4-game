var wins= 0;
var losses= 0;
var yourTotalScoreis= 0;
/* var wins= document.getElementById("wins");
var losses= document.getElementById("losses");
var yourtotalscoreis_=document.getElementById("yourtotalscoreis"); */

var firstCrystal= 0;
var secondCrystal= 0;
var thirdCrystal= 0;
var fourthcCystal= 0;
var winDiv = document.querySelector(".wins");
var lossesDiv = document.querySelector(".losses");
var randomTargetNumber = Math.floor(Math.random() * 101 + 19);
var yourtotalscoreis_ = document.querySelector("#yourTotalScoreis");
var guessNumber= 0;

var userInput = document.getElementById("guesses");

userInput.addEventListener('keyup', function(){
console.log("whatever.");
});

/* userInput.addEventListener('change', function(){
    console.log("whatever.");
}); */

//firstcrystalDiv.innerHTML = 1-12;

function generateRandom(max,min){
   return Math.floor(Math.random() * (max - min + 1)) + min 

    //alert(secretletter);
    userInput.focus();

    return secretnumber;
}
//generateRandom (101,19);
randomTargetNumber= generateRandom (101,19);
console.log (randomTargetNumber);

//generateRandom (12,1);
firstCrystal=  generateRandom (12,1);
console.log (firstCrystal);

guessNumber= generateRandom (120,19);
console.log (guessNumber);

secondCrystal=  generateRandom (12,1);
console.log (secondCrystal);

thirdCrystal=  generateRandom (12,1);
console.log (thirdCrystal);

fourthCrystal=  generateRandom (12,1);
console.log (fourthCrystal);



$("#firstCrystal").click(function(){
    yourTotalScoreis += firstCrystal;
  console.log ( yourTotalScoreis);
  $("#yourTotalScoreis").text(yourTotalScoreis);
});


$("#secondCrystal").click(function(){
    yourTotalScoreis += secondCrystal;
  console.log ( yourTotalScoreis);
  $("#yourTotalScoreis").text(yourTotalScoreis);
});

$("#thirdCrystal").click(function(){
    yourTotalScoreis += thirdCrystal;
  console.log ( yourTotalScoreis);
  $("#yourTotalScoreis").text(yourTotalScoreis);
  yourtotalscoreis_ .innerHTML='';
});

$("#fourthCrystal").click(function(){
    yourTotalScoreis += fourthCrystal;
  console.log ( yourTotalScoreis);
  $("#yourTotalScoreis").text(yourTotalScoreis);
  
});


if(currentScore > randomTargetNumber) {
           losses++
           $('#wins').html(wins)
           $('#losses').html(losses);

       }
       else if(currentScore === randomTargetNumber) {
           wins++
           $('#wins').html(wins);

       }

$('#winDiv').innerHTML  = wins
$(document).ready(function(){
    $('#link_other a').attr('target', '_blank');
  });
