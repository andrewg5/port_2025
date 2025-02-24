let inventoryItems = [];

let path = "http://127.0.0.1:4100/portfolio_2025";

const itemImages = {
    "spoon": path + "/images/gamify/spoon.png"
};

function updateInventory() {
    const inventory = document.getElementById("inventory");
    if (!inventory) return;

    inventory.innerHTML = ""; // Clear old items

    inventoryItems.forEach(item => {
        const slot = document.createElement("div");
        slot.className = "inventory-slot";

        const img = document.createElement("img");
        img.src = itemImages[item] || "/assets/images/default.png"; // Fallback image
        img.alt = item;
        img.style.width = "50px";
        img.style.height = "50px";

        slot.appendChild(img);
        inventory.appendChild(slot);
    });
}

export function addItemToInventory(itemName) {
    if (inventoryItems.length < 8) { // Limit inventory slots
        inventoryItems.push(itemName);
        localStorage.setItem("inventoryItems", JSON.stringify(inventoryItems));
    } else {
        alert("Inventory full!");
    }
    updateInventory();
}


export function removeItemFromInventory(itemName) {
    const index = inventoryItems.indexOf(itemName);
    if (index > -1) {
        inventoryItems.splice(index, 1); // Remove item from array
        localStorage.setItem("inventoryItems", JSON.stringify(inventoryItems)); // Save updated inventory
        updateInventory(); // Update inventory UI
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const inventory = document.getElementById("inventory");
    if (!inventory) {
        console.error("Inventory container not found!");
        return;
    }

    inventory.style.display = "grid";
    inventory.style.border = "2px solid red"; // Debugging border


    updateInventory();
});

document.addEventListener("keydown", function(event) {
    if (event.key === "f" || event.key === "F") {
        removeItemFromInventory("spoon");
    }
});