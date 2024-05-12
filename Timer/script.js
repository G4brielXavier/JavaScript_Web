let minutes_text = document.querySelector(".minutes")
let seconds_text = document.querySelector(".seconds")

let btn_one_minute = document.querySelector(".set_one_minute")
let btn_five_minute = document.querySelector(".set_five_minute")
let btn_ten_minute = document.querySelector(".set_ten_minute")

let minutes = 0
let seconds = 0 


function effect_click(button)
{
    button.style.transform = "translateY(10px)"
    button.style.boxShadow = "0px 0px 0px 0px rgb(0, 0, 0, 0.5)"
}
function off_effect_click(button)
{
    button.style.transform = "translateY(0px)"
    button.style.boxShadow = "0px 10px 5px 5px rgb(0, 0, 0, 0.2)"
}


function set_minutes(q)
{
    if (minutes < 60)
    {
        minutes += q
        see_minutes(minutes)
    }
    else if(minutes > 60)
    {
        minutes = 60
        minutes_text.innerHTML = minutes + "m"
    }
}

function see_minutes(q)
{
    if (q < 10)
    {
        minutes_text.innerHTML = "0" + minutes + "m"
    }
    else if(minutes >= 10)
    {
        minutes_text.innerHTML = minutes + "m"
    }
}

function start_timer(sec)
{
    if (minutes > 0 || sec > 0)
    {
        setInterval(() => {


            if (sec == 0 && minutes > 0)
            {
                sec = 59
                minutes -= 1
                see_minutes(minutes)
                seconds_text.innerHTML = sec + "s"
            }

            if (sec >= 10)
            {
                sec -= 1
                seconds_text.innerHTML = sec + "s" 
            }

            if (sec < 10)
            {
                sec -= 1
                seconds_text.innerHTML = "0" + sec + "s" 
            }


        }, 1000)
    }
}

btn_one_minute.addEventListener("mousedown", (event) => {

    effect_click(btn_one_minute)
    set_minutes(1)

    event.preventDefault()
})
btn_one_minute.addEventListener("mouseup", (event) => {

    off_effect_click(btn_one_minute)

    event.preventDefault()
})
btn_five_minute.addEventListener("mousedown", (event) => {

    effect_click(btn_five_minute)
    set_minutes(5)

    event.preventDefault()
})
btn_five_minute.addEventListener("mouseup", (event) => {

    off_effect_click(btn_five_minute)

    event.preventDefault()
})
btn_ten_minute.addEventListener("mousedown", (event) => {

    effect_click(btn_ten_minute)
    set_minutes(10)

    event.preventDefault()
})
btn_ten_minute.addEventListener("mouseup", (event) => {

    off_effect_click(btn_ten_minute)

    event.preventDefault()
})


document.addEventListener("keypress", (event) => {
    if(event.key == "Enter")
    {
        start_timer(seconds)
    }
})