// Game board


// Gamestart
const startGameBtn = document.getElementById("playGame-btn");
startGameBtn.addEventListener("click", startGame)

function startGame() {
    const gameStyle = document.querySelector(".players-modal");

    gameStyle.style.display = "flex";
} 