document.addEventListener("DOMContentLoaded", function () {

    const buttons = document.querySelectorAll(".buy-btn");
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    buttons.forEach(button => {
        button.addEventListener("click", function () {

            const productCard = this.closest(".product-card");
            const name = productCard.querySelector("h3").innerText;
            const price = productCard.querySelector(".price").innerText;

            cart.push({ name, price });
            localStorage.setItem("cart", JSON.stringify(cart));

            alert(name + " added to cart!");
        });
    });

    const cartContainer = document.getElementById("cart-items");
    const totalDisplay = document.getElementById("cart-total");

    if (cartContainer) {
        displayCart();
    }

    function displayCart() {
        cartContainer.innerHTML = "";
        let total = 0;

        cart.forEach((item, index) => {

            const priceNumber = parseFloat(item.price.replace("RM", ""));
            total += priceNumber;

            const div = document.createElement("div");
            div.style.display = "flex";
            div.style.justifyContent = "space-between";
            div.style.marginBottom = "10px";
            div.style.padding = "10px";
            div.style.background = "#ffb6c1";
            div.style.borderRadius = "5px";

            div.innerHTML = `
                <span>${item.name} - ${item.price}</span>
                <button onclick="removeItem(${index})" 
                    style="background:#5d4037; color:white; border:none; padding:5px 10px; cursor:pointer; border-radius:5px;">
                    Remove
                </button>
            `;

            cartContainer.appendChild(div);
        });

        totalDisplay.innerText = "Total: RM " + total.toFixed(2);
    }

    window.removeItem = function (index) {
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        displayCart();
    }

    window.clearCart = function () {
        cart = [];
        localStorage.setItem("cart", JSON.stringify(cart));
        displayCart();
    }

});