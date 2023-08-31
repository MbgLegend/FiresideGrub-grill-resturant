export async function getDishes(start, end, container, category) {
    const containerContent = document.querySelector(container)
    const response = await fetch("https://mbglegend.github.io/foods-api/foods.json")
    const data = await response.json()

    if (end === null) {
        end = data.dishes.length
    }

    containerContent.innerHTML = ""

    const filteredDishes = category ? data.dishes.filter(dish => dish.category === category) : data.dishes.slice(start, end)

    for (const dish of filteredDishes) {
        const rating = addRatingStars(dish.rating)

        const div = document.createElement("div")
        div.classList.add("box")
        div.id = dish.id
        div.innerHTML = `
            <div class="relative">
                <img src="${dish.Image}" alt="Credits: ${dish.Credits}">
                <i class="fa-solid fa-eye"></i>
            </div>
            <div class="text">
                <h3>${dish.name}</h3>
                <p>${dish.description}</p>
                <span>
                   ${rating} (${dish.rating}) 
                </span>
                <div class="flex">
                    <h4>${dish.price}$</h4> 
                </div>
            </div>
        `
        containerContent.appendChild(div)

        const eyeIcon = div.querySelector(".fa-eye")

        eyeIcon.addEventListener("click", (event) => {
            const condition = document.querySelector(".about-us")

            localStorage.setItem("selected_dish", event.target.parentNode.parentNode.id)
            if (condition) {
                window.location.href = "HTML/dish.html"
            } else {
                window.location.href = "../HTML/dish.html"
            }
        })
    }
}

export function addRatingStars(rating) {
    const fullStar = '<i class="fa-solid fa-star"></i>'
    const halfStar = '<i class="fa-solid fa-star-half-stroke"></i>'
    const emptyStar = '<i class="fa-regular fa-star"></i>'
    
    let totalStars = ''

    for (let i = 1; i <= 5; i++) {
        if (rating >= i) {
            totalStars += fullStar;
        } else if (rating > i - 0.5) {
            totalStars += halfStar;
        } else {
            totalStars += emptyStar;
        }
    }

    return totalStars
}