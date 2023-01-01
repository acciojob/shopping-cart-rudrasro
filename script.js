const itemNameInput = document.getElementById('item-name-input');
const itemPriceInput = document.getElementById('item-price-input');
const addButton = document.getElementById('add');
const shoppingListTable = document.getElementById('table1');
const totalDiv = document.getElementById('total');

let grandTotal = 0;

addButton.addEventListener('click', () => {
  const itemName = itemNameInput.value;
  const itemPrice = itemPriceInput.value;

  if (!itemName || !itemPrice) {
    return; // invalid input, do nothing
  }

  grandTotal += parseFloat(itemPrice);

  // create new table row with item name, price, and total
  const row = document.createElement('tr');
  const itemColumn = document.createElement('td');
  itemColumn.textContent = itemName;
  row.appendChild(itemColumn);
  const priceColumn = document.createElement('td');
  priceColumn.textContent = itemPrice;
  row.appendChild(priceColumn);
  const totalColumn = document.createElement('td');
  totalColumn.textContent = itemPrice;
  row.appendChild(totalColumn);
  shoppingListTable.appendChild(row);

  // update grand total
  totalDiv.textContent = `Total Amount is ${grandTotal} $`;

  // clear input fields
  itemNameInput.value = '';
  itemPriceInput.value = '';
});
