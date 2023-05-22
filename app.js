const form = document.querySelector(".newItem")
form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(event.target.guitarName.value)
})


const removeItem = (event) => {
    const guitarRemoved = event.target.parentNode;
    guitarRemoved.remove()
}

const removeElement = document.querySelectorAll(".remove")
removeElement.forEach((button) => {
    button.addEventListener("click", removeItem)
})

