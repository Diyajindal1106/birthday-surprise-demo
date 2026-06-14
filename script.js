const btn = document.getElementById("surpriseBtn");
const surpriseContent = document.getElementById("surpriseContent");
const music = document.getElementById("bgMusic");

btn.addEventListener("click", () => {

    music.volume = 0;
music.play();

let volume = 0;

const fade = setInterval(() => {

  if(volume < 0.3){
    volume += 0.02;
    music.volume = volume;
  } else {
    clearInterval(fade);
  }

}, 200);
  surpriseContent.classList.remove("hidden");

  surpriseContent.scrollIntoView({
    behavior: "smooth"
  });

});
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {

  reveals.forEach((element) => {

    const windowHeight = window.innerHeight;
    const revealTop = element.getBoundingClientRect().top;

    if(revealTop < windowHeight - 100){
      element.classList.add("active");
    }

  });

});
const heartsContainer = document.querySelector(".hearts");

function createHeart(){

  const heart = document.createElement("div");

  heart.classList.add("heart");

  heart.innerHTML = "❤️";

  heart.style.left = Math.random() * 100 + "vw";

  heart.style.animationDuration =
    Math.random() * 3 + 4 + "s";

  heart.style.fontSize =
    Math.random() * 10 + 15 + "px";

  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 7000);

}

setInterval(createHeart, 400);

window.addEventListener("load", () => {

  const loader = document.querySelector(".loader");

  setTimeout(() => {

    loader.style.opacity = "0";

    setTimeout(() => {
      loader.style.display = "none";
    }, 1000);

  }, 2000);

});