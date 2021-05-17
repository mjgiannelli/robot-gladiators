var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this //

console.log(playerName, playerAttack, playerHealth)
var enemyName = "Roberto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    window.alert("Welcome to Robot Gladiators!");
    var propmtFight = window.prompt("Do you want to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    
    // if player chooses to fight, then fight //
    if (propmtFight === "fight" || propmtFight === "FIGHT") {

        //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
        enemyHealth = enemyHealth - playerAttack;
        // Log a resulting message to the console so we know that it worked.
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );

        // check enemy's health //
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
        }
        else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }
        // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
        playerHealth = playerHealth - enemyAttack;
        // Log a resulting message to the console so we know that it worked.
        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );

        // check player's health //
        if (playerHealth <=0) {
            window.alert(playerName + " has died!");
        }
        else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }

    // if player choses to skip // 
    } else if (propmtFight === "skip" || propmtFight === "SKIP") {
        window.alert(playerName + " has chosen to skip the fight!");
        var confirmSkip = window.confirm("Are you sure you would like to quit?");
        // if yes, leave fight //
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            // subtract money from player for skipping // 
            playerMoney = playerMoney - 2;
        }
        // if no, ask question again by running fight function again //
        else {
            fight();
        }
    } else {
        window.alert("You need to chosse a valid option. Try again!");
    }
};

fight();