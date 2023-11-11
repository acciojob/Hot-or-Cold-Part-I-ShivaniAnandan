//your code here
function randomNum() {
    let min = 1;
    let max = 100;
    let secretNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    let gueInt = document.getElementById("guess");
    let button = document.querySelector(".Guess"); // Use a class selector for the button
    let respond = document.getElementById("respond");

    let previousGuess = null;

    button.addEventListener("click", function() {
        let gValue = parseInt(gueInt.value);

        if (gValue === secretNumber) {
            respond.textContent = "Congratulations! You have guessed the right number!";
        } else if (gValue < secretNumber) {
            respond.textContent = "Guess higher";
        } else {
            respond.textContent = "Guess lower";
        }

        const newDifference = Math.abs(gValue - secretNumber);

        if (previousGuess !== null) {
            const previousDifference = Math.abs(previousGuess - secretNumber);

            if (newDifference < previousDifference) {
                respond.textContent = "Getting hotter.";
            }
        }

        previousGuess = gValue;
    });
}

// Call the function to initiate the game
randomNum();
