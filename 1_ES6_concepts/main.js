let a = false;
let b = true;

function getName(name){
    return name;
}

console.log(a && b); // false
console.log(a || b); // true

console.log(a && getName("saikat")); // false, getName is not called; if a is false, the second operand is not evaluated; if a is true, then getName is called and the return value is saikat
console.log(a || getName("saikat")); // "saikat", getName is called


let name1 = "saikat";
let name2 = "samanta";

console.log(name1 + " "+ name2); // saikat samanta
// same thing can be done using template literals
console.log(`${name1} ${name2}`); // saikat samanta

// ternary operator --> condition ? value if true : value if false
let age = 20;
let isAdult = age >= 18 ? "Yes" : "No";
console.log(isAdult); // Yes


// objects and destructuring
const id = 101;
const product = "Laptop";
const price = 50000;
const productDetails = {
    id, 
    product, 
    price
}; // object literal shorthand {when the key and value are same, we can just write the key name}

console.log(productDetails); // { id: 101, product: 'Laptop', price: 50000 }

// destructuring

const productDetails2 = {
    id,
    description: "This is a laptop",
    price,
    product
};

console.log(productDetails2.description); // This is a laptop

const {description,} = productDetails2; // destructuring the object and getting the value of description
console.log(description); // This is a laptop


const array = [1, 2, 3, 4, 5];

const [first, second, third, fourth, fifth] = array; // destructuring the array and getting the first and second elements
console.log(first); // 1
console.log(second); // 2
console.log(third); // 3
console.log(fourth); // 4
console.log(fifth); // 5


// default parameters, spread operator and  rest operator
function greet(name, greeting = "Hello") {  
    return `${greeting}, ${name}!`;
} // here Hello is the default value of greeting parameter, if no value is passed for greeting, it will take the default value

console.log(greet("Saikat")); // Hello, Saikat!
console.log(greet("Saikat", "Hi")); // Hi, Saikat!

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combinedArray = [100, ...arr1, 90,  ...arr2, 1000]; // spread operator, it spreads the elements of arr1 and arr2 into a new array
console.log(combinedArray); // [100, 1, 2, 3, 90, 4, 5, 6, 1000]

function sum(...numbers) { // rest operator, it collects all the arguments passed to the function into an array
    console.log(numbers); // [1, 2, 3, 4, 5]
    return numbers.reduce((acc, curr) => acc + curr, 0); // reduce method is used to sum up all the elements of the array
}
console.log(sum(1, 2, 3, 4, 5)); // 15


// ES6 Array methods
// forEach, map, filter, reduce, find, findIndex, some, every, includes, indexOf

const personsArray = [
    {name: "Saikat", age: 21, city: "Kolkata"},
    {name: "Rahul", age: 22, city: "Mumbai"},
    {name: "John", age: 30, city: "Delhi"},
    {name: "Tanmoy", age: 23, city: "Bangalore"}
];

// map method --> it creates a new array with the results of calling a provided function on every element in the calling array
const namesArray = personsArray.map((person, index) => {
     return person.name; 
}); // map method is used to get the names of all the persons in the array
console.log(namesArray); // [ 'Saikat', 'Rahul', 'John', 'Tanmoy' ]

// filter method --> it creates a new array with all elements that pass the test implemented by the provided function
const adultsArray = personsArray.filter((person, index) => {    
    console.log(person, index); // { name: 'Saikat', age: 21, city: 'Kolkata' } 0, { name: 'Rahul', age: 22, city: 'Mumbai' } 1, { name: 'John', age: 30, city: 'Delhi' } 2, { name: 'Tanmoy', age: 23, city: 'Bangalore' } 3
    return person.age >= 25;
}); // filter method is used to get all the persons who are 25 or older
console.log(adultsArray); // [ { name: 'John', age: 30, city: 'Delhi' } ]

// find method --> it returns the value of the first element in the array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned
let personFromKolkata = personsArray.find((person, index) => {
    console.log(person, index); // { name: 'Saikat', age: 21, city: 'Kolkata' } 0
    return person.city === "Kolkata";
}); // find method is used to get the first person who is from Kolkata
console.log(personFromKolkata); // { name: 'Saikat', age: 21, city: 'Kolkata' }


// some method --> it tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.
let isThereAnyAdult = personsArray.some((person, index) => {
    console.log(person, index); 
    return person.age >= 25;
}); // some method is used to check if there is at least one person who is 25 or older
console.log(isThereAnyAdult); // true


// every method --> it tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
let areAllAdults = personsArray.every((person, index) => {
    console.log(person, index); 
    return person.age >= 18;
}); // every method is used to check if all the persons are 18 or older
console.log(areAllAdults); // true


// includes method --> it determines whether an array includes a certain value among its entries, returning true or false as appropriate.
const numbersArray = [1, 2, 3, 4, 5];
console.log(numbersArray.includes(3)); // true
console.log(numbersArray.includes(6)); // false

// indexOf method --> it returns the first index at which a given element can be found in the array, or -1 if it is not present.
console.log(numbersArray.indexOf(3)); // 2
console.log(numbersArray.indexOf(6)); // -1 because 6 is not present in the array


// reduce method --> it executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
const sumOfNumbers = numbersArray.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0); // 0 is the initial value of the accumulator
console.log(sumOfNumbers); // 15


// findIndex method --> it returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test.
let indexOfPersonFromMumbai = personsArray.findIndex((person, index) => {
    
    return person.city === "Mumbai";
});
console.log(indexOfPersonFromMumbai); // 1


let listOfProducts = document.querySelector(".list-of-products");

function renderProducts(products) {
    listOfProducts.innerHTML = products.map(product => {
        return `<p>${product.title} - $${product.price}</p>`;
    }).join('');
}

async function getProducts() {
    try {
        let response = await fetch('https://dummyjson.com/products', { method: 'GET' });    
        let result = await response.json();
        console.log(result);
        if(result?.products?.length > 0) renderProducts(result?.products);
    } catch (error) {
        console.error("Error fetching products:", error);
    }
}

getProducts();