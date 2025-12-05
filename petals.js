function createPetal() {
    const petal = document.createElement("div");
    petal.classList.add("petal");
    petal.style.left = Math.random() * 100 + "vw";
    petal.style.animationDuration = (Math.random() * 3 + 4) + "s";
    document.body.appendChild(petal);

    setTimeout(() => petal.remove(), 7000);
}

setInterval(createPetal, 300);
