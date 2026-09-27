console.log("Crumb & Cream website loaded successfully.");

document.addEventListener("DOMContentLoaded", function () {

    /* ==============================
       EXISTING BUTTON LOG
       ============================== */

    const buttons = document.querySelectorAll(".button");

    buttons.forEach(function (button) {

        button.addEventListener("click", function () {

            console.log(
                "Button clicked:",
                button.textContent.trim()
            );

        });

    });


    /* ==============================
       SEARCH
       ============================== */

    const searchButton =
        document.getElementById("search-button");

    const searchBox =
        document.getElementById("search-box");

    const searchInput =
        document.getElementById("search-input");

    const searchClose =
        document.getElementById("search-close");

    const products =
        document.querySelectorAll(".product-card");


    /* Open Search */

    if (searchButton) {

        searchButton.addEventListener("click", function () {

            searchBox.classList.toggle("active");

            if (searchBox.classList.contains("active")) {
                searchInput.focus();
            }

        });

    }


    /* Search Products */

    if (searchInput) {

        searchInput.addEventListener("input", function () {

            const searchValue =
                searchInput.value.trim().toLowerCase();

            products.forEach(function (product) {

                const productName =
                    product
                        .querySelector("h3")
                        .textContent
                        .toLowerCase();

                if (
                    searchValue === "" ||
                    productName.includes(searchValue)
                ) {

                    product.style.display = "";

                } else {

                    product.style.display = "none";

                }

            });

        });

    }


    /* Close Search */

    if (searchClose) {

        searchClose.addEventListener("click", function () {

            searchInput.value = "";

            products.forEach(function (product) {
                product.style.display = "";
            });

            searchBox.classList.remove("active");

        });

    }

});