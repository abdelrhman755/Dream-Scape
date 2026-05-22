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