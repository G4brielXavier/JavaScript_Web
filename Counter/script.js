let num = document.querySelector(".num_text")
let multi = document.querySelector(".multi_text")

let btn_minus = document.querySelector(".minus_count")
let btn_plus = document.querySelector(".plus_count")

let btn_x_minus = document.querySelector(".x_minus")
let btn_x_plus = document.querySelector(".x_plus")

count_number = 0
multi_count = 1

btn_x_minus.addEventListener("click", () => {
    if (multi_count > 1)
    {
        multi_count -= 1
        multi.innerHTML = "x" + multi_count
    }
})

btn_x_plus.addEventListener("click", () => {
    if (multi_count < 10)
    {
        multi_count += 1
        multi.innerHTML = "x" + multi_count
    }
})


btn_plus.addEventListener("mousedown", ()=> 
{
    if (count_number < 10000)
    {
        count_number += multi_count
        num.innerHTML = count_number
    }
})

btn_minus.addEventListener("mousedown", () => 
{
    if (count_number > 0)
    {
        count_number -= multi_count
        num.innerHTML = count_number
    }
})