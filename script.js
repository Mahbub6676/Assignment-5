// heart count

const totalHearts = document.getElementById('total-heart');
const hearts = document.querySelectorAll("#heart");
let heart = 0;
for (const hrt of hearts) {
    hrt.addEventListener("click", function () {
        heart++;
        totalHearts.innerText = heart;
    })
}


// Call Buttons
let coins = 100;
const coinDisplay = document.getElementById("coin-btn");
const callButtons = document.querySelectorAll("#call-btn");

for (const btn of callButtons) {
    btn.addEventListener("click", function () {
        const service = btn.getAttribute("data-service");
        const number = btn.getAttribute("data-number");
        if (coins < 20) {
            alert("Not enough coins for a call!");
            return;
        }
        coins -= 20;
        coinDisplay.innerText = coins;
        alert(`Calling ${service} at ${number}...`);
    });
}


let buttons = document.querySelectorAll(".copy-btn");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        let number = this.getAttribute("data-number");
        navigator.clipboard.writeText(number)
        alert("Copied: " + number);
    });
}

