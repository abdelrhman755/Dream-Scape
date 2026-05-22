const button = document.getElementById("btn");
const output = document.getElementById("output");
button.addEventListener("click", () => {
    const input = document.getElementById("dreaminput").value;
    if(input.trim() === ""){
        output.innerHTML = "please write your dream first.";
        return;
    }
    output.innerHTML = `"${input}"`;
});

const starscontainer = document.querySelector(".stars");
for(let i =0; i < 100; i++){
    const star = document.createElement("div");
    star.classList.add("star");
    star.style.top = Math.random() * 100 + "%";
    star.style.left = Math.random() * 100 + "%";
    star.style.animationDuration = (Math.random() * 3 +2) + "s";
    starscontainer.appendChild(star);
}