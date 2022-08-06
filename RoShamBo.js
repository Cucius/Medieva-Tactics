
//starting prompt
var userWeapon = prompt("Please choose Shield(R) Sword(P) or Bow(S)");

//user input of Shield, sword or Bow
if (userWeapon === "Shield" || userWeapon == "r" || userWeapon == "R") {
    userWeapon = "Shield";
    console.log("Shield");
}else if (userWeapon === "Sword" || userWeapon == "p" || userWeapon == "P") {
    userWeapon = "Sword";
    console.log("Sword");
}else if (userWeapon === "Bow" || userWeapon == "s" || userWeapon == "S") {
    userWeapon = "Bow";
    console.log("Bow");
}else {
    confirm("Coward!!! You have fled.");

}

//Computer random choice of Shield, Sword or Bow
var trainingDummy = ["Shield","Sword","Bow"];

var smartChoice = trainingDummy [Math.floor(Math.random()*trainingDummy.length)];
console.log(smartChoice);

alert("Training Dummy has chosen " + smartChoice + "!" );

//Possible results
var battleResult = ["You are Victorious!", "You have been Defeated!", "Losses on both sides, Draw!"];

//Result of the battle with computer as Bow
if(userWeapon === "Shield" && smartChoice === "Bow" ){
    alert(battleResult[0]);
} else if (userWeapon === "Sword" && smartChoice === "Bow" ){
    alert(battleResult[1]);
}

//Result of the battle with computer as Shield
else if(userWeapon === "Sword" && smartChoice === "Shield" ){
    alert(battleResult[0]);
} else if (userWeapon === "Bow" && smartChoice === "Shield" ){
    alert(battleResult[1]);
}
//Result of the battle with computer as Sword
else if(userWeapon === "Bow" && smartChoice === "Sword" ){
    alert(battleResult[0]);

} else if (userWeapon === "Shield" && smartChoice === "Sword" ){
    alert(battleResult[1]);
}
else if (userWeapon === smartChoice){
    alert(battleResult[2]);
}


    var playAgain = confirm("Play again? ");

    
    if (playAgain) {
        battle();
    } else{
    alert("Fair thee well");
    }





var wins = 0;

var losses = 0;

var draw = 0;

alert("Wins: " + w +" \nLosses: " + losses + "\nDraws: " + draw);
// console.log ("linked")

battle()