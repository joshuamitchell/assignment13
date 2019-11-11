"using strict"

async function displayPizzas() {
    let response = await fetch("https://joshuamitchell.github.io/json/pizza.json");
    let pizzaJson = await response.json();
    let contentDiv = document.getElementById("content");

    for (i in pizzaJson) {
        let pizza = pizzaJson[i];
        contentDiv.append(createPizzaElem(pizza));
    }
}

function createPizzaElem(pizza) {
    let pizzaElem = document.createElement("div");
    pizzaElem.classList.add("pizza");
    let pizzaBlock = document.createElement("div");
    pizzaBlock.classList.add("divider");
    let imageBlock = document.createElement("div");
    imageBlock.classList.add("image");
    let textBlock = document.createElement("div");
    textBlock.classList.add("text");
    pizzaElem.append(pizzaBlock);
    pizzaBlock.append(imageBlock);
    pizzaBlock.append(textBlock);
    let pizzaName = document.createElement("h3");
    imageBlock.append(createPizzaImg(pizza.img));
    pizzaName.innerHTML = pizza.name;
    textBlock.append(pizzaName);
    textBlock.append(createToppingsList(pizza.toppings));
    textBlock.append(createPizzaPara("<b>Preferred Crust:</b> " + pizza.crust));
    textBlock.append(createPizzaPara("<b>Preferred Pizza Place:</b> " + pizza.place));
    textBlock.append(createPizzaPara("<b>Personal Rating:</b> " + pizza.rating));
    textBlock.append(createPizzaPara("<b>Description:</b> " + pizza.description));
    textBlock.append(createPizzaPara("<b>Personal Criticism:</b> " + pizza.criticism));

    return pizzaElem;
}

function createToppingsList(toppings) {
    //loop through toppings, add them as a bulleted list
    let ulElem = document.createElement("ul");

    for (i in toppings) {
        let liElem = document.createElement("li");
        liElem.innerHTML = toppings[i];
        ulElem.append(liElem);
    }

    return ulElem;
}

function createPizzaPara(text) {
    let pizzaP = document.createElement("p");
    pizzaP.innerHTML = text;

    return pizzaP;
}

function createPizzaImg(img) {
    let pizzaImg = document.createElement("img");
    pizzaImg.src = "https://joshuamitchell.github.io/json/" + img;

    return pizzaImg;
}

window.onload = function() {
    this.displayPizzas();
}