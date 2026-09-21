```javascript
console.log("Crumb & Cream website loaded successfully.");

document.addEventListener("DOMContentLoaded", function () {

    const buttons = document.querySelectorAll(".button");

    buttons.forEach(function (button) {

        button.addEventListener("click", function () {

            console.log("Button clicked:", button.textContent.trim());

        });

    });

});
```
