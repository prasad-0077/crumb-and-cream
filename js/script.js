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

const searchResults =
    document.getElementById("search-results");

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

if (searchInput && searchResults) {

    searchInput.addEventListener("input", function () {

        const searchValue =
            searchInput.value.trim().toLowerCase();

        searchResults.innerHTML = "";

        /* Empty search */

        if (searchValue === "") {

            products.forEach(function (product) {
                product.style.display = "";
            });

            return;
        }


        let found = false;


        products.forEach(function (product) {

            const productName =
                product
                    .querySelector("h3")
                    .textContent
                    .toLowerCase();


            if (productName.includes(searchValue)) {

                /* Show matching product */

                product.style.display = "";

                found = true;

                const result =
                    document.createElement("button");

                result.type = "button";

                result.className =
                    "search-result-item";

                result.textContent =
                    product.querySelector("h3").textContent;


                result.addEventListener(
                    "click",
                    function () {

                        searchBox.classList.remove("active");

                        searchInput.value = "";

                        searchResults.innerHTML = "";

                        products.forEach(function (item) {
                            item.style.display = "";
                        });

                        product.scrollIntoView({
                            behavior: "smooth",
                            block: "center"
                        });

                    }
                );


                searchResults.appendChild(result);

            } else {

                /* Hide non-matching products */

                product.style.display = "none";

            }

        });


        /* Item Not Found */

        if (!found) {

            const noResult =
                document.createElement("div");

            noResult.className =
                "search-no-result";

            noResult.innerHTML =
                "<strong>Sorry, we couldn't find that item.</strong>" +
                "<span>Please try another product.</span>";

            searchResults.appendChild(noResult);

        }

    });

}

    /* Close Search */

if (searchClose) {

    searchClose.addEventListener("click", function () {

        searchInput.value = "";

        searchResults.innerHTML = "";

        products.forEach(function (product) {
            product.style.display = "";
        });

        searchBox.classList.remove("active");

    });

}

});