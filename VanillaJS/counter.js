let count = 0;
const addBtn = document.getElementById("add")
const minusBtn = document.getElementById("minus")
const counterdisplay = document.getElementById("counter")

counterdisplay.innerText = count

addBtn.addEventListener("click", () => {
    count++;
    counterdisplay.innerText = count;
})

minusBtn.addEventListener("click", () => {
    count = count - 1;
    counterdisplay.innerText = count;
})