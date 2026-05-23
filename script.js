const button = document.getElementById("btn");
const output = document.getElementById("output");
const textarea = document.getElementById("dreaminput");
const floatingContainer = document.querySelector(".words");
button.addEventListener("click", () => {
        const dream = textarea.value;
        if(dream.trim() === ""){
            output.innerHTML = "please write a dream first";
            return;
        }
        output.innerHTML = "";
        let index = 0;
        const typing = setInterval(() => {
            output.innerHTML += dream[index];
            index++;
            if(index >= dream.length){
                clearInterval(typing);
            }
        }, 40);
        floatingContainer.innerHTML = "";
        const words = dream.split(" ");
        words.forEach(word => {
            if(word.length <4) return;
            const floatingWord = document.createElement("div");
            floatingWord.classList.add("word");
            floatingWord.innerText = word;
            floatingWord.style.left = Math.random() * 100 + "%";
            floatingWord.style.fontSize = (Math.random() * 20 + 15) + "px";
            floatingWord.style.animationDuration = (Math.random() * 5 + 5) + "s";
            floatingContainer.appendChild(floatingWord);
        });
        const lowerDream = dream.toLowerCase();
        if(lowerDream.includes("sad") || lowerDream.includes("dark")){
            document.querySelector(".background").style.background = "radial-gradient(circle at top, #050510, #000000)";
        }
        else if(lowerDream.includes("love") || lowerDream.includes("happy")){
            document.querySelector(".background").style.background = "radial-gradient(circle at top, #2a0a3d, #000000)";
        }
        else if(lowerDream.includes("space")){
            document.querySelector(".background").style.background = "radial-gradient(circle at top, #0f172a, #000000)";
            output.style.color = "#60a5fa";
        }
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