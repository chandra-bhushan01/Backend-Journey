//fundamentals of javascript
// arrays and objects
// fucntion and returns 
// async and await
// foreach, map, filter, find, reduce, indexof





var arr = [1, 2, 3, 4, 5];
arr.forEach(function(element) {
    // console.log(element + " hello");
})


// perform the operation on each element and store the result in a new array. each element is the paramerter of the function inside the map function.
var ans = arr.map(function(element) {
    return element * 2;
})
// console.log(ans);



//filter function returns a new array with all elements that pass the test implemented by the provided function.
var arry = arr.filter(function(element) {
    return element > 3? true : false;
})

//  console.log(arry);

// find function returns the value of the first element in the provided array that satisfies the provided testing function
var found = arr.find(function(element) {
    return (element > 3);
})

//  console.log(found);


//find the index of the first element in the provided array that is present in the array.
//  console.log(arr.indexOf(4))



var obj= {
    name: "John",
    age: 30,
    city: "New York"
}

//freeze an object makes it unchangeable. once an object is frozen, it cannot be changed.
Object.freeze(obj);

// console.log(obj.name);
// console.log(obj["name"])



function abcd(){
    return "hello world";
}




var answer = abcd();
// console.log(answer);






// var blob = await fetch(
//   "https://https://api.api-ninjas.com/v1/randomuser.typicode.com/todos/1"
// );

// var res = await blob.json();

// console.log(res);


async function getApiResponse() {
    var blob = await fetch("https://randomuser.me/api/");

    var res = await blob.json();
    console.log(res);

}


getApiResponse();



