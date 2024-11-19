// Script.js
const rangevalue = document.querySelector(".slider-container .price-slider");
const rangeInputvalue = document.querySelectorAll(".range-input input");

// Set the price gap
let priceGap = 20; // Define the minimum gap between min and max price

// Adding event listeners to price input elements
const priceInputvalue = document.querySelectorAll(".price-input input");
for (let i = 0; i < priceInputvalue.length; i++) {
    priceInputvalue[i].addEventListener("input", e => {
        // Parse min and max values of the range input
        let minp = parseInt(priceInputvalue[0].value);
        let maxp = parseInt(priceInputvalue[1].value);
        let diff = maxp - minp;

        // Ensure min price is at least 20
        if (minp < 20) {
            alert("Minimum price cannot be less than 20.");
            priceInputvalue[0].value = 20;
            minp = 20;
        }

        // Ensure max price is at most 300
        if (maxp > 300) {
            alert("Maximum price cannot be greater than 300.");
            priceInputvalue[1].value = 300;
            maxp = 300;
        }

        // Ensure that the gap between min and max price is met
        if (minp > maxp - priceGap) {
            priceInputvalue[0].value = maxp - priceGap;
            minp = maxp - priceGap;

            // Ensure min price does not go below 20
            if (minp < 20) {
                priceInputvalue[0].value = 20;
                minp = 20;
            }
        }

        // Check if the price gap is met and max price is within the range
        if (diff >= priceGap && maxp <= 300) {
            if (e.target.className === "min-input") {
                rangeInputvalue[0].value = minp;
                let value1 = rangeInputvalue[0].max;
                rangevalue.style.left = `${(minp / value1) * 100}%`;
            } else {
                rangeInputvalue[1].value = maxp;
                let value2 = rangeInputvalue[1].max;
                rangevalue.style.right = `${100 - (maxp / value2) * 100}%`;
            }
        }
    });

    // Add event listeners to range input elements
    for (let i = 0; i < rangeInputvalue.length; i++) {
        rangeInputvalue[i].addEventListener("input", e => {
            let minVal = parseInt(rangeInputvalue[0].value);
            let maxVal = parseInt(rangeInputvalue[1].value);
            let diff = maxVal - minVal;

            // Ensure the gap between min and max is at least the priceGap
            if (diff < priceGap) {
                // If min range is being adjusted
                if (e.target.className === "min-range") {
                    rangeInputvalue[0].value = maxVal - priceGap;
                } else {
                    // If max range is being adjusted
                    rangeInputvalue[1].value = minVal + priceGap;
                }
            } else {
                // Update price inputs and range progress
                priceInputvalue[0].value = minVal;
                priceInputvalue[1].value = maxVal;

                // Update range slider positions
                rangevalue.style.left = `${(minVal / rangeInputvalue[0].max) * 100}%`;
                rangevalue.style.right = `${100 - (maxVal / rangeInputvalue[1].max) * 100}%`;
            }
        });
    }
}
