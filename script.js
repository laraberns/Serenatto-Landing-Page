const botaoModoNoturno = document.getElementById("flexSwitchCheckDefault")
const body = document.getElementById("body")

botaoModoNoturno.addEventListener("click", () => {
    if (botaoModoNoturno.checked) {
        body.setAttribute("data-bs-theme", "dark")
    } else {
        body.setAttribute("data-bs-theme", "light")
    }
})