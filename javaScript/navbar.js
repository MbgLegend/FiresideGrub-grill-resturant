import { closeCart } from './cart.js'

const contentHolder = document.querySelector(".navbar .content")

function openNavbar() {
    closeCart()
    contentHolder.classList.add("active")
}

function closeNavbar() {
    contentHolder.classList.remove("active")
}

export { openNavbar, closeNavbar }