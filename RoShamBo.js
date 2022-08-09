// var wins = 0;

// var losses = 0;

// var draw = 0;

// battle = function () {
//   //starting prompt
//   var userWeapon = prompt("Please choose 🛡 Shield(R) 🗡 Dagger(P) or 🏹 Bow(S)").toLowerCase();

//   //user input of Shield, Dagger or Bow
//   if (userWeapon === "shield" || userWeapon == "r") {
//     userWeapon = "Shield";
//     console.log("Shield");
//   } else if (userWeapon === "dagger" || userWeapon == "p") {
//     userWeapon = "Dagger";
//     console.log("Dagger");
//   } else if (userWeapon === "bow" || userWeapon == "s") {
//     userWeapon = "Bow";
//     console.log("Bow");
//   } else {
//     confirm("Coward!!! You have fled.");
//   }

//   //Computer random choice of Shield, Dagger or Bow
//   var trainingDummy = ["Shield", "Dagger", "Bow"];

//   var smartChoice = trainingDummy[Math.floor(Math.random() * trainingDummy.length)];
//   console.log(smartChoice);

//   // convert word to emoji
//   emojifi = function (weapon) {
//     switch (weapon) {
//       case "Dagger":
//         return "🗡";
//       case "Shield":
//         return "🛡";
//       default:
//         return "🏹";
//     }
//   };

//   var botEmoji = emojifi(smartChoice);
//   var userEmoji = emojifi(userWeapon);

//   alert("Training Dummy has chosen " + botEmoji + "!");

//   //display battle
//   alert("User: " + userEmoji + " vs " + "Bot: " + botEmoji);

//   //Possible results
//   var battleResult = ["You are Victorious!", "You have been Defeated!", "Losses on both sides, Draw!"];

//   //Result of the battle with computer as Bow
//   if (userWeapon === "Shield" && smartChoice === "Bow") {
//     alert(battleResult[0]);
//     wins++;
//   } else if (userWeapon === "Dagger" && smartChoice === "Bow") {
//     alert(battleResult[1]);
//     losses++;
//   }

//   //Result of the battle with computer as Shield
//   else if (userWeapon === "Dagger" && smartChoice === "Shield") {
//     alert(battleResult[0]);
//     wins++;
//   } else if (userWeapon === "Bow" && smartChoice === "Shield") {
//     alert(battleResult[1]);
//     losses++;
//   }
//   //Result of the battle with computer as Dagger
//   else if (userWeapon === "Bow" && smartChoice === "Dagger") {
//     alert(battleResult[0]);
//     wins++;
//   } else if (userWeapon === "Shield" && smartChoice === "Dagger") {
//     alert(battleResult[1]);
//     losses++;
//   } else if (userWeapon === smartChoice) {
//     alert(battleResult[2]);
//     draw++;
//   }

//   var playAgain = confirm("Play again? ");

//   if (playAgain) {
//     battle();
//   } else {
//     alert("Fair thee well");
//     alert("Wins: " + wins + " \nLosses: " + losses + "\nDraws: " + draw);
//     return;
//   }

//   // console.log ("linked")
// };

// battle();

// page load

document.getElementById("shield").addEventListener("click", myFunction);

console.log("shield");

function myFunction() {
  var shield = document.getElementById("shield");
  shield.style.background = "url('../Images/Shield.png') center no-repeat, yellow";
  shield.style.backgroundSize = "contain";
  shield.innerText = "";
}
