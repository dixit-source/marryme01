const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const message = document.getElementById("message");

noBtn.addEventListener("mouseover", () => {

const area = document.querySelector(".buttons");

const maxX = area.clientWidth - noBtn.offsetWidth;
const maxY = area.clientHeight - noBtn.offsetHeight;

const randomX = Math.random() * maxX;
const randomY = Math.random() * maxY;

noBtn.style.left = randomX + "px";
noBtn.style.top = randomY + "px";

});

yesBtn.addEventListener("click", () => {

message.innerHTML = "Yay!! ❤️ I Love You Forever 💍🥰";

});
