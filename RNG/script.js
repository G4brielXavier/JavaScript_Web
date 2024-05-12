let btn_roll = document.querySelector(".roll_btn")

let random_text = document.querySelector(".random_number_text")

let min = 0
let max = 100000000000

btn_roll.addEventListener("mousedown", () => {
    random_text.style.backgroundColor = "#fff"
    random_text.style.transform = "scale(0.9)"
    random_number = Math.floor(Math.random() * (max - min + 1)) + min
    random_text.innerHTML = random_number
})

btn_roll.addEventListener("mouseup", () => {
    random_text.style.transform = "scale(1)"
    random_text.style.backgroundColor = "transparent"
})

