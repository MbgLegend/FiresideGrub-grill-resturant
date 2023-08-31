import { getDishes } from './getDishes.js'

const filter = document.getElementById("dish-filter")
const header = document.getElementById("header")

async function setupFilter() {
    const response = await fetch("https://mbglegend.github.io/foods-api/foods.json")
    const data = await response.json()

    data.categories.forEach((category) => {
        const option = document.createElement("option")
        option.value = category
        option.textContent = category
        filter.appendChild(option)
    })

    filter.addEventListener("change", (event) => {
        const clickedCategory = event.target.value
        
        if (clickedCategory === "All dishes") {
            getDishes(0, null, '.menu .grid')
        } else {
            getDishes(0,null, '.menu .grid', clickedCategory)
        }
        header.textContent = clickedCategory
    })
}

setupFilter()

window.onload = getDishes(0, null, '.menu .grid')