let giveaway_text = document.querySelector(".mini_giveaway")

let day_text = document.querySelector("#days")
let hours_text = document.querySelector("#hours")
let mins_text = document.querySelector("#mins")
let secs_text = document.querySelector("#secs")

weak_list = ["Saturday", "Monday", "Thurday", "Wednesday", "Thuesday", "Friday", "Sunday"]
month_list = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

today = new Date


giveaway_text.innerHTML = "Giveaway Ends On " + weak_list[today.getDay()] + ", " + today.getDate() + " " + month_list[today.getMonth()] + " " + today.getFullYear() + " " + today.getHours() + ":" + today.getMinutes() 

day = 10
hours = 23
minutes = 1
seconds = 59

day_text.innerHTML = day
hours_text.innerHTML = hours
mins_text.innerHTML = minutes
secs_text.innerHTML = seconds

setInterval(() => {

    if (seconds >= 10)
    {
        secs_text.innerHTML = seconds
    }
    else
    {
        secs_text.innerHTML = "0" + seconds
    }

    if (minutes >= 10)
    {
        mins_text.innerHTML = minutes
    }
    else
    {
        mins_text.innerHTML = "0" + minutes
    }

    if (hours >= 10)
    {
        hours_text.innerHTML = hours
    }
    else
    {
        hours_text.innerHTML = "0" + hours
    }
 
    if (day >= 10)
    {
        day_text.innerHTML = day
    }
    else
    {
        day_text.innerHTML = "0" + day
    }

    if (hours == 0)
    {
        hours = 24
        day -= 1
    }

    if (minutes == 0)
    {
        minutes = 59
        hours -= 1
    }

    if (seconds == 0)
    {
        seconds = 59
        minutes -= 1
    }

    if (seconds > 0)
    {
        seconds -= 1
    }


}, 1000)