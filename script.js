const itemNameInput = document.getElementById('item-name-input');
const itemPriceInput = document.getElementById('item-price-input');
const addButton = document.getElementById('add');
const shoppingList = document.getElementById('shopping-list');
const totalHeading = document.getElementById('total');

let grandTotal = 0;

addButton.addEventListener('click', () => {
    const itemName = itemNameInput.value;
    const itemPrice = itemPriceInput.value;

    if (!itemName || !itemPrice) {
        return; // invalid input, do nothing
    }

    grandTotal += parseFloat(itemPrice);

    const row = document.createElement('tr');
    const itemColumn = document.createElement('td');
    itemColumn.textContent = itemName;
    row.appendChild(itemColumn);
    const priceColumn = document.createElement('td');
    priceColumn.textContent = itemPrice;
    row.appendChild(priceColumn);
    shoppingList.appendChild(row);

    totalHeading.textContent = grandTotal;

    // clear input fields
    itemNameInput.value = '';
    itemPriceInput.value = '';
});
