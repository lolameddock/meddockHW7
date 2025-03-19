const countryList = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla",
    "Antarctica", "Antigua-and-Barbuda", "Argentina", "Armenia", "Aruba",
    "Australia", "Austria", "Azerbaijan"
];

const inputBox = document.getElementById("country");
const suggestionsDiv = document.getElementById("suggestions");

inputBox.addEventListener("input", () => {
    const userInput = inputBox.value.toLowerCase();
    suggestionsDiv.innerHTML = ""; 
    if (userInput.length > 0) {
        const filteredCountries = countryList.filter(country => 
            country.toLowerCase().startsWith(userInput)
        );

        filteredCountries.forEach(country => {
            const suggestion = document.createElement("div");
            suggestion.classList.add("suggestion");
            suggestion.textContent = country;

            suggestion.addEventListener("click", () => {
                inputBox.value = country;
                suggestionsDiv.innerHTML = ""; 
            });

            suggestionsDiv.appendChild(suggestion);
        });
    }
});
