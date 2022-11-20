let myText= document.getElementById("my-Text");
myText.addEventListener("input", () => {
    let count= (myText.value).length;
    console.log(count)
    document.getElementById("count-result").textContent =`Total characters: ${count}`;
});