const determineTotals = () => {
      
   const amountOfPeople = parseFloat(document.getElementById('amountOfPeople').value);
   const foodPrice = parseFloat(document.getElementById('foodPrice').value);
   const drinksPrice = parseFloat(document.getElementById('drinksPrice').value);
   const salesTax = parseFloat(document.getElementById('salesTax').value);
      
   let tipPercentage;

   // Determine Tip Percentage Based on amount of people served
   if (amountOfPeople <= 4) {
      tipPercentage = 0.1;
   } else if (amountOfPeople <= 10) {
      tipPercentage = 0.2;
   } else {
      tipPercentage = 0.25;
   }

   const mealTotal = foodPrice + drinksPrice;

   const totalSalesTax = mealTotal * salesTax;

   const tipAmount = mealTotal * tipPercentage;
   

   const subtotal = totalSalesTax + mealTotal;

   const total = (Math.round((mealTotal + totalSalesTax + tipAmount)*100)/100);

   generateReceipt(subtotal, total, tipAmount);
   }
   
const generateReceipt = (subtotal, total, tip) => {
   const foodPrice = parseFloat(document.getElementById('foodPrice').value);
   const drinksPrice = parseFloat(document.getElementById('drinksPrice').value);
   const salesTax = parseFloat(document.getElementById('salesTax').value);
   const receiptArray = [
      {
         name: 'Price of Food',
         output: foodPrice
      },
      {
         name: 'Price of Drinks',
         output: drinksPrice
      },
      {
         name: 'Current Sales Tax',
         output: salesTax
      },
      {
         name: 'Subtotal',
         output: subtotal
      },
      {
         name: 'Amount Tipping',
         output: tip
      },
      {
         name: 'Total',
         output: total
      }
   ];

      
      let receiptDiv = document.getElementById('receipt');

      let table = document.createElement('table');

      let tableBody = document.createElement('tbody');
         
      receiptArray.forEach(index => {
         let tableRow = document.createElement('tr');
            for (let i = 0; i < 1; i++) {
               if (index == 2 && i == 1) {
                  break;
               } else {
               
                  let td1 = document.createElement('td');
                  td1.appendChild(document.createTextNode(index.name))

                  let td2 = document.createElement('td');
                  td2.appendChild(document.createTextNode('$' + index.output))
                  
                  tableRow.appendChild(td1)
                  tableRow.appendChild(td2)
               }
            }
            tableBody.appendChild(tableRow);
         });
         table.appendChild(tableBody);
      receiptDiv.appendChild(table);
}
   
const button = document.getElementById('receiptButton');

button.addEventListener('click', determineTotals);
   
