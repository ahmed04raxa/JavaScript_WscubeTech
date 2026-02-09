//let l = [10, 20, 30]

// l.map((value, index) => {
//     document.writeln(`${index}:-`, value);
//     document.writeln("<br>")
// })

// let mapFinalArray = l.map((value, index) => {
//     return value + 5;
// })
// console.log(mapFinalArray);

// let n = [10, 20, 23, 25, 90, 15, 16, 29, 63];

// let filterArray = n.filter((value, index) => {
//     if (value % 3 == 0) {
//         return true
//     } else {
//         return false
//     }
// })
// console.log(filterArray);

let user = [
    {
        name: "Ahmed",
        age: 21
    },
    {
        name: "prince",
        age: 12
    },
    {
        name: "Raza",
        age: 18
    },
    {
        name: "Bobby",
        age: 18
    }
]

user.forEach((value, index) => {
console.log(index ,value.name,value.age);

})


// let filerUser = user.filter((obj) => obj.age >= 18)

// console.log(filerUser);
// let findData = user.find((value) => value.age == 18)
// console.log(findData);


// let l = [10, 20, 30, 40]
// let total = l.reduce((sum, value) => sum + value)
// console.log(total);
