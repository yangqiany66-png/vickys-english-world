let xp = Number(localStorage.getItem("vicky_xp")) || 0;
let coins = Number(localStorage.getItem("vicky_coins")) || 0;
let streak = Number(localStorage.getItem("vicky_streak")) || 0;

function updateStats() {
  const level = Math.floor(xp / 100) + 1;

  const statValues = document.querySelectorAll(".stat-value");

  if (statValues.length >= 3) {
    statValues[0].textContent = level;
    statValues[1].textContent = coins + " 🪙";
    statValues[2].textContent = streak + " 🔥";
  }
}

function startMission() {
  xp += 20;
  coins += 5;

  localStorage.setItem("vicky_xp", xp);
  localStorage.setItem("vicky_coins", coins);

  updateStats();

  alert(
    "🎉 Mission started!\n\n+20 XP\n+5 Coins\n\nKeep going, Vicky!"
  );
}

function addMissionButton() {
  const button = document.querySelector(".button");

  if (button) {
    button.addEventListener("click", function(event) {
      event.preventDefault();
      startMission();
    });
  }
}

document.addEventListener("DOMContentLoaded", function() {
  updateStats();
  addMissionButton();
});
