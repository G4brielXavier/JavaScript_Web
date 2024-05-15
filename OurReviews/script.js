let btn_left = document.querySelector(".left")
let btn_right = document.querySelector(".right")

let name_text = document.querySelector(".name_client")
let job_text = document.querySelector(".job_client")
let description_text = document.querySelector(".description_client")


client = 0
if (client == 0) { set_client("Carlos Jorge", "Programador", "lorem30") }


btn_left.addEventListener("click", () => {
    if (client < 3)
    {
        client += 1
        if (client == 0) { set_client("Carlos Jorge", "Programador", "lorem30") }
        if (client == 1) { set_client("Sara Avino", "Veterinaria", "lorem50") }
        if (client == 2) { set_client("Manoel Costa", "Motorista", "lorem40") }
    }
})

btn_right.addEventListener("click", () => {
    if (client > 0)
    {
        client -= 1
        if (client == 0) { set_client("Carlos Jorge", "Programador", "lorem30") }
        if (client == 1) { set_client("Sara Avino", "Veterinaria", "lorem50") }
        if (client == 2) { set_client("Manoel Costa", "Motorista", "lorem40") }
    }
})

function set_client(name, job, description)
{
    name_text.innerHTML = name
    job_text.innerHTML = job
    description_text.innerHTML = description    
}



