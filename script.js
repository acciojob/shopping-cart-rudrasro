//your code here
const itemNameInput = document.getElementById("item-name-input");
const itemPriceInput = document.getElementById("item-price-input");
const addButton = document.getElementById("add");
const shoppingList = document.getElementById("shopping-list");
// Get reference to grand total cell
const grandTotalCell = document.getElementById("total");
// Initialize grand total to 0
let grandTotal = 0;

// Function to add a new row to the table
function addRow() {
    // Get the item name and price from the input fields
    const itemName = itemNameInput.value;
    const itemPrice = itemPriceInput.value;
    // Ignore the row if either input field is empty or the price is not a valid number
    if (!itemName || !itemPrice || isNaN(itemPrice)) return;
    // Add a new row to the table with the item name and price
    const row = shoppingList.insertRow(-1);
    const nameCell = row.insertCell(0);
    const priceCell = row.insertCell(1);
    nameCell.innerHTML = itemName;
    priceCell.innerHTML = itemPrice;
    // Clear the input fields
    itemNameInput.value = "";
    itemPriceInput.value = "";
    // Update the grand total
    grandTotal += parseFloat(itemPrice);
    grandTotalCell.innerHTML = grandTotal;
}

// Add a new row when the add button is clicked
addButton.addEventListener("click", addRow);