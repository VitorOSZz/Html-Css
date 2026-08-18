let cart = `{
"cart":[
    {"id":"567dd07e-b128-4c50-b045-f026d1a4e509","type":"Charmander","size":"big","flavors":[{"id":"8","name":"Scratch","level":53},{"id":"9","name":"Ember","level":50}],"level":53,"observation":"","quantity":0},
    
    {"id":"92438473-58c9-436a-baab-52c4e80c8cac","type":"Charmander","size":"giant","flavors":[{"id":"8","name":"Flamethrower","level":63},{"id":"10","name":"Dragon Rage","level":61}],"level":63,"observation":"Eu sou lindo","quantity":0},
    {"id":"92438473-58c9-436a-baab-52c4e80c8cac","type":"Charmander","size":"giant","flavors":[{"id":"8","name":"Flamethrower","level":63},{"id":"10","name":"Dragon Rage","level":61}],"level":63,"observation":"Eu sou lindo","quantity":3},
    {"id":"92438473-58c9-436a-baab-52c4e80c8cac","type":"Charmander","size":"giant","flavors":[{"id":"8","name":"Flamethrower","level":63},{"id":"10","name":"Dragon Rage","level":61}],"level":63,"observation":"Eu sou lindo","quantity":1},
    {"id":"37acb6a1-6d03-4b97-9824-ce70f701a017","type":"Charmander","size":"big","flavors":[{"id":"7","name":"Fire Fang","level":52},{"id":"8","name":"Slash","level":53}],"level":53,"observation":"","quantity":1}
]}`;

const ending_generate = window.document.getElementById("ending-generate");

cart = JSON.parse(cart).cart;

let text = "";

console.log(cart)
cart.forEach((item) => {

    if (item.quantity <= 0) {
        return;
    }

    console.log(item);

    text += `
    <div class="card" id="${item.id}">
                <div class="size">
                    <h2>${item.type} ${item.size}</h2>
                </div>

                <div class="flavors">

                    <div class="flavor">
                        <span>${item.flavors[0].name}</span>
                        <span>${item.flavors[0].level}</span>
                    </div>

                    <div class="flavor">
                        <span>${item.flavors[1].name}</span>
                        <span>${item.flavors[0].level}</span>
                    </div>

                </div>

                <div class="observation">
                    Observação: ${item.observation}
                </div>

                <div class="footer-card">

                    <span class="price">
                        ${item.level}
                    </span>

                    <span class="quantity">
                        x${item.quantity}
                    </span>

                </div>
            </div>`
});


ending_generate.innerHTML = text;