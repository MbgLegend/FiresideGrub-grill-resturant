const price = document.querySelector(".dish_price")
const quantity = document.getElementById("quantity")
const buttons = document.querySelectorAll(".quantity button")

window.onload = async () => {
    const selectedDishId = localStorage.getItem("selected_dish")
    if (selectedDishId) {
        const response = await fetch("https://mbglegend.github.io/foods-api/foods.json")
        const data = await response.json()

        const dish = data.dishes.find(dish => dish.id.toString() === selectedDishId)
        
        if (dish) {
            document.querySelector(".dish-info").id = selectedDishId
            document.querySelector(".dish_image").src = dish.Image
            document.querySelector(".dish_title").textContent = dish.name
            document.querySelector(".dish_description").textContent = dish.description
            document.querySelector(".dish_price").textContent = dish.price + "$"
            document.querySelector(".dish_type").textContent = dish.categoryType
            document.querySelector(".dish_calories").textContent = dish.totalCalories + " calories"
            document.querySelector(".dish_grams").textContent = dish.grams + " grams"  

            buttons.forEach((button) => {
                button.addEventListener("click", (event) => {
                    if (event.target.classList.contains("add")) {
                        if (quantity.value < 99) {
                            quantity.value++
                        }
                    } else {
                        if (quantity.value > 1) {
                            quantity.value--
                        }
                    }

                    const calculatedPrice = (Number(dish.price) * Number(quantity.value)) || 0;
                    price.textContent = calculatedPrice.toFixed(2) + "$"
                })
            })        
        } else {
            alert("Dish not found")
            window.location.href = "../index.html"
        }
    } else {
        alert("No selected dish ID found in localStorage")
        window.location.href = "../index.html"
    }
}