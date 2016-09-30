/**
 * Created by siqi on 9/21/16.
 */

/* Step 1
 * Create objects to represent individual shoe products with the following attributes:
 * name, price, maker
 * if price is a range, use the upper end of that range
 * and add them to the "productList" array using array.push()
 */

var shoes_1 = {
  name: "Unisex sneakers",
  price: 32.99,
  maker: "JACKSHIBO"
}

var shoes_2 = {
  name: "Gusto Cross Trainer",
  price: 39.97,
  maker: "Champion"
}

var shoes_3 = {
  name: "Suede Classic Shoe",
  price: 168.32,
  maker: "PUMA"
}

var shoes_4 = {
  name: "GEL Venture 5",
  price: 79.95,
  maker: "ASICS"
}

var productList = []; //this is an array

productList.push(shoes_1);
productList.push(shoes_2);
productList.push(shoes_3);
productList.push(shoes_4);

//Hint: productList.push(newObject) will add the object you just created to the array

console.log(productList[0]);

/* Step 2
 * Iterate (or go through) productList one by one using the for loop
 * and for each product, if the price is below $50, console.log a message like below
 * "The product [name] costs [price], and is a match"
 */
for(var i = 0; i < productList.length; i++){

    if (productList[i].price < 50) {
      console.log("The product " + productList[i].name + " costs " + productList[i].price + ", and is a match.");
    }

}

/* Step 3
 * What is the average price of all the products?
 */

//3.1 first, calculate total price using the for loop again
var sum = 0;

for(var i = 0; i < productList.length; i++){

    sum = sum + productList[i].price;

}

var average = sum/productList.length;
console.log(average);

//3.2 then, divide total price by the number of products, using proudctList.length


/* Step 4
 * Write a function that accept a single argument, price
 * so that the function returns the number of products below that price
 */

function comparePrice(p){

    var numOfMatchingProducts = 0;

    for(var i = 0; i < productList.length; i++){

        if(productList[i].price < p) {
          numOfMatchingProducts = numOfMatchingProducts + 1;
        }

    }

    return numOfMatchingProducts;
}

//
console.log("The number of products below $100 is " + comparePrice(100));
console.log("The number of products below $50 is " + comparePrice(50));
