let modal_window = document.querySelector("#modal_main")
let tips_box = document.querySelector(".tips_container")
let close_modal_btn = document.querySelector(".close_modal")

let title_modal = document.querySelector(".title_modal")
let respost_modal = document.querySelector(".respost")

let open_answer_1 = document.querySelector("#modal_1")
let open_answer_2 = document.querySelector("#modal_2")
let open_answer_3 = document.querySelector("#modal_3")

function open_modal(modal_title, modal_info)
{

    tips_box.classList.remove("tips_container")
    tips_box.classList.add("tips_container_closed")

    modal_window.classList.remove("closed_modal")
    modal_window.classList.add("opened_modal")

    title_modal.innerHTML = modal_title
    respost_modal.innerHTML = modal_info
}

function close_modal()
{
    tips_box.classList.remove("tips_container_closed")
    tips_box.classList.add("tips_container")

    modal_window.classList.remove("opened_modal")
    modal_window.classList.add("closed_modal")
}

open_answer_1.addEventListener("click", () => {
    open_modal("Como foi feito este site?", "Este site foi desenvolvido com uma linguagem de programação chamada JavaScript, estrutura de texto ( Esqueleto ) feita com HTML, estilização visual, design e cores feita com CSS e Interação dos botões e criação de ações com JS.");
})

open_answer_2.addEventListener("click", () => {
    open_modal("O Que é JavaScript?", "A linguagem usada para desenvolver este site é JavaScript, uma linguagem usada mundialmente no mundo da tecnologia, criação de sites, aplicativos e sistemas.")
})

open_answer_3.addEventListener("click", () => {
    open_modal("Qual IDE foi usada?", "Visual Studio Code, uma IDE muito usada na implementação das linguagens de programação para desenvolvimento.")
})

close_modal_btn.addEventListener("click", () => {
    close_modal()
})