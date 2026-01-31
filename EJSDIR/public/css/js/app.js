const btns = document.querySelectorforAll("button");

for(btn of btns) {
    btns.addEventListener("click",() => {
        console.log(`This Event Was Clicked!`);
    });
}