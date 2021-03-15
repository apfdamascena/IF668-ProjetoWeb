

const boxMaisSobre = document.getElementById("maisSobre")
const boxEstudos = document.getElementById("estudos")
const boxHobbies = document.getElementById("hobbies")

const maisSobre = document.getElementsByClassName("maisSobre")
const hobbies = document.getElementsByClassName("hobbies")
const estudos = document.getElementsByClassName("estudos")


boxEstudos.addEventListener('click', () => {
    estudos[0].style.display = "block"
    maisSobre[0].style.display = "none"
    hobbies[0].style.display = "none"
})

boxHobbies.addEventListener('click', () => {
    estudos[0].style.display = "none"
    maisSobre[0].style.display = "none"
    hobbies[0].style.display = "block"
})

boxMaisSobre.addEventListener('click', () => {
    estudos[0].style.display = "none"
    maisSobre[0].style.display = "block"
    hobbies[0].style.display = "none"
})
