import { getDishes } from './javaScript/getDishes.js'
import { openNavbar, closeNavbar } from './javaScript/navbar.js'

const menu = document.getElementById("menu")
const close = document.getElementById("close")
const faqBoxes = document.querySelectorAll(".faq .container .box")
const formBtns= document.querySelectorAll(".form .grid fieldset header p")
const formSettings = document.querySelectorAll(".form .grid fieldset > div")

document.addEventListener("DOMContentLoaded", () => {
    if (document.querySelector(".popular-foods")) {
        getDishes(0, 6, '.popular-foods .grid')
        getDishes(6, 12, '.todays-speciality .grid')
    }
    
    if (document.querySelector(".trending")) {
        getDishes(12, 18, '.trending .grid')
    }

    if (faqBoxes) {
        faqBoxes.forEach(box => {
            const question = box.querySelector("h1")
            
            question.addEventListener("click", () => {
                faqBoxes.forEach(otherBox => {
                    if (otherBox !== box) {
                        otherBox.classList.remove("active")
                    }
                })
                box.classList.toggle("active")
            })
        })
    }

    if (formSettings && formBtns) {
        formBtns.forEach((btn) => {
            btn.addEventListener("click", (event) => {
                formBtns.forEach(btn => btn.classList.remove("active"))
                formSettings.forEach(setting => setting.classList.remove("active"))
                const active = event.target

                active.classList.add("active")
                if (active.classList.contains("log-in")) {
                    document.querySelector(".login").classList.add("active")
                } else {
                    document.querySelector(".signup").classList.add("active")
                }
            })
        })
    }

    menu.onclick = openNavbar
    close.onclick = closeNavbar
    window.onresize = closeNavbar
    window.onscroll = closeNavbar
})