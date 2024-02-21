'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



/*
 * Complete the 'priceCheck' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING_ARRAY products
 *  2. FLOAT_ARRAY productPrices
 *  3. STRING_ARRAY productSold
 *  4. FLOAT_ARRAY soldPrice
 */
let products = ["eggs", "milk", "cheese"];
let productsPrices = [2.89, 3.29, 5.79];
let productsSold = ["eggs", "eggs", "cheese", "milk"];
let soldPrice = [2.89, 2.99, 5.97, 2.39];

function priceCheck(products, productsPrices, productsSold, soldPrice) {
    let hash = {};
    let count = 0;

    // iterate over products and map price 
    // {"eggs":2.89, "milk": 2.29, "cheese": 5.79}
    for(let i=0; i < products.length; i++){
        // check if hash object has already product key available
        // if it is not present 
        // assign a key and it's value from productsPrices
        if(!hash[products[i]]){
            hash[products[i]] = productsPrices[i]
        }
    }

    // iterate over products/productsSold
    // check for alreday stored price in hash
    // if it is mismatching 
    // increase the count to show errors count
    for(let j=0; j < productsSold.length; j++){
        if(hash[productsSold[j]] !== soldPrice[j]){
            count++;
        }
    }

    return count;
}

priceCheck(products, productsPrices, productsSold, soldPrice);
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const productsCount = parseInt(readLine().trim(), 10);

    let products = [];

    for (let i = 0; i < productsCount; i++) {
        const productsItem = readLine();
        products.push(productsItem);
    }

    const productPricesCount = parseInt(readLine().trim(), 10);

    let productPrices = [];

    for (let i = 0; i < productPricesCount; i++) {
        const productPricesItem = parseFloat(readLine().trim());
        productPrices.push(productPricesItem);
    }

    const productSoldCount = parseInt(readLine().trim(), 10);

    let productSold = [];

    for (let i = 0; i < productSoldCount; i++) {
        const productSoldItem = readLine();
        productSold.push(productSoldItem);
    }

    const soldPriceCount = parseInt(readLine().trim(), 10);

    let soldPrice = [];

    for (let i = 0; i < soldPriceCount; i++) {
        const soldPriceItem = parseFloat(readLine().trim());
        soldPrice.push(soldPriceItem);
    }

    const result = priceCheck(products, productPrices, productSold, soldPrice);

    ws.write(result + '\n');

    ws.end();
}
