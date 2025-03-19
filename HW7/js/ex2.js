const houses = [
    { code: "ST", name: "Stark" },
    { code: "LA", name: "Lannister" },
    { code: "BA", name: "Baratheon" },
    { code: "TA", name: "Targaryen" }
];

const getCharacters = houseCode => {
    switch (houseCode) {
        case "ST": return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
        case "LA": return ["Tywin", "Cersei", "Jaime", "Tyrion"];
        case "BA": return ["Robert", "Stannis", "Renly"];
        case "TA": return ["Aerys", "Daenerys", "Viserys"];
        default: return [];
    }
};

const houseDropdown = document.getElementById("house");
houses.forEach(house => {
    const option = document.createElement("option");
    option.value = house.code;
    option.textContent = house.name;
    houseDropdown.appendChild(option);
});

houseDropdown.addEventListener("change", () => {
    const selectedHouse = houseDropdown.value;
    const characterList = document.getElementById("characters");
    characterList.innerHTML = ""; // Clear previous list

    getCharacters(selectedHouse).forEach(character => {
        const li = document.createElement("li");
        li.textContent = character;
        characterList.appendChild(li);
    });
});
