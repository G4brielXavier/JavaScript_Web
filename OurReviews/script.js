let btn_left = document.querySelector(".left")
let btn_right = document.querySelector(".right")

let name_text = document.querySelector(".name_client")
let job_text = document.querySelector(".job_client")
let description_text = document.querySelector(".description_client")


client = 0
if (client == 0) { set_client("Gabriel Xavier", "Programador", "Eu sou programador JavaScript, Ruby, Python, C++ e Csharp, Desenvolvedor Front-end e Back-end de sites e aplicativos.") }


btn_left.addEventListener("click", () => {
    if (client < 3)
    {
        client += 1
        if (client == 0) { set_client("Gabriel Xavier", "Programador", "Eu sou programador JavaScript, Ruby, Python, C++ e Csharp, Desenvolvedor Front-end e Back-end de sites e aplicativos.") }
        if (client == 1) { set_client("Gabriely Xavier", "Veterinaria", "Eu sou formada em veterinario com 10 anos de experiencia na area, Eu amo animais.") }
        if (client == 2) { set_client("Jonathan Xavier", "GD Player Profissional", "Eu sou Jogador profissional de geometry dash, Com maior numero de vitoria em final de campeonato mundial.") }
    }
})

btn_right.addEventListener("click", () => {
    if (client > 0)
    {
        client -= 1
        if (client == 0) { set_client("Gabriel Xavier", "Programador", "Eu sou programador JavaScript, Ruby, Python, C++ e Csharp, Desenvolvedor Front-end e Back-end de sites e aplicativos.") }
        if (client == 1) { set_client("Gabriely Xavier", "Veterinaria", "Eu sou formada em veterinario com 10 anos de experiencia na area, Eu amo animais.") }
        if (client == 2) { set_client("Jonathan Xavier", "GD Player Profissional", "Eu sou Jogador profissional de geometry dash, Com maior numero de vitoria em final de campeonato mundial.") }
    }
})

function set_client(name, job, description)
{
    name_text.innerHTML = name
    job_text.innerHTML = job
    description_text.innerHTML = description    
}



