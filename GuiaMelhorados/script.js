let history_button = document.querySelector("#history")
let vision_button = document.querySelector("#vision")
let goals_button = document.querySelector("#goals")

let title_info = document.querySelector(".title_option")
let description = document.querySelector("#description_option")

function set_info(button, title, info)
{
    button.style.border = "3px solid rgba(95, 129, 155, 0.5)"
    title_info.innerHTML = title
    description.innerHTML = info
}

function off_button(button)
{
    button.style.border = "3px solid rgba(95, 129, 155, 0.0)"
}



history_button.addEventListener("mousedown", () => {
    
    set_info(history_button, "History", "lorem50")
})

history_button.addEventListener("mouseup", () => {
    
    off_button(history_button)
})

vision_button.addEventListener("mousedown", () => {

    set_info(vision_button, "Vision", "lorem50")

})

vision_button.addEventListener("mouseup", () => {

    off_button(vision_button)

})

goals_button.addEventListener("mousedown", () => {

    set_info(goals_button, "Goals", "lorem50")

})

goals_button.addEventListener("mouseup", () => {

    off_button(goals_button)

})



