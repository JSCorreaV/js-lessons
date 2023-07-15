// 
/*find total price: 
-if the bill is greater than 150,000 user should get 20% discount
-if not the discount should be 10%
-and the end of the bill we should show the total price and the discount if applies.
*/

const chocolate = 2000;
const wine = 45000;
const meat = 25000;
const chicken = 28000;
const dogChow = 125000;
const iceCream = 32000;
const coffee = 30000;
const bacon = 18000;
const coke = 8000;
const rice = 42000;
const milk = 68000;
const cereal = 15000;

function totalPrice(products) {
    let total = 0; 
    let totalWithDiscount = 0;
    let discount = 0;
    let today = new Date();
    if(today.getDay() == 6){
        console.log("+++++++++++++++++")
        console.log(today.getDay())
        discount = 0.1;
    }

    for (let index = 0; index < products.length; index++) {
         total = products[index] + total;      
    } 

    if (total > 150000){
        discount = discount + 0.2;
        totalWithDiscount = total - (total * discount);
        discountValue = total * discount; 
    }
    else {
        discount = discount + 0.1;
        totalWithDiscount = total - (total * discount);
        discountValue = total * discount; 
    }
    console.log(`The total bill is: ${total} and the discount is: ${discountValue}, your new total with discount is ${totalWithDiscount}`)
    return totalWithDiscount;
  }

  console.log(totalPrice([chocolate,milk,wine,dogChow])); //192000
  console.log(totalPrice([chocolate,milk,wine])); //115000 
  console.log(totalPrice([cereal,bacon,rice,iceCream]));  // 107000 