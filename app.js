const form = document.querySelector(".newItem")
let refreshRemoveListener = false;
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.querySelector("#guitarName").value
    let price = document.querySelector("#price").value
    const stock = document.querySelector("#stock").value
    const weight = document.querySelector("#weight").value
    const length = document.querySelector("#length").value
    const imageLink = document.querySelector("#imageLink").value

    let newDiv = document.createElement("div")
    newDiv.setAttribute("class", "guitar")
    const main = document.getElementById("guitars")
    main.appendChild(newDiv)

    let newImage = document.createElement("img")
    newImage.setAttribute("src", imageLink)
    newImage.setAttribute("alt", "guitar image")
    newDiv.appendChild(newImage)

    let newName = document.createElement("p")
    newName.appendChild(document.createTextNode(name))
    newDiv.appendChild(newName)

    let newPrice = document.createElement("p")
    price = price.split('')
    price.unshift('$')
    price.splice(-3,0,',')
    newPrice.appendChild(document.createTextNode(price.join('')))
    newDiv.appendChild(newPrice)

    let newStock = document.createElement("p")
    newStock.setAttribute("class", "stock")
    let stockValue = NaN
    stock === "yes" ? stockValue = "(in stock)" : stockValue = "(out of stock)"
    const stockText = document.createTextNode(stockValue)
    newStock.appendChild(stockText)
    newDiv.appendChild(newStock)

    let newButton = document.createElement("button")
    newButton.setAttribute("class", "remove")
    newButton.appendChild(document.createTextNode("Remove"))
    newDiv.appendChild(newButton)

    let newWeight = document.createElement("p")
    newWeight.setAttribute("class", "moreInfo")
    newWeight.appendChild(document.createTextNode(`weight: ${weight} lb`))
    newDiv.appendChild(newWeight)

    let newLength = document.createElement("p")
    newLength.setAttribute("class", "moreInfo")
    newLength.appendChild(document.createTextNode(`length: ${length}"`))
    newDiv.appendChild(newLength)
})

form.addEventListener("reset", (element) => {
    element.preventDefault();
    document.getElementById("form")[0].value = ''
    document.getElementById("form")[1].value = ''
    document.getElementById("form")[2].value = '--Select an option--'
    document.getElementById("form")[3].value = ''
    document.getElementById("form")[4].value = ''
    document.getElementById("form")[5].value = ''
})

const main = document.getElementById('guitars');
main.addEventListener('click', (event) => {
  if (event.target.className === 'remove') {
    event.target.parentNode.remove();
  } else if (event.target.className === 'stock') {
    if(event.target.innerText === "(in stock)"){
        event.target.innerText = '(out of stock)'
    }else{
        event.target.innerText = '(in stock)'
    }
  }
});