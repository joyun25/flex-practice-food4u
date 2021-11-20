const cards = document.querySelector('.cards');
let foodList = [
    {
        "item":"Eggs",
        "price":"60 NTW / 10 eggs",
        "image":"images/eggs.jpg"
    },{
        "item":"Apples",
        "price":"150 NTW / 10 apples",
        "image":"images/apples.jpg"
    },{
        "item":"Bananas",
        "price":"15 NTW / 600 g",
        "image":"images/bananas.jpg"
    },{
        "item":"Grapes",
        "price":"40 NTW / 600 g",
        "image":"images/grapes.jpg"
    },{
        "item":"Beef",
        "price":"200 NTW / 600 g",
        "image":"images/beef.jpg"
    },{
        "item":"Milk",
        "price":"90 NTW / 1 ml",
        "image":"images/milk.jpg"
    },{
        "item":"Chicken",
        "price":"120 NTW / 600 g",
        "image":"images/chicken.jpg"
    },{
        "item":"Cheese",
        "price":"300 NTW / 3 kg",
        "image":"images/cheese.jpg"
    },{
        "item":"Pineapples",
        "price":"25 NTW / 600 g",
        "image":"images/pineapples.jpg"
    },{
        "item":"Carrots",
        "price":"10 NTW / 1 carrot",
        "image":"images/carrots.jpg"
    },{
        "item":"Mushrooms",
        "price":"30 NTW / 600 g",
        "image":"images/mushrooms.jpg"
    },{
        "item":"Eggplants",
        "price":"50 NTW / 3 eggplants",
        "image":"images/eggplants.jpg"
    },
];
let str = "";

foodList.forEach(item => {
    str += `
        <li class="card">
            <img class="cardImg" src="${item.image}" alt="${item.item}">
            <h2 class="cardTitle">${item.item}</h2>
            <p class="cardText">${item.price}</p>
        </li>
    `;
});

cards.innerHTML = str;